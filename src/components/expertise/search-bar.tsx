"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useCallback, useState } from "react";

import { fadeUp, scrollReveal } from "./animations";
import type { ExpertisePageProps } from "./expertise-types";

type SearchBarProps = Pick<ExpertisePageProps, "shells"> & {
  searchQuery: string;
  onSearchChange: (query: string) => void;
};

export function ExpertiseSearchBar({ shells, searchQuery, onSearchChange }: SearchBarProps) {
  const reduced = useReducedMotion();
  const [focused, setFocused] = useState(false);
  const clearSearch = useCallback(() => onSearchChange(""), [onSearchChange]);

  return (
    <motion.div
      className="relative mx-auto max-w-3xl"
      variants={fadeUp}
      {...scrollReveal}
      transition={{ duration: 0.55 }}
    >
      <motion.div
        className={`relative flex items-center overflow-hidden rounded-[1.25rem] border bg-white/55 shadow-[0_8px_40px_rgba(45,96,71,0.06)] backdrop-blur-xl transition-[border-color,box-shadow,transform] duration-300 ${
          focused
            ? "scale-[1.01] border-[color:var(--brand-green)]/45 shadow-[0_12px_48px_rgba(74,155,115,0.14)]"
            : "border-white/80"
        }`}
        animate={reduced || !focused ? undefined : { scale: 1.01 }}
      >
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-r from-[color:var(--tint-mint)]/40 via-transparent to-[color:var(--tint-sky)]/40 transition-opacity duration-300 ${
            focused ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden
        />
        <Search className="relative ml-5 h-5 w-5 shrink-0 text-[color:var(--brand-green)]" aria-hidden />
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={shells.searchPlaceholder}
          aria-label={shells.searchPlaceholder}
          className="relative w-full bg-transparent px-4 py-3.5 text-base text-[color:var(--ink-forest-deep)] outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-sage)] focus-visible:ring-offset-1 placeholder:text-[color:var(--ink-dim)] md:py-4"
        />
        {searchQuery ? (
          <button
            type="button"
            onClick={clearSearch}
            className="relative mr-4 rounded-full p-2 text-[color:var(--ink-soft)] transition-colors hover:bg-white/80 hover:text-[color:var(--ink-forest)]"
            aria-label={shells.clearSearch}
          >
            <X className="h-4 w-4" />
          </button>
        ) : null}
      </motion.div>
    </motion.div>
  );
}
