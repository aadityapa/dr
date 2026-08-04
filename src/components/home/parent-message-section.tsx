"use client";

import Link from "next/link";

import { useLanguage } from "@/components/providers/language-provider";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";

export function ParentMessageSection() {
  const { content } = useLanguage();
  const copy = content.parentMessage;

  return (
    <Section compact className="bg-[color:var(--color-soft-green)]/25">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-terracotta)]">
            {copy.kicker}
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-serif)] text-3xl leading-tight text-[color:var(--color-sage-dark)] md:text-4xl">
            {copy.title}
          </h2>
        </Reveal>

        <div className="mt-8 space-y-4 text-left">
          {copy.paragraphs.map((para, i) => (
            <Reveal key={para.slice(0, 40)} delay={0.05 + i * 0.04}>
              <p className="text-base leading-relaxed text-[color:var(--color-muted)]">{para}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10">
          <p className="font-[family-name:var(--font-serif)] text-xl italic text-[color:var(--color-sage-dark)]">
            {copy.cta}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/appointment">{copy.bookConversation}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">{copy.askQuestion}</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
