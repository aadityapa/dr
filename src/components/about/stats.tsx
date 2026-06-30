"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Building2, Layers, Clock, Target } from "lucide-react";

import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/lib/site-data";

import type { AboutPageProps } from "./about-types";

export function StatsSection({ about, shells }: AboutPageProps) {
  const reduced = useReducedMotion();
  const labels = shells.sections.statLabels;

  const stats = [
    { value: siteConfig.experienceYears, suffix: "+", label: labels.years, icon: Clock },
    { value: about.expertise.items.length, suffix: "", label: labels.expertise, icon: Target },
    { value: about.availableFor.items.length, suffix: "", label: labels.programs, icon: Layers },
    { value: about.suitableFor.items.length, suffix: "", label: labels.partners, icon: Building2 },
  ] as const;

  return (
    <Section compact className="rounded-[2rem] bg-gradient-to-br from-[color:var(--color-sage-dark)] to-[color:var(--color-sage)] text-white">
      <SectionHeading
        kicker={shells.sections.statsKicker}
        title={shells.sections.statsTitle}
        center
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              className="rounded-2xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur-sm"
              initial={reduced ? false : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <Icon className="mx-auto mb-3 h-6 w-6 text-white/70" aria-hidden />
              <p className="font-[family-name:var(--font-serif)] text-4xl font-semibold">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-white/75">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
