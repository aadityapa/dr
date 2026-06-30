import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { AboutPageContent } from "@/components/about/about-page-content";
import { JsonLd } from "@/components/shared/json-ld";
import type { AppLocale } from "@/i18n/routing";
import { getAboutContent, getLabels, getPageShells } from "@/lib/i18n/localize";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { breadcrumbSchema, physicianSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-data";

type Props = { params: Promise<{ locale: AppLocale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const shells = getPageShells(locale);
  return buildPageMetadata({
    title: shells.about.metaTitle,
    description: shells.about.metaDescription,
    path: "/about",
    locale,
    keywords: mumbaiKeywords(
      "Pediatric Occupational Therapist Mumbai",
      "OT Kandivali",
      "Dr. Sharuja Sarap OT",
      "Brain Gym Mumbai",
      "Sensory Integration Mumbai",
    ),
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const about = getAboutContent(locale);
  const shells = getPageShells(locale);
  const labels = getLabels(locale);

  return (
    <main>
      <JsonLd
        id="about-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: labels.home, url: `${siteConfig.url}/${locale}` },
          { name: about.aboutMe.title, url: `${siteConfig.url}/${locale}/about` },
        ])}
      />
      <JsonLd id="about-person-schema" data={physicianSchema()} />
      <AboutPageContent about={about} shells={shells.about} homeLabel={labels.home} />
    </main>
  );
}
