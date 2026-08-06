"use client";

import { Reveal } from "@/components/shared/reveal";
import { useLanguage } from "@/components/providers/language-provider";

const DIALOGUE = [
  {
    parent: "Doctor\u2026 I'm worried.",
    therapist: ["I know.", "Sometimes the hardest part isn't the diagnosis \u2014 it's the uncertainty."],
  },
  {
    parent: "Will my child be okay?",
    therapist: [
      "I can't promise the journey will be easy. But I can promise this\u2026",
      "Your child is more than a diagnosis, a report, or a milestone checklist.",
    ],
  },
  {
    parent: "I feel like no one understands my child.",
    therapist: [
      "Every behaviour has a reason.",
      "Before we try to change a behaviour, let's understand what your child is trying to tell us.",
    ],
  },
  {
    parent: "What if progress is too slow?",
    therapist: [
      "Progress isn't measured only by big milestones.",
      "Sometimes it's trying a new food. Sometimes it's making a friend. Sometimes it's saying one new word. Sometimes it's believing, \u201cI can do this.\u201d",
      "No step forward is ever too small.",
    ],
  },
  {
    parent: "So\u2026 where do we begin?",
    therapist: [
      "We begin with understanding. We celebrate strengths. We support challenges.",
      "And together, we help your child participate, grow, and thrive \u2014 one meaningful step at a time.",
    ],
  },
] as const;

export function ParentsReadingSection() {
  const { content, locale } = useLanguage();

  if (locale !== "en") {
    const copy = content.home.parentsReading;
    return (
      <section className="w-full bg-white px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl leading-tight text-[color:var(--color-sage-dark)] md:text-4xl">
              {copy.title}
            </h2>
          </Reveal>
          <div className="mt-6 space-y-4">
            {copy.paragraphs.map((para, i) => (
              <Reveal key={para.slice(0, 40)} delay={0.05 + i * 0.04}>
                <p className="text-base leading-relaxed text-[color:var(--color-muted)]">{para}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl leading-tight text-[color:var(--color-sage-dark)] md:text-4xl">
            Before We Begin&hellip; A Message from My Heart to Yours
          </h2>
        </Reveal>

        <div className="mt-8 space-y-6">
          {DIALOGUE.map((turn, i) => (
            <Reveal key={turn.parent} delay={0.05 + i * 0.05}>
              <div className="space-y-4">
                <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-[color:var(--color-soft-green)]/40 px-5 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-sage-text)]">
                    Parent
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-serif)] text-base italic text-[color:var(--color-sage-dark)] md:text-lg">
                    &ldquo;{turn.parent}&rdquo;
                  </p>
                </div>

                <div className="w-fit max-w-[85%] rounded-2xl rounded-bl-md border border-[color:var(--color-border)] bg-white px-5 py-3 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-terracotta)]">
                    Therapist
                  </p>
                  {turn.therapist.map((line) => (
                    <p key={line} className="mt-1 text-base leading-relaxed text-[color:var(--color-muted)]">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <blockquote className="mt-10 rounded-2xl border-l-4 border-[color:var(--color-sage)] bg-[color:var(--color-soft-green)]/30 px-5 py-4">
            <p className="text-base leading-relaxed text-[color:var(--color-sage-dark)]">
              You don&apos;t have to walk this journey alone.
              <br />
              I&apos;m here to walk it with you.
            </p>
            <footer className="mt-3 text-sm text-[color:var(--color-muted)]">
              &mdash; Dr. Sharuja Sarap, <cite className="not-italic">Paediatric Occupational Therapist</cite>
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
