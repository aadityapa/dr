"use client";

import Image from "next/image";

import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import { getAboutContent } from "@/lib/i18n/content/about-locale";
import { getSiteImage } from "@/lib/site-images";
import { siteConfig } from "@/lib/site-data";

const EXPERTISE_CHIPS = [
  "Aquatic Therapy",
  "Brain Gym\u00ae",
  "Handwriting Development",
  "Oral Motor Intervention",
  "Reflex Integration",
  "Sensory Integration",
] as const;

export function AboutMeSection() {
  const { content, locale } = useLanguage();
  const copy = content.home.aboutPreview;
  const expertiseChips = getAboutContent(locale).specializations;

  return (
    <section id="about-me" className="w-full bg-[color:var(--color-almond)]/40 px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
        <Reveal>
          <div className="relative mx-auto max-w-xs md:mx-0 md:max-w-sm">
            <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-[color:var(--color-border)]/40">
              <Image
                src={getSiteImage("doctorPortrait")}
                alt={`${siteConfig.doctorName} — Pediatric Occupational Therapist in Kandivali, Mumbai`}
                width={400}
                height={500}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-terracotta)]">
              {copy.kicker}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)] md:text-3xl">
              {copy.title}
            </h2>
            {copy.credentials.length > 0 && (
              <ul className="mt-4 space-y-1 text-base leading-relaxed text-[color:var(--color-muted)]">
                {copy.credentials.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            )}
            {copy.bio && (
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[color:var(--color-muted)]">{copy.bio}</p>
            )}
          </Reveal>

          <Reveal delay={0.05} className="mt-5 flex flex-wrap gap-2">
            {expertiseChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[color:var(--color-border)] bg-white/70 px-3.5 py-1.5 text-xs font-medium text-[color:var(--color-sage-text)]"
              >
                {chip}
              </span>
            ))}
          </Reveal>

          <Reveal delay={0.05} className="mt-5 flex flex-wrap gap-2">
            {EXPERTISE_CHIPS.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[color:var(--color-border)] bg-white/70 px-3.5 py-1.5 text-xs font-medium text-[color:var(--color-sage-text)]"
              >
                {chip}
              </span>
            ))}
          </Reveal>

          <Reveal delay={0.08} className="mt-5 flex flex-wrap gap-3">
            <Button asChild size="sm">
              <Link href="/appointment">{copy.cta}</Link>
            </Button>
            <Button asChild size="sm" variant="outline">
              <Link href="/about">{copy.learnMore}</Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
