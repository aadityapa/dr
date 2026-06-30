"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useCallback, useState } from "react";

import type { ExpertiseCategory } from "@/lib/expertise-meta";
import { EXPERTISE_CATEGORY_KEYS } from "@/lib/expertise-meta";

import type { ExpertisePageProps } from "./expertise-types";

type ExpertiseSearchFilterProps = Pick<ExpertisePageProps, "shells"> & {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeCategory: ExpertiseCategory | "all";
  onCategoryChange: (category: ExpertiseCategory | "all") => void;
};

export function ExpertiseSearchFilter({
  shells,
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
}: ExpertiseSearchFilterProps) {
  const reduced = useReducedMotion();
  const [focused, setFocused] = useState(false);

  const clearSearch = useCallback(() => onSearchChange(""), [onSearchChange]);

  const categoryLabel = (key: ExpertiseCategory) => shells.categories[key];

  return (
    <motion.div
      className="mx-auto max-w-5xl"
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`relative flex items-center rounded-2xl border bg-white/70 shadow-sm backdrop-blur-md transition-all ${
          focused ? "border-[#4A9B73]/50 shadow-md shadow-[#4A9B73]/10" : "border-white/80"
        }`}
      >
        <Search className="ml-4 h-5 w-5 shrink-0 text-[#4A9B73]" aria-hidden />
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={shells.searchPlaceholder}
          aria-label={shells.searchPlaceholder}
          className="w-full bg-transparent px-3 py-4 text-base text-[#333] outline-none placeholder:text-[#888]"
        />
        {searchQuery ? (
          <button
            type="button"
            onClick={clearSearch}
            className="mr-3 rounded-full p-1.5 text-[#666] transition-colors hover:bg-[#F0F0F0] hover:text-[#333]"
            aria-label={shells.clearSearch}
          >
            <X className="h-4 w-4" />
          </button>
        ) : null}
      </div>

      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label={shells.filterLabel}>
        <CategoryChip
          label={shells.filterAll}
          active={activeCategory === "all"}
          onClick={() => onCategoryChange("all")}
        />
        {EXPERTISE_CATEGORY_KEYS.map((key) => (
          <CategoryChip
            key={key}
            label={categoryLabel(key)}
            active={activeCategory === key}
            onClick={() => onCategoryChange(key)}
          />
        ))}
      </div>
    </motion.div>
  );
}

function CategoryChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
        active
          ? "border-[#4A9B73]/40 bg-[#D8F0E4]/80 text-[#2D6047] shadow-sm"
          : "border-white/70 bg-white/50 text-[#555] hover:border-[#4A9B73]/20 hover:bg-white/80"
      }`}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}
