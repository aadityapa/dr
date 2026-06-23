"use client";

import Image from "next/image";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { useLanguage } from "@/components/providers/language-provider";
import { getSiteImage } from "@/lib/site-images";

export function ParentFriendlyIntro() {
  const { content } = useLanguage();
  const copy = content.expertiseLanding.parentIntro;

  return (
    <Section id="for-parents" compact>
      <Reveal>
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-[color:var(--color-border)]/50">
            <Image
              src={getSiteImage("handwritingPractice")}
              alt="Dr. Sharuja guiding handwriting and fine motor practice during a pediatric OT session"
              width={640}
              height={720}
              sizes="(max-width: 1024px) 100vw, 520px"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="text-center lg:text-left">
            <SectionHeading title={copy.title} description={copy.description} center={false} />
            <div className="mt-8 space-y-4 text-left">
              {copy.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-[color:var(--color-muted)]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
