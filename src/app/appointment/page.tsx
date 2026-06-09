import type { Metadata } from "next";

import { AppointmentForm } from "@/components/forms/appointment-form";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Book Appointment",
  description: `Book a pediatric occupational therapy consultation with ${siteConfig.name} in Mumbai.`,
};

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
