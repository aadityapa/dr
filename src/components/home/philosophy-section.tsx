"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { therapyFlow } from "@/lib/site-data";

gsap.registerPlugin(ScrollTrigger);

export function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      gsap.from(".philosophy-step", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
      });
    },
    { scope: sectionRef },
  );

  return (
    <div ref={sectionRef}>
    <Section className="playful-dots">
      <SectionHeading
        kicker="Therapy Philosophy"
        title="Belonging → Growth → Confidence → Independence"
        description="Our gentle, sensory-integrative approach follows a clear path — helping every child regulate, connect, participate, and thrive."
        center
      />

      <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center">
        {therapyFlow.map((item, index) => (
          <div key={item.step} className="flex w-full flex-col items-center">
            <div className="philosophy-step w-full rounded-3xl border border-[color:var(--color-border)]/50 bg-white/80 p-8 text-center shadow-lg backdrop-blur-sm transition-transform hover:-translate-y-1">
              <span className="inline-block rounded-full bg-[color:var(--color-sage)]/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[color:var(--color-sage)]">
                Step {index + 1}
              </span>
              <h3 className="mt-3 font-[family-name:var(--font-serif)] text-3xl text-[color:var(--color-sage-dark)]">
                {item.step}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">{item.description}</p>
            </div>
            {index < therapyFlow.length - 1 ? (
              <ArrowDown className="my-3 h-6 w-6 text-[color:var(--color-sage)]/50" aria-hidden />
            ) : null}
          </div>
        ))}
      </div>
    </Section>
    </div>
  );
}
