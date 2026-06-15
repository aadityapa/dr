import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { ServiceIcon } from "@/components/shared/service-icon";
import { Button } from "@/components/ui/button";
import { buildPageMetadata, mumbaiKeywords } from "@/lib/metadata";
import { getServicePastel } from "@/lib/service-colors";
import { services, siteConfig } from "@/lib/site-data";

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
        title="Therapy that meets your child where they are"
        description="Play-based, evidence-informed programs — each one designed to help your child build real skills with confidence."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => {
            const pastel = getServicePastel(service.slug);
            return (
              <Reveal key={service.slug} delay={i * 0.06}>
                <div
                  className="flex h-full flex-col rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70 shadow-sm"
                  >
                    <ServiceIcon name={service.icon} className="h-7 w-7" style={{ color: pastel.accent }} />
                  </div>
                  <h2 className="mt-4 font-[family-name:var(--font-serif)] text-xl" style={{ color: pastel.text }}>
                    {service.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm font-medium leading-relaxed" style={{ color: pastel.accent }}>
                    {service.headline}
                  </p>
                  <Button asChild variant="outline" className="mt-4 w-fit bg-white/60">
                    <Link href={`/services/${service.slug}`}>Learn More</Link>
                  </Button>
                </div>
              </Reveal>
            );
          })}
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
