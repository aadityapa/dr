import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

import { emailFailureResponse, rateLimit, safeJson } from "@/lib/api-helpers";

const schema = z.object({
  parentName: z.string().min(2),
  phone: z.string().min(8),
  childName: z.string().min(2),
  age: z.string().min(1),
  gender: z.string().optional(),
  primaryConcern: z.string().min(10),
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
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const d = parsed.data;
  const text = [
    `Parent: ${d.parentName}`,
    `Phone: ${d.phone}`,
    `Child: ${d.childName}`,
    `Age: ${d.age}`,
    d.gender ? `Gender: ${d.gender}` : null,
    "",
    `Primary concern for counseling:`,
    d.primaryConcern,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL ?? "Clinic <onboarding@resend.dev>",
        to: process.env.RESEND_TO_EMAIL ?? "sharujasaraf@gmail.com",
        subject: `Consultation Request: ${d.childName}`,
        text,
      });
    }
  } catch (error) {
    console.error("[api/appointment] email delivery failed:", error);
    return emailFailureResponse();
  }

  return NextResponse.json({ ok: true });
}
