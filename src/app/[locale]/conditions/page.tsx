import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { ConditionsPageContent } from "@/components/conditions/conditions-page-content";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import type { AppLocale } from "@/i18n/routing";
import { getContent, getMessages } from "@/lib/i18n";
import { getLabels, getPageShells } from "@/lib/i18n/localize";
import { clientConditions } from "@/lib/client-content/conditions";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-data";

type Props = { params: Promise<{ locale: AppLocale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = getContent(locale);
  return buildPageMetadata({
    title: "Conditions We Support",
    description: content.pages.conditionsList.description,
    path: "/conditions",
    locale,
    keywords: mumbaiKeywords("autism therapy Mumbai", "ADHD OT Kandivali", "developmental delay therapy"),
  });
}

function conditionsItemListSchema(locale: AppLocale) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Conditions We Support",
    description: "Pediatric conditions supported by occupational therapy at Thrive With Sharuja, Kandivali West, Mumbai.",
    numberOfItems: clientConditions.length,
    itemListElement: clientConditions.map((condition, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: condition.title,
      url: `${siteConfig.url}/${locale}/conditions/${condition.slug}`,
    })),
  };
}

export default async function ConditionsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = getMessages(locale);
  const shells = getPageShells(locale);
  const labels = getLabels(locale);

  return (
    <main className="bg-[#FFFDF9]">
      <JsonLd
        id="conditions-breadcrumb"
        data={breadcrumbSchema([
          { name: labels.home, url: `${siteConfig.url}/${locale}` },
          { name: messages.nav.conditions, url: `${siteConfig.url}/${locale}/conditions` },
        ])}
      />
      <JsonLd id="conditions-item-list" data={conditionsItemListSchema(locale)} />
      <Breadcrumbs items={[{ name: messages.nav.conditions, url: `${siteConfig.url}/${locale}/conditions` }]} />
      <ConditionsPageContent shells={shells.conditions} labels={labels} homeLabel={labels.home} />
    </main>
  );
}
