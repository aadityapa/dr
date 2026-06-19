import type { Metadata } from "next";

import { AppointmentForm } from "@/components/forms/appointment-form";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-data";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Book Pediatric OT Consultation",
  description: `Book a pediatric occupational therapy consultation with ${siteConfig.doctorName} at ${siteConfig.name}, Kandivali West, Mumbai.`,
  path: "/appointment",
  keywords: mumbaiKeywords("book occupational therapist Mumbai", "pediatric OT appointment Kandivali"),
});

export default function AppointmentPage() {
  return (
    <main>
      <PageHero
        kicker="Consultation"
        title="Tell us about your child"
        description="Fill in the form below and we'll reach out within 24 hours. No pressure — just a warm first step."
      />

      <Section className="pb-24">
        <Reveal>
          <Card className="mx-auto max-w-3xl">
            <CardContent className="p-6 md:p-8">
              <p className="text-sm text-[color:var(--color-muted)]">
                Clinic hours: Mon–Fri 9 AM – 5 PM · Sat 9 AM – 12 PM
              </p>
              <div className="mt-6">
                <AppointmentForm />
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </Section>
    </main>
  );
}
