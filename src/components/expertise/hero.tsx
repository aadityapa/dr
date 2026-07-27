"use client";

import Image from "next/image";

import { motion, useReducedMotion } from "framer-motion";
import {
  Brain,
  Heart,
  PenLine,
  Puzzle,
  Rainbow,
  Sparkles,
  Star,
  Target,
  Waves,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { lookingBeyondExpertise } from "@/lib/client-content/expertise";
import { easeOutExpo, fadeUp, floatY } from "./animations";
import type { ExpertisePageProps } from "./expertise-types";

const FLOAT_ICONS = [
  { Icon: Brain, color: "text-[#2D6047]", delay: 0, x: "10%", y: "14%" },
  { Icon: Heart, color: "text-[#C45A82]", delay: 0.35, x: "72%", y: "10%" },
  { Icon: Puzzle, color: "text-[#7B5BB5]", delay: 0.7, x: "82%", y: "52%" },
  { Icon: Target, color: "text-[#3D7AB5]", delay: 1.05, x: "18%", y: "62%" },
  { Icon: PenLine, color: "text-[#D4845C]", delay: 1.4, x: "48%", y: "38%" },
  { Icon: Waves, color: "text-[#2A9DA8]", delay: 1.75, x: "58%", y: "72%" },
  { Icon: Rainbow, color: "text-[#C9A020]", delay: 2.1, x: "34%", y: "28%" },
  { Icon: Star, color: "text-[#4A9B73]", delay: 2.45, x: "64%", y: "32%" },
] as const;

const PILL_ICONS = [Sparkles, Target, Heart] as const;

export function ExpertiseHero({ shells }: Pick<ExpertisePageProps, "shells">) {
  const intro = lookingBeyondExpertise;
  const reduced = useReducedMotion();

  const floatingCards = [
    { title: shells.trustCards[0]!.title, sub: shells.trustCards[0]!.description },
    { title: shells.trustCards[1]!.title, sub: shells.trustCards[1]!.description },
    { title: shells.trustCards[2]!.title, sub: shells.trustCards[2]!.description },
    { title: shells.illustrationCaption, sub: shells.illustrationSubcaption },
  ] as const;

  return (
    <section className="relative overflow-hidden bg-[#FFFDFB] px-4 py-12 md:px-8 md:py-16">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_20%,#EAF4FF_0%,transparent_55%),radial-gradient(ellipse_70%_50%_at_85%_15%,#EAFBF2_0%,transparent_50%),radial-gradient(ellipse_60%_45%_at_70%_85%,#F4EDFF_0%,transparent_50%)]"
        aria-hidden
      />

      <motion.div
        className="pointer-events-none absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-[#EAFBF2]/70 blur-3xl"
        animate={reduced ? undefined : { scale: [1, 1.12, 1], opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#EAF4FF]/60 blur-3xl"
        animate={reduced ? undefined : { scale: [1, 1.08, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[#FFF9DE]/50 blur-3xl"
        animate={reduced ? undefined : { x: [-20, 20, -20], y: [0, -16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      {!reduced &&
        Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="pointer-events-none absolute h-1 w-1 rounded-full bg-[#4A9B73]/35 md:h-1.5 md:w-1.5"
            style={{ left: `${6 + (i * 5.2) % 88}%`, top: `${10 + (i * 7.3) % 78}%` }}
            animate={{ y: [0, -14, 0], opacity: [0.15, 0.55, 0.15] }}
            transition={{ duration: 3.5 + (i % 4), repeat: Infinity, delay: i * 0.25 }}
            aria-hidden
          />
        ))}

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <motion.div
          variants={fadeUp}
          initial={reduced ? false : "hidden"}
          animate="visible"
          transition={{ duration: 0.75, ease: easeOutExpo }}
        >
          <Badge className="mb-6 border border-white/70 bg-white/60 px-4 py-1.5 text-sm font-medium text-[#2D6047] shadow-sm backdrop-blur-xl">
            {shells.heroBadge}
          </Badge>

          <h1 className="max-w-[18ch] font-[family-name:var(--font-serif)] text-4xl leading-[1.06] tracking-tight text-[#1a4a3a] md:text-5xl lg:text-[3.5rem]">
            {intro.title}
          </h1>

          <p className="mt-5 max-w-[70ch] font-[family-name:var(--font-serif)] text-lg italic leading-relaxed text-[#3d4a44] md:text-xl">
            {intro.tagline}
          </p>

          <p className="mt-6 max-w-[70ch] whitespace-pre-line text-base leading-[1.75] text-[#444] md:text-lg">
            {intro.understanding}
          </p>

          <ul className="mt-9 flex flex-wrap gap-2.5">
            {shells.trustBadges.map((label, i) => {
              const Icon = PILL_ICONS[i] ?? Sparkles;
              return (
                <motion.li
                  key={label}
                  initial={reduced ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.09, ease: easeOutExpo }}
                  className="flex items-center gap-2 rounded-full border border-white/80 bg-white/50 px-4 py-2.5 text-sm font-medium text-[#2D6047] shadow-[0_4px_24px_rgba(74,155,115,0.08)] backdrop-blur-xl"
                >
                  <Icon className="h-4 w-4 shrink-0 text-[#4A9B73]" aria-hidden />
                  {label}
                </motion.li>
              );
            })}
          </ul>
        </motion.div>

        <motion.div
          className="relative mx-auto aspect-square w-full max-w-lg lg:max-w-none"
          initial={reduced ? false : { opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.12 }}
          aria-hidden
        >
          <div className="relative h-full min-h-[20rem] w-full overflow-hidden rounded-[2.75rem] border border-white/70 bg-white/25 shadow-[0_24px_80px_rgba(45,96,71,0.12)] backdrop-blur-2xl">
            <div className="glossy-frame absolute inset-0 overflow-hidden rounded-[2.75rem]">
              <Image
                src="/images/gallery/supported-standing-ball.jpg"
                alt="Dr. Sharuja supporting a baby practicing standing at a textured therapy ball"
                fill
                sizes="(max-width: 1024px) 480px, 560px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/10 to-white/15" />
            </div>

            {FLOAT_ICONS.map(({ Icon, color, delay, x, y }, i) => (
              <motion.div
                key={i}
                className={`absolute flex h-12 w-12 items-center justify-center rounded-2xl border border-white/80 bg-white/70 shadow-lg backdrop-blur-md md:h-14 md:w-14 ${color}`}
                style={{ left: x, top: y }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={
                  reduced
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 1, scale: 1, y: [0, -12, 0] }
                }
                transition={{
                  opacity: { delay: 0.25 + delay },
                  scale: { delay: 0.25 + delay },
                  y: { ...floatY(4.5 + i * 0.4), delay },
                }}
              >
                <Icon className="h-6 w-6 md:h-7 md:w-7" />
              </motion.div>
            ))}

            <div className="absolute inset-x-5 bottom-5 grid grid-cols-2 gap-2.5 md:inset-x-7 md:bottom-7 md:gap-3">
              {floatingCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  className="rounded-2xl border border-white/75 bg-white/75 p-3 shadow-md backdrop-blur-md md:p-3.5"
                  initial={reduced ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, ease: easeOutExpo }}
                  whileHover={reduced ? undefined : { y: -3, transition: { duration: 0.2 } }}
                >
                  <p className="text-xs font-semibold text-[#1a4a3a] md:text-sm">{card.title}</p>
                  <p className="mt-0.5 line-clamp-2 text-[10px] leading-snug text-[#666] md:text-xs">
                    {card.sub}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0" aria-hidden>
        <svg viewBox="0 0 1440 96" className="w-full text-[#FCFAF8]" preserveAspectRatio="none">
          <path
            fill="currentColor"
            d="M0,56 C240,96 480,24 720,48 C960,72 1200,88 1440,64 L1440,96 L0,96 Z"
          />
        </svg>
      </div>
    </section>
  );
}
