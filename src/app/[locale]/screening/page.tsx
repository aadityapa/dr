import type { Metadata } from "next";

import { ScreeningForm } from "@/components/forms/screening-form";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Basic Sensory Screening Questionnaire",
  description: `Free basic sensory screening for children in Mumbai. Complete our parent questionnaire and receive guidance from ${siteConfig.doctorName} at Thrive with sharuja, Kandivali.`,
  path: "/screening",
  keywords: mumbaiKeywords("sensory screening children", "developmental screening Mumbai"),
});

export default function ScreeningPage() {
  return (
    <main>
      <Breadcrumbs items={[{ name: "Sensory Screening", url: `${siteConfig.url}/screening` }]} />
      <PageHero
        kicker="Lead Screening"
        title="Basic Sensory Screening Questionnaire"
        description="A helpful starting point for parents wondering whether their child may benefit from occupational therapy. Complete the form and our team will follow up with guidance."
      />
      <Section className="rounded-[2rem] bg-white/70">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            title="Tell Us About Your Child"
            description="This questionnaire is not a diagnosis — it helps us understand your concerns and recommend appropriate next steps."
          />
          <div className="mt-8">
            <ScreeningForm />
          </div>
        </div>
      </Section>
    </main>
  );
}
