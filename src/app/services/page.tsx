import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { ServiceIcon } from "@/components/shared/service-icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services, siteConfig } from "@/lib/site-data";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Pediatric Therapy Services Mumbai",
  description: `Explore occupational therapy, aquatic therapy, Brain Gym®, and handwriting training with ${siteConfig.doctorName} at ${siteConfig.name}.`,
  path: "/services",
  keywords: mumbaiKeywords(
    "occupational therapy Mumbai",
    "aquatic therapy Mumbai",
    "Brain Gym Mumbai",
    "handwriting therapy Mumbai",
  ),
});

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        kicker="Services"
        title="Specialized care for every milestone"
        description="Evidence-based pediatric therapy programs tailored to your child's unique developmental journey."
      />

      <Section>
        <div className="grid gap-8">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.06}>
              <Card className="overflow-hidden transition-all hover:shadow-xl">
                <CardContent className="grid gap-6 p-8 md:grid-cols-[auto_1fr_auto] md:items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[color:var(--color-soft-green)]">
                    <ServiceIcon name={service.icon} className="h-8 w-8 text-[color:var(--color-sage-dark)]" />
                  </div>
                  <div>
                    <h2 className="font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)]">
                      {service.title}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-[color:var(--color-terracotta)]">{service.headline}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">{service.summary}</p>
                    <p className="mt-2 text-xs text-[color:var(--color-sage)]">Ages: {service.ageGroups}</p>
                  </div>
                  <Button asChild variant="outline">
                    <Link href={`/services/${service.slug}`}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/appointment">Book a Consultation</Link>
          </Button>
        </Reveal>
      </Section>
    </main>
  );
}
