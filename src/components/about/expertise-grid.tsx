"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { getCardPastel } from "@/lib/pastel-palette";

import type { AboutPageProps } from "./about-types";

export function ExpertiseGrid({ about }: AboutPageProps) {
  const reduced = useReducedMotion();

  return (
    <Section className="bg-[color:var(--color-snow)]">
      <SectionHeading title={about.expertise.title} center />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {about.expertise.items.map((item, i) => {
          const pastel = getCardPastel(i);
          return (
            <motion.div
              key={item}
              className="rounded-2xl border p-5 text-sm font-medium text-[color:var(--color-sage-dark)] shadow-sm transition-shadow hover:shadow-md"
              style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              whileHover={reduced ? undefined : { y: -3 }}
            >
              <span className="mr-2 text-[color:var(--color-sage)]" aria-hidden>
                –
              </span>
              {item}
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
