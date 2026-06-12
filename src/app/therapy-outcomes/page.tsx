import type { Metadata } from "next";
import Link from "next/link";

import { OutcomeComparison } from "@/components/therapy-outcomes/outcome-comparison";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";
import { therapyOutcomeAreas } from "@/lib/therapy-outcomes";

export const metadata: Metadata = buildPageMetadata({
  title: "Therapy Outcomes — From Challenges To Achievements",
  description: `See how pediatric occupational therapy at ${siteConfig.name} helps children progress in attention, sensory regulation, motor skills, handwriting, and school participation in Mumbai.`,
  path: "/therapy-outcomes",
  keywords: mumbaiKeywords("pediatric OT outcomes", "therapy results children Mumbai"),
});

export default function TherapyOutcomesPage() {
  return (
    <main>
      <Breadcrumbs items={[{ name: "Therapy Outcomes", url: `${siteConfig.url}/therapy-outcomes` }]} />
      <PageHero
        kicker="Therapy Outcomes"
        title="From Challenges To Achievements"
        description="Every child's journey is unique. These before-and-after patterns reflect the meaningful progress families experience through evidence-based occupational therapy at our Kandivali centre."
      />
      <Section>
        <OutcomeComparison areas={therapyOutcomeAreas} />
        <div className="mt-12 rounded-2xl bg-[color:var(--color-soft-green)]/40 p-8 text-center">
          <p className="font-semibold text-[color:var(--color-sage-dark)]">Ready to start your child&apos;s journey?</p>
          <p className="mt-2 text-sm text-[color:var(--color-muted)]">
            Book a consultation with {siteConfig.doctorName} to discuss your child&apos;s unique strengths and goals.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Button asChild>
              <Link href="/appointment">Book Consultation</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/screening">Free Sensory Screening</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
