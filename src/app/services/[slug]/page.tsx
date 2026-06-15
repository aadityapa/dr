import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceIcon } from "@/components/shared/service-icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { faqPageSchema, serviceSchema } from "@/lib/schema";
import { getServiceExtendedContent } from "@/lib/services-content";
import { getServiceDepthContent } from "@/lib/services-depth";
import { conditions, services, siteConfig } from "@/lib/site-data";
import { SectionCta } from "@/components/shared/section-cta";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};

  return buildPageMetadata({
    title: `${service.title} Mumbai — Kandivali`,
    description: `${service.summary} Book with ${siteConfig.doctorName} at ${siteConfig.name}, Kandivali West, Mumbai.`,
    path: `/services/${slug}`,
    keywords: mumbaiKeywords(`${service.title} Mumbai`, `${service.title} Kandivali`),
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const extended = getServiceExtendedContent(slug);
  const depth = getServiceDepthContent(slug);
  const allFaqs = [...service.faqs, ...(extended?.additionalFaqs ?? [])];

  const listItems =
    "areasAddressed" in service
      ? service.areasAddressed
      : "brainGymSupports" in service
        ? service.brainGymSupports
        : "skillsDeveloped" in service
          ? service.skillsDeveloped
          : service.benefits;

  const listTitle =
    "areasAddressed" in service
      ? "Areas Addressed"
      : "brainGymSupports" in service
        ? "Brain Gym® Supports"
        : "skillsDeveloped" in service
          ? "Skills Developed"
          : "Benefits";

  const relatedConditionItems = conditions.filter((c) =>
    service.relatedConditions.some((rc) => c.title.includes(rc) || rc.includes(c.title.split(" ")[0] ?? "")),
  );

  return (
    <main>
      <JsonLd data={serviceSchema(service)} id="service-schema" />
      <JsonLd data={faqPageSchema(allFaqs)} id="service-faq-schema" />
      <Breadcrumbs
        items={[
          { name: "Services", url: `${siteConfig.url}/services` },
          { name: service.title, url: `${siteConfig.url}/services/${slug}` },
        ]}
      />

      <Section className="pt-8">
        <SectionHeading kicker="Service" title={service.title} description={service.headline} />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardContent className="p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-soft-green)]">
                <ServiceIcon name={service.icon} className="h-6 w-6 text-[color:var(--color-sage-dark)]" />
              </div>
              <p className="leading-relaxed text-[color:var(--color-muted)]">{service.content}</p>
              <p className="mt-4 text-sm text-[color:var(--color-sage-dark)]">
                <strong>Age group:</strong> {service.ageGroups}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-[color:var(--color-sage-dark)]">Related Conditions</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {service.relatedConditions.map((item) => {
                  const match = conditions.find((c) => c.title === item);
                  return (
                    <li key={item}>
                      {match ? (
                        <Link href={`/conditions/${match.slug}`} className="text-[color:var(--color-muted)] hover:text-[color:var(--color-sage-dark)] hover:underline">
                          • {item}
                        </Link>
                      ) : (
                        <span className="text-[color:var(--color-muted)]">• {item}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {depth && (
        <>
          <Section>
            <SectionHeading kicker="Deep Dive" title="Comprehensive Overview" />
            <div className="prose-custom mx-auto mt-6 max-w-4xl space-y-4">
              {depth.overview.map((para) => (
                <p key={para.slice(0, 40)} className="leading-relaxed text-[color:var(--color-muted)]">
                  {para}
                </p>
              ))}
            </div>
          </Section>

          <Section className="rounded-[2rem] bg-white/70">
            <SectionHeading title="Signs Your Child May Need This Program" />
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
            <SectionHeading title="Parent Guide" />
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
            <SectionHeading title="Research & Evidence" />
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
            <SectionHeading title="Expected Outcomes" />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {depth.outcomes.map((outcome) => (
                <Card key={outcome}>
                  <CardContent className="p-4 text-sm text-[color:var(--color-muted)]">✓ {outcome}</CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-[color:var(--color-border)]/60 bg-white/70 p-6">
              <h3 className="font-semibold text-[color:var(--color-sage-dark)]">When to Seek Help</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">{depth.whenToSeekHelp}</p>
            </div>
          </Section>
        </>
      )}

      {extended && (
        <Section className="rounded-[2rem] bg-white/70">
          <SectionHeading kicker="Overview" title="What You Need to Know" />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              { title: "What Is It?", content: extended.geoBlock.whatIsIt },
              { title: "Who Needs It?", content: extended.geoBlock.whoNeedsIt },
              { title: "How It Helps", content: extended.geoBlock.howItHelps },
              { title: "What Happens in Sessions", content: extended.geoBlock.whatHappens },
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
                <h3 className="font-semibold text-[color:var(--color-sage-dark)]">Expected Outcomes</h3>
                <ul className="mt-3 space-y-2 text-sm text-[color:var(--color-muted)]">
                  {extended.geoBlock.outcomes.map((o) => (
                    <li key={o}>✓ {o}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-[color:var(--color-sage-dark)]">When to Begin</h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">{extended.geoBlock.whenToBegin}</p>
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
                {listItems?.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-[family-name:var(--font-serif)] text-3xl text-[color:var(--color-sage-dark)]">
                Our Process
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
            <SectionHeading title="Case Examples" description="Real progress patterns we see in our Kandivali clinic." />
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
            <SectionHeading title="Parent Guidance" />
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

      {relatedConditionItems.length > 0 && (
        <Section>
          <SectionHeading title="Learn More About Related Conditions" />
          <div className="mt-4 flex flex-wrap gap-3">
            {relatedConditionItems.map((c) => (
              <Link
                key={c.slug}
                href={`/conditions/${c.slug}`}
                className="rounded-full border border-[color:var(--color-border)] bg-white/70 px-4 py-2 text-sm text-[color:var(--color-sage-dark)] hover:bg-[color:var(--color-soft-green)]/40"
              >
                {c.title}
              </Link>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <SectionHeading title="Frequently Asked Questions" />
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
            <Link href="/appointment">Book a Consultation</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/faqs">View All FAQs</Link>
          </Button>
        </div>
        <div className="mt-8">
          <SectionCta />
        </div>
      </Section>
    </main>
  );
}
