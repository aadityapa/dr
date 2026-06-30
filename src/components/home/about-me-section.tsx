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
            {copy.credentials.length > 0 ? (
              <ul className="mt-4 space-y-1 text-base leading-relaxed text-[color:var(--color-muted)]">
                {copy.credentials.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-base leading-relaxed text-[color:var(--color-muted)]">{copy.bio}</p>
            )}
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
