import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const screeningFields = [
  "soundSensitivity",
  "textureAvoidance",
  "movementSeeking",
  "transitionDifficulty",
  "attentionSpan",
  "motorClumsiness",
  "handwritingConcern",
  "meltdowns",
  "selfCareDelay",
  "socialWithdrawal",
] as const;

const schema = z.object({
  parentName: z.string().min(2),
  childName: z.string().min(2),
  childAge: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(8),
  concerns: z.string().min(8),
  soundSensitivity: z.boolean(),
  textureAvoidance: z.boolean(),
  movementSeeking: z.boolean(),
  transitionDifficulty: z.boolean(),
  attentionSpan: z.boolean(),
  motorClumsiness: z.boolean(),
  handwritingConcern: z.boolean(),
  meltdowns: z.boolean(),
  selfCareDelay: z.boolean(),
  socialWithdrawal: z.boolean(),
});

const fieldLabels: Record<(typeof screeningFields)[number], string> = {
  soundSensitivity: "Sound sensitivity",
  textureAvoidance: "Texture avoidance",
  movementSeeking: "Movement seeking",
  transitionDifficulty: "Transition difficulty",
  attentionSpan: "Attention difficulties",
  motorClumsiness: "Motor clumsiness",
  handwritingConcern: "Handwriting concerns",
  meltdowns: "Frequent meltdowns",
  selfCareDelay: "Self-care delays",
  socialWithdrawal: "Social withdrawal",
};

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const checkedItems = screeningFields
    .filter((field) => parsed.data[field])
    .map((field) => fieldLabels[field]);

  const summary = [
    `Parent: ${parsed.data.parentName}`,
    `Child: ${parsed.data.childName} (Age ${parsed.data.childAge})`,
    `Email: ${parsed.data.email}`,
    `Phone: ${parsed.data.phone}`,
    "",
    "Screening responses (checked):",
    checkedItems.length > 0 ? checkedItems.map((item) => `• ${item}`).join("\n") : "• None checked",
    "",
    `Additional concerns: ${parsed.data.concerns}`,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "Clinic <onboarding@resend.dev>",
      to: process.env.RESEND_TO_EMAIL ?? "sharujasaraf@gmail.com",
      subject: `Sensory Screening: ${parsed.data.childName}`,
      text: summary,
    });
  }

  return NextResponse.json({ ok: true });
}
