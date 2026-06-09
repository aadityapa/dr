import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { doctorProfile, siteConfig } from "@/lib/site-data";
import { Award, GraduationCap } from "lucide-react";

const PORTRAIT =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDqme4z4q7U9PFUK64TAVhA4QWFLHvL0wqKUfcBcSwsRDn8b7TDNvjK3Lkf0sUaVOpqUpNryt8RxKeEAlz66__rEYyIIXbo4G0LzQ7JCHlGeaz85vpJ8r0FwZtAhDB-7sjXWavcfD3L4DQXZdq08z3pYB4nHAJe3YvGXX4ui66_QbrI4gvYHLCO-Tp_chdk02RRU_7SEeiExzW3YQrGpBTN8-yAUkGloVI40V-yxVpN3PeLtBWZKWpmo27TcZVMW3N4ewkttEcDvh0";

export const metadata: Metadata = {
  title: "About Dr. Sharuja Sarap",
  description: doctorProfile.bio,
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        kicker="About"
        title={`Meet ${siteConfig.doctorName}`}
        description={doctorProfile.bio}
      >
        <Button asChild>
          <Link href="/appointment">Book a Consultation</Link>
        </Button>
      </PageHero>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src={PORTRAIT}
                alt="Dr. Sharuja Sarap, Pediatric Occupational Therapist"
                width={600}
                height={750}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[color:var(--color-terracotta)]">
                {siteConfig.title}
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-serif)] text-3xl text-[color:var(--color-sage-dark)]">
                Expertise with heartfelt care
              </h2>
              <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">{doctorProfile.bio}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-[color:var(--color-soft-green)]/50 p-4">
                  <p className="text-2xl font-bold text-[color:var(--color-sage-dark)]">
                    {siteConfig.experienceYears}+
                  </p>
                  <p className="text-sm text-[color:var(--color-muted)]">Years of Experience</p>
                </div>
                <div className="rounded-2xl bg-[color:var(--color-soft-green)]/50 p-4">
                  <p className="text-2xl font-bold text-[color:var(--color-sage-dark)]">
                    {siteConfig.registrationNumber}
                  </p>
                  <p className="text-sm text-[color:var(--color-muted)]">Registration Number</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="rounded-[2rem] bg-white/70">
        <SectionHeading kicker="Qualifications" title="Education & credentials" center />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {doctorProfile.qualifications.map((q, i) => (
            <Reveal key={q} delay={i * 0.08}>
              <Card>
                <CardContent className="flex items-start gap-3 p-5">
                  <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-sage)]" />
                  <p className="text-sm font-medium text-[color:var(--color-sage-dark)]">{q}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          kicker="Certifications"
          title="International & national certifications"
          description="Specialized training across sensory integration, aquatic therapy, reflex integration, and more."
          center
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {doctorProfile.certifications.map((cert, i) => (
            <Reveal key={cert} delay={i * 0.04}>
              <div className="flex items-start gap-2 rounded-2xl border border-[color:var(--color-border)]/60 bg-white/80 p-4">
                <Award className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-terracotta)]" />
                <p className="text-sm text-[color:var(--color-muted)]">{cert}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </main>
  );
}
