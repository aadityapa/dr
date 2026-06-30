"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";

import { Section } from "@/components/shared/section";
import { useLanguage } from "@/components/providers/language-provider";
import { expertiseCategories } from "@/lib/client-content/expertise";
import type { ExpertiseCategory } from "@/lib/expertise-meta";

import { ExpertiseCategoryFilters } from "./category-filters";
import { ExpertiseHero } from "./hero";
import { ExpertiseSearchBar } from "./search-bar";
import type { ExpertisePageProps } from "./expertise-types";
import { filterExpertiseAreas } from "./therapy-card";

const TherapyGrid = dynamic(() => import("./therapy-grid").then((m) => m.TherapyGrid), {
  ssr: true,
});
const WhyChooseSection = dynamic(() => import("./why-choose").then((m) => m.WhyChooseSection), {
  ssr: true,
});
const ExpertiseCta = dynamic(() => import("./cta").then((m) => m.ExpertiseCta), {
  ssr: true,
});

export function ExpertisePageContent({ shells, labels }: ExpertisePageProps) {
  const { locale } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ExpertiseCategory | "all">("all");

  const filtered = useMemo(
    () => filterExpertiseAreas(expertiseCategories, searchQuery, activeCategory, locale),
    [searchQuery, activeCategory, locale],
  );

  return (
    <>
      <ExpertiseHero shells={shells} />

      <Section className="bg-[#FCFAF8] pt-6 md:pt-10">
        <ExpertiseSearchBar
          shells={shells}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <ExpertiseCategoryFilters
          shells={shells}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <TherapyGrid
          key={`${searchQuery}-${activeCategory}`}
          areas={filtered}
          shells={shells}
          searchQuery={searchQuery}
          activeCategory={activeCategory}
          noResults={shells.noResults}
        />
      </Section>

      <WhyChooseSection shells={shells} />
      <ExpertiseCta shells={shells} labels={labels} />
    </>
  );
}
