"use client";

import { Link } from "@/i18n/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import { clientConditions } from "@/lib/client-content/conditions";
import { getLocalizedClientCondition } from "@/lib/i18n/localize";
import { getCardPastel } from "@/lib/pastel-palette";

export function ConditionsLanding() {
  const { locale, messages } = useLanguage();

  return (
    <ul className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 md:gap-5">
      {clientConditions.map((condition, index) => {
        const localized = getLocalizedClientCondition(condition.slug, locale) ?? condition;
        const pastel = getCardPastel(index);

        return (
          <li key={condition.slug}>
            <Link
              href={`/conditions/${condition.slug}`}
              className="group flex items-center justify-between gap-4 rounded-2xl border px-5 py-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md md:px-6 md:py-5"
              style={{
                backgroundColor: pastel.bg,
                borderColor: pastel.border,
              }}
            >
              <span className="text-base font-medium text-[#005B5B] md:text-lg">
                {localized.title}
              </span>
              <span className="shrink-0 text-sm font-semibold text-[#008080] transition-colors group-hover:text-[#005B5B]">
                {messages.common.learnMore}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
