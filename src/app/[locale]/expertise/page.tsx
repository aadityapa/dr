import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { ExpertiseEcosystem } from "@/components/home/expertise-ecosystem";
import { ExpertiseListGrid } from "@/components/expertise/expertise-list-grid";
import { JsonLd } from "@/components/shared/json-ld";
import { LocalizedPageHero } from "@/components/shared/localized-page-hero";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import type { AppLocale } from "@/i18n/routing";
import { getMessages } from "@/lib/i18n";
import { getLabels, getPageShells } from "@/lib/i18n/localize";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-data";

type Props = { params: Promise<{ locale: AppLocale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const shells = getPageShells(locale);
  return buildPageMetadata({
    title: shells.expertiseList.metaTitle,
    description: shells.expertiseList.metaDescription,
    path: "/expertise",
    locale,
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
}

export default async function ExpertisePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = getMessages(locale);
  const labels = getLabels(locale);

  return (
    <main>
      <JsonLd
        id="expertise-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: labels.home, url: `${siteConfig.url}/${locale}` },
          { name: messages.nav.services, url: `${siteConfig.url}/${locale}/expertise` },
        ])}
      />
      <JsonLd id="expertise-local-schema" data={localBusinessSchema()} />
      <LocalizedPageHero page="servicesList" />
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
