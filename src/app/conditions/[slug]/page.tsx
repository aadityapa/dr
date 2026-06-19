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
import { clientConditions, getClientCondition } from "@/lib/client-content/conditions";
import { buildConditionFaqs } from "@/lib/geo-content";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-data";

type ConditionPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return clientConditions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: ConditionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const condition = getClientCondition(slug);
  if (!condition) return {};

  return buildPageMetadata({
    title: `${condition.title} — Pediatric OT Mumbai`,
    description: condition.metaDescription,
    path: `/conditions/${slug}`,
    keywords: mumbaiKeywords(condition.title, "Autism Support Mumbai", "ADHD Support Mumbai", "OT Kandivali"),
  });
}

export default async function ConditionDetailPage({ params }: ConditionPageProps) {
  const { slug } = await params;
  const condition = getClientCondition(slug);
  if (!condition) notFound();

  const faqs = buildConditionFaqs(condition.title);

  return (
    <main>
      <JsonLd
        id="condition-breadcrumb"
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Conditions", url: `${siteConfig.url}/conditions` },
          { name: condition.title, url: `${siteConfig.url}/conditions/${slug}` },
        ])}
      />
      <JsonLd id="condition-faq" data={faqPageSchema(faqs)} />
      <Breadcrumbs
        items={[
          { name: "Conditions", url: `${siteConfig.url}/conditions` },
          { name: condition.title, url: `${siteConfig.url}/conditions/${slug}` },
        ]}
      />
      <PageHero kicker="For Parents" title={condition.title} description={condition.understanding.slice(0, 200) + "…"} />

      <Section>
        <div className="mx-auto max-w-4xl space-y-12">
          <article>
            <SectionHeading title="Understanding" />
            <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">{condition.understanding}</p>
          </article>

          <article>
            <SectionHeading title="What Parents May Notice" />
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
            <SectionHeading title="How Occupational Therapy Can Help" />
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
            <SectionHeading title="Consider Seeking Support If" />
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
            <SectionHeading title="Questions Parents Ask" />
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
              <Link href="/appointment">Book a Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/expertise">Explore Our Expertise</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
