"use client";

import { Link } from "@/i18n/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import { clientConditions } from "@/lib/client-content/conditions";
import { getLocalizedClientCondition } from "@/lib/i18n/localize";

export function ConditionsLanding() {
  const { locale, messages } = useLanguage();

  return (
    <div className="mx-auto max-w-4xl">
      <ul className="divide-y divide-[#d0e8e8] overflow-hidden rounded-2xl border border-[#d0e8e8] bg-white shadow-sm">
        {clientConditions.map((condition) => {
          const localized = getLocalizedClientCondition(condition.slug, locale) ?? condition;

          return (
            <li key={condition.slug}>
              <Link
                href={`/conditions/${condition.slug}`}
                className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-[#f4fafa] md:px-6 md:py-5"
              >
                <span className="text-base font-medium text-[#005B5B] md:text-lg">{localized.title}</span>
                <span className="shrink-0 text-sm font-semibold text-[#008080] transition-colors group-hover:text-[#005B5B]">
                  {messages.common.learnMore}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
