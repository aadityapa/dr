"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookOpen, ClipboardCheck, HeartHandshake, Sparkles, Star } from "lucide-react";
import { useRef } from "react";

const STAGES = [
  { label: "Assessment", Icon: ClipboardCheck, bg: "#D6E8F5", active: "#3D7AB5" },
  { label: "Therapy", Icon: HeartHandshake, bg: "#C8EEF0", active: "#2A9DA8" },
  { label: "Learning", Icon: BookOpen, bg: "#E4DDF5", active: "#7B5BB5" },
  { label: "Confidence", Icon: Star, bg: "#FCE8DC", active: "#D4845C" },
  { label: "Independence", Icon: Sparkles, bg: "#D8F0E4", active: "#4A9B73" },
];

gsap.registerPlugin(ScrollTrigger);

export function ChildJourneyScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<HTMLDivElement>(null);
  const walkerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced || !sectionRef.current || !walkerRef.current) return;

      const stageEls = gsap.utils.toArray<HTMLElement>(".journey-stage-pill");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=180%",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      tl.to(walkerRef.current, { left: "calc(100% - 4rem)", ease: "none" }, 0);
      if (progressRef.current) {
        tl.to(progressRef.current, { scaleX: 1, ease: "none" }, 0);
      }

      stageEls.forEach((el, i) => {
        const t = i / (STAGES.length - 1);
        tl.to(
          el,
          {
            backgroundColor: STAGES[i].active,
            color: "#ffffff",
            scale: 1.08,
            boxShadow: "0 8px 24px rgba(47,77,59,0.18)",
            duration: 0.15,
          },
          t,
        );
        if (i > 0) {
          tl.to(
            stageEls[i - 1],
            {
              backgroundColor: STAGES[i - 1].bg,
              color: STAGES[i - 1].active,
              scale: 1,
              boxShadow: "none",
              duration: 0.15,
            },
            t,
          );
        }
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[color:var(--color-snow)]"
      aria-label="Your child's therapy journey"
    >
      <div className="mx-auto w-full max-w-5xl px-4 py-16 md:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-sage-text)]">
          Your Child&apos;s Journey
        </p>
        <h2 className="mt-3 text-center font-[family-name:var(--font-serif)] text-3xl text-[color:var(--color-sage-dark)] md:text-4xl">
          From first visit to everyday confidence
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-sm leading-relaxed text-[color:var(--color-muted)]">
          Scroll to walk through how children grow with us — one meaningful step at a time.
        </p>

        <div ref={pathRef} className="relative mt-16">
          <div className="absolute left-8 right-8 top-1/2 h-1 -translate-y-1/2 overflow-hidden rounded-full bg-[color:var(--color-border)]">
            <div
              ref={progressRef}
              className="h-full origin-left scale-x-0 rounded-full bg-[color:var(--color-sage)]"
            />
          </div>

          <div
            ref={walkerRef}
            className="absolute left-8 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[color:var(--color-sage-dark)] text-2xl shadow-lg transition-shadow"
            aria-hidden="true"
          >
            🧒
          </div>

          <div className="flex justify-between gap-2 pt-20">
            {STAGES.map((stage) => (
              <div
                key={stage.label}
                className="journey-stage-pill flex flex-col items-center gap-2 rounded-2xl px-2 py-3 text-center transition-all sm:px-3"
                style={{ backgroundColor: stage.bg, color: stage.active }}
              >
                <stage.Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span className="text-[10px] font-semibold leading-tight sm:text-xs">{stage.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
