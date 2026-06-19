"use client";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { useLanguage } from "@/components/providers/language-provider";

export function ParentsReadingSection() {
  const { content } = useLanguage();
  const copy = content.home.parentsReading;

  return (
    <Section compact className="bg-[color:var(--color-soft-green)]/25">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-terracotta)]">
            {copy.kicker}
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-serif)] text-3xl leading-tight text-[color:var(--color-sage-dark)] md:text-4xl">
            {copy.title}
          </h2>
        </Reveal>
        <div className="mt-8 space-y-5">
          {copy.paragraphs.map((para, i) => (
            <Reveal key={para.slice(0, 40)} delay={0.05 + i * 0.04}>
              <p className="text-base leading-relaxed text-[color:var(--color-muted)]">{para}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
