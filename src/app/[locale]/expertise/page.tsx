import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { ExpertisePageContent } from "@/components/expertise/expertise-page-content";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import type { AppLocale } from "@/i18n/routing";
import { getMessages } from "@/lib/i18n";
import { getLabels, getPageShells } from "@/lib/i18n/localize";
import { expertiseCategorySlugs, getExpertise } from "@/lib/client-content/expertise";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
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
    ),
  });
}

function expertiseItemListSchema(locale: AppLocale) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Expertise & Approaches",
    description:
      "Pediatric OT expertise and therapeutic approaches at Thrive With Sharuja, Kandivali West, Mumbai.",
    numberOfItems: expertiseCategorySlugs.length,
    itemListElement: expertiseCategorySlugs.map((slug, index) => {
      const area = getExpertise(slug);
      return {
        "@type": "ListItem",
        position: index + 1,
        name: area?.title ?? slug,
        url: `${siteConfig.url}/${locale}/expertise/${slug}`,
      };
    }),
  };
}

export default async function ExpertisePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = getMessages(locale);
  const shells = getPageShells(locale);
  const labels = getLabels(locale);

  return (
    <main className="bg-[#FFFDFB]">
      <JsonLd
        id="expertise-breadcrumb"
        data={breadcrumbSchema([
          { name: labels.home, url: `${siteConfig.url}/${locale}` },
          { name: messages.nav.services, url: `${siteConfig.url}/${locale}/expertise` },
        ])}
      />
      <JsonLd id="expertise-item-list" data={expertiseItemListSchema(locale)} />
      <Breadcrumbs items={[{ name: messages.nav.services, url: `${siteConfig.url}/${locale}/expertise` }]} />
      <ExpertisePageContent shells={shells.expertise} labels={labels} homeLabel={labels.home} />
    </main>
  );
}
