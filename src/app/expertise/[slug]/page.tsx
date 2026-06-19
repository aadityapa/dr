import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceIcon } from "@/components/shared/service-icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { expertiseAreas, getExpertise } from "@/lib/client-content/expertise";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { getServicePastel } from "@/lib/service-colors";
import { siteConfig } from "@/lib/site-data";

type ExpertisePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return expertiseAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: ExpertisePageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getExpertise(slug);
  if (!area) return {};

  return buildPageMetadata({
    title: `${area.title} — Pediatric OT Mumbai`,
    description: area.metaDescription,
    path: `/expertise/${slug}`,
    keywords: mumbaiKeywords(`${area.title} Mumbai`, `${area.title} Kandivali`),
  });
}

export default async function ExpertiseDetailPage({ params }: ExpertisePageProps) {
  const { slug } = await params;
  const area = getExpertise(slug);
  if (!area) notFound();

  const pastel = getServicePastel(area.slug);

  return (
    <main>
      <Breadcrumbs
        items={[
          { name: "Expertise", url: `${siteConfig.url}/expertise` },
          { name: area.title, url: `${siteConfig.url}/expertise/${slug}` },
        ]}
      />
      <PageHero kicker="Expertise" title={area.title} description={area.tagline} />

      <Section>
        <div className="mx-auto max-w-4xl space-y-12">
          <article className="flex items-start gap-4 rounded-2xl border p-6" style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}>
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/80 shadow-sm">
              <ServiceIcon name={area.icon} className="h-7 w-7" style={{ color: pastel.accent }} />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)]">
                Understanding
              </h2>
              <p className="mt-3 leading-relaxed text-[color:var(--color-muted)]">{area.understanding}</p>
            </div>
          </article>

          <article>
            <SectionHeading title="What Parents May Notice" />
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
            <SectionHeading title="How This Helps" />
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
            <SectionHeading title="Benefits" />
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
              <SectionHeading title="Learn More" />
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

          <div className="flex flex-wrap gap-3 pt-4">
            <Button asChild size="lg">
              <Link href="/appointment">Book a Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Ask a Question</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
