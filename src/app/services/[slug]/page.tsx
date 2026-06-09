import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceIcon } from "@/components/shared/service-icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/site-data";

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

  return {
    title: `${service.title} Mumbai`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

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

  return (
    <main>
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
              <ul className="mt-3 space-y-2 text-sm text-[color:var(--color-muted)]">
                {service.relatedConditions.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

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

      <Section>
        <SectionHeading title="Frequently Asked Questions" />
        <Accordion type="single" collapsible className="mt-6 space-y-3">
          {service.faqs.map((faq, idx) => (
            <AccordionItem key={faq.q} value={`faq-${idx}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-8">
          <Button asChild>
            <Link href="/appointment">Book a Consultation</Link>
          </Button>
        </div>
      </Section>
    </main>
  );
}
