import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { MapPin, Phone } from "lucide-react";

import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { getMessages } from "@/lib/i18n";
import { getLabels, getLocalizedLocation } from "@/lib/i18n/localize";
import { locationPages } from "@/lib/locations";
import { buildPageMetadata } from "@/lib/metadata";
import { faqPageSchema, localBusinessSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-data";

type Props = { params: Promise<{ locale: AppLocale; slug: string }> };

export function generateStaticParams() {
  return locationPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const page = getLocalizedLocation(slug, locale);
  if (!page) return {};

  return buildPageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/locations/${slug}`,
    locale,
    keywords: page.keywords,
  });
}

export default async function LocationPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const page = getLocalizedLocation(slug, locale);
  if (!page) notFound();

  const messages = getMessages(locale);
  const labels = getLabels(locale);

  const breadcrumbs = [
    { name: messages.footer.locations, url: `${siteConfig.url}/${locale}/locations` },
    { name: page.title, url: `${siteConfig.url}/${locale}/locations/${slug}` },
  ];

  return (
    <main>
      <JsonLd
        data={localBusinessSchema({ name: page.title, description: page.metaDescription, areaServed: page.areaServed })}
        id="location-local-business"
      />
      <JsonLd data={faqPageSchema(page.localFaqs)} id="location-faq-schema" />
      <Breadcrumbs items={breadcrumbs} />
      <PageHero kicker={labels.areasServed} title={page.headline} description={page.intro} />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading title={labels.whyChoose} />
            <ul className="mt-4 space-y-3">
              {page.whyChoose.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[color:var(--color-muted)]">
                  <span className="mt-1 text-[color:var(--color-terracotta)]">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-semibold text-[color:var(--color-sage-dark)]">{labels.servicesOffered}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {page.services.map((s) => (
                <span key={s} className="rounded-full bg-[color:var(--color-soft-green)] px-3 py-1 text-xs font-medium text-[color:var(--color-sage-dark)]">
                  {s}
                </span>
              ))}
            </div>

            <h3 className="mt-8 font-semibold text-[color:var(--color-sage-dark)]">{labels.areasServed}</h3>
            <p className="mt-2 text-sm text-[color:var(--color-muted)]">{page.areaServed.join(" · ")}</p>
          </div>

          <Card>
            <CardContent className="p-0 overflow-hidden rounded-2xl">
              <iframe
                title={`${siteConfig.name} clinic location map`}
                src={siteConfig.mapsEmbed}
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="p-6">
                <div className="flex items-start gap-2 text-sm text-[color:var(--color-muted)]">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-sage-dark)]" aria-hidden="true" />
                  <address className="not-italic">{siteConfig.address.full}</address>
                </div>
                <div className="mt-3 flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-[color:var(--color-sage-dark)]" aria-hidden="true" />
                  <a href={`tel:${siteConfig.phone}`} className="font-medium text-[color:var(--color-sage-dark)]">
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
                <p className="mt-2 text-xs text-[color:var(--color-muted)]">{siteConfig.timings}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section className="rounded-[2rem] bg-white/70">
        <SectionHeading title={labels.localQuestions} />
        <Accordion type="single" collapsible className="mt-6 space-y-3">
          {page.localFaqs.map((faq, idx) => (
            <AccordionItem key={faq.q} value={`loc-faq-${idx}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-serif)] text-3xl text-[color:var(--color-sage-dark)]">
            {labels.readyNextStep}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[color:var(--color-muted)]">
            Book a consultation with {siteConfig.doctorName} at our Kandivali West clinic.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/appointment">{labels.bookConsultation}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/expertise">{labels.viewAllExpertise}</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
