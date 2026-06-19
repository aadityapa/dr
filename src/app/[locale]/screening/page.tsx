import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { ScreeningForm } from "@/components/forms/screening-form";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import type { AppLocale } from "@/i18n/routing";
import { getPageShells } from "@/lib/i18n/localize";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

type Props = { params: Promise<{ locale: AppLocale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const shells = getPageShells(locale);
  return buildPageMetadata({
    title: shells.screening.metaTitle,
    description: shells.screening.metaDescription,
    path: "/screening",
    locale,
    keywords: mumbaiKeywords("sensory screening children", "developmental screening Mumbai"),
  });
}

export default async function ScreeningPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const shells = getPageShells(locale);

  return (
    <main>
      <Breadcrumbs items={[{ name: shells.screening.breadcrumb, url: `${siteConfig.url}/${locale}/screening` }]} />
      <PageHero kicker={shells.screening.kicker} title={shells.screening.title} description={shells.screening.description} />
      <Section className="rounded-[2rem] bg-white/70">
        <div className="mx-auto max-w-2xl">
          <SectionHeading title={shells.screening.formTitle} description={shells.screening.formDescription} />
          <div className="mt-8">
            <ScreeningForm />
          </div>
        </div>
      </Section>
    </main>
  );
}
