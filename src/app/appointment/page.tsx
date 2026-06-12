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
        kicker="Appointment"
        title="Book a consultation"
        description="Take the first step towards personalized pediatric care. Fill in the details below and we'll confirm your appointment."
      />

      <Section className="pb-24">
        <Reveal>
          <Card className="mx-auto max-w-2xl">
            <CardContent className="p-6 md:p-8">
              <h2 className="font-[family-name:var(--font-serif)] text-xl text-[color:var(--color-sage-dark)]">
                Child & parent information
              </h2>
              <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                Clinic hours: {siteConfig.timings}
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
