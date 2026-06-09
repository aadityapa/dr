"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { ServiceIcon } from "@/components/shared/service-icon";
import { Button } from "@/components/ui/button";
import { therapyJourneySteps } from "@/lib/site-data";

gsap.registerPlugin(ScrollTrigger);

export function JourneyTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) return;

      gsap.from(".journey-card", {
        scrollTrigger: { trigger: timelineRef.current, start: "top 80%" },
        opacity: 0,
        x: -40,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    },
    { scope: timelineRef },
  );

  return (
    <Section>
      <div ref={timelineRef} className="relative mx-auto max-w-3xl">
        <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-gradient-to-b from-[color:var(--color-sage)] to-[color:var(--color-terracotta)]/50 md:block" />

        <div className="space-y-12">
          {therapyJourneySteps.map((step) => (
            <Reveal key={step.step}>
              <div className="journey-card relative flex gap-6 md:gap-10">
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--color-sage)] text-white shadow-lg">
                  <ServiceIcon name={step.icon} className="h-7 w-7" />
                </div>
                <div className="flex-1 rounded-3xl border border-[color:var(--color-border)]/60 bg-white/80 p-6 shadow-sm md:p-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-[color:var(--color-terracotta)]">
                    Step {step.step}
                  </span>
                  <h2 className="mt-2 font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-sage-dark)]">
                    {step.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-[color:var(--color-muted)]">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-16 text-center">
        <Button asChild size="lg">
          <Link href="/appointment">Start Your Journey</Link>
        </Button>
      </Reveal>
    </Section>
  );
}
