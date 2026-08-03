import Link from "next/link";
import { Award, Heart, Shield, Users } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { getCardPastel } from "@/lib/pastel-palette";
import { siteConfig } from "@/lib/site-data";

const reasons = [
  {
    icon: Award,
    title: "18+ Years of Expertise",
    description: `Dr. ${siteConfig.doctorName.replace("Dr. ", "")} brings deep pediatric OT experience with 10+ specialized programs including Brain Gym®, HWT, Aquatherapy, RMTI, OPT, and MNRI.`,
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
        description="Families across Mumbai and Kandivali trust Thrive With Sharuja for compassionate, expert pediatric care."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {reasons.map((reason, i) => {
          const pastel = getCardPastel(i);
          return (
            <Reveal key={reason.title} delay={i * 0.08}>
              <div
                className="flex h-full gap-4 rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/70">
                  <reason.icon className="h-6 w-6" style={{ color: pastel.accent }} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold" style={{ color: pastel.text }}>
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">{reason.description}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
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
            movement and sensory-based integrative approach to help children grow with confidence and joy.
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
              <li>• Certified Brain Gym® Instructor & Practitioner</li>
              <li>• Handwriting Without Tears (HWT)</li>
              <li>• IATF Aquatherapy · MNRI · OPT · PIASTM · KT</li>
            </ul>
            <p className="mt-4 text-xs text-[color:var(--color-muted)]">
              {siteConfig.experienceYears}+ Years Experience · 10+ Specialized Programs
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
        {["Sensory Gym & Therapy Rooms", "Child-Friendly Assessment Areas", "Aquatic Therapy Access"].map((item, i) => {
          const pastel = getCardPastel(i + 4);
          return (
            <Reveal key={item} delay={i * 0.06}>
              <div
                className="rounded-2xl border p-6 text-center"
                style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
              >
                <p className="font-medium" style={{ color: pastel.text }}>
                  {item}
                </p>
              </div>
            </Reveal>
          );
        })}
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
          href="/library"
          className="mt-6 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-[color:var(--color-sage-dark)] transition hover:bg-[color:var(--color-cream)]"
        >
          Request Your Free Checklist
        </Link>
        <p className="mt-3 text-xs text-white/60">Available via email · No obligation</p>
      </div>
    </Section>
  );
}

export function ClinicIntroductionSection() {
  return (
    <Section className="rounded-[2rem] bg-white/70">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          kicker="Our Centre"
          title="Where Potential Meets Possibility"
          center
        />
        <p className="mt-6 leading-relaxed text-[color:var(--color-muted)]">
          At our Occupational Therapy Centre, we are committed to helping every child thrive through evidence-based,
          child-centered intervention.
        </p>
        <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
          Our state-of-the-art clinic is equipped with the latest research-backed therapeutic equipment and designed to
          provide a safe, engaging, and nurturing environment for children and their families.
        </p>
        <p className="mt-6 font-[family-name:var(--font-serif)] text-xl text-[color:var(--color-sage-dark)]">
          Because every child deserves the opportunity to learn, grow, and reach their fullest potential.
        </p>
      </div>
    </Section>
  );
}

export function ParentReassuranceSection() {
  return (
    <Section className="rounded-[2rem] bg-[color:var(--color-soft-green)]/30">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-[family-name:var(--font-serif)] text-3xl text-[color:var(--color-sage-dark)]">
          A Message For Parents
        </h2>
        <p className="mt-6 leading-relaxed text-[color:var(--color-muted)]">
          We cannot promise what the future will look like, but we can promise that we will work together to help your
          child grow, learn, participate, and reach their fullest potential.
        </p>

        <div className="mt-10 rounded-2xl border border-[color:var(--color-border)]/60 bg-white/70 p-8 text-left">
          <h3 className="font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)]">
            Will My Child Be Okay?
          </h3>
          <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
            This is the question every parent carries — sometimes quietly, sometimes in the middle of the night. The
            honest answer is that every child&apos;s journey is unique, and no therapist can predict the future. What we
            can tell you is this: children are remarkably resilient when given the right support at the right time.
          </p>
          <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
            At Thrive With Sharuja, we have walked alongside hundreds of families through uncertainty, fear, and
            hope. We have seen children who struggled to write their name go on to thrive in school. We have seen
            sensory overwhelm transform into confident participation. We have seen parents who felt lost find clarity,
            community, and practical strategies that work.
          </p>
          <p className="mt-4 leading-relaxed text-[color:var(--color-muted)]">
            Your child already has strengths — they may just need the right environment, tools, and therapeutic
            support to express them. Early intervention, consistent therapy, and your love as a parent create the
            conditions for meaningful progress. You are not alone in this journey.
          </p>
        </div>

        <div className="mt-8 space-y-3 font-[family-name:var(--font-serif)] text-lg text-[color:var(--color-sage-dark)]">
          <p>Every child has strengths.</p>
          <p>Every child can make progress.</p>
          <p>Every child deserves the opportunity to thrive.</p>
        </div>
      </div>
    </Section>
  );
}

export function DownloadableGuidesSection() {
  const guides = [
    { title: "Sensory Screening Questionnaire", href: "/library" },
    { title: "School Readiness Checklist", href: "/library" },
    { title: "Handwriting Practice Guide", href: "/library" },
  ];

  return (
    <Section>
      <SectionHeading
        kicker="Resources"
        title="Downloadable Parent Guides"
        description="Practical guides to support your child's development at home — free for Thrive With Sharuja families."
      />
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {guides.map((guide, i) => {
          const pastel = getCardPastel(i + 8);
          return (
            <Reveal key={guide.title} delay={i * 0.06}>
              <Link
                href={guide.href}
                className="block rounded-2xl border p-6 transition hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: pastel.bg, borderColor: pastel.border }}
              >
                <h3 className="font-medium" style={{ color: pastel.text }}>
                  {guide.title}
                </h3>
                <p className="mt-2 text-xs text-[color:var(--color-muted)]">Free download · Lead capture required</p>
              </Link>
            </Reveal>
          );
        })}
      </div>
      <p className="mt-6 text-center text-sm text-[color:var(--color-muted)]">
        <Link href="/library" className="font-semibold text-[color:var(--color-sage-dark)] hover:underline">
          Browse full digital library →
        </Link>
      </p>
    </Section>
  );
}
