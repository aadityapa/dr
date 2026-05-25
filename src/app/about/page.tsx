import type { Metadata } from "next";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Dr. Sharuja Sarap, her mission, and the therapy philosophy guiding every child-centered intervention.",
};

export default function AboutPage() {
  return (
    <main>
      <Section>
        <SectionHeading
          kicker="About Dr. Sharuja Sarap"
          title="A warm, evidence-based approach to pediatric occupational therapy"
          description="With over a decade of clinical experience, Dr. Sharuja supports children and families through compassionate, deeply personalized therapy pathways."
        />
      </Section>

      <Section className="grid gap-4 md:grid-cols-3">
        {[
          "Certified in Sensory Integration and Aquatic Therapy",
          "12+ years of pediatric occupational therapy practice",
          "Family-centered intervention model with measurable milestones",
        ].map((item) => (
          <Card key={item}>
            <CardContent className="p-6 text-sm text-[color:var(--color-sage-dark)]">{item}</CardContent>
          </Card>
        ))}
      </Section>

      <Section className="rounded-[2rem] bg-white/70">
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="font-[family-name:var(--font-serif)] text-4xl text-[color:var(--color-sage-dark)]">Our Mission</h2>
              <p className="mt-4 text-[color:var(--color-muted)]">
                To build confident, independent children by integrating sensory, motor, emotional, and functional growth through meaningful, joyful therapy.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <h2 className="font-[family-name:var(--font-serif)] text-4xl text-[color:var(--color-sage-dark)]">Personal Journey</h2>
              <p className="mt-4 text-[color:var(--color-muted)]">
                Dr. Sharuja&apos;s work began with one core belief: every child deserves a safe space where effort is celebrated and milestones are nurtured with patience.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
