"use client";

import { Reveal } from "@/components/shared/reveal";
import { useLanguage } from "@/components/providers/language-provider";

export function ParentsReadingSection() {
  const { content, locale } = useLanguage();

  if (locale !== "en") {
    const copy = content.home.parentsReading;
    return (
      <section className="w-full bg-white px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-3xl">
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
      <div className="mx-auto max-w-3xl space-y-4">
        <Reveal>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl leading-tight text-[color:var(--color-sage-dark)] md:text-4xl">
            To the Parents Reading This...
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Perhaps you&apos;ve noticed your child struggling with things that appear effortless for
            other children. Maybe you&apos;ve been told to &ldquo;wait and see,&rdquo; while your
            heart tells you something doesn&apos;t feel quite right.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            You may have spent countless hours searching for answers, attending appointments,
            reading reports, comparing milestones, or worrying about your child&apos;s future.
          </p>
        </Reveal>

        <Reveal delay={0.11}>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            You may have wondered:
          </p>
          <ul className="mt-2 space-y-1.5 pl-4">
            {[
              "Will my child ever catch up?",
              "Will they make friends?",
              "Will they be independent?",
              "Will they be okay?",
            ].map((q) => (
              <li
                key={q}
                className="font-[family-name:var(--font-serif)] text-base italic text-[color:var(--color-sage-dark)]"
              >
                &ldquo;{q}&rdquo;
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            As parents, these thoughts come from a place of deep love. And while every child&apos;s
            journey is different, one thing remains true &ndash; your child is so much more than a
            diagnosis, a report, or a list of challenges.
          </p>
        </Reveal>

        <Reveal delay={0.17}>
          <blockquote className="rounded-2xl border-l-4 border-[color:var(--color-sage)] bg-[color:var(--color-soft-green)]/30 px-5 py-4">
            <p className="text-base leading-relaxed text-[color:var(--color-sage-dark)]">
              Behind every behavior is a child trying to communicate a need.
              <br />
              Behind every struggle is a child with strengths waiting to be discovered.
              <br />
              And behind every child is a parent doing the very best they can.
            </p>
          </blockquote>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            My role is not simply to provide therapy. It is to help families understand their child
            more deeply, celebrate progress that others may overlook, and create opportunities for
            growth, participation, and success.
          </p>
        </Reveal>

        <Reveal delay={0.23}>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Some victories may seem small to the outside world &ndash; a child trying a new food,
            joining a group activity, writing their name, tolerating a haircut, making eye contact,
            climbing a slide, or expressing a feeling.
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            But as parents, you know these moments are never small.
          </p>
          <div className="mt-2 space-y-0.5 pl-4">
            <p className="font-[family-name:var(--font-serif)] text-base font-medium text-[color:var(--color-sage-dark)]">
              They are milestones.
            </p>
            <p className="font-[family-name:var(--font-serif)] text-base font-medium text-[color:var(--color-sage-dark)]">
              They are breakthroughs.
            </p>
            <p className="font-[family-name:var(--font-serif)] text-base font-medium text-[color:var(--color-sage-dark)]">
              They are signs of progress.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.29}>
          <p className="text-lg font-semibold text-[color:var(--color-sage-dark)]">
            You do not have to walk this journey alone.
          </p>
        </Reveal>

        <Reveal delay={0.32}>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Together, we focus not on what a child cannot do today, but on what they may achieve
            tomorrow &ndash; with support, understanding, patience, and belief in their potential.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
            Every child deserves to be understood. Every family deserves to be supported. And every
            journey deserves hope.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
