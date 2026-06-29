"use client";

import Image from "next/image";

import { Reveal } from "@/components/shared/reveal";
import { Link } from "@/i18n/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import { getSiteImage } from "@/lib/site-images";
import { siteConfig } from "@/lib/site-data";

export function AboutMeSection() {
  const { content } = useLanguage();
  const copy = content.home.aboutPreview;

  return (
    <section id="about-me" className="w-full bg-[color:var(--color-almond)]/40 px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-[140px_1fr] md:gap-10 lg:grid-cols-[160px_1fr]">
        <Reveal>
          <div className="mx-auto w-32 overflow-hidden rounded-2xl shadow-md ring-1 ring-[color:var(--color-border)]/40 md:mx-0 md:w-full">
            <Image
              src={getSiteImage("doctorPortrait")}
              alt={`${siteConfig.doctorName} — Pediatric Occupational Therapist in Kandivali, Mumbai`}
              width={160}
              height={200}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl leading-tight text-[color:var(--color-sage-dark)] md:text-4xl">
              {copy.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--color-muted)]">{copy.bio}</p>
          </Reveal>

          <Reveal delay={0.08} className="mt-5">
            <Link
              href="/about"
              className="inline-block text-sm font-medium text-[color:var(--color-sage-dark)] underline-offset-4 hover:underline"
            >
              {copy.cta} →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
