import Link from "next/link";
import { Award, Heart, Shield, Users } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-data";

const reasons = [
  {
    icon: Award,
    title: "16+ Years of Expertise",
    description: `Dr. ${siteConfig.doctorName.replace("Dr. ", "")} brings deep pediatric OT experience with 8+ specialized certifications including Brain Gym, HWT, and Aquatherapy.`,
  },
  {
    icon: Heart,
    title: "Child-Led, Play-Based Care",
    description: "Therapy feels like play, not pressure. We meet each child where they are and build trust before demanding participation.",
  },
  {
    icon: Shield,
    title: "Evidence-Informed Approach",
    description: "Sensory integration, movement-based strategies, and structured programs grounded in occupational therapy best practices.",
  },
  {
    icon: Users,
    title: "Family-Centered Partnership",
    description: "Parents are active partners with home programs, school coordination, and open communication at every step.",
  },
];

export function WhyParentsChooseSection() {
  return (
    <Section id="why-choose">
      <SectionHeading
        kicker="Why Us"
        title="Why Parents Choose Dr. Sharuja Sarap"
        description="Families across Mumbai and Kandivali trust Thrive with sharuja for compassionate, expert pediatric care."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {reasons.map((reason, i) => (
          <Reveal key={reason.title} delay={i * 0.08}>
            <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-lg">
              <CardContent className="flex gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--color-soft-green)]">
                  <reason.icon className="h-6 w-6 text-[color:var(--color-sage-dark)]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-[color:var(--color-sage-dark)]">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">{reason.description}</p>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function MeetDoctorPreviewSection() {
  return (
    <Section className="rounded-[2rem] bg-white/70">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            kicker="Meet Your Therapist"
            title={siteConfig.doctorName}
            description="Pediatric Occupational Therapist · Kandivali West, Mumbai"
          />
          <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
            Dr. Sharuja Sarap brings both expertise and heartfelt care to pediatric occupational therapy. She uses a gentle
            movement and sensory-based integrative approach to help children grow with confidence and joy — from birth
            through 14 years.
          </p>
          <p className="mt-3 font-[family-name:var(--font-serif)] text-lg italic text-[color:var(--color-terracotta)]">
            &ldquo;{siteConfig.tagline}&rdquo;
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block text-sm font-semibold text-[color:var(--color-sage-dark)] underline-offset-4 hover:underline"
          >
            Read full profile →
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-[2rem] bg-[color:var(--color-soft-green)]/40 p-8">
            <h3 className="font-semibold text-[color:var(--color-sage-dark)]">Qualifications & Certifications</h3>
            <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-muted)]">
              <li>• Ph.D. Scholar</li>
              <li>• Master&apos;s in Pediatric Occupational Therapy</li>
              <li>• Certified Brain Gym Instructor & Practitioner</li>
              <li>• Handwriting Without Tears (HWT)</li>
              <li>• IATF Aquatherapy · MNRI · OPT · PIASTM · KT</li>
            </ul>
            <p className="mt-4 text-xs text-[color:var(--color-muted)]">
              Reg. No. {siteConfig.registrationNumber} · {siteConfig.experienceYears}+ Years Experience
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function ClinicEnvironmentSection() {
  return (
    <Section>
      <SectionHeading
        kicker="Our Space"
        title="A Warm, Child-Friendly Clinic Environment"
        description="Our Kandivali West clinic is designed to help children feel safe, curious, and ready to engage."
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {["Sensory Gym & Therapy Rooms", "Child-Friendly Assessment Areas", "Aquatic Therapy Access"].map((item, i) => (
          <Reveal key={item} delay={i * 0.06}>
            <div className="rounded-2xl border border-[color:var(--color-border)] bg-white/60 p-6 text-center">
              <p className="font-medium text-[color:var(--color-sage-dark)]">{item}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-6 text-center">
        <Link href="/gallery" className="text-sm font-semibold text-[color:var(--color-sage-dark)] hover:underline">
          View clinic gallery →
        </Link>
      </Reveal>
    </Section>
  );
}

export function DevelopmentalChecklistCta() {
  return (
    <Section className="rounded-[2rem] bg-[color:var(--color-sage-dark)] text-white">
      <div className="text-center">
        <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl">Free Developmental Checklist</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/80">
          Wondering if your child is on track? Download our parent-friendly developmental checklist — a helpful starting
          point for conversations with your pediatrician or therapist.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-[color:var(--color-sage-dark)] transition hover:bg-[color:var(--color-cream)]"
        >
          Request Your Free Checklist
        </Link>
        <p className="mt-3 text-xs text-white/60">Available via email · No obligation</p>
      </div>
    </Section>
  );
}

export function ParentReassuranceSection() {
  return (
    <Section className="rounded-[2rem] bg-[color:var(--color-soft-green)]/30">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-[family-name:var(--font-serif)] text-3xl text-[color:var(--color-sage-dark)]">
          You Are Not Alone
        </h2>
        <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
          Seeking therapy for your child is one of the most loving decisions a parent can make. At Thrive with sharuja,
          over 2,000 Mumbai families have found hope, practical strategies, and measurable progress. Every child&apos;s
          journey is unique — and every step forward, however small, is worth celebrating.
        </p>
        <p className="mt-4 font-[family-name:var(--font-serif)] text-lg italic text-[color:var(--color-terracotta)]">
          Belonging Without Boundaries
        </p>
      </div>
    </Section>
  );
}

export function DownloadableGuidesSection() {
  const guides = [
    { title: "Sensory Strategies at Home", status: "Coming Soon" },
    { title: "School Readiness Checklist", status: "Coming Soon" },
    { title: "Handwriting Practice Guide", status: "Coming Soon" },
  ];

  return (
    <Section>
      <SectionHeading
        kicker="Resources"
        title="Downloadable Parent Guides"
        description="Practical guides to support your child's development at home — free for Thrive with sharuja families."
      />
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {guides.map((guide, i) => (
          <Reveal key={guide.title} delay={i * 0.06}>
            <div className="rounded-2xl border border-dashed border-[color:var(--color-border)] bg-white/50 p-6">
              <h3 className="font-medium text-[color:var(--color-sage-dark)]">{guide.title}</h3>
              <p className="mt-2 text-xs text-[color:var(--color-muted)]">{guide.status}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-[color:var(--color-muted)]">
        <Link href="/resources" className="font-semibold text-[color:var(--color-sage-dark)] hover:underline">
          Browse parent resources →
        </Link>
      </p>
    </Section>
  );
}
