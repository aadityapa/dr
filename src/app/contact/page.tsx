import type { Metadata } from "next";
import Link from "next/link";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for appointments, WhatsApp support, clinic directions, and therapy queries.",
};

export default function ContactPage() {
  return (
    <main>
      <Section>
        <SectionHeading
          kicker="Contact"
          title="Reach out for a calm, guided therapy consultation"
          description="We are here to support your child with empathy, clarity, and evidence-based care."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-[family-name:var(--font-serif)] text-3xl text-[color:var(--color-sage-dark)]">Send us a message</h3>
              <p className="mt-2 text-sm text-[color:var(--color-muted)]">We usually respond within one business day.</p>
              <div className="mt-4">
                <ContactForm />
              </div>
            </CardContent>
          </Card>
          <div className="space-y-4">
            {[
              { icon: MapPin, label: "Address", value: siteConfig.address },
              { icon: Phone, label: "Phone", value: siteConfig.phone },
              { icon: Mail, label: "Email", value: siteConfig.email },
              { icon: Clock3, label: "Clinic Timings", value: siteConfig.timings },
            ].map((item) => (
              <Card key={item.label}>
                <CardContent className="flex items-start gap-3 p-5">
                  <item.icon className="mt-1 h-5 w-5 text-[color:var(--color-sage)]" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[color:var(--color-muted)]">{item.label}</p>
                    <p className="mt-1 text-sm text-[color:var(--color-sage-dark)]">{item.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Card>
              <CardContent className="p-5">
                <iframe
                  src="https://www.google.com/maps?q=Baner%20Road%20Pune&output=embed"
                  className="h-56 w-full rounded-2xl border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic location map"
                />
              </CardContent>
            </Card>
            <Link
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-[color:var(--color-sage)] px-5 py-3 text-sm text-white"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
