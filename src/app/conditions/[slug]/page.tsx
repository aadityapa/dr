import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { allConditionsContent, getConditionContent } from "@/lib/conditions-content";
import { buildPageMetadata } from "@/lib/metadata";
import { faqPageSchema, serviceSchema } from "@/lib/schema";
import { services, siteConfig } from "@/lib/site-data";

type ConditionPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allConditionsContent.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: ConditionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const condition = getConditionContent(slug);
  if (!condition) return {};

  return buildPageMetadata({
    title: `${condition.title} — Pediatric OT Mumbai`,
    description: condition.metaDescription,
    path: `/conditions/${slug}`,
    keywords: condition.keywords,
  });
}

export default async function ConditionDetailPage({ params }: ConditionPageProps) {
  const { slug } = await params;
  const condition = getConditionContent(slug);
  if (!condition) notFound();

  const relatedServiceItems = services.filter((s) => condition.relatedServices.includes(s.slug));

  return (
    <main>
      <JsonLd data={faqPageSchema(condition.faqs)} id="condition-faq-schema" />
      {relatedServiceItems.map((s) => (
        <JsonLd key={s.slug} data={serviceSchema(s)} id={`condition-service-${s.slug}`} />
      ))}
      <Breadcrumbs
        items={[
          { name: "Conditions", url: `${siteConfig.url}/conditions` },
          { name: condition.title, url: `${siteConfig.url}/conditions/${slug}` },
        ]}
      />
      <PageHero kicker="Condition Guide" title={condition.title} description={condition.intro} />

      <Section>
        <div className="prose-custom mx-auto max-w-4xl space-y-12">
          <article>
            <SectionHeading title="Signs & Symptoms" />
            <ul className="mt-4 space-y-2">
              {condition.symptoms.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-[color:var(--color-muted)]">
                  <span className="mt-1 text-[color:var(--color-terracotta)]">•</span>
                  {s}
                </li>
              ))}
            </ul>
          </article>

          <article>
            <SectionHeading title="Common Challenges for Families" />
            <ul className="mt-4 space-y-2">
              {condition.challenges.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-[color:var(--color-muted)]">
                  <span className="mt-1 text-[color:var(--color-terracotta)]">•</span>
                  {c}
                </li>
              ))}
            </ul>
          </article>

          <article>
            <SectionHeading title="How Occupational Therapy Helps" />
            <ul className="mt-4 space-y-2">
              {condition.therapyRole.map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-[color:var(--color-muted)]">
                  <span className="mt-1 text-[color:var(--color-sage-dark)]">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </article>

          <article>
            <SectionHeading title="Benefits of Therapy" />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {condition.benefits.map((b) => (
                <Card key={b}>
                  <CardContent className="p-4 text-sm text-[color:var(--color-muted)]">{b}</CardContent>
                </Card>
              ))}
            </div>
          </article>

          <article className="rounded-2xl bg-[color:var(--color-soft-green)]/40 p-6">
            <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)]">
              When to Begin
            </h2>
            <p className="mt-3 leading-relaxed text-[color:var(--color-muted)]">{condition.whenToBegin}</p>
          </article>
        </div>
      </Section>

      <Section className="rounded-[2rem] bg-white/70">
        <SectionHeading title="Related Services" />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {relatedServiceItems.map((s) => (
            <Card key={s.slug} className="transition-all hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-[color:var(--color-sage-dark)]">{s.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-muted)]">{s.summary}</p>
                <Link href={`/services/${s.slug}`} className="mt-3 inline-block text-sm font-semibold text-[color:var(--color-sage-dark)] hover:underline">
                  Learn more →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Frequently Asked Questions" />
        <Accordion type="single" collapsible className="mt-6 space-y-3">
          {condition.faqs.map((faq, idx) => (
            <AccordionItem key={faq.q} value={`cond-faq-${idx}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/appointment">Book a Consultation</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/faqs">View All FAQs</Link>
          </Button>
        </div>
      </Section>
    </main>
  );
}
