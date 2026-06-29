"use client";

import { Link } from "@/i18n/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import { clientConditions } from "@/lib/client-content/conditions";
import { getLocalizedClientCondition } from "@/lib/i18n/localize";

type ConditionsPillNavProps = {
  activeSlug?: string;
  onSelect?: (slug: string) => void;
};

export function ConditionsPillNav({ activeSlug, onSelect }: ConditionsPillNavProps) {
  const { locale } = useLanguage();

  return (
    <nav aria-label="Conditions" className="flex flex-wrap gap-2.5 md:gap-3">
      {clientConditions.map((condition) => {
        const localized = getLocalizedClientCondition(condition.slug, locale) ?? condition;
        const isActive = activeSlug === condition.slug;
        const className = `rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
          isActive
            ? "border-[#008080] bg-[#e8f5f5] text-[#005B5B]"
            : "border-[#b8d8d8] bg-white text-[#005B5B] hover:border-[#008080] hover:bg-[#f4fafa]"
        }`;

        if (onSelect) {
          return (
            <button key={condition.slug} type="button" onClick={() => onSelect(condition.slug)} className={className}>
              {localized.pillLabel}
            </button>
          );
        }

        return (
          <Link key={condition.slug} href={`/conditions/${condition.slug}`} className={className}>
            {localized.pillLabel}
          </Link>
        );
      })}
    </nav>
  );
}
