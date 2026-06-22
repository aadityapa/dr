"use client";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { useLanguage } from "@/components/providers/language-provider";

export function ParentFriendlyIntro() {
  const { content } = useLanguage();
  const copy = content.expertiseLanding.parentIntro;

  return (
    <Section id="for-parents" compact>
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading title={copy.title} description={copy.description} center />
          <div className="mt-8 space-y-4 text-left sm:text-center">
            {copy.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-[color:var(--color-muted)]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
