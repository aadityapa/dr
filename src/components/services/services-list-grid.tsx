"use client";

import Link from "next/link";

import { useLanguage } from "@/components/providers/language-provider";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { ServiceIcon } from "@/components/shared/service-icon";
import { Button } from "@/components/ui/button";
import { getServicePastel } from "@/lib/service-colors";
import { services } from "@/lib/site-data";

export function ServicesListGrid() {
  const { content } = useLanguage();

  return (
    <Section>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, i) => {
          const pastel = getServicePastel(service.slug);
          const localized = content.services[service.slug];
          return (
            <Reveal key={service.slug} delay={i * 0.06}>
              <div
                className="flex h-full flex-col rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70 shadow-sm">
                  <ServiceIcon name={service.icon} className="h-7 w-7" style={{ color: pastel.accent }} />
                </div>
                <h2 className="mt-4 font-[family-name:var(--font-serif)] text-xl" style={{ color: pastel.text }}>
                  {localized?.title ?? service.title}
                </h2>
                <p className="mt-2 flex-1 text-sm font-medium leading-relaxed" style={{ color: pastel.accent }}>
                  {localized?.headline ?? service.headline}
                </p>
                <Button asChild variant="outline" className="mt-4 w-fit bg-white/60">
                  <Link href={`/services/${service.slug}`}>{content.common.learnMoreBtn}</Link>
                </Button>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-12 text-center">
        <Button asChild size="lg">
          <Link href="/appointment">{content.pages.servicesList.cta}</Link>
        </Button>
      </Reveal>
    </Section>
  );
}
