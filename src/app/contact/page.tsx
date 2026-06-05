import type { Metadata } from "next";

import { StitchContactPage } from "@/components/stitch/contact-page";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for appointments, WhatsApp support, clinic directions, and therapy queries.",
};

export default function ContactPage() {
  return <StitchContactPage />;
}
