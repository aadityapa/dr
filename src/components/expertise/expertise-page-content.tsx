"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";

import { ExpertiseBottomCta } from "./expertise-bottom-cta";
import { ExpertiseProcessTimeline } from "./expertise-process-timeline";
import { Section } from "@/components/shared/section";
import { useLanguage } from "@/components/providers/language-provider";
import { expertiseCategories } from "@/lib/client-content/expertise";
import type { ExpertiseCategory } from "@/lib/expertise-meta";

import { ExpertiseSearchFilter } from "./expertise-search-filter";
import { ExpertiseTrustSection } from "./expertise-trust-section";
import type { ExpertisePageProps } from "./expertise-types";
import { PremiumExpertiseHero } from "./premium-expertise-hero";
import { filterExpertiseAreas, PremiumExpertiseCard } from "./premium-expertise-card";

const TALL_INDICES = new Set([0, 3, 6]);

export function ExpertisePageContent({ shells, labels }: ExpertisePageProps) {
  const { locale } = useLanguage();
  const reduced = useReducedMotion();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ExpertiseCategory | "all">("all");

  const filtered = useMemo(
    () => filterExpertiseAreas(expertiseCategories, searchQuery, activeCategory, locale),
    [searchQuery, activeCategory, locale],
  );

  return (
    <>
      <PremiumExpertiseHero shells={shells} />

      <Section className="bg-[#FAF8F4]/40 pt-8">
        <ExpertiseSearchFilter
          shells={shells}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.ul
              key={`${searchQuery}-${activeCategory}`}
              className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
              style={{ gridAutoRows: "minmax(12rem, auto)" }}
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              role="list"
            >
              {filtered.map((area, index) => (
                <PremiumExpertiseCard
                  key={area.slug}
                  area={area}
                  index={index}
                  shells={shells}
                  tall={TALL_INDICES.has(expertiseCategories.indexOf(area))}
                />
              ))}
            </motion.ul>
          ) : (
            <motion.p
              key="empty"
              className="mt-12 text-center text-[#666]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {shells.noResults}
            </motion.p>
          )}
        </AnimatePresence>
      </Section>

      <ExpertiseTrustSection shells={shells} />
      <ExpertiseProcessTimeline shells={shells} />
      <ExpertiseBottomCta shells={shells} labels={labels} />
    </>
  );
}
