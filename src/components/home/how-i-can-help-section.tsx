"use client";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Link } from "@/i18n/navigation";
import { useLanguage } from "@/components/providers/language-provider";
import { getCardPastel } from "@/lib/pastel-palette";

const cardHrefs = ["/conditions", "/expertise", "/about"] as const;

export function HowICanHelpSection() {
  const { content } = useLanguage();
  const copy = content.home.howICanHelp;

  return (
    <Section compact className="bg-[color:var(--color-soft-green)]/20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title={copy.title} center />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {copy.cards.map((card, i) => {
            const pastel = getCardPastel(i);
            return (
              <Reveal key={card.title} delay={0.08 + i * 0.08}>
                <div
                  className="flex h-full flex-col rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
                >
                  <h3 className="font-[family-name:var(--font-serif)] text-xl font-semibold" style={{ color: pastel.text }}>
                    {card.title}
                  </h3>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-[color:var(--color-muted)]">
                    {card.text}
                  </p>
                  <Link
                    href={cardHrefs[i]}
                    className="mt-4 inline-block text-sm font-semibold hover:underline"
                    style={{ color: pastel.accent }}
                  >
                    {card.link} →
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
