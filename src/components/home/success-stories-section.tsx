"use client";

import Link from "next/link";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { getCardPastel } from "@/lib/pastel-palette";
import { testimonials } from "@/lib/site-data";

export function SuccessStoriesSection() {
  return (
    <Section id="success-stories" compact className="bg-[color:var(--color-almond)]">
      <SectionHeading
        kicker="Success Stories"
        title="Real families. Real progress."
        description="Parents across Mumbai share what therapy at our clinic has meant for their children."
        center
      />

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.slice(0, 6).map((t, i) => {
          const pastel = getCardPastel(i + 6);
          return (
            <Reveal key={t.parent} delay={i * 0.06}>
              <blockquote
                className="flex h-full flex-col rounded-2xl border p-6 shadow-sm"
                style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
              >
                <p className="flex-1 text-sm leading-relaxed text-[color:var(--color-muted)]">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 border-t pt-4" style={{ borderColor: pastel.border }}>
                  <p className="text-sm font-semibold" style={{ color: pastel.text }}>
                    {t.parent}
                  </p>
                  <p className="text-xs" style={{ color: pastel.accent }}>
                    {t.milestone}
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          );
        })}
      </div>

      <p className="mt-6 text-center text-xs text-[color:var(--color-muted)]">
        Stories shared with parental consent. Individual outcomes vary.
      </p>

      <div className="mt-6 text-center">
        <Button asChild variant="outline">
          <Link href="/testimonials-milestones">More Success Stories →</Link>
        </Button>
      </div>
    </Section>
  );
}
