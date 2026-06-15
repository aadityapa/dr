"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useMemo, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

type LayoutMode = "desktop" | "mobile";
function useLayoutMode() {
  const [mode, setMode] = useState<LayoutMode>("desktop");

  useEffect(() => {
    const update = () => setMode(window.innerWidth < 768 ? "mobile" : "desktop");
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return mode;
}

// Background blob morph paths (same command structure).
const BLOB_A =
  "M 210 120 C 310 40 450 40 560 115 C 670 190 700 290 645 365 C 590 440 470 470 360 440 C 250 410 170 320 180 230 C 186 175 195 145 210 120 Z";
const BLOB_B =
  "M 210 120 C 330 55 470 20 585 130 C 700 240 690 310 630 390 C 570 470 450 470 340 440 C 230 410 160 320 180 230 C 195 165 195 145 210 120 Z";
const BLOB_C =
  "M 210 120 C 320 35 465 65 585 135 C 705 205 725 315 655 395 C 585 475 455 465 345 440 C 235 415 150 330 180 230 C 202 168 195 145 210 120 Z";

const PATH_DESKTOP = "M 140 420 C 260 360 330 320 430 332 C 540 346 565 416 705 394 C 835 372 792 302 860 260";
const PATH_MOBILE = "M 130 420 C 240 380 300 360 380 350 C 460 340 520 350 600 360 C 680 370 750 340 820 290";

export function HomeStoryScene() {
  const containerRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const blobRef = useRef<SVGPathElement>(null);
  const pathDrawRef = useRef<SVGPathElement>(null);
  const motionPathRef = useRef<SVGPathElement>(null);
  const childRef = useRef<SVGGElement>(null);
  const legLRef = useRef<SVGRectElement>(null);
  const legRRef = useRef<SVGRectElement>(null);
  const eyeLRef = useRef<SVGCircleElement>(null);
  const eyeRRef = useRef<SVGCircleElement>(null);
  const armLRef = useRef<SVGPathElement>(null);

  const cloudsRef = useRef<SVGGElement>(null);
  const leavesRef = useRef<SVGGElement>(null);
  const butterfliesRef = useRef<SVGGElement>(null);
  const butterfly1Ref = useRef<SVGGElement>(null);
  const butterfly2Ref = useRef<SVGGElement>(null);
  const butterflyPath1Ref = useRef<SVGPathElement>(null);
  const butterflyPath2Ref = useRef<SVGPathElement>(null);

  const ms1Ref = useRef<SVGGElement>(null);
  const ms2Ref = useRef<SVGGElement>(null);
  const ms3Ref = useRef<SVGGElement>(null);
  const ms4Ref = useRef<SVGGElement>(null);
  const ms5Ref = useRef<SVGGElement>(null);

  const reducedMotion = usePrefersReducedMotion();
  const layoutMode = useLayoutMode();

  const motionD = useMemo(() => (layoutMode === "mobile" ? PATH_MOBILE : PATH_DESKTOP), [layoutMode]);

  useGSAP(
    () => {
      if (!containerRef.current || !svgRef.current) return;

      const prefersReduced = reducedMotion;
      const pathDraw = pathDrawRef.current;
      const motionPath = motionPathRef.current;
      const child = childRef.current;
      const blob = blobRef.current;

      const milestones = [ms1Ref.current, ms2Ref.current, ms3Ref.current, ms4Ref.current, ms5Ref.current].filter(
        Boolean,
      ) as SVGGElement[];

      const cleanupTweens: gsap.core.Animation[] = [];

      // Initial state
      if (pathDraw) {
        const len = pathDraw.getTotalLength();
        gsap.set(pathDraw, { strokeDasharray: len, strokeDashoffset: len });
      }
      gsap.set(milestones, { opacity: 0, scale: 0.9, transformOrigin: "center center" });
      gsap.set(".hss-flower", { opacity: 0, scale: 0.7, transformOrigin: "center center" });

      if (child) {
        gsap.set(child, { opacity: 1 });
        gsap.set([legLRef.current, legRRef.current], { transformOrigin: "50% 0%" });
      }

      // Reduced motion: show a calm final state.
      if (prefersReduced) {
        if (pathDraw) gsap.set(pathDraw, { strokeDashoffset: 0, opacity: 0.65 });
        gsap.set(milestones, { opacity: 1, scale: 1 });
        gsap.set(".hss-flower", { opacity: 1, scale: 1 });
        if (child && motionPath) {
          gsap.set(child, { motionPath: { path: motionPath, align: motionPath, alignOrigin: [0.5, 0.5], end: 1 } });
        }
        if (blob) gsap.set(blob, { attr: { d: BLOB_C } });
        return;
      }

      // Gentle idle animations (only while near viewport).
      const idle = gsap.timeline({ paused: true });
      if (cloudsRef.current) {
        idle.to(cloudsRef.current, { y: -6, duration: 5.4, ease: "sine.inOut", yoyo: true, repeat: -1 }, 0);
      }
      if (leavesRef.current) {
        idle.to(leavesRef.current, { rotate: 1.2, transformOrigin: "center center", duration: 3.4, ease: "sine.inOut", yoyo: true, repeat: -1 }, 0);
      }
      if (butterfliesRef.current) {
        idle.to(butterfliesRef.current, { y: -4, duration: 2.8, ease: "sine.inOut", yoyo: true, repeat: -1 }, 0);
      }
      cleanupTweens.push(idle);

      // Butterfly flight loops (very subtle, premium).
      if (butterfly1Ref.current && butterflyPath1Ref.current) {
        cleanupTweens.push(
          gsap.to(butterfly1Ref.current, {
            motionPath: {
              path: butterflyPath1Ref.current,
              align: butterflyPath1Ref.current,
              alignOrigin: [0.5, 0.5],
              autoRotate: false,
            },
            duration: 7.5,
            repeat: -1,
            ease: "none",
          }),
        );
      }
      if (butterfly2Ref.current && butterflyPath2Ref.current) {
        cleanupTweens.push(
          gsap.to(butterfly2Ref.current, {
            motionPath: {
              path: butterflyPath2Ref.current,
              align: butterflyPath2Ref.current,
              alignOrigin: [0.5, 0.5],
              autoRotate: false,
            },
            duration: 8.4,
            repeat: -1,
            ease: "none",
          }),
        );
      }

      // Blink (subtle)
      const blink = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 4.2 });
      if (eyeLRef.current && eyeRRef.current) {
        blink.to([eyeLRef.current, eyeRRef.current], { scaleY: 0.15, duration: 0.08, transformOrigin: "center center" })
          .to([eyeLRef.current, eyeRRef.current], { scaleY: 1, duration: 0.12 }, "+=0.06");
      }
      cleanupTweens.push(blink);

      // Walk cycle driven by scroll progress (no bouncy cartooning).
      const walk = gsap.timeline({ paused: true });
      if (legLRef.current && legRRef.current) {
        walk
          .to(legLRef.current, { rotate: 10, duration: 0.5, ease: "sine.inOut" }, 0)
          .to(legRRef.current, { rotate: -10, duration: 0.5, ease: "sine.inOut" }, 0)
          .to(legLRef.current, { rotate: -10, duration: 0.5, ease: "sine.inOut" }, 0.5)
          .to(legRRef.current, { rotate: 10, duration: 0.5, ease: "sine.inOut" }, 0.5);
      }
      if (armLRef.current) {
        walk.to(armLRef.current, { rotate: 6, duration: 0.5, ease: "sine.inOut", transformOrigin: "10% 15%" }, 0).to(
          armLRef.current,
          { rotate: -4, duration: 0.5, ease: "sine.inOut" },
          0.5,
        );
      }
      cleanupTweens.push(walk);

      // Main scroll-told timeline (compact section; no pin).
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 20%",
          scrub: 0.9,
          onEnter: () => {
            idle.play();
            blink.play();
          },
          onEnterBack: () => {
            idle.play();
            blink.play();
          },
          onLeave: () => {
            idle.pause();
            blink.pause();
          },
          onLeaveBack: () => {
            idle.pause();
            blink.pause();
          },
          onUpdate: (self) => {
            // Drive the walk cycle from scroll progress.
            walk.progress((self.progress * 6) % 1);
          },
        },
      });

      // Scroll-linked atmosphere (subtle, premium).
      if (cloudsRef.current) {
        tl.to(cloudsRef.current, { x: -18, duration: 1, ease: "none" }, 0);
      }
      if (butterfliesRef.current) {
        tl.to(butterfliesRef.current, { x: 14, duration: 1, ease: "none" }, 0.02);
      }

      if (pathDraw) {
        tl.to(pathDraw, { strokeDashoffset: 0, duration: 0.45, ease: "none" }, 0);
      }

      // Pathway progress (child stays inside the scene).
      if (child && motionPath) {
        tl.to(
          child,
          {
            motionPath: {
              path: motionPath,
              align: motionPath,
              alignOrigin: [0.5, 0.5],
              autoRotate: false,
              start: 0,
              end: 1,
            },
            ease: "none",
            duration: 1,
          },
          0,
        );
      }

      // Bloom + gentle emphasis
      tl.to(".hss-flower", { opacity: 1, scale: 1, duration: 0.25, ease: "power2.out", stagger: 0.06 }, 0.08);

      // Premium morph (subtle)
      if (blob) {
        tl.to(blob, { attr: { d: BLOB_B }, duration: 0.3, ease: "none" }, 0.25).to(
          blob,
          { attr: { d: BLOB_C }, duration: 0.3, ease: "none" },
          0.62,
        );
      }

      const appear = (el: SVGGElement | null, at: number) => {
        if (!el) return;
        tl.to(el, { opacity: 1, scale: 1, duration: 0.18, ease: "power2.out" }, at);
      };
      appear(ms1Ref.current, 0.12);
      appear(ms2Ref.current, 0.28);
      appear(ms3Ref.current, 0.46);
      appear(ms4Ref.current, 0.66);
      appear(ms5Ref.current, 0.82);

      // Soft glow pulse at the end (subtle, premium).
      tl.to(
        ".hss-glow",
        { opacity: 0.9, duration: 0.12, ease: "sine.inOut", stagger: 0.04 },
        0.86,
      ).to(
        ".hss-glow",
        { opacity: 0.55, duration: 0.12, ease: "sine.inOut", stagger: 0.04 },
        0.92,
      );

      cleanupTweens.push(tl);

      return () => cleanupTweens.forEach((t) => t.kill());
    },
    { scope: containerRef, dependencies: [reducedMotion, motionD] },
  );

  return (
    <section ref={containerRef} className="bg-[color:var(--color-snow)]">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 md:px-8 md:py-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.35fr]">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-sage-text)]">
              The Journey
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-serif)] text-3xl leading-tight text-[color:var(--color-sage-dark)] md:text-4xl">
              A beautiful illustrated story of growth
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)] md:text-base">
              Scroll gently. Watch the pathway draw, milestones bloom, and confidence appear—step by step.
            </p>
          </div>

          <div className="relative h-[58vh] min-h-[360px] max-h-[560px] w-full overflow-hidden rounded-[2rem] ring-1 ring-[color:var(--color-border)]/50">
            <svg
              ref={svgRef}
              viewBox="0 0 1000 520"
              className="h-full w-full"
              role="img"
              aria-label="A warm illustrated therapy journey with milestones integrated into a single scene"
              style={{ willChange: "transform" }}
            >
              <defs>
                <linearGradient id="hss-bg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-snow)" />
                  <stop offset="55%" stopColor="var(--color-almond)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="var(--color-snow)" />
                </linearGradient>
                <linearGradient id="hss-path" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--pastel-blue)" />
                  <stop offset="45%" stopColor="var(--pastel-mint)" />
                  <stop offset="100%" stopColor="var(--pastel-peach)" />
                </linearGradient>
                <filter id="hss-soft" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="10" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="hss-bubble" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="6" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <rect x="0" y="0" width="1000" height="520" fill="url(#hss-bg)" />

              {/* Soft background shapes (subtle, no giant objects) */}
              <path
                ref={blobRef}
                d={BLOB_A}
                transform="translate(170 30) scale(1.25)"
                fill="var(--color-soft-sage)"
                opacity="0.45"
                filter="url(#hss-soft)"
              />

              {/* Clouds */}
              <g ref={cloudsRef} opacity="0.55" transform="translate(0 0)">
                <g transform="translate(720 92)">
                  <ellipse cx="0" cy="0" rx="66" ry="26" fill="white" opacity="0.9" />
                  <ellipse cx="-42" cy="6" rx="34" ry="16" fill="white" opacity="0.82" />
                  <ellipse cx="48" cy="9" rx="30" ry="15" fill="white" opacity="0.8" />
                </g>
                <g transform="translate(320 120)" opacity="0.95">
                  <ellipse cx="0" cy="0" rx="52" ry="22" fill="white" opacity="0.85" />
                  <ellipse cx="-32" cy="7" rx="26" ry="14" fill="white" opacity="0.75" />
                  <ellipse cx="34" cy="9" rx="22" ry="12" fill="white" opacity="0.72" />
                </g>
              </g>

              {/* Meadow */}
              <path
                d="M 0 410 C 160 380 310 395 470 425 C 650 458 800 448 1000 410 L 1000 520 L 0 520 Z"
                fill="var(--color-almond)"
                opacity="0.9"
              />
              <path
                d="M 0 438 C 210 410 360 430 520 462 C 690 497 840 490 1000 450 L 1000 520 L 0 520 Z"
                fill="var(--color-soft-sage)"
                opacity="0.35"
              />

              {/* Pathway (thick ribbon, not a thin line) */}
              <path
                d={motionD}
                fill="none"
                stroke="white"
                strokeOpacity="0.85"
                strokeWidth="46"
                strokeLinecap="round"
              />
              <path
                d={motionD}
                fill="none"
                stroke="var(--color-border)"
                strokeOpacity="0.25"
                strokeWidth="52"
                strokeLinecap="round"
              />
              <path
                ref={pathDrawRef}
                d={motionD}
                fill="none"
                stroke="url(#hss-path)"
                strokeOpacity="0.65"
                strokeWidth="10"
                strokeLinecap="round"
              />
              {/* Hidden motion path */}
              <path ref={motionPathRef} d={motionD} fill="none" stroke="transparent" strokeWidth="1" />

              {/* Hidden butterfly loops (for gentle flight) */}
              <path
                ref={butterflyPath1Ref}
                d="M 610 160 C 640 140 680 140 710 160 C 740 180 740 210 710 226 C 680 242 640 242 610 226 C 580 210 580 180 610 160"
                fill="none"
                stroke="transparent"
              />
              <path
                ref={butterflyPath2Ref}
                d="M 420 92 C 446 78 480 84 496 104 C 512 124 502 152 476 160 C 450 168 422 152 414 132 C 408 116 408 102 420 92"
                fill="none"
                stroke="transparent"
              />

              {/* Trees + leaves */}
              <g ref={leavesRef} opacity="0.95">
                <g transform="translate(210 250)">
                  <rect x="-8" y="58" width="16" height="70" rx="8" fill="var(--color-sage-dark)" opacity="0.18" />
                  <circle cx="0" cy="52" r="34" fill="var(--pastel-mint)" opacity="0.95" />
                  <circle cx="-26" cy="60" r="22" fill="var(--pastel-blue)" opacity="0.55" />
                  <circle cx="26" cy="62" r="20" fill="var(--pastel-peach)" opacity="0.5" />
                </g>
                <g transform="translate(835 235)">
                  <rect x="-7" y="62" width="14" height="62" rx="7" fill="var(--color-sage-dark)" opacity="0.18" />
                  <circle cx="0" cy="56" r="30" fill="var(--pastel-lavender)" opacity="0.78" />
                  <circle cx="-22" cy="66" r="18" fill="var(--pastel-mint)" opacity="0.6" />
                  <circle cx="22" cy="66" r="16" fill="var(--pastel-peach)" opacity="0.45" />
                </g>
              </g>

              {/* Flowers (bloom) */}
              <g opacity="0.95">
                {[
                  { x: 300, y: 430, c: "var(--pastel-coral)" },
                  { x: 380, y: 450, c: "var(--pastel-lavender)" },
                  { x: 520, y: 458, c: "var(--pastel-peach)" },
                  { x: 610, y: 440, c: "var(--pastel-blue)" },
                  { x: 700, y: 458, c: "var(--pastel-mint)" },
                  { x: 820, y: 420, c: "var(--pastel-coral)" },
                ].map((f, idx) => (
                  <g key={idx} className="hss-flower" transform={`translate(${f.x} ${f.y})`}>
                    <circle cx="0" cy="0" r="6" fill={f.c} opacity="0.9" />
                    <circle cx="-10" cy="0" r="5" fill="white" opacity="0.75" />
                    <circle cx="10" cy="0" r="5" fill="white" opacity="0.65" />
                    <circle cx="0" cy="-10" r="5" fill="white" opacity="0.7" />
                    <circle cx="0" cy="10" r="5" fill="white" opacity="0.65" />
                  </g>
                ))}
              </g>

              {/* Butterflies */}
              <g ref={butterfliesRef} opacity="0.7">
                <g ref={butterfly1Ref} transform="translate(610 160)">
                  <path
                    d="M 0 0 C -10 -14 -22 -12 -22 2 C -22 18 -8 18 0 8 C 8 18 22 18 22 2 C 22 -12 10 -14 0 0 Z"
                    fill="var(--pastel-peach)"
                    opacity="0.75"
                  />
                </g>
                <g ref={butterfly2Ref} transform="translate(420 92)" opacity="0.85">
                  <path
                    d="M 0 0 C -8 -12 -18 -10 -18 2 C -18 14 -6 14 0 6 C 6 14 18 14 18 2 C 18 -10 8 -12 0 0 Z"
                    fill="var(--pastel-lavender)"
                    opacity="0.7"
                  />
                </g>
              </g>

              {/* Milestone bubbles (integrated into the scene) */}
              <g ref={ms1Ref} transform="translate(230 320)" filter="url(#hss-bubble)">
                <g>
                  <rect x="-92" y="-30" width="184" height="62" rx="22" fill="white" opacity="0.9" />
                  <rect x="-92" y="-30" width="184" height="62" rx="22" fill="var(--pastel-blue)" opacity="0.12" className="hss-glow" />
                  <circle cx="-64" cy="1" r="16" fill="var(--pastel-blue)" opacity="0.85" />
                  <path
                    d="M -64 6 C -72 0 -76 -4 -76 -10 C -76 -16 -72 -20 -66 -20 C -62 -20 -60 -18 -58 -14 C -56 -18 -54 -20 -50 -20 C -44 -20 -40 -16 -40 -10 C -40 -4 -44 0 -52 6 L -58 10 Z"
                    fill="var(--color-terracotta)"
                    opacity="0.32"
                  />
                  <text x="-40" y="-4" fontSize="11" fill="var(--color-sage-text)" opacity="0.9">
                    First Conversation
                  </text>
                  <text x="-40" y="14" fontSize="10" fill="var(--color-muted)" opacity="0.9">
                    Safety • trust • comfort
                  </text>
                </g>
              </g>

              <g ref={ms2Ref} transform="translate(410 260)" filter="url(#hss-bubble)">
                <rect x="-98" y="-30" width="196" height="62" rx="22" fill="white" opacity="0.9" />
                <rect x="-98" y="-30" width="196" height="62" rx="22" fill="var(--pastel-mint)" opacity="0.12" className="hss-glow" />
                <circle cx="-70" cy="1" r="16" fill="var(--pastel-mint)" opacity="0.85" />
                <path
                  d="M -78 -6 h 8 v 8 h -8 Z M -66 -6 h 8 v 8 h -8 Z M -72 6 h 8 v 8 h -8 Z"
                  fill="white"
                  opacity="0.85"
                />
                <text x="-46" y="-4" fontSize="11" fill="var(--color-sage-text)" opacity="0.9">
                  Understanding Strengths
                </text>
                <text x="-46" y="14" fontSize="10" fill="var(--color-muted)" opacity="0.9">
                  What helps • what’s hard
                </text>
              </g>

              <g ref={ms3Ref} transform="translate(585 310)" filter="url(#hss-bubble)">
                <rect x="-96" y="-30" width="192" height="62" rx="22" fill="white" opacity="0.9" />
                <rect x="-96" y="-30" width="192" height="62" rx="22" fill="var(--pastel-peach)" opacity="0.12" className="hss-glow" />
                <circle cx="-68" cy="1" r="16" fill="var(--pastel-peach)" opacity="0.85" />
                <path
                  d="M -76 6 C -72 -6 -60 -10 -52 -2 C -60 10 -72 12 -76 6 Z"
                  fill="var(--color-sage)"
                  opacity="0.55"
                />
                <circle cx="-58" cy="-6" r="3" fill="var(--color-sun)" opacity="0.35" />
                <text x="-44" y="-4" fontSize="11" fill="var(--color-sage-text)" opacity="0.9">
                  Therapy Through Play
                </text>
                <text x="-44" y="14" fontSize="10" fill="var(--color-muted)" opacity="0.9">
                  Movement • games • skills
                </text>
              </g>

              <g ref={ms4Ref} transform="translate(735 290)" filter="url(#hss-bubble)">
                <rect x="-88" y="-30" width="176" height="62" rx="22" fill="white" opacity="0.9" />
                <rect x="-88" y="-30" width="176" height="62" rx="22" fill="var(--pastel-lavender)" opacity="0.12" className="hss-glow" />
                <circle cx="-60" cy="1" r="16" fill="var(--pastel-lavender)" opacity="0.85" />
                <path
                  d="M -60 -12 L -55 -2 L -44 -2 L -53 4 L -49 14 L -60 8 L -71 14 L -67 4 L -76 -2 L -65 -2 Z"
                  fill="var(--color-sun)"
                  opacity="0.4"
                />
                <text x="-36" y="-4" fontSize="11" fill="var(--color-sage-text)" opacity="0.9">
                  Growing Confidence
                </text>
                <text x="-36" y="14" fontSize="10" fill="var(--color-muted)" opacity="0.9">
                  More “I can”
                </text>
              </g>

              <g ref={ms5Ref} transform="translate(860 210)" filter="url(#hss-bubble)">
                <rect x="-92" y="-30" width="184" height="62" rx="22" fill="white" opacity="0.9" />
                <rect x="-92" y="-30" width="184" height="62" rx="22" fill="var(--pastel-coral)" opacity="0.12" className="hss-glow" />
                <circle cx="-64" cy="1" r="16" fill="var(--pastel-coral)" opacity="0.85" />
                <path
                  d="M -64 -4 C -80 -18 -88 -20 -88 -30 C -88 -40 -80 -46 -70 -46 C -64 -46 -60 -43 -58 -38 C -56 -43 -52 -46 -46 -46 C -36 -46 -28 -40 -28 -30 C -28 -20 -36 -18 -52 -4 L -58 2 Z"
                  fill="var(--color-terracotta)"
                  opacity="0.25"
                />
                <text x="-40" y="-4" fontSize="11" fill="var(--color-sage-text)" opacity="0.9">
                  Thriving Participation
                </text>
                <text x="-40" y="14" fontSize="10" fill="var(--color-muted)" opacity="0.9">
                  Home • school • play
                </text>
              </g>

              {/* Child (premium vector; stays inside illustration) */}
              <g ref={childRef} transform="translate(140 420)">
                <g transform="translate(0 -24)">
                  {/* shadow */}
                  <ellipse cx="0" cy="42" rx="18" ry="6" fill="rgba(47,77,59,0.10)" />

                  {/* body */}
                  <g transform="translate(0 0)">
                    <rect x="-12" y="16" width="24" height="26" rx="10" fill="var(--pastel-mint)" opacity="0.95" />
                    <path
                      ref={armLRef}
                      d="M -10 24 C -26 22 -34 16 -44 8"
                      fill="none"
                      stroke="var(--color-sage)"
                      strokeOpacity="0.45"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 10 24 C 22 26 30 28 38 34"
                      fill="none"
                      stroke="var(--color-terracotta)"
                      strokeOpacity="0.25"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                  </g>

                  {/* head */}
                  <g transform="translate(0 0)">
                    <circle cx="0" cy="0" r="12" fill="var(--color-almond)" opacity="0.98" />
                    <path d="M -8 -6 C -4 -12 4 -12 8 -6" fill="var(--color-sage-dark)" opacity="0.22" />
                    <circle ref={eyeLRef} cx="-4" cy="-1" r="1.2" fill="var(--color-sage-dark)" opacity="0.35" />
                    <circle ref={eyeRRef} cx="4" cy="-1" r="1.2" fill="var(--color-sage-dark)" opacity="0.35" />
                    <path
                      d="M -3 5 C -1 7 1 7 3 5"
                      fill="none"
                      stroke="var(--color-sage-dark)"
                      strokeOpacity="0.24"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </g>

                  {/* legs */}
                  <g transform="translate(0 0)">
                    <rect ref={legLRef} x="-10" y="40" width="8" height="14" rx="4" fill="var(--color-sage-text)" opacity="0.75" />
                    <rect ref={legRRef} x="2" y="40" width="8" height="14" rx="4" fill="var(--color-sage-text)" opacity="0.65" />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

