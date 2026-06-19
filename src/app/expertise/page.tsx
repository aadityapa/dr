import type { Metadata } from "next";

import { ExpertiseEcosystem } from "@/components/home/expertise-ecosystem";
import { ExpertiseListGrid } from "@/components/expertise/expertise-list-grid";
import { JsonLd } from "@/components/shared/json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Pediatric Therapy Expertise Mumbai",
  description: `Explore pediatric occupational therapy expertise with ${siteConfig.doctorName} at ${siteConfig.name}, Kandivali West, Mumbai — sensory integration, Brain Gym, aquatic therapy, handwriting & more.`,
  path: "/expertise",
  keywords: mumbaiKeywords(
    "Pediatric Occupational Therapist Mumbai",
    "OT Kandivali",
    "Brain Gym Mumbai",
    "Aquatic Therapy Mumbai",
    "Sensory Integration Mumbai",
    "Autism Support Mumbai",
    "ADHD Support Mumbai",
  ),
});

export default function ExpertisePage() {
  return (
    <main>
      <JsonLd
        id="expertise-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Expertise", url: `${siteConfig.url}/expertise` },
        ])}
      />
      <JsonLd id="expertise-local-schema" data={localBusinessSchema()} />
      <PageHero
        kicker="Our Expertise"
        title="How We Support Growth & Participation"
        description="Every child is unique. We use a combination of evidence-based approaches to support participation, confidence, independence, and everyday success."
      />
      <ExpertiseEcosystem showHeading={false} />
      <Section>
        <SectionHeading
          title="Specialised Programmes"
          description="Deeper dives into each certification and approach — with parent-friendly explanations for families in Kandivali and across Mumbai."
          center
        />
        <div className="mt-8">
          <ExpertiseListGrid />
        </div>
      </Section>
    </main>
  );
}
