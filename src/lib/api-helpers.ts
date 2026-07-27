import { NextResponse } from "next/server";

/**
 * Lightweight per-instance rate limiter for form APIs.
 * Serverless note: state is per warm instance, so this is a best-effort
 * spam brake, not a hard guarantee. Good enough for clinic contact forms;
 * upgrade to Upstash Redis / Vercel KV if abuse ever becomes real.
 */
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

export function rateLimit(request: Request): NextResponse | null {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // Opportunistic cleanup so the map never grows unbounded.
  if (hits.size > 500) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }

  if (recent.length > MAX_REQUESTS) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a minute and try again." },
      { status: 429 },
    );
  }
  return null;
}

/** Parse JSON body without throwing on malformed input. */
export async function safeJson(request: Request): Promise<unknown | null> {
  try {
    return await request.json();
  } catch {
    return null;
  }
}

/** Consistent 502 for email-delivery failures (never leaks internals). */
export function emailFailureResponse(): NextResponse {
  return NextResponse.json(
    {
      error:
        "We could not send your message right now. Please try again in a few minutes, or call/WhatsApp the clinic directly.",
    },
    { status: 502 },
  );
}
