import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { getMessages } from "@/lib/i18n";
import {
  buildLocalizedConditionFaqs,
  getLabels,
  getLocalizedClientCondition,
} from "@/lib/i18n/localize";
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
    keywords: mumbaiKeywords(condition.title, "Autism Support Mumbai", "ADHD Support Mumbai", "OT Kandivali"),
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

      <Section>
        <div className="mx-auto max-w-4xl space-y-12">
          <article>
            <SectionHeading title={labels.understanding} />
            <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">{condition.understanding}</p>
          </article>

          <article>
            <SectionHeading title={labels.whatParentsNotice} />
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {condition.whatParentsMayNotice.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-xl border border-[color:var(--color-border)]/60 bg-white/80 p-4 text-sm text-[color:var(--color-muted)]"
                >
                  <span className="mt-0.5 text-[color:var(--color-terracotta)]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article>
            <SectionHeading title={labels.howOtHelps} />
            <ul className="mt-4 space-y-2">
              {condition.howOtHelps.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[color:var(--color-muted)]">
                  <span className="mt-0.5 text-[color:var(--color-sage-dark)]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl bg-[color:var(--color-soft-green)]/40 p-6">
            <SectionHeading title={labels.considerSupportIf} />
            <ul className="mt-4 space-y-2">
              {condition.considerSupportIf.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[color:var(--color-muted)]">
                  <span className="mt-0.5 text-[color:var(--color-terracotta)]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-almond)] p-8 text-center">
            <p className="font-[family-name:var(--font-serif)] text-xl leading-relaxed text-[color:var(--color-sage-dark)]">
              {condition.closingSection}
            </p>
          </article>

          <article>
            <SectionHeading title={labels.questionsParentsAsk} />
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
          </article>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/appointment">{labels.bookConsultation}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/expertise">{labels.exploreExpertise}</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
