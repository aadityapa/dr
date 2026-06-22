"use client";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceIcon } from "@/components/shared/service-icon";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import { lookingBeyondExpertise } from "@/lib/client-content/expertise";
import { getLocalizedExpertise } from "@/lib/i18n/localize";
import { getServicePastel } from "@/lib/service-colors";

export function LookingBeyondSection() {
  const { locale, messages } = useLanguage();
  const area = getLocalizedExpertise(lookingBeyondExpertise.slug, locale) ?? lookingBeyondExpertise;
  const pastel = getServicePastel(area.slug);

  return (
    <Section id="looking-beyond" className="bg-[color:var(--color-cream)]/40">
      <Reveal>
        <div
          className="mx-auto max-w-5xl overflow-hidden rounded-3xl border p-6 sm:p-10"
          style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/80 shadow-sm">
              <ServiceIcon name={area.icon} className="h-8 w-8" style={{ color: pastel.accent }} />
            </div>
            <div className="min-w-0 flex-1">
              <SectionHeading title={area.title} description={area.tagline} />
              <p className="mt-4 line-clamp-4 text-base leading-relaxed text-[color:var(--color-muted)] sm:line-clamp-none">
                {area.understanding}
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {area.howThisHelps.slice(0, 4).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[color:var(--color-muted)]">
                    <span className="mt-0.5 text-[color:var(--color-sage-dark)]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="mt-6 bg-white/70">
                <Link href={`/expertise/${area.slug}`}>{messages.common.learnMore}</Link>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
