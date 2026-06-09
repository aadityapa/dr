import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { trustBadges, trustStats } from "@/lib/site-data";
import { Award, ShieldCheck } from "lucide-react";

export function TrustSection() {
  return (
    <Section id="trust" className="rounded-[2rem] bg-white/70">
      <SectionHeading
        kicker="Trust & Credentials"
        title="A clinician parents can rely on"
        description="Evidence-based pediatric occupational therapy backed by 16+ years of dedicated practice and specialized international certifications."
        center
      />

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {trustBadges.map((badge) => (
          <Reveal key={badge} delay={0.05}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-cream)] px-4 py-2 text-sm font-medium text-[color:var(--color-sage-dark)]">
              <ShieldCheck className="h-4 w-4 text-[color:var(--color-sage)]" />
              {badge}
            </span>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {trustStats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div className="rounded-3xl border border-[color:var(--color-border)]/60 bg-gradient-to-br from-white to-[color:var(--color-soft-green)]/30 p-6 text-center shadow-sm">
              <p className="font-[family-name:var(--font-serif)] text-4xl text-[color:var(--color-sage-dark)]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-[color:var(--color-muted)]">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 flex justify-center">
        <p className="flex items-center gap-2 text-sm text-[color:var(--color-muted)]">
          <Award className="h-4 w-4 text-[color:var(--color-terracotta)]" />
          Certified Pediatric Occupational Therapist · Mumbai
        </p>
      </Reveal>
    </Section>
  );
}
