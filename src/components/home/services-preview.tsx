import Link from "next/link";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceIcon } from "@/components/shared/service-icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/site-data";

export function ServicesPreview() {
  return (
    <Section className="rounded-[2rem] bg-gradient-to-b from-white/60 to-[color:var(--color-soft-green)]/20">
      <SectionHeading
        kicker="Our Services"
        title="Specialized programs for every child"
        description="Evidence-based therapy spanning occupational therapy, aquatic therapy, Brain Gym®, and handwriting training."
        center
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={i * 0.08}>
            <Card className="group h-full transition-all hover:-translate-y-1 hover:shadow-xl">
              <CardContent className="p-7">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--color-soft-green)] transition-colors group-hover:bg-[color:var(--color-sage)]/20">
                  <ServiceIcon name={service.icon} className="h-7 w-7 text-[color:var(--color-sage-dark)]" />
                </div>
                <h3 className="font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-[color:var(--color-terracotta)]">{service.headline}</p>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">{service.summary}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-5 inline-flex text-sm font-semibold text-[color:var(--color-sage-text)] hover:text-[color:var(--color-sage-dark)]"
                >
                  Learn more →
                </Link>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/services">View All Services</Link>
        </Button>
      </Reveal>
    </Section>
  );
}
