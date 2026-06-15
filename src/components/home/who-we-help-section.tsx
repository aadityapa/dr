import Link from "next/link";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { getCardPastel } from "@/lib/pastel-palette";
import { conditions } from "@/lib/site-data";

export function WhoWeHelpSection() {
  return (
    <Section id="who-we-help" className="bg-[color:var(--color-snow)]">
      <SectionHeading
        kicker="Who We Help"
        title="Every child&apos;s story is different — and every one matters"
        description="Whether your child struggles with sensory overload, handwriting, attention, or daily routines, we're here to help with warmth and expertise."
        center
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {conditions.slice(0, 6).map((condition, i) => {
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
                  {condition.reassurance}
                </p>
                <span className="mt-3 inline-block text-xs font-semibold group-hover:underline" style={{ color: pastel.accent }}>
                  Learn more →
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-8 text-center">
        <Button asChild variant="outline">
          <Link href="/conditions">See All Conditions We Support</Link>
        </Button>
      </Reveal>
    </Section>
  );
}
