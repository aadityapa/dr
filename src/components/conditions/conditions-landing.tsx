"use client";

import { Link } from "@/i18n/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import { clientConditions } from "@/lib/client-content/conditions";
import { getLocalizedClientCondition } from "@/lib/i18n/localize";
import { getCardPastel } from "@/lib/pastel-palette";

export function ConditionsLanding() {
  const { locale, messages } = useLanguage();

  return (
    <ul className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
      {clientConditions.map((condition, index) => {
        const localized = getLocalizedClientCondition(condition.slug, locale) ?? condition;
        const pastel = getCardPastel(index);

        return (
          <li key={condition.slug}>
            <div
              className="flex h-full flex-col rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{
                backgroundColor: pastel.bg,
                borderColor: pastel.border,
              }}
            >
              <h2
                className="font-[family-name:var(--font-serif)] text-xl font-medium"
                style={{ color: pastel.text }}
              >
                <Link href={`/conditions/${condition.slug}`} className="hover:underline">
                  {localized.title}
                </Link>
              </h2>
              <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-[#444]">
                {localized.understanding}
              </p>
              <Link
                href={`/conditions/${condition.slug}`}
                className="mt-4 inline-block text-sm font-semibold hover:underline"
                style={{ color: pastel.accent }}
              >
                {messages.common.learnMore} →
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
