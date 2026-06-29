import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { ConditionDetailCard } from "@/components/conditions/condition-detail-card";
import { ConditionsPageCta } from "@/components/conditions/conditions-page-cta";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
    <main>
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

      <PageHero
        kicker={labels.forParents}
        title={condition.title}
        description={condition.understanding.slice(0, 200) + "…"}
      />

      <Section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <ConditionDetailCard condition={condition} labels={labels} hideTitle />

          <div>
            <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)]">
              {labels.questionsParentsAsk}
            </h2>
            <Accordion type="single" collapsible className="mt-4 space-y-2">
              {faqs.map((faq, idx) => (
                <AccordionItem key={faq.q} value={`condition-faq-${idx}`}>
                  <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-[color:var(--color-muted)]">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/appointment">{labels.bookConsultation}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/expertise">{labels.exploreExpertise}</Link>
            </Button>
          </div>

          <ConditionsPageCta />
        </div>
      </Section>
    </main>
  );
}
