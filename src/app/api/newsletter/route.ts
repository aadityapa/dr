import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

import { emailFailureResponse, rateLimit, safeJson } from "@/lib/api-helpers";

const schema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
});

export async function POST(request: Request) {
  const limited = rateLimit(request);
  if (limited) return limited;

  const body = await safeJson(request);
  if (body === null) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      // Notify the clinic of the new subscriber. To manage a real audience,
      // connect Resend Audiences (resend.contacts.create) or another ESP.
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL ?? "Clinic <onboarding@resend.dev>",
        to: process.env.RESEND_TO_EMAIL ?? "sharujasaraf@gmail.com",
        subject: "New newsletter signup",
        text: `New parent-resources subscriber.\nEmail: ${parsed.data.email}\nName: ${parsed.data.name ?? "Not provided"}`,
      });
    }
  } catch (error) {
    console.error("[api/newsletter] email delivery failed:", error);
    return emailFailureResponse();
  }

  return NextResponse.json({ ok: true });
}
