"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";

import { Section } from "@/components/shared/section";
import { useLanguage } from "@/components/providers/language-provider";
import { clientConditions } from "@/lib/client-content/conditions";
import type { ConditionCategory } from "@/lib/conditions-meta";

import { ConditionsBottomCta } from "./conditions-bottom-cta";
import { ConditionsSearchFilter } from "./conditions-search-filter";
import { ConditionsTrustSection } from "./conditions-trust-section";
import type { ConditionsPageProps } from "./conditions-types";
import { PremiumConditionsHero } from "./premium-conditions-hero";
import { filterConditions, PremiumConditionCard } from "./premium-condition-card";
import { TherapyProcessTimeline } from "./therapy-process-timeline";

export function ConditionsPageContent({ shells, labels }: ConditionsPageProps) {
  const { locale } = useLanguage();
  const reduced = useReducedMotion();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ConditionCategory | "all">("all");

  const filtered = useMemo(
    () => filterConditions(clientConditions, searchQuery, activeCategory, locale),
    [searchQuery, activeCategory, locale],
  );

  return (
    <>
      <PremiumConditionsHero shells={shells} />

      <Section className="bg-[#FAF8F4]/40 pt-8">
        <ConditionsSearchFilter
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
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              role="list"
            >
              {filtered.map((condition, index) => (
                <PremiumConditionCard
                  key={condition.slug}
                  condition={condition}
                  index={index}
                  shells={shells}
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

      <ConditionsTrustSection shells={shells} />
      <TherapyProcessTimeline shells={shells} />
      <ConditionsBottomCta shells={shells} labels={labels} />
    </>
  );
}
