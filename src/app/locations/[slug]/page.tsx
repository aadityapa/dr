import type { Metadata } from "next";
import Link from "next/link";
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
import { buildPageMetadata } from "@/lib/metadata";
import { getLocationPage, locationPages } from "@/lib/locations";
import { faqPageSchema, localBusinessSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-data";

type LocationPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return locationPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLocationPage(slug);
  if (!page) return {};

  return buildPageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/locations/${slug}`,
    keywords: page.keywords,
  });
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const page = getLocationPage(slug);
  if (!page) notFound();

  const breadcrumbs = [
    { name: "Locations", url: `${siteConfig.url}/locations/${slug}` },
    { name: page.title, url: `${siteConfig.url}/locations/${slug}` },
  ];

  return (
    <main>
      <JsonLd
        data={localBusinessSchema({ name: page.title, description: page.metaDescription, areaServed: page.areaServed })}
        id="location-local-business"
      />
      <JsonLd data={faqPageSchema(page.localFaqs)} id="location-faq-schema" />
      <Breadcrumbs items={breadcrumbs} />
      <PageHero kicker="Local Services" title={page.headline} description={page.intro} />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading title="Why Choose Us" />
            <ul className="mt-4 space-y-3">
              {page.whyChoose.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[color:var(--color-muted)]">
                  <span className="mt-1 text-[color:var(--color-terracotta)]">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-semibold text-[color:var(--color-sage-dark)]">Services Offered</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {page.services.map((s) => (
                <span key={s} className="rounded-full bg-[color:var(--color-soft-green)] px-3 py-1 text-xs font-medium text-[color:var(--color-sage-dark)]">
                  {s}
                </span>
              ))}
            </div>

            <h3 className="mt-8 font-semibold text-[color:var(--color-sage-dark)]">Areas Served</h3>
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
        <SectionHeading title="Local FAQs" />
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
            Ready to Begin?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[color:var(--color-muted)]">
            Book a consultation with {siteConfig.doctorName} at our Kandivali West clinic.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/appointment">Book Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
