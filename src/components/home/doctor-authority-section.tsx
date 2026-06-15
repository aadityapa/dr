import Image from "next/image";
import Link from "next/link";
import { Award, GraduationCap, ShieldCheck, Stethoscope } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { doctorProfile, siteConfig } from "@/lib/site-data";
import { getSiteImage } from "@/lib/site-images";

const AUTHORITY_STATS = [
  { icon: Stethoscope, value: `${siteConfig.experienceYears}+`, label: "Years Experience" },
  { icon: ShieldCheck, value: `Reg. ${siteConfig.registrationNumber}`, label: "Allied Health Council" },
  { icon: GraduationCap, value: "Ph.D. Scholar", label: "Pediatric OT Research" },
  { icon: Award, value: "10+ Programs", label: "International Certs" },
] as const;

export function DoctorAuthoritySection() {
  return (
    <Section id="meet-doctor" compact className="bg-[color:var(--color-almond)]">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <div className="relative mx-auto max-w-md lg:mx-0">
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src={getSiteImage("doctorPortrait")}
                alt={`${siteConfig.doctorName} — Pediatric Occupational Therapist in Kandivali, Mumbai`}
                width={480}
                height={560}
                className="aspect-[5/6] w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading
              kicker="Meet Dr Sharuja"
              title={siteConfig.doctorName}
              description="Pediatric Occupational Therapy Specialist · Kandivali West, Mumbai"
            />
            <p className="mt-4 max-w-prose leading-relaxed text-[color:var(--color-muted)]">{doctorProfile.bio}</p>
          </Reveal>

          <Reveal delay={0.05} className="mt-6 grid grid-cols-2 gap-3">
            {AUTHORITY_STATS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="rounded-xl border border-[color:var(--color-border)]/70 bg-white px-4 py-3 shadow-sm"
              >
                <Icon className="mb-1.5 h-4 w-4 text-[color:var(--color-sage)]" aria-hidden="true" />
                <p className="text-sm font-semibold text-[color:var(--color-sage-dark)]">{value}</p>
                <p className="text-[11px] text-[color:var(--color-muted)]">{label}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.08} className="mt-6 flex flex-wrap gap-2">
            {doctorProfile.qualifications.slice(0, 4).map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-[color:var(--color-border)] bg-white px-3 py-1.5 text-xs font-medium text-[color:var(--color-sage-dark)]"
              >
                {item}
              </span>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/about">Full Profile & Certifications</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/appointment">Book Consultation</Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
