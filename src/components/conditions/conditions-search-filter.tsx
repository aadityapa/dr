"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useCallback, useState } from "react";

import type { ConditionCategory } from "@/lib/conditions-meta";
import { CONDITION_CATEGORY_KEYS } from "@/lib/conditions-meta";

import type { ConditionsPageProps } from "./conditions-types";

type ConditionsSearchFilterProps = Pick<ConditionsPageProps, "shells"> & {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeCategory: ConditionCategory | "all";
  onCategoryChange: (category: ConditionCategory | "all") => void;
};

export function ConditionsSearchFilter({
  shells,
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
}: ConditionsSearchFilterProps) {
  const reduced = useReducedMotion();
  const [focused, setFocused] = useState(false);

  const clearSearch = useCallback(() => onSearchChange(""), [onSearchChange]);

  const categoryLabel = (key: ConditionCategory) => shells.categories[key];

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
          focused ? "border-[color:var(--brand-green)]/50 shadow-md shadow-[color:var(--brand-green)]/10" : "border-white/80"
        }`}
      >
        <Search className="ml-4 h-5 w-5 shrink-0 text-[color:var(--brand-green)]" aria-hidden />
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={shells.searchPlaceholder}
          aria-label={shells.searchPlaceholder}
          className="w-full bg-transparent px-3 py-4 text-base text-[color:var(--ink-body)] outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-sage)] focus-visible:ring-offset-1 placeholder:text-[color:var(--ink-dim)]"
        />
        {searchQuery ? (
          <button
            type="button"
            onClick={clearSearch}
            className="mr-3 rounded-full p-1.5 text-[color:var(--ink-soft)] transition-colors hover:bg-[color:var(--tint-gray)] hover:text-[color:var(--ink-body)]"
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
        {CONDITION_CATEGORY_KEYS.map((key) => (
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
          ? "border-[color:var(--brand-green)]/40 bg-[color:var(--tint-green)]/80 text-[color:var(--ink-forest)] shadow-sm"
          : "border-white/70 bg-white/50 text-[color:var(--ink-soft)] hover:border-[color:var(--brand-green)]/20 hover:bg-white/80"
      }`}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}
