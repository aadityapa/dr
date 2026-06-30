"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Brain, Heart, Puzzle, Sparkles, Target } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/providers/language-provider";

import type { ConditionsPageProps } from "./conditions-types";

const FLOAT_ICONS = [
  { Icon: Brain, color: "text-[#4A9B73]", delay: 0, x: "12%", y: "18%" },
  { Icon: Puzzle, color: "text-[#7B5BB5]", delay: 0.4, x: "68%", y: "12%" },
  { Icon: Sparkles, color: "text-[#D4845C]", delay: 0.8, x: "78%", y: "58%" },
  { Icon: Heart, color: "text-[#C45A82]", delay: 1.2, x: "22%", y: "68%" },
  { Icon: Target, color: "text-[#3D7AB5]", delay: 1.6, x: "52%", y: "42%" },
] as const;

const TRUST_ICONS = [Sparkles, Target, Heart] as const;

export function PremiumConditionsHero({ shells }: Pick<ConditionsPageProps, "shells">) {
  const { content } = useLanguage();
  const copy = content.pages.conditionsList;
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFFDF9] via-[#FAF8F4] to-[#F9FCFB] px-4 py-16 md:px-8 md:py-24">
      <motion.div
        className="pointer-events-none absolute -left-32 top-16 h-96 w-96 rounded-full bg-[#D8F0E4]/60 blur-3xl"
        animate={reduced ? undefined : { scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -right-24 bottom-8 h-80 w-80 rounded-full bg-[#D6E8F5]/50 blur-3xl"
        animate={reduced ? undefined : { scale: [1, 1.1, 1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        aria-hidden
      />

      {!reduced &&
        Array.from({ length: 12 }).map((_, i) => (
          <motion.span
            key={i}
            className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-[#4A9B73]/30"
            style={{ left: `${8 + (i * 7) % 84}%`, top: `${12 + (i * 11) % 76}%` }}
            animate={{ y: [0, -12, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.3 }}
            aria-hidden
          />
        ))}

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={reduced ? false : { opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Badge className="mb-6 border border-white/60 bg-white/70 text-[#2D6047] backdrop-blur-sm">
            {shells.heroBadge}
          </Badge>

          <h1 className="font-[family-name:var(--font-serif)] text-4xl leading-[1.08] tracking-tight text-[#004d4d] md:text-5xl lg:text-[3.25rem]">
            {copy.kicker}
          </h1>

          <p className="mt-4 font-[family-name:var(--font-serif)] text-lg italic text-[#444] md:text-xl">
            {copy.title}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#444] md:text-lg">
            {copy.description}
          </p>

          <ul className="mt-8 flex flex-wrap gap-3">
            {shells.trustBadges.map((label, i) => {
              const Icon = TRUST_ICONS[i] ?? Sparkles;
              return (
                <motion.li
                  key={label}
                  initial={reduced ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-2 rounded-full border border-white/70 bg-white/55 px-4 py-2 text-sm font-medium text-[#2D6047] shadow-sm backdrop-blur-md"
                >
                  <Icon className="h-4 w-4 text-[#4A9B73]" aria-hidden />
                  {label}
                </motion.li>
              );
            })}
          </ul>
        </motion.div>

        <motion.div
          className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
          initial={reduced ? false : { opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          aria-hidden
        >
          <div className="relative h-full min-h-[18rem] w-full rounded-[2.5rem] border border-white/60 bg-white/30 shadow-xl shadow-[#4A9B73]/10 backdrop-blur-md">
            <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-[#D8F0E4]/40 via-[#D6E8F5]/30 to-[#E4DDF5]/40" />

            {FLOAT_ICONS.map(({ Icon, color, delay, x, y }, i) => (
              <motion.div
                key={i}
                className={`absolute flex h-14 w-14 items-center justify-center rounded-2xl border border-white/70 bg-white/75 shadow-lg backdrop-blur-sm ${color}`}
                style={{ left: x, top: y }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  reduced
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 1, scale: 1, y: [0, -10, 0] }
                }
                transition={{
                  opacity: { delay: 0.2 + delay },
                  scale: { delay: 0.2 + delay },
                  y: { duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay },
                }}
              >
                <Icon className="h-7 w-7" />
              </motion.div>
            ))}

            <motion.div
              className="absolute inset-x-8 bottom-8 rounded-2xl border border-white/60 bg-white/80 p-4 text-center shadow-md backdrop-blur-sm"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-sm font-semibold text-[#004d4d]">{shells.illustrationCaption}</p>
              <p className="mt-1 text-xs text-[#666]">{shells.illustrationSubcaption}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0" aria-hidden>
        <svg viewBox="0 0 1440 80" className="w-full text-[#FAF8F4]" preserveAspectRatio="none">
          <path
            fill="currentColor"
            d="M0,48 C360,80 720,0 1080,32 C1260,48 1380,64 1440,56 L1440,80 L0,80 Z"
          />
        </svg>
      </div>
    </section>
  );
}
