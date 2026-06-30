"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HandHeart, ShieldCheck, Users } from "lucide-react";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

import type { AboutPageProps } from "./about-types";

const CARD_ICONS = [HandHeart, ShieldCheck, Users] as const;

export function TrustCards({ about, shells }: AboutPageProps) {
  const reduced = useReducedMotion();
  const cards = [
    about.aboutMe.paragraphs[0],
    about.aboutMe.paragraphs[1],
    about.aboutMe.paragraphs[2],
  ];

  return (
    <Section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-32 top-0 h-64 w-64 rounded-full bg-[color:var(--color-soft-green)]/30 blur-3xl"
        aria-hidden
      />
      <SectionHeading
        kicker={shells.sections.trustKicker}
        title={shells.sections.trustTitle}
        center
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cards.map((text, i) => {
          const Icon = CARD_ICONS[i] ?? HandHeart;
          return (
            <motion.article
              key={text.slice(0, 40)}
              className="rounded-[1.75rem] border border-white/50 bg-white/40 p-6 shadow-lg backdrop-blur-md md:p-8"
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={reduced ? undefined : { y: -4, transition: { duration: 0.2 } }}
            >
              <div className="mb-4 inline-flex rounded-2xl bg-[color:var(--color-soft-green)]/50 p-3">
                <Icon className="h-6 w-6 text-[color:var(--color-sage)]" aria-hidden />
              </div>
              <p className="text-sm leading-relaxed text-[color:var(--color-muted)] md:text-base">{text}</p>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
