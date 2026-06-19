import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceIcon } from "@/components/shared/service-icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { getMessages } from "@/lib/i18n";
import {
  buildLocalizedExpertiseFaqs,
  getLabels,
  getLocalizedExpertise,
} from "@/lib/i18n/localize";
import { expertiseAreas } from "@/lib/client-content/expertise";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";
import { getServicePastel } from "@/lib/service-colors";
import { siteConfig } from "@/lib/site-data";

type Props = { params: Promise<{ locale: AppLocale; slug: string }> };

export function generateStaticParams() {
  return expertiseAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const area = getLocalizedExpertise(slug, locale);
  if (!area) return {};

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
  const pastel = getServicePastel(area.slug);
  const faqs = buildLocalizedExpertiseFaqs(area.title, locale);

  return (
    <main>
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
      <PageHero kicker={labels.expertise} title={area.title} description={area.tagline} />

      <Section>
        <div className="mx-auto max-w-4xl space-y-12">
          <article className="flex items-start gap-4 rounded-2xl border p-6" style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}>
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/80 shadow-sm">
              <ServiceIcon name={area.icon} className="h-7 w-7" style={{ color: pastel.accent }} />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)]">
                {labels.understanding}
              </h2>
              <p className="mt-3 leading-relaxed text-[color:var(--color-muted)]">{area.understanding}</p>
            </div>
          </article>

          <article>
            <SectionHeading title={labels.whatParentsNotice} />
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {area.whatParentsMayNotice.map((item) => (
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
            <SectionHeading title={labels.howThisHelps} />
            <ul className="mt-4 space-y-2">
              {area.howThisHelps.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[color:var(--color-muted)]">
                  <span className="mt-0.5 text-[color:var(--color-sage-dark)]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article>
            <SectionHeading title={labels.benefits} />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {area.benefits.map((b) => (
                <Card key={b}>
                  <CardContent className="p-4 text-sm text-[color:var(--color-muted)]">{b}</CardContent>
                </Card>
              ))}
            </div>
          </article>

          {area.details.length > 0 && (
            <article>
              <SectionHeading title={labels.learnMore} />
              <Accordion type="single" collapsible className="mt-4 space-y-2">
                {area.details.map((detail, idx) => (
                  <AccordionItem key={detail.title} value={`detail-${idx}`}>
                    <AccordionTrigger className="text-left">{detail.title}</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-[color:var(--color-muted)]">
                      {detail.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </article>
          )}

          <article>
            <SectionHeading title={labels.questionsParentsAsk} />
            <Accordion type="single" collapsible className="mt-4 space-y-2">
              {faqs.map((faq, idx) => (
                <AccordionItem key={faq.q} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-[color:var(--color-muted)]">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </article>

          <div className="flex flex-wrap gap-3 pt-4">
            <Button asChild size="lg">
              <Link href="/appointment">{labels.bookConsultation}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">{labels.askQuestion}</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
