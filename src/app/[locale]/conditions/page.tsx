import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { ConditionsLanding } from "@/components/conditions/conditions-landing";
import { ConditionsPageCta } from "@/components/conditions/conditions-page-cta";
import { ConditionsPageHero } from "@/components/conditions/conditions-page-hero";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Section } from "@/components/shared/section";
import type { AppLocale } from "@/i18n/routing";
import { getContent, getMessages } from "@/lib/i18n";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
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

export default async function ConditionsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = getMessages(locale);

  return (
    <main>
      <Breadcrumbs items={[{ name: messages.nav.conditions, url: `${siteConfig.url}/${locale}/conditions` }]} />
      <ConditionsPageHero />

      <Section>
        <ConditionsLanding />
        <ConditionsPageCta />
      </Section>
    </main>
  );
}
