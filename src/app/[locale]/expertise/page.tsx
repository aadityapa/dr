import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { CategoryNavigation } from "@/components/expertise/category-navigation";
import { ExpertiseListGrid } from "@/components/expertise/expertise-list-grid";
import { LookingBeyondSection } from "@/components/expertise/looking-beyond-section";
import { ParentFriendlyIntro } from "@/components/expertise/parent-friendly-intro";
import { ExpertiseEcosystem } from "@/components/home/expertise-ecosystem";
import { JsonLd } from "@/components/shared/json-ld";
import { LocalizedPageHero } from "@/components/shared/localized-page-hero";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import type { AppLocale } from "@/i18n/routing";
import { getMessages } from "@/lib/i18n";
import { getContent, getLabels, getPageShells } from "@/lib/i18n/localize";
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
  const content = getContent(locale);
  const landing = content.expertiseLanding;

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
      <LookingBeyondSection />
      <ParentFriendlyIntro />
      <ExpertiseEcosystem />
      <Section compact>
        <CategoryNavigation />
      </Section>
      <Section>
        <SectionHeading
          title={landing.programmesTitle}
          description={landing.programmesDescription}
          center
        />
        <div className="mt-8">
          <ExpertiseListGrid />
        </div>
      </Section>
    </main>
  );
}
