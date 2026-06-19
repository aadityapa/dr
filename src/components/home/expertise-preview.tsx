"use client";

import Link from "next/link";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceIcon } from "@/components/shared/service-icon";
import { Button } from "@/components/ui/button";
import { expertiseAreas } from "@/lib/client-content/expertise";
import { homeContent } from "@/lib/client-content/home";
import { getServicePastel } from "@/lib/service-colors";

export function ExpertisePreview() {
  const copy = homeContent.expertisePreview;

  return (
    <Section id="expertise" compact className="bg-white">
      <SectionHeading kicker={copy.kicker} title={copy.title} description={copy.description} center />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {expertiseAreas.slice(0, 6).map((area, i) => {
          const pastel = getServicePastel(area.slug);
          return (
            <Reveal key={area.slug} delay={i * 0.05}>
              <Link
                href={`/expertise/${area.slug}`}
                className="group flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 shadow-sm transition-transform group-hover:scale-110">
                  <ServiceIcon name={area.icon} className="h-6 w-6" style={{ color: pastel.accent }} />
                </div>
                <h3 className="font-[family-name:var(--font-serif)] text-xl" style={{ color: pastel.text }}>
                  {area.title}
                </h3>
                <p className="mt-2 flex-1 text-sm font-medium leading-relaxed" style={{ color: pastel.accent }}>
                  {area.tagline}
                </p>
                <span className="mt-4 text-xs font-semibold" style={{ color: pastel.accent }}>
                  Learn more →
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-10 text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/expertise">{copy.cta}</Link>
        </Button>
      </Reveal>
    </Section>
  );
}
