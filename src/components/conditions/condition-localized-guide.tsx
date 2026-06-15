"use client";

import Link from "next/link";

import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeading } from "@/components/shared/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getLocalizedConditionDetail, getLocalizedService } from "@/lib/i18n/content";
import { SectionCta } from "@/components/shared/section-cta";

type ConditionLocalizedGuideProps = {
  slug: string;
  whenToSeeDoctor?: string[];
  successOutcomes?: string[];
};

export function ConditionLocalizedGuide({
  slug,
  whenToSeeDoctor = [],
  successOutcomes = [],
}: ConditionLocalizedGuideProps) {
  const { content, locale, messages } = useLanguage();
  const detail = getLocalizedConditionDetail(slug, locale);
  const labels = content.pages.conditionsDetail;

  if (!detail) return null;

  return (
    <>
      <article>
        <SectionHeading title={labels.symptoms} />
        <ul className="mt-4 space-y-2">
          {detail.symptoms.map((s) => (
            <li key={s} className="flex items-start gap-2 text-sm text-[color:var(--color-muted)]">
              <span className="mt-1 text-[color:var(--color-terracotta)]">•</span>
              {s}
            </li>
          ))}
        </ul>
      </article>

      <article>
        <SectionHeading title={labels.challenges} />
        <ul className="mt-4 space-y-2">
          {detail.challenges.map((c) => (
            <li key={c} className="flex items-start gap-2 text-sm text-[color:var(--color-muted)]">
              <span className="mt-1 text-[color:var(--color-terracotta)]">•</span>
              {c}
            </li>
          ))}
        </ul>
      </article>

      <article>
        <SectionHeading title={labels.therapyRole} />
        <ul className="mt-4 space-y-2">
          {detail.therapyRole.map((t) => (
            <li key={t} className="flex items-start gap-2 text-sm text-[color:var(--color-muted)]">
              <span className="mt-1 text-[color:var(--color-sage-dark)]">✓</span>
              {t}
            </li>
          ))}
        </ul>
      </article>

      <article>
        <SectionHeading title={labels.benefits} />
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {detail.benefits.map((b) => (
            <Card key={b}>
              <CardContent className="p-4 text-sm text-[color:var(--color-muted)]">{b}</CardContent>
            </Card>
          ))}
        </div>
      </article>

      {whenToSeeDoctor.length > 0 && (
        <article className="rounded-2xl bg-[color:var(--color-soft-green)]/40 p-6">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)]">
            {labels.whenToReachOut}
          </h2>
          <ul className="mt-4 space-y-2">
            {whenToSeeDoctor.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[color:var(--color-muted)]">
                <span className="mt-1 text-[color:var(--color-terracotta)]">•</span>
                {item}
              </li>
            ))}
          </ul>
        </article>
      )}

      <article className="rounded-2xl bg-[color:var(--color-soft-green)]/40 p-6">
        <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)]">
          {labels.whenToBeginTitle}
        </h2>
        <p className="mt-3 leading-relaxed text-[color:var(--color-muted)]">{detail.whenToBegin}</p>
      </article>

      {successOutcomes.length > 0 && (
        <article>
          <SectionHeading title={labels.outcomes} />
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {successOutcomes.map((outcome) => (
              <Card key={outcome}>
                <CardContent className="p-4 text-sm text-[color:var(--color-muted)]">✓ {outcome}</CardContent>
              </Card>
            ))}
          </div>
        </article>
      )}

      {detail.faqs.length > 0 && (
        <>
          <SectionHeading title={messages.nav.faqs} />
          <Accordion type="single" collapsible className="mt-6 space-y-3">
            {detail.faqs.map((faq, idx) => (
              <AccordionItem key={faq.q} value={`cond-faq-${idx}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/appointment">{messages.cta.bookConsultation}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/faqs">{content.homeFaq.browseAll}</Link>
            </Button>
          </div>
          <div className="mt-8">
            <SectionCta />
          </div>
        </>
      )}
    </>
  );
}

export function ConditionRelatedServices({
  serviceSlugs,
  summaries,
}: {
  serviceSlugs: string[];
  summaries: Record<string, string>;
}) {
  const { content, locale } = useLanguage();

  return (
    <div className="mt-6 grid gap-4 md:grid-cols-3">
      {serviceSlugs.map((slug) => {
        const localized = getLocalizedService(slug, locale);
        if (!localized) return null;
        return (
          <Card key={slug} className="transition-all hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-[color:var(--color-sage-dark)]">{localized.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--color-muted)]">{summaries[slug]}</p>
              <Link
                href={`/services/${slug}`}
                className="mt-3 inline-block text-sm font-semibold text-[color:var(--color-sage-dark)] hover:underline"
              >
                {content.common.learnMore}
              </Link>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
