import Link from "next/link";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { parentMessage } from "@/lib/parent-voice";

export function ParentMessageSection() {
  return (
    <Section compact className="bg-[color:var(--color-soft-green)]/25">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-terracotta)]">
            A note for parents
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-serif)] text-3xl leading-tight text-[color:var(--color-sage-dark)] md:text-4xl">
            {parentMessage.title}
          </h2>
        </Reveal>

        <div className="mt-8 space-y-4 text-left">
          {parentMessage.paragraphs.map((para, i) => (
            <Reveal key={para.slice(0, 40)} delay={0.05 + i * 0.04}>
              <p className="text-base leading-relaxed text-[color:var(--color-muted)]">{para}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10">
          <p className="font-[family-name:var(--font-serif)] text-xl italic text-[color:var(--color-sage-dark)]">
            {parentMessage.cta}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/appointment">Book a Conversation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Ask a Question</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
