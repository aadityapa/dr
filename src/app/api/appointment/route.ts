import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  parentName: z.string().min(2),
  fatherName: z.string().optional(),
  motherName: z.string().optional(),
  guardianName: z.string().optional(),
  phone: z.string().min(8),
  email: z.string().email(),
  childName: z.string().min(2),
  dateOfBirth: z.string().optional(),
  age: z.string().min(1),
  gender: z.string().optional(),
  schoolGrade: z.string().optional(),
  concerns: z.array(z.string()).min(1),
  hasDiagnosis: z.enum(["yes", "no"]),
  previousTherapies: z.array(z.string()).optional(),
  biggestConcern: z.string().min(10),
  preferredTime: z.string().min(1),
  consent: z.literal(true),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const d = parsed.data;
  const text = [
    `Parent: ${d.parentName}`,
    d.fatherName ? `Father: ${d.fatherName}` : null,
    d.motherName ? `Mother: ${d.motherName}` : null,
    d.guardianName ? `Guardian: ${d.guardianName}` : null,
    `Phone: ${d.phone}`,
    `Email: ${d.email}`,
    `Child: ${d.childName}`,
    d.dateOfBirth ? `DOB: ${d.dateOfBirth}` : null,
    `Age: ${d.age}`,
    d.gender ? `Gender: ${d.gender}` : null,
    d.schoolGrade ? `Grade: ${d.schoolGrade}` : null,
    `Concerns: ${d.concerns.join(", ")}`,
    `Diagnosis: ${d.hasDiagnosis}`,
    d.previousTherapies?.length ? `Previous therapies: ${d.previousTherapies.join(", ")}` : null,
    `Biggest concern: ${d.biggestConcern}`,
    `Preferred time: ${d.preferredTime}`,
  ]
    .filter(Boolean)
    .join("\n");

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

  return NextResponse.json({ ok: true });
}
