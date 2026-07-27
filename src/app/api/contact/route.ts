import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

import { emailFailureResponse, rateLimit, safeJson } from "@/lib/api-helpers";

const schema = z.object({
  parentName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  message: z.string().min(10),
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
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL ?? "Clinic <onboarding@resend.dev>",
        to: process.env.RESEND_TO_EMAIL ?? "sharujasaraf@gmail.com",
        subject: `New Contact Form: ${parsed.data.parentName}`,
        text: `Name: ${parsed.data.parentName}\nEmail: ${parsed.data.email}\nPhone: ${parsed.data.phone}\nMessage: ${parsed.data.message}`,
      });
    }
  } catch (error) {
    console.error("[api/contact] email delivery failed:", error);
    return emailFailureResponse();
  }

  return NextResponse.json({ ok: true });
}
