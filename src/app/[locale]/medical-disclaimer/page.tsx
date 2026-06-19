import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { LegalContent } from "@/components/shared/legal-content";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { getLabels, getLegalContent } from "@/lib/i18n/localize";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

type Props = { params: Promise<{ locale: AppLocale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const legal = getLegalContent(locale).disclaimer;
  return buildPageMetadata({
    title: legal.metaTitle,
    description: legal.metaDescription,
    path: "/medical-disclaimer",
    locale,
  });
}

export default async function MedicalDisclaimerPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const legal = getLegalContent(locale).disclaimer;
  const labels = getLabels(locale);

  return (
    <main>
      <Breadcrumbs items={[{ name: legal.title, url: `${siteConfig.url}/${locale}/medical-disclaimer` }]} />
      <PageHero kicker={legal.kicker} title={legal.title} description={legal.description} />
      <Section>
        <LegalContent lastUpdated={legal.lastUpdated} intro={legal.intro} sections={legal.sections} />
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap gap-3">
          <Button asChild>
            <Link href="/appointment">{labels.bookConsultation}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">{labels.askQuestion}</Link>
          </Button>
        </div>
      </Section>
    </main>
  );
}
