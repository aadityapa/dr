"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import type { ExpertiseArea } from "@/lib/client-content/expertise";

import { fadeIn, staggerContainer } from "./animations";
import type { ExpertisePageProps } from "./expertise-types";
import { TherapyCard } from "./therapy-card";

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
          className="mx-auto mt-8 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
          variants={staggerContainer(0.06)}
          initial={reduced ? false : "hidden"}
          animate="visible"
          exit="hidden"
          role="list"
        >
          {areas.map((area, index) => (
            <TherapyCard key={area.slug} area={area} index={index} shells={shells} />
          ))}
        </motion.ul>
      ) : (
        <motion.p
          key="empty"
          className="mt-10 text-center text-base text-[#666]"
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
