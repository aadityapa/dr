"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Award, HeartHandshake, Sparkles } from "lucide-react";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

import type { ExpertisePageProps } from "./expertise-types";

const CARD_ICONS = [Award, Sparkles, HeartHandshake] as const;

export function ExpertiseTrustSection({ shells }: Pick<ExpertisePageProps, "shells">) {
  const reduced = useReducedMotion();

  return (
    <Section className="relative overflow-hidden bg-[#FAF8F4]/60">
      <div
        className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#D8F0E4]/40 blur-3xl"
        aria-hidden
      />
      <SectionHeading kicker={shells.trustKicker} title={shells.trustTitle} center />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {shells.trustCards.map((card, i) => {
          const Icon = CARD_ICONS[i] ?? Award;
          return (
            <motion.article
              key={card.title}
              className="rounded-[1.75rem] border border-white/60 bg-white/50 p-6 shadow-lg backdrop-blur-md md:p-8"
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={reduced ? undefined : { y: -4, transition: { duration: 0.2 } }}
            >
              <div className="mb-4 inline-flex rounded-2xl bg-[#D8F0E4]/60 p-3">
                <Icon className="h-6 w-6 text-[#4A9B73]" aria-hidden />
              </div>
              <h3 className="font-[family-name:var(--font-serif)] text-xl text-[#004d4d]">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#555] md:text-base">{card.description}</p>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
