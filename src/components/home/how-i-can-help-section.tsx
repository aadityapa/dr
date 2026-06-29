"use client";

import { Reveal } from "@/components/shared/reveal";
import { Link } from "@/i18n/navigation";
import { useLanguage } from "@/components/providers/language-provider";

const cardHrefs = ["/conditions", "/expertise", "/about"] as const;

export function HowICanHelpSection() {
  const { content } = useLanguage();
  const copy = content.home.howICanHelp;

  return (
    <section className="w-full bg-[color:var(--color-soft-green)]/20 px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-center font-[family-name:var(--font-serif)] text-3xl leading-tight text-[color:var(--color-sage-dark)] md:text-4xl">
            {copy.title}
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {copy.cards.map((card, i) => (
            <Reveal key={card.title} delay={0.08 + i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-[color:var(--color-border)] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="font-[family-name:var(--font-serif)] text-xl font-semibold text-[color:var(--color-sage-dark)]">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-[color:var(--color-muted)]">
                  {card.text}
                </p>
                <Link
                  href={cardHrefs[i]}
                  className="mt-4 inline-block text-sm font-medium text-[color:var(--color-sage-dark)] underline-offset-4 hover:underline"
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
