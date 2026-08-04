"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  CalendarCheck,
  ClipboardList,
  Home,
  LineChart,
  Stethoscope,
} from "lucide-react";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

import type { ConditionsPageProps } from "./conditions-types";

const STEP_ICONS = [Stethoscope, ClipboardList, CalendarCheck, Home, LineChart] as const;

export function TherapyProcessTimeline({ shells }: Pick<ConditionsPageProps, "shells">) {
  const reduced = useReducedMotion();

  return (
    <Section className="rounded-[2rem] bg-gradient-to-br from-[color:var(--surface-mist)] to-[color:var(--surface-ivory)]">
      <SectionHeading
        kicker={shells.processKicker}
        title={shells.processTitle}
        center
      />

      <ol className="relative mx-auto mt-14 max-w-4xl">
        <div
          className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-[color:var(--fill-green)]/40 via-[color:var(--fill-green)]/20 to-transparent md:left-1/2 md:block md:-translate-x-px"
          aria-hidden
        />

        {shells.processSteps.map((step, i) => {
          const Icon = STEP_ICONS[i] ?? Stethoscope;
          const alignRight = i % 2 === 1;

          return (
            <motion.li
              key={step}
              className={`relative mb-10 flex flex-col gap-4 last:mb-0 md:flex-row ${alignRight ? "md:flex-row-reverse" : ""}`}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div className={`flex-1 ${alignRight ? "md:text-right" : ""}`}>
                <div
                  className={`inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-semibold text-[color:var(--ink-forest)] shadow-sm backdrop-blur-sm ${alignRight ? "md:float-right" : ""}`}
                >
                  <Icon className="h-4 w-4 text-[color:var(--brand-green)]" aria-hidden />
                  {step}
                </div>
                <p className="mt-3 clear-both text-sm text-[color:var(--ink-soft)] md:text-base">
                  {shells.processStepDescriptions[i]}
                </p>
              </div>

              <div className="hidden w-12 shrink-0 items-center justify-center md:flex">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[color:var(--brand-green)]/30 bg-white text-sm font-bold text-[color:var(--ink-teal)] shadow-md">
                  {i + 1}
                </span>
              </div>

              <div className="hidden flex-1 md:block" aria-hidden />
            </motion.li>
          );
        })}
      </ol>
    </Section>
  );
}
