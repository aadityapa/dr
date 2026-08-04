import Link from "next/link";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { conditions } from "@/lib/site-data";

export function ConditionsPreview() {
  return (
    <Section>
      <SectionHeading
        kicker="Conditions We Support"
        title="Understanding your child's unique journey"
        description="Parent-friendly guidance for a wide range of developmental and sensory challenges."
        center
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {conditions.slice(0, 6).map((condition, i) => (
          <Reveal key={condition.slug} delay={i * 0.05}>
            <Link
              href={`/conditions/${condition.slug}`}
              className="block rounded-2xl border border-[color:var(--color-border)]/60 bg-white/80 p-5 transition-all hover:border-[color:var(--color-sage)]/30 hover:shadow-md"
            >
              <h3 className="font-semibold text-[color:var(--color-sage-dark)]">{condition.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)] line-clamp-2">
                {condition.description}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8 text-center">
        <Button asChild variant="outline">
          <Link href="/conditions">Explore All Conditions</Link>
        </Button>
      </Reveal>
    </Section>
  );
}
