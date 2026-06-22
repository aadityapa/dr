"use client";

import { useMemo } from "react";

import { Reveal } from "@/components/shared/reveal";
import { ServiceIcon } from "@/components/shared/service-icon";
import { Link } from "@/i18n/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import { expertiseCategories } from "@/lib/client-content/expertise";
import { getLocalizedExpertise } from "@/lib/i18n/localize";
import { getServicePastel } from "@/lib/service-colors";
import { cn } from "@/lib/utils";

export function CategoryNavigation() {
  const { locale, content } = useLanguage();

  const categories = useMemo(
    () =>
      expertiseCategories.map((area) => ({
        base: area,
        localized: getLocalizedExpertise(area.slug, locale) ?? area,
      })),
    [locale],
  );

  return (
    <Reveal>
      <div id="programmes" className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-sm font-medium uppercase tracking-wide text-[color:var(--color-sage-dark)]">
          {content.expertiseLanding.categoryNavLabel}
        </p>
        <nav
          aria-label={content.expertiseLanding.categoryNavLabel}
          className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {categories.map(({ base, localized }) => {
            const pastel = getServicePastel(base.slug);
            return (
              <Link
                key={base.slug}
                href={`/expertise/${base.slug}`}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  "hover:bg-white hover:shadow-sm",
                )}
                style={{ borderColor: pastel.border, color: pastel.text }}
              >
                <ServiceIcon name={base.icon} className="h-4 w-4" style={{ color: pastel.accent }} />
                <span className="whitespace-nowrap">{localized.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </Reveal>
  );
}
