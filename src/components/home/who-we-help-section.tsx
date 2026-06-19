"use client";

import Link from "next/link";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { clientConditions } from "@/lib/client-content/conditions";
import { homeContent } from "@/lib/client-content/home";
import { getCardPastel } from "@/lib/pastel-palette";

export function WhoWeHelpSection() {
  const copy = homeContent.conditionsPreview;

  return (
    <Section id="who-we-help" compact className="bg-[color:var(--color-snow)]">
      <SectionHeading kicker={copy.kicker} title={copy.title} description={copy.description} center />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {clientConditions.slice(0, 6).map((condition, i) => {
          const pastel = getCardPastel(i);
          return (
            <Reveal key={condition.slug} delay={i * 0.05}>
              <Link
                href={`/conditions/${condition.slug}`}
                className="group block h-full rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
              >
                <h3 className="font-semibold" style={{ color: pastel.text }}>
                  {condition.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)] line-clamp-3">
                  {condition.whatParentsMayNotice[0]}
                </p>
                <span
                  className="mt-3 inline-block text-xs font-semibold group-hover:underline"
                  style={{ color: pastel.accent }}
                >
                  Learn more →
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-8 text-center">
        <Button asChild variant="outline">
          <Link href="/conditions">{copy.cta}</Link>
        </Button>
      </Reveal>
    </Section>
  );
}
