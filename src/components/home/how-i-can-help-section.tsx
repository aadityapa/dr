"use client";

import { Reveal } from "@/components/shared/reveal";
import { Link } from "@/i18n/navigation";

const cards = [
  {
    title: "Conditions We Support",
    text: "ASD, ADHD, Cerebral Palsy, Sensory Processing, Learning Disabilities, and more.",
    href: "/conditions" as const,
    link: "Learn more →",
  },
  {
    title: "My Expertise",
    text: "Brain Gym®, Sensory Integration, Aquatic Therapy, Handwriting Without Tears®, and more.",
    href: "/expertise" as const,
    link: "Learn more →",
  },
  {
    title: "About Me",
    text: "Over 18 years of experience supporting children and families across a wide range of needs.",
    href: "/about" as const,
    link: "Learn more →",
  },
];

export function HowICanHelpSection() {
  return (
    <section className="w-full bg-[color:var(--color-soft-green)]/20 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="text-center font-[family-name:var(--font-serif)] text-3xl leading-tight text-[color:var(--color-sage-dark)] md:text-4xl">
            How I Can Help
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={0.1 + i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-[color:var(--color-border)] bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="font-[family-name:var(--font-serif)] text-xl font-semibold text-[color:var(--color-sage-dark)]">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-[color:var(--color-muted)]">
                  {card.text}
                </p>
                <Link
                  href={card.href}
                  className="mt-5 inline-block text-sm font-medium text-[color:var(--color-sage-dark)] underline-offset-4 hover:underline"
                >
                  {card.link}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
