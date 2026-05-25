import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  parentName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "Clinic <onboarding@resend.dev>",
      to: process.env.RESEND_TO_EMAIL ?? "hello@drsharujasarap.com",
      subject: `New Contact Form: ${parsed.data.parentName}`,
      text: `Name: ${parsed.data.parentName}\nEmail: ${parsed.data.email}\nPhone: ${parsed.data.phone}\nMessage: ${parsed.data.message}`,
    });
  }

  return NextResponse.json({ ok: true });
}
