"use client";

import { motion, useReducedMotion } from "framer-motion";

import type { ExpertiseCategory } from "@/lib/expertise-meta";
import { EXPERTISE_CATEGORY_KEYS } from "@/lib/expertise-meta";

import { fadeUp, scrollReveal } from "./animations";
import type { ExpertisePageProps } from "./expertise-types";

const CATEGORY_PASTELS: Record<ExpertiseCategory, { bg: string; active: string; glow: string }> = {
  movement: { bg: "#EAF4FF", active: "#3D7AB5", glow: "rgba(61,122,181,0.25)" },
  sensory: { bg: "#F4EDFF", active: "#7B5BB5", glow: "rgba(123,91,181,0.25)" },
  motor: { bg: "#FFF2E9", active: "#D4845C", glow: "rgba(212,132,92,0.25)" },
  feeding: { bg: "#FFF9DE", active: "#C9A020", glow: "rgba(201,160,32,0.25)" },
  aquatic: { bg: "#E8F5FF", active: "#2A9DA8", glow: "rgba(42,157,168,0.25)" },
  learning: { bg: "#EDF8EC", active: "#4A9B73", glow: "rgba(74,155,115,0.28)" },
  neurological: { bg: "#FFEFF7", active: "#C45A82", glow: "rgba(196,90,130,0.25)" },
};

type CategoryFiltersProps = Pick<ExpertisePageProps, "shells"> & {
  activeCategory: ExpertiseCategory | "all";
  onCategoryChange: (category: ExpertiseCategory | "all") => void;
};

export function ExpertiseCategoryFilters({
  shells,
  activeCategory,
  onCategoryChange,
}: CategoryFiltersProps) {
  const reduced = useReducedMotion();
  const categoryLabel = (key: ExpertiseCategory) => shells.categories[key];

  return (
    <motion.div
      className="mx-auto mt-6 max-w-5xl"
      variants={fadeUp}
      {...scrollReveal}
      transition={{ duration: 0.5, delay: 0.08 }}
      role="group"
      aria-label={shells.filterLabel}
    >
      <div className="flex flex-wrap justify-center gap-2 md:gap-2.5">
        <FilterPill
          label={shells.filterAll}
          active={activeCategory === "all"}
          onClick={() => onCategoryChange("all")}
          reduced={reduced}
          pastel={{ bg: "#FCFAF8", active: "#2D6047", glow: "rgba(74,155,115,0.2)" }}
        />
        {EXPERTISE_CATEGORY_KEYS.map((key) => (
          <FilterPill
            key={key}
            label={categoryLabel(key)}
            active={activeCategory === key}
            onClick={() => onCategoryChange(key)}
            reduced={reduced}
            pastel={CATEGORY_PASTELS[key]}
          />
        ))}
      </div>
    </motion.div>
  );
}

function FilterPill({
  label,
  active,
  onClick,
  reduced,
  pastel,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  reduced: boolean | null;
  pastel: { bg: string; active: string; glow: string };
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      whileHover={reduced ? undefined : { scale: 1.04 }}
      whileTap={reduced ? undefined : { scale: 0.97 }}
      className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-[box-shadow,background-color,border-color] duration-300 md:px-5 ${
        active
          ? "border-white/90 text-[#1a4a3a] shadow-md"
          : "border-white/70 bg-white/45 text-[#555] hover:border-white/90 hover:bg-white/70"
      }`}
      style={
        active
          ? {
              backgroundColor: pastel.bg,
              boxShadow: `0 4px 20px ${pastel.glow}, inset 0 1px 0 rgba(255,255,255,0.9)`,
              color: pastel.active,
            }
          : undefined
      }
    >
      {label}
    </motion.button>
  );
}
