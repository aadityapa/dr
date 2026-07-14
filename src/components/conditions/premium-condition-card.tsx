"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { Link } from "@/i18n/navigation";
import {
  conditionIcons,
  getConditionCategories,
  getUnderstandingSnippet,
} from "@/lib/conditions-meta";
import { getCardPastelByKey } from "@/lib/pastel-palette";
import { getLocalizedClientCondition } from "@/lib/i18n/localize";
import type { ClientCondition } from "@/lib/client-content/conditions";

import type { ConditionsPageProps } from "./conditions-types";

type PremiumConditionCardProps = Pick<ConditionsPageProps, "shells"> & {
  condition: ClientCondition;
  index: number;
};

export function PremiumConditionCard({ condition, index, shells }: PremiumConditionCardProps) {
  const { locale, messages } = useLanguage();
  const reduced = useReducedMotion();
  const localized = getLocalizedClientCondition(condition.slug, locale) ?? condition;
  const pastel = getCardPastelByKey(condition.slug);
  const Icon = conditionIcons[condition.slug];
  const therapyFocus = shells.therapyFocus[condition.slug];
  const snippet = getUnderstandingSnippet(localized.understanding);

  return (
    <motion.li
      className="h-full"
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.07 }}
    >
      <motion.article
        className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/45 p-6 shadow-lg backdrop-blur-md md:p-7"
        whileHover={reduced ? undefined : { y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
        style={{
          boxShadow: `0 8px 32px ${pastel.border}33, inset 0 1px 0 rgba(255,255,255,0.8)`,
        }}
      >
        <div
          className="absolute inset-x-0 top-0 h-1"
          style={{ background: `linear-gradient(90deg, ${pastel.accent}, ${pastel.border})` }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-40 blur-2xl transition-opacity group-hover:opacity-70"
          style={{ backgroundColor: pastel.bg }}
          aria-hidden
        />

        <div className="relative flex items-start justify-between gap-3">
          {Icon ? (
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/70 shadow-sm"
              style={{ backgroundColor: `${pastel.bg}CC`, color: pastel.accent }}
            >
              <Icon className="h-6 w-6" aria-hidden />
            </div>
          ) : null}
          {therapyFocus ? (
            <span
              className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wide"
              style={{ backgroundColor: `${pastel.bg}99`, color: pastel.text }}
            >
              {shells.therapyFocusLabel}: {therapyFocus}
            </span>
          ) : null}
        </div>

        <h2
          className="relative mt-5 font-[family-name:var(--font-serif)] text-xl font-medium leading-snug md:text-[1.35rem]"
          style={{ color: pastel.text }}
        >
          <Link href={`/conditions/${condition.slug}`} className="hover:underline">
            {localized.title}
          </Link>
        </h2>

        <p className="relative mt-3 flex-1 text-sm leading-relaxed text-[#444] md:text-[0.95rem]">
          {snippet}
        </p>

        <Link
          href={`/conditions/${condition.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-colors after:absolute after:inset-0 after:content-['']"
          style={{ color: pastel.accent }}
          aria-label={localized.title}
        >
          <motion.span
            className="inline-flex items-center gap-2"
            whileHover={reduced ? undefined : { x: 4 }}
          >
            {messages.common.learnMore}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </motion.span>
        </Link>
      </motion.article>
    </motion.li>
  );
}

export function filterConditions(
  conditions: ClientCondition[],
  searchQuery: string,
  activeCategory: string,
  locale: string,
): ClientCondition[] {
  const query = searchQuery.trim().toLowerCase();

  return conditions.filter((condition) => {
    const localized = getLocalizedClientCondition(condition.slug, locale as "en" | "hi" | "mr") ?? condition;
    const matchesSearch =
      !query ||
      localized.title.toLowerCase().includes(query) ||
      localized.pillLabel.toLowerCase().includes(query);

    const categories = getConditionCategories(condition.slug);
    const matchesCategory = activeCategory === "all" || categories.includes(activeCategory as never);

    return matchesSearch && matchesCategory;
  });
}
