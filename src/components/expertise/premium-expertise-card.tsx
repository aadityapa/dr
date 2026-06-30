"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";
import { Link } from "@/i18n/navigation";
import type { ExpertiseArea } from "@/lib/client-content/expertise";
import { expertiseCategories } from "@/lib/client-content/expertise";
import {
  expertiseIcons,
  getExpertiseCategories,
  getUnderstandingSnippet,
} from "@/lib/expertise-meta";
import { getLocalizedExpertise } from "@/lib/i18n/localize";
import { getCardPastelByKey } from "@/lib/pastel-palette";

import type { ExpertisePageProps } from "./expertise-types";

type PremiumExpertiseCardProps = Pick<ExpertisePageProps, "shells"> & {
  area: ExpertiseArea;
  index: number;
  tall?: boolean;
};

export function PremiumExpertiseCard({ area, index, shells, tall }: PremiumExpertiseCardProps) {
  const { locale, messages } = useLanguage();
  const reduced = useReducedMotion();
  const localized = getLocalizedExpertise(area.slug, locale) ?? area;
  const pastel = getCardPastelByKey(area.slug);
  const Icon = expertiseIcons[area.slug];
  const therapyFocus = shells.therapyFocus[area.slug];
  const snippet = localized.tagline || getUnderstandingSnippet(localized.understanding);

  return (
    <motion.li
      className={tall ? "md:row-span-2" : undefined}
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
          <Link href={`/expertise/${area.slug}`} className="hover:underline">
            {localized.title}
          </Link>
        </h2>

        <p className="relative mt-3 flex-1 text-sm leading-relaxed text-[#444] md:text-[0.95rem]">
          {snippet}
        </p>

        <Link
          href={`/expertise/${area.slug}`}
          className="relative mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
          style={{ color: pastel.accent }}
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

export function filterExpertiseAreas(
  areas: ExpertiseArea[],
  searchQuery: string,
  activeCategory: string,
  locale: string,
): ExpertiseArea[] {
  const query = searchQuery.trim().toLowerCase();

  return areas.filter((area) => {
    const localized = getLocalizedExpertise(area.slug, locale as "en" | "hi" | "mr") ?? area;
    const matchesSearch =
      !query ||
      localized.title.toLowerCase().includes(query) ||
      localized.pillLabel.toLowerCase().includes(query) ||
      localized.tagline.toLowerCase().includes(query);

    const categories = getExpertiseCategories(area.slug);
    const matchesCategory = activeCategory === "all" || categories.includes(activeCategory as never);

    return matchesSearch && matchesCategory;
  });
}

export const expertiseProgrammeAreas = expertiseCategories;
