import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

import { getLibraryResource } from "@/lib/library-resources";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  resourceId: z.string().min(1),
  resourceTitle: z.string().min(1),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const resource = getLibraryResource(parsed.data.resourceId);
  if (!resource) {
    return NextResponse.json({ error: "Resource not found" }, { status: 404 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const resend = new Resend(apiKey);
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://drsharujasarap.vercel.app";

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "Clinic <onboarding@resend.dev>",
      to: parsed.data.email,
      subject: `Your free download: ${resource.title}`,
      text: `Dear ${parsed.data.name},\n\nThank you for downloading "${resource.title}" from Thrive with sharuja.\n\nYour guide is available at: ${siteUrl}/library\n\nIf you have questions about your child's development, book a consultation with Dr. Sharuja Sarap at ${siteUrl}/appointment or call 9820525197.\n\nBelonging Without Boundaries.\nDr. Sharuja Sarap\nThrive with sharuja, Kandivali West, Mumbai`,
    });

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "Clinic <onboarding@resend.dev>",
      to: process.env.RESEND_TO_EMAIL ?? "sharujasaraf@gmail.com",
      subject: `Library download: ${resource.title}`,
      text: `New library download request.\n\nResource: ${resource.title}\nName: ${parsed.data.name}\nEmail: ${parsed.data.email}\nPhone: ${parsed.data.phone ?? "Not provided"}`,
    });
  }

  return NextResponse.json({ ok: true });
}
