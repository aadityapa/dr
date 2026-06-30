"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Award, HeartHandshake, Sparkles } from "lucide-react";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

import { cardHover, fadeUp, scrollReveal, staggerContainer } from "./animations";
import type { ExpertisePageProps } from "./expertise-types";

const CARD_ICONS = [Award, Sparkles, HeartHandshake] as const;
const CARD_GLOWS = ["#EAF4FF", "#EAFBF2", "#F4EDFF"] as const;

export function WhyChooseSection({ shells }: Pick<ExpertisePageProps, "shells">) {
  const reduced = useReducedMotion();

  return (
    <Section className="relative overflow-hidden bg-[#FCFAF8]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#EAFBF2_0%,transparent_60%)]"
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#FFF9DE]/40 blur-3xl"
        animate={reduced ? undefined : { scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <SectionHeading kicker={shells.trustKicker} title={shells.trustTitle} center />

      <motion.div
        className="mt-14 grid gap-6 md:grid-cols-3 md:gap-7"
        variants={staggerContainer(0.12, 0.1)}
        {...scrollReveal}
      >
        {shells.trustCards.map((card, i) => {
          const Icon = CARD_ICONS[i] ?? Award;
          const glow = CARD_GLOWS[i] ?? CARD_GLOWS[0];
          return (
            <motion.article
              key={card.title}
              variants={fadeUp}
              whileHover={reduced ? undefined : cardHover}
              className="group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/45 p-7 shadow-[0_16px_48px_rgba(45,96,71,0.08)] backdrop-blur-xl md:p-9"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-60 blur-2xl transition-opacity group-hover:opacity-90"
                style={{ backgroundColor: glow }}
                aria-hidden
              />
              <div className="relative mb-6 inline-flex rounded-[1.25rem] border border-white/80 bg-white/70 p-4 shadow-sm">
                <Icon className="h-8 w-8 text-[#4A9B73]" aria-hidden />
              </div>
              <h3 className="relative font-[family-name:var(--font-serif)] text-xl text-[#1a4a3a] md:text-2xl">
                {card.title}
              </h3>
              <p className="relative mt-4 text-sm leading-[1.75] text-[#555] md:text-base">
                {card.description}
              </p>
            </motion.article>
          );
        })}
      </motion.div>
    </Section>
  );
}
