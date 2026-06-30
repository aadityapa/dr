"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Heart } from "lucide-react";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

import type { AboutPageProps } from "./about-types";

export function MissionSection({ about, shells }: AboutPageProps) {
  const reduced = useReducedMotion();
  const philosophy = about.aboutMe.paragraphs[4];

  return (
    <Section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-soft-green)_0%,_transparent_55%)] opacity-40"
        aria-hidden
      />
      <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
        <SectionHeading
          kicker={shells.sections.missionKicker}
          title={shells.sections.missionTitle}
        />
        <motion.blockquote
          className="rounded-[2rem] border border-white/60 bg-white/50 p-8 shadow-xl backdrop-blur-md md:p-10"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <Heart className="mb-4 h-8 w-8 text-[color:var(--color-terracotta)]" aria-hidden />
          <p className="font-[family-name:var(--font-serif)] text-xl leading-relaxed text-[color:var(--color-sage-dark)] md:text-2xl">
            &ldquo;{philosophy}&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </Section>
  );
}
