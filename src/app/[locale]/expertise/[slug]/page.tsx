import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { ExpertiseDetailContent } from "@/components/expertise/expertise-detail-content";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import type { AppLocale } from "@/i18n/routing";
import { getMessages } from "@/lib/i18n";
import { buildLocalizedExpertiseFaqs, getLabels, getLocalizedExpertise, getPageShells } from "@/lib/i18n/localize";
import { expertiseAreas } from "@/lib/client-content/expertise";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-data";

type Props = { params: Promise<{ locale: AppLocale; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return expertiseAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const area = getLocalizedExpertise(slug, locale);
  if (!area) notFound();

  return buildPageMetadata({
    title: `${area.title} — Pediatric OT Mumbai`,
    description: area.metaDescription,
    path: `/expertise/${slug}`,
    locale,
    keywords: mumbaiKeywords(`${area.title} Mumbai`, `${area.title} Kandivali`),
  });
}

export default async function ExpertiseDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const area = getLocalizedExpertise(slug, locale);
  if (!area) notFound();

  const messages = getMessages(locale);
  const labels = getLabels(locale);
  const shells = getPageShells(locale);
  const faqs = buildLocalizedExpertiseFaqs(area, locale);

  return (
    <main className="bg-gradient-to-b from-[#FFFDFB] via-[#FCFAF8] to-[#FAFCFB]">
      <JsonLd
        id="expertise-detail-breadcrumb"
        data={breadcrumbSchema([
          { name: labels.home, url: `${siteConfig.url}/${locale}` },
          { name: messages.nav.services, url: `${siteConfig.url}/${locale}/expertise` },
          { name: area.title, url: `${siteConfig.url}/${locale}/expertise/${slug}` },
        ])}
      />
      <JsonLd
        id="expertise-detail-service"
        data={serviceSchema({ title: area.title, summary: area.tagline, slug })}
      />
      <JsonLd id="expertise-detail-faq" data={faqPageSchema(faqs)} />
      <Breadcrumbs
        items={[
          { name: messages.nav.services, url: `${siteConfig.url}/${locale}/expertise` },
          { name: area.title, url: `${siteConfig.url}/${locale}/expertise/${slug}` },
        ]}
      />

      <ExpertiseDetailContent
        area={area}
        labels={labels}
        shells={shells.expertise}
        expertiseLabel={labels.expertise}
        faqs={faqs}
      />
    </main>
  );
}
