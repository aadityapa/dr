import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceIcon } from "@/components/shared/service-icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import { getMessages } from "@/lib/i18n";
import { getLabels, getLocalizedServiceBundle, getServiceDetailShells } from "@/lib/i18n/localize";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { faqPageSchema, serviceSchema } from "@/lib/schema";
import { services, siteConfig } from "@/lib/site-data";
import { SectionCta } from "@/components/shared/section-cta";

type Props = { params: Promise<{ locale: AppLocale; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getLocalizedServiceBundle(slug, locale);
  if (!service) notFound();

  return buildPageMetadata({
    title: `${service.title} Mumbai — Kandivali`,
    description: `${service.summary} Book with ${siteConfig.doctorName} at ${siteConfig.name}, Kandivali West, Mumbai.`,
    path: `/services/${slug}`,
    locale,
    keywords: mumbaiKeywords(`${service.title} Mumbai`, `${service.title} Kandivali`),
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const messages = getMessages(locale);
  const labels = getLabels(locale);
  const shells = getServiceDetailShells(locale);
  const service = getLocalizedServiceBundle(slug, locale);
  if (!service) notFound();

  const depth = service.depth;
  const extended = service.extended;
  const allFaqs = [...service.faqs, ...(extended?.additionalFaqs ?? [])];

  const listTitle = shells.listTitles[service.listKey];

  return (
    <main>
      <JsonLd
        data={serviceSchema(services.find((s) => s.slug === slug)!)}
        id="service-schema"
      />
      <JsonLd data={faqPageSchema(allFaqs)} id="service-faq-schema" />
      <Breadcrumbs
        items={[
          { name: messages.nav.services, url: `${siteConfig.url}/${locale}/services` },
          { name: service.title, url: `${siteConfig.url}/${locale}/services/${slug}` },
        ]}
      />

      <Section className="pt-8">
        <SectionHeading kicker={shells.kicker} title={service.title} description={service.headline} />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardContent className="p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-soft-green)]">
                <ServiceIcon name={service.icon} className="h-6 w-6 text-[color:var(--color-sage-dark)]" />
              </div>
              <p className="leading-relaxed text-[color:var(--color-muted)]">{service.content}</p>
              <p className="mt-4 text-sm text-[color:var(--color-sage-dark)]">
                <strong>{shells.ageGroup}</strong> {service.ageGroups}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-[color:var(--color-sage-dark)]">{shells.relatedConditions}</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {service.relatedConditions.map((item) => (
                  <li key={item.label}>
                    {item.slug ? (
                      <Link
                        href={`/conditions/${item.slug}`}
                        className="text-[color:var(--color-muted)] hover:text-[color:var(--color-sage-dark)] hover:underline"
                      >
                        • {item.label}
                      </Link>
                    ) : (
                      <span className="text-[color:var(--color-muted)]">• {item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {depth && (
        <>
          <Section>
            <SectionHeading kicker={shells.deepDiveKicker} title={shells.deepDiveTitle} />
            <div className="prose-custom mx-auto mt-6 max-w-4xl space-y-4">
              {depth.overview.map((para) => (
                <p key={para.slice(0, 40)} className="leading-relaxed text-[color:var(--color-muted)]">
                  {para}
                </p>
              ))}
            </div>
          </Section>

          <Section className="rounded-[2rem] bg-white/70">
            <SectionHeading title={shells.signsTitle} />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {depth.signsYourChildMayNeed.map((sign) => (
                <li key={sign} className="flex items-start gap-2 text-sm text-[color:var(--color-muted)]">
                  <span className="mt-0.5 text-[color:var(--color-terracotta)]">•</span>
                  {sign}
                </li>
              ))}
            </ul>
          </Section>

          <Section>
            <SectionHeading title={shells.parentGuideTitle} />
            <ul className="mt-4 space-y-3">
              {depth.parentGuide.map((tip) => (
                <li key={tip} className="flex items-start gap-2 text-sm text-[color:var(--color-muted)]">
                  <span className="text-[color:var(--color-sage-dark)]">→</span>
                  {tip}
                </li>
              ))}
            </ul>
          </Section>

          <Section className="rounded-[2rem] bg-[color:var(--color-soft-green)]/30">
            <SectionHeading title={shells.researchTitle} />
            <ul className="mt-4 space-y-3">
              {depth.researchReferences.map((ref) => (
                <li key={ref.title} className="text-sm text-[color:var(--color-muted)]">
                  <strong className="text-[color:var(--color-sage-dark)]">{ref.title}</strong>
                  <span className="block text-xs">— {ref.source}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section>
            <SectionHeading title={shells.outcomesTitle} />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {depth.outcomes.map((outcome) => (
                <Card key={outcome}>
                  <CardContent className="p-4 text-sm text-[color:var(--color-muted)]">✓ {outcome}</CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-[color:var(--color-border)]/60 bg-white/70 p-6">
              <h3 className="font-semibold text-[color:var(--color-sage-dark)]">{shells.whenToSeekHelp}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">{depth.whenToSeekHelp}</p>
            </div>
          </Section>
        </>
      )}

      {extended && (
        <Section className="rounded-[2rem] bg-white/70">
          <SectionHeading kicker={shells.overviewKicker} title={shells.overviewTitle} />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              { title: shells.whatAtHome, content: extended.geoBlock.whatIsIt },
              { title: shells.mightHelpIf, content: extended.geoBlock.whoNeedsIt },
              { title: shells.familiesNotice, content: extended.geoBlock.howItHelps },
              { title: shells.sessionFeelsLike, content: extended.geoBlock.whatHappens },
            ].map((block) => (
              <Card key={block.title}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-[color:var(--color-sage-dark)]">{block.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">{block.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-[color:var(--color-sage-dark)]">{shells.workToward}</h3>
                <ul className="mt-3 space-y-2 text-sm text-[color:var(--color-muted)]">
                  {extended.geoBlock.outcomes.map((o) => (
                    <li key={o}>✓ {o}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-[color:var(--color-sage-dark)]">{shells.whenReachOut}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">
                  {extended.geoBlock.whenToBegin}
                </p>
              </CardContent>
            </Card>
          </div>
        </Section>
      )}

      <Section className="rounded-[2rem] bg-white/70">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-[family-name:var(--font-serif)] text-3xl text-[color:var(--color-sage-dark)]">
                {listTitle}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-[color:var(--color-muted)]">
                {service.listItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-[family-name:var(--font-serif)] text-3xl text-[color:var(--color-sage-dark)]">
                {shells.ourProcess}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-[color:var(--color-muted)]">
                {service.process.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {extended && (
        <>
          <Section>
            <SectionHeading title={shells.caseExamplesTitle} description={shells.caseExamplesDescription} />
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {extended.caseExamples.map((ex) => (
                <Card key={ex.title}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[color:var(--color-sage-dark)]">{ex.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">{ex.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Section>

          <Section className="rounded-[2rem] bg-[color:var(--color-soft-green)]/30">
            <SectionHeading title={shells.parentGuidanceTitle} />
            <ul className="mt-4 space-y-3">
              {extended.parentGuidance.map((tip) => (
                <li key={tip} className="flex items-start gap-2 text-sm text-[color:var(--color-muted)]">
                  <span className="text-[color:var(--color-sage-dark)]">→</span>
                  {tip}
                </li>
              ))}
            </ul>
          </Section>
        </>
      )}

      {service.relatedConditions.some((c) => c.slug) && (
        <Section>
          <SectionHeading title={shells.relatedConditionsLearn} />
          <div className="mt-4 flex flex-wrap gap-3">
            {service.relatedConditions
              .filter((c) => c.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/conditions/${c.slug}`}
                  className="rounded-full border border-[color:var(--color-border)] bg-white/70 px-4 py-2 text-sm text-[color:var(--color-sage-dark)] hover:bg-[color:var(--color-soft-green)]/40"
                >
                  {c.label}
                </Link>
              ))}
          </div>
        </Section>
      )}

      <Section>
        <SectionHeading title={shells.faqTitle} />
        <Accordion type="single" collapsible className="mt-6 space-y-3">
          {allFaqs.map((faq, idx) => (
            <AccordionItem key={faq.q} value={`faq-${idx}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/appointment">{labels.bookConsultation}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/faqs">{messages.nav.faqs}</Link>
          </Button>
        </div>
        <div className="mt-8">
          <SectionCta />
        </div>
      </Section>
    </main>
  );
}
