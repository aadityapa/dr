"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

export function MaybeYoureWonderingSection() {
  const { content } = useLanguage();
  const copy = content.parentWondering;

  return (
    <Section id="wondering" compact className="bg-[color:var(--color-snow)]">
      <SectionHeading kicker={copy.kicker} title={copy.title} description={copy.description} center />

      <div className="mx-auto mt-10 grid max-w-4xl gap-5">
        {copy.items.map((item, i) => (
          <Reveal key={item.question} delay={i * 0.06}>
            <article className="rounded-2xl border border-[color:var(--color-border)]/60 bg-white/80 p-6 shadow-sm">
              <h3 className="font-[family-name:var(--font-serif)] text-lg text-[color:var(--color-sage-dark)]">
                {item.question}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">{item.answer}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
