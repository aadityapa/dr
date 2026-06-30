"use client";

import Image from "next/image";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import { getSiteImage } from "@/lib/site-images";
import { siteConfig } from "@/lib/site-data";

export function AboutPreviewSection() {
  const { content } = useLanguage();
  const copy = content.home.aboutPreview;

  return (
    <Section id="meet-doctor" compact className="bg-[color:var(--color-almond)]">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <div className="relative mx-auto max-w-md lg:mx-0">
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src={getSiteImage("doctorPortrait")}
                alt={`${siteConfig.doctorName} — Pediatric Occupational Therapist in Kandivali, Mumbai`}
                width={480}
                height={560}
                className="aspect-[5/6] w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-terracotta)]">
              {copy.kicker}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-serif)] text-3xl text-[color:var(--color-sage-dark)] md:text-4xl">
              {copy.title}
            </h2>
            {copy.credentials.length > 0 ? (
              <ul className="mt-4 max-w-prose space-y-1 leading-relaxed text-[color:var(--color-muted)]">
                {copy.credentials.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 max-w-prose leading-relaxed text-[color:var(--color-muted)]">{copy.bio}</p>
            )}
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <Button asChild>
              <Link href="/about">{copy.cta}</Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
