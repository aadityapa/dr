"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Clock, HeartHandshake, TrendingUp } from "lucide-react";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

import type { ConditionsPageProps } from "./conditions-types";

const CARD_ICONS = [Clock, TrendingUp, HeartHandshake] as const;

export function ConditionsTrustSection({ shells }: Pick<ConditionsPageProps, "shells">) {
  const reduced = useReducedMotion();

  return (
    <Section className="relative overflow-hidden bg-[color:var(--surface-linen)]/60">
      <div
        className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-[color:var(--tint-green)]/40 blur-3xl"
        aria-hidden
      />
      <SectionHeading
        kicker={shells.trustKicker}
        title={shells.trustTitle}
        center
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {shells.trustCards.map((card, i) => {
          const Icon = CARD_ICONS[i] ?? Clock;
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
              <div className="mb-4 inline-flex rounded-2xl bg-[color:var(--tint-green)]/60 p-3">
                <Icon className="h-6 w-6 text-[color:var(--brand-green)]" aria-hidden />
              </div>
              <h3 className="font-[family-name:var(--font-serif)] text-xl text-[color:var(--ink-teal)]">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink-soft)] md:text-base">{card.description}</p>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
