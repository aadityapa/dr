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
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced || !timelineRef.current) return;

      gsap.from(".journey-card", {
        scrollTrigger: { trigger: timelineRef.current, start: "top 75%", toggleActions: "play none none reverse" },
        opacity: 0,
        x: -48,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
      });

      if (lineRef.current) {
        gsap.from(lineRef.current, {
          scrollTrigger: { trigger: timelineRef.current, start: "top 80%" },
          scaleY: 0,
          transformOrigin: "top center",
          duration: 1.2,
          ease: "power2.inOut",
        });
      }

      gsap.utils.toArray<HTMLElement>(".journey-step-icon").forEach((icon, i) => {
        gsap.from(icon, {
          scrollTrigger: { trigger: icon, start: "top 85%" },
          scale: 0,
          rotation: -15,
          duration: 0.5,
          delay: i * 0.08,
          ease: "back.out(1.7)",
        });
      });
    },
    { scope: timelineRef },
  );

  return (
    <Section>
      <div ref={timelineRef} className="relative mx-auto max-w-3xl">
        <div
          ref={lineRef}
          className="absolute left-8 top-0 hidden h-full w-0.5 origin-top bg-gradient-to-b from-[color:var(--color-sage)] via-[color:var(--color-sage)]/60 to-[color:var(--color-terracotta)]/50 md:block"
          aria-hidden="true"
        />

        <div className="space-y-10">
          {therapyJourneySteps.map((step) => (
            <Reveal key={step.step}>
              <div className="journey-card relative flex gap-6 md:gap-10">
                <div className="journey-step-icon relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--color-sage)] text-white shadow-lg ring-4 ring-white">
                  <ServiceIcon name={step.icon} className="h-7 w-7" />
                </div>
                <div className="flex-1 rounded-3xl border border-[color:var(--color-border)]/60 bg-white/80 p-6 shadow-sm transition-shadow hover:shadow-md md:p-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-[color:var(--color-terracotta)]">
                    Step {step.step} of {therapyJourneySteps.length}
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
          <Link href="/appointment">Take the First Step</Link>
        </Button>
      </Reveal>
    </Section>
  );
}
