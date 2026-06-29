"use client";

import { Link } from "@/i18n/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import { clientConditions } from "@/lib/client-content/conditions";
import { getLocalizedClientCondition } from "@/lib/i18n/localize";
import { getCardPastel } from "@/lib/pastel-palette";

function getUnderstandingSnippet(text: string, maxSentences = 2): string {
  const sentences = text.match(/[^.!?]+[.!?]+(?:\s|$)/g);
  if (!sentences) return text;
  return sentences.slice(0, maxSentences).join("").trim();
}

export function ConditionsLanding() {
  const { locale, messages } = useLanguage();

  return (
    <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {clientConditions.map((condition, index) => {
        const localized = getLocalizedClientCondition(condition.slug, locale) ?? condition;
        const pastel = getCardPastel(index);
        const snippet = getUnderstandingSnippet(localized.understanding);

        return (
          <li key={condition.slug} className="flex">
            <Link
              href={`/conditions/${condition.slug}`}
              className="group flex h-full w-full flex-col rounded-2xl border p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              style={{
                backgroundColor: pastel.bg,
                borderColor: pastel.border,
              }}
            >
              <h2
                className="text-lg font-bold leading-snug md:text-xl"
                style={{ color: pastel.accent }}
              >
                {localized.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[color:var(--color-muted)] line-clamp-2">
                {snippet}
              </p>
              <span
                className="mt-4 text-sm font-semibold group-hover:underline"
                style={{ color: pastel.accent }}
              >
                {messages.common.learnMore}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
