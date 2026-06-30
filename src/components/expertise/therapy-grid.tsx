"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { expertiseCategories } from "@/lib/client-content/expertise";
import type { ExpertiseArea } from "@/lib/client-content/expertise";

import { fadeIn, staggerContainer } from "./animations";
import type { ExpertisePageProps } from "./expertise-types";
import { TherapyCard } from "./therapy-card";

const TALL_INDICES = new Set([0, 3, 6, 9]);

type TherapyGridProps = Pick<ExpertisePageProps, "shells"> & {
  areas: ExpertiseArea[];
  searchQuery: string;
  activeCategory: string;
  noResults: string;
};

export function TherapyGrid({ areas, shells, noResults }: TherapyGridProps) {
  const reduced = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      {areas.length > 0 ? (
        <motion.ul
          key={areas.map((a) => a.slug).join("-")}
          className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          style={{ gridAutoRows: "minmax(13rem, auto)" }}
          variants={staggerContainer(0.06)}
          initial={reduced ? false : "hidden"}
          animate="visible"
          exit="hidden"
          role="list"
        >
          {areas.map((area, index) => (
            <TherapyCard
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
          className="mt-14 text-center text-base text-[#666]"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {noResults}
        </motion.p>
      )}
    </AnimatePresence>
  );
}
