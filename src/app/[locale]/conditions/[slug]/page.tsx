import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { ConditionDetailCard } from "@/components/conditions/condition-detail-card";
import { ConditionsPageCta } from "@/components/conditions/conditions-page-cta";
import { ConditionsPillNav } from "@/components/conditions/conditions-pill-nav";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { getMessages } from "@/lib/i18n";
import { buildLocalizedConditionFaqs, getLabels, getLocalizedClientCondition } from "@/lib/i18n/localize";
import { clientConditions } from "@/lib/client-content/conditions";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-data";

type Props = { params: Promise<{ locale: AppLocale; slug: string }> };

export function generateStaticParams() {
  return clientConditions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const condition = getLocalizedClientCondition(slug, locale);
  if (!condition) return {};

  return buildPageMetadata({
    title: `${condition.title} — Pediatric OT Mumbai`,
    description: condition.metaDescription,
    path: `/conditions/${slug}`,
    locale,
    keywords: mumbaiKeywords(condition.title, condition.pillLabel, "OT Kandivali"),
  });
}

export default async function ConditionDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const condition = getLocalizedClientCondition(slug, locale);
  if (!condition) notFound();

  const messages = getMessages(locale);
  const labels = getLabels(locale);
  const faqs = buildLocalizedConditionFaqs(condition.title, locale);

  return (
    <main className="bg-[#F8FBFB]">
      <JsonLd
        id="condition-breadcrumb"
        data={breadcrumbSchema([
          { name: labels.home, url: `${siteConfig.url}/${locale}` },
          { name: messages.nav.conditions, url: `${siteConfig.url}/${locale}/conditions` },
          { name: condition.title, url: `${siteConfig.url}/${locale}/conditions/${slug}` },
        ])}
      />
      <JsonLd id="condition-faq" data={faqPageSchema(faqs)} />
      <Breadcrumbs
        items={[
          { name: messages.nav.conditions, url: `${siteConfig.url}/${locale}/conditions` },
          { name: condition.title, url: `${siteConfig.url}/${locale}/conditions/${slug}` },
        ]}
      />

      <section className="border-b border-[#d0e8e8] bg-[#F8FBFB] px-4 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-semibold text-[#005B5B] md:text-4xl">{condition.title}</h1>
        </div>
      </section>

      <Section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <ConditionsPillNav activeSlug={slug} />
          <ConditionDetailCard condition={condition} labels={labels} />
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg">
              <Link href="/appointment">{labels.bookConsultation}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/conditions">{messages.nav.conditions}</Link>
            </Button>
          </div>
          <ConditionsPageCta />
        </div>
      </Section>
    </main>
  );
}
