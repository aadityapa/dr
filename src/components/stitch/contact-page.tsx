"use client";

import Link from "next/link";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/lib/site-data";

import { StitchCard, StitchHero, StitchSection, StitchShell } from "./ui";

const contactItems = [
  { icon: MapPin, label: "Address", value: siteConfig.address },
  { icon: Phone, label: "Phone", value: siteConfig.phone },
  { icon: Mail, label: "Email", value: siteConfig.email },
  { icon: Clock3, label: "Clinic Timings", value: siteConfig.timings },
];

export function StitchContactPage() {
  return (
    <StitchShell>
      <StitchHero
        kicker="Contact"
        title="Reach out for a calm, guided therapy consultation"
        description="We are here to support your child with empathy, clarity, and evidence-based care."
      />

      <StitchSection className="pt-0 pb-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <StitchCard>
            <h3 className="font-headline-md text-headline-md text-on-background">Send us a message</h3>
            <p className="text-body-sm mt-2 text-secondary">We usually respond within one business day.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </StitchCard>

          <div className="space-y-4">
            {contactItems.map((item) => (
              <StitchCard key={item.label} className="flex items-start gap-4 p-5">
                <item.icon className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-label-sm text-outline uppercase tracking-wide">{item.label}</p>
                  <p className="text-body-md mt-1 text-on-surface">{item.value}</p>
                </div>
              </StitchCard>
            ))}

            <StitchCard className="overflow-hidden p-0">
              <iframe
                src="https://www.google.com/maps?q=Baner%20Road%20Pune&output=embed"
                className="h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic location map"
              />
            </StitchCard>

            <Link
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="squishy-button inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-on-primary shadow-lg shadow-primary/20"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>
      </StitchSection>
    </StitchShell>
  );
}
