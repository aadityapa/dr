"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Award, BookOpen, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { getSiteImage } from "@/lib/site-images";
import { siteConfig } from "@/lib/site-data";

import type { AboutPageProps } from "./about-types";

const floatEnter = { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } };

export function PremiumHero({ about, shells }: AboutPageProps) {
  const reduced = useReducedMotion();
  const intro = about.aboutMe.paragraphs[0];

  function scrollToJourney() {
    document.getElementById("my-journey")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[color:var(--color-snow)] via-[color:var(--color-almond)]/40 to-[color:var(--color-soft-green)]/20 px-4 py-16 md:px-8 md:py-24">
      <div
        className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[color:var(--color-sage)]/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-[color:var(--color-terracotta)]/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={reduced ? false : { opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Badge className="mb-6 bg-white/70 backdrop-blur-sm">{shells.sections.heroBadge}</Badge>

          <h1 className="font-[family-name:var(--font-serif)] text-4xl leading-[1.08] tracking-tight text-[color:var(--color-sage-dark)] md:text-5xl lg:text-[3.25rem]">
            {about.aboutMe.greeting}{" "}
            <span className="block mt-2 text-[color:var(--color-terracotta)]">
              {about.aboutMe.credentials[0]}
            </span>
          </h1>

          <ul className="mt-4 space-y-1">
            {about.aboutMe.credentials.slice(1).map((line) => (
              <li key={line} className="text-base text-[color:var(--color-muted)] md:text-lg">
                {line}
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-muted)] md:text-lg">
            {intro}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {about.specializations.map((pill, i) => (
              <motion.span
                key={pill}
                initial={reduced ? false : { opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.06 }}
                className="rounded-full border border-white/60 bg-white/50 px-3 py-1.5 text-xs font-medium text-[color:var(--color-sage-dark)] shadow-sm backdrop-blur-md md:text-sm"
              >
                {pill}
              </motion.span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/appointment">{shells.bookConversation}</Link>
            </Button>
            <Button type="button" variant="outline" size="lg" onClick={scrollToJourney}>
              {shells.sections.watchJourney}
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          initial={reduced ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <div className="relative mx-auto aspect-square w-full max-w-[22rem] md:max-w-[26rem]">
            <motion.div
              className="absolute -left-4 top-8 z-10 rounded-2xl border border-white/50 bg-white/60 p-3 shadow-lg backdrop-blur-md"
              initial={floatEnter.initial}
              animate={reduced ? floatEnter.animate : { ...floatEnter.animate, y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: reduced ? 0 : Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-[color:var(--color-sage)]" />
                <div>
                  <p className="text-lg font-bold text-[color:var(--color-sage-dark)]">18+</p>
                  <p className="text-[10px] text-[color:var(--color-muted)]">{shells.sections.heroYearsLabel}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-2 top-1/4 z-10 rounded-2xl border border-white/50 bg-white/60 p-3 shadow-lg backdrop-blur-md"
              initial={floatEnter.initial}
              animate={reduced ? floatEnter.animate : { ...floatEnter.animate, y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: reduced ? 0 : Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-[color:var(--color-terracotta)]" />
                <div>
                  <p className="text-xs font-semibold text-[color:var(--color-sage-dark)]">PhD</p>
                  <p className="text-[10px] text-[color:var(--color-muted)]">{shells.sections.heroPhdLabel}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-2 left-6 z-10 rounded-2xl border border-white/50 bg-white/60 p-3 shadow-lg backdrop-blur-md"
              initial={floatEnter.initial}
              animate={reduced ? floatEnter.animate : { ...floatEnter.animate, y: [0, -6, 0] }}
              transition={{ duration: 7, repeat: reduced ? 0 : Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[color:var(--color-sky)]" />
                <div>
                  <p className="text-xs font-semibold text-[color:var(--color-sage-dark)]">Brain Gym®</p>
                  <p className="text-[10px] text-[color:var(--color-muted)]">{shells.sections.heroInstructorLabel}</p>
                </div>
              </div>
            </motion.div>

            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[color:var(--color-sage)]/20 to-[color:var(--color-terracotta)]/15 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white/80 shadow-2xl shadow-[color:var(--color-sage)]/20 ring-1 ring-[color:var(--color-border)]/30">
              <Image
                src={getSiteImage("doctorPortrait")}
                alt={`${siteConfig.doctorName} — pediatric occupational therapist in Kandivali, Mumbai`}
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 420px"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
