"use client";

import { useMemo } from "react";

import { useLanguage } from "@/components/providers/language-provider";
import { Reveal } from "@/components/shared/reveal";
import { ServiceIcon } from "@/components/shared/service-icon";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { expertiseCategories } from "@/lib/client-content/expertise";
import { getLocalizedExpertise } from "@/lib/i18n/localize";
import { getServicePastel } from "@/lib/service-colors";

export function ExpertiseListGrid() {
  const { locale, messages } = useLanguage();

  const areas = useMemo(
    () =>
      expertiseCategories.map((area) => ({
        base: area,
        localized: getLocalizedExpertise(area.slug, locale) ?? area,
      })),
    [locale],
  );

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {areas.map(({ base, localized }, i) => {
          const pastel = getServicePastel(base.slug);
          return (
            <Reveal key={base.slug} delay={i * 0.05}>
              <div
                id={base.slug}
                className="flex h-full flex-col rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70 shadow-sm">
                  <ServiceIcon name={base.icon} className="h-7 w-7" style={{ color: pastel.accent }} />
                </div>
                <h2 className="mt-4 font-[family-name:var(--font-serif)] text-xl" style={{ color: pastel.text }}>
                  {localized.title}
                </h2>
                <p className="mt-2 flex-1 text-sm font-medium leading-relaxed line-clamp-3" style={{ color: pastel.accent }}>
                  {localized.tagline}
                </p>
                <Button asChild variant="outline" className="mt-4 w-fit bg-white/60">
                  <Link href={`/expertise/${base.slug}`}>{messages.common.learnMore}</Link>
                </Button>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-10 text-center">
        <Button asChild size="lg">
          <Link href="/appointment">{messages.cta.bookConsultation}</Link>
        </Button>
      </Reveal>
    </>
  );
}
