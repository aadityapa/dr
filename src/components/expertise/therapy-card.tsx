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

import { cardHover, fadeUp } from "./animations";
import type { ExpertisePageProps } from "./expertise-types";
import { getExpertisePastelByKey } from "./expertise-pastels";
import { TherapyIllustration } from "./therapy-illustrations";

export type TherapyCardProps = Pick<ExpertisePageProps, "shells"> & {
  area: ExpertiseArea;
  index: number;
};

export function TherapyCard({ area, index, shells }: TherapyCardProps) {
  const { locale, messages } = useLanguage();
  const reduced = useReducedMotion();
  const localized = getLocalizedExpertise(area.slug, locale) ?? area;
  const pastel = getExpertisePastelByKey(area.slug);
  const Icon = expertiseIcons[area.slug];
  const therapyFocus = shells.therapyFocus[area.slug];
  const snippet = localized.tagline || getUnderstandingSnippet(localized.understanding);
  const categories = getExpertiseCategories(area.slug);
  const categoryLabel = shells.categories[categories[0]!] ?? shells.categories.learning;

  return (
    <motion.li
      variants={fadeUp}
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.07 }}
    >
      <motion.article
        className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] p-[1px]"
        whileHover={reduced ? undefined : cardHover}
        style={{
          background: `linear-gradient(135deg, ${pastel.border}88, ${pastel.accent}44, ${pastel.border}66)`,
        }}
      >
        <div
          className="relative flex h-full flex-col rounded-[calc(2rem-1px)] p-5 backdrop-blur-xl md:p-6"
          style={{
            backgroundColor: `${pastel.bg}CC`,
            boxShadow: `0 12px 40px ${pastel.border}33, inset 0 1px 0 rgba(255,255,255,0.85)`,
          }}
        >
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full opacity-50 blur-2xl transition-opacity duration-500 group-hover:opacity-80"
            style={{ backgroundColor: pastel.bg }}
            aria-hidden
          />

          <div className="relative mb-4 overflow-hidden rounded-2xl border border-white/70 shadow-sm">
            <TherapyIllustration
              slug={area.slug}
              pastel={pastel}
              className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>

          <div className="relative flex items-start justify-between gap-3">
            {Icon ? (
              <motion.div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/80 bg-white/70 shadow-sm"
                style={{ color: pastel.accent }}
                whileHover={reduced ? undefined : { rotate: 8, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
              >
                <Icon className="h-7 w-7" aria-hidden />
              </motion.div>
            ) : null}
            <span
              className="rounded-full border border-white/70 bg-white/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide backdrop-blur-sm"
              style={{ color: pastel.text }}
            >
              {therapyFocus ? `${shells.therapyFocusLabel}: ${therapyFocus}` : categoryLabel}
            </span>
          </div>

          <h2
            className="relative mt-4 font-[family-name:var(--font-serif)] text-xl font-medium leading-snug md:text-[1.4rem]"
            style={{ color: pastel.text }}
          >
            <Link href={`/expertise/${area.slug}`} className="hover:underline">
              {localized.title}
            </Link>
          </h2>

          <p className="relative mt-3 flex-1 text-sm leading-[1.7] text-[#444] md:text-[0.95rem]">
            {snippet}
          </p>

          <Link
            href={`/expertise/${area.slug}`}
            className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/80 bg-white/60 px-4 py-2.5 text-sm font-semibold backdrop-blur-sm transition-colors hover:bg-white/90 after:absolute after:inset-0 after:content-['']"
            style={{ color: pastel.accent }}
            aria-label={localized.title}
          >
            <motion.span
              className="inline-flex items-center gap-2"
              whileHover={reduced ? undefined : { x: 2 }}
            >
              {messages.common.learnMore}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </motion.span>
          </Link>
        </div>
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
