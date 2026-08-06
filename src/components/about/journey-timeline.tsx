"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Microscope, Sparkles, Stethoscope } from "lucide-react";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

import type { AboutPageProps } from "./about-types";

const ICONS = [Stethoscope, GraduationCap, Sparkles, Microscope] as const;

export function JourneyTimeline({ about, shells }: AboutPageProps) {
  const reduced = useReducedMotion();
  const steps = about.journey;

  return (
    <Section id="my-journey" className="rounded-[2rem] bg-[color:var(--color-almond)]/50">
      <SectionHeading
        kicker={shells.sections.journeyKicker}
        title={shells.sections.journeyTitle}
        center
      />

      <div className="relative mx-auto mt-14 max-w-3xl">
        <div
          className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-[color:var(--color-sage)]/40 via-[color:var(--color-sage)]/20 to-transparent md:left-1/2 md:block md:-translate-x-px"
          aria-hidden
        />

        <ol className="space-y-10">
          {steps.map((step, i) => {
            const Icon = ICONS[i] ?? Stethoscope;
            const title = shells.sections.journeySteps[i] ?? `Step ${i + 1}`;
            const alignRight = i % 2 === 1;

            return (
              <motion.li
                key={step.headline.slice(0, 32)}
                className={`relative flex flex-col gap-4 md:flex-row ${alignRight ? "md:flex-row-reverse" : ""}`}
                initial={reduced ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className={`flex-1 ${alignRight ? "md:text-right" : ""}`}>
                  <div
                    className={`inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[color:var(--color-sage-dark)] shadow-sm backdrop-blur-sm ${alignRight ? "md:float-right" : ""}`}
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden />
                    {title}
                  </div>
                  <p className="mt-3 clear-both font-[family-name:var(--font-serif)] text-lg font-medium leading-snug text-[color:var(--color-sage-dark)] md:text-xl">
                    {step.headline}
                  </p>
                  {step.detail ? (
                    <p className="mt-2 clear-both text-sm leading-relaxed text-[color:var(--color-muted)] md:text-base">
                      {step.detail}
                    </p>
                  ) : null}
                </div>

                <div className="hidden w-12 shrink-0 items-center justify-center md:flex">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[color:var(--color-sage)]/30 bg-white text-sm font-bold text-[color:var(--color-sage-dark)] shadow-md">
                    {i + 1}
                  </span>
                </div>

                <div className="hidden flex-1 md:block" aria-hidden />
              </motion.li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
