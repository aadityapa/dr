import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  parentName: z.string().min(2),
  childName: z.string().min(2),
  childAge: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(8),
  date: z.string().min(1),
  timeSlot: z.string().min(1),
  concerns: z.string().min(8),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "Clinic <onboarding@resend.dev>",
      to: process.env.RESEND_TO_EMAIL ?? "hello@drsharujasarap.com",
      subject: `Appointment Request: ${parsed.data.childName}`,
      text: `Parent: ${parsed.data.parentName}\nChild: ${parsed.data.childName}\nAge: ${parsed.data.childAge}\nDate: ${parsed.data.date}\nTime: ${parsed.data.timeSlot}\nEmail: ${parsed.data.email}\nPhone: ${parsed.data.phone}\nConcerns: ${parsed.data.concerns}`,
    });
  }

  return NextResponse.json({ ok: true });
}
