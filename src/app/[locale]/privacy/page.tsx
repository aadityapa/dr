import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { LegalContent } from "@/components/shared/legal-content";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import type { AppLocale } from "@/i18n/routing";
import { getLegalContent } from "@/lib/i18n/localize";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

type Props = { params: Promise<{ locale: AppLocale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const legal = getLegalContent(locale).privacy;
  return buildPageMetadata({
    title: legal.metaTitle,
    description: legal.metaDescription,
    path: "/privacy",
    locale,
  });
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const legal = getLegalContent(locale).privacy;

  return (
    <main>
      <Breadcrumbs items={[{ name: legal.title, url: `${siteConfig.url}/${locale}/privacy` }]} />
      <PageHero kicker={legal.kicker} title={legal.title} description={legal.description} />
      <Section>
        <LegalContent lastUpdated={legal.lastUpdated} intro={legal.intro} sections={legal.sections} />
      </Section>
    </main>
  );
}
