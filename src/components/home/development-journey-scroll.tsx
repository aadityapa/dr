"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

import {
  getLayoutMode,
  getMilestonePosition,
  getPathForLayout,
  getViewBox,
  JOURNEY_COLORS,
  MILESTONES,
  type LayoutMode,
} from "./journey/journey-constants";
import { JourneyChild } from "./journey/journey-child";
import { MilestoneMarker } from "./journey/milestone-marker";

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

function useLayoutMode() {
  const [mode, setMode] = useState<LayoutMode>("desktop");

  useEffect(() => {
    const update = () => setMode(getLayoutMode(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return mode;
}

export function DevelopmentJourneyScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const childRef = useRef<SVGGElement>(null);
  const challengeRef = useRef<SVGGElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const layoutMode = useLayoutMode();
  const pathD = getPathForLayout(layoutMode);
  const viewBox = getViewBox(layoutMode);

  useGSAP(
    () => {
      if (reducedMotion || !sectionRef.current || !pathRef.current || !childRef.current) return;

      const path = pathRef.current;
      const child = childRef.current;
      const milestones = gsap.utils.toArray<SVGGElement>(".journey-milestone");
      const pathLength = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      gsap.set(milestones, {
        opacity: 0.3,
        scale: 0.82,
        transformOrigin: "center center",
      });

      gsap.set(child, { opacity: 0, scale: 0.9, transformOrigin: "center bottom" });

      if (challengeRef.current) {
        gsap.set(challengeRef.current, { opacity: 1, scale: 1 });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: layoutMode === "mobile" ? "+=220%" : "+=200%",
          pin: pinRef.current,
          scrub: 0.65,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Child fades in at journey start
      tl.to(child, { opacity: 1, scale: 1, duration: 0.06, ease: "power2.out" }, 0);

      // Challenges fade as child begins walking
      if (challengeRef.current) {
        tl.to(challengeRef.current, { opacity: 0, scale: 0.85, duration: 0.1, ease: "power1.in" }, 0.04);
      }

      // Progressive path draw
      tl.to(path, { strokeDashoffset: 0, ease: "none", duration: 1 }, 0);

      // Child walks along path
      tl.to(
        child,
        {
          motionPath: {
            path,
            align: path,
            alignOrigin: [0.5, 1],
            autoRotate: false,
          },
          ease: "none",
          duration: 1,
        },
        0,
      );

      // Milestones illuminate as child reaches them
      MILESTONES.forEach((milestone, i) => {
        const el = milestones[i];
        if (!el) return;

        const start = Math.max(0, milestone.progress - 0.04);
        tl.to(
          el,
          {
            opacity: 1,
            scale: 1.06,
            duration: 0.1,
            ease: "power2.out",
          },
          start,
        );

        const bg = el.querySelector(".journey-milestone-bg");
        if (bg) {
          tl.to(
            bg,
            {
              attr: { r: 44 },
              duration: 0.08,
              ease: "sine.out",
            },
            start,
          );
        }
      });

      // Subtle bounce while scrolling
      const bounceTween = gsap.to(child, {
        y: 4,
        duration: 0.35,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        paused: true,
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: layoutMode === "mobile" ? "+=220%" : "+=200%",
        onEnter: () => bounceTween.play(),
        onLeave: () => bounceTween.pause(),
        onEnterBack: () => bounceTween.play(),
        onLeaveBack: () => bounceTween.pause(),
      });

      // Leg walk cycle
      const legLeft = child.querySelector(".journey-leg-left");
      const legRight = child.querySelector(".journey-leg-right");

      if (legLeft && legRight) {
        gsap.to(legLeft, {
          rotation: 18,
          transformOrigin: "top center",
          duration: 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(legRight, {
          rotation: -18,
          transformOrigin: "top center",
          duration: 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.15,
        });
      }

      // Blink
      const eyes = child.querySelector(".journey-child-eyes");
      if (eyes) {
        gsap.to(eyes, {
          scaleY: 0.15,
          transformOrigin: "center center",
          duration: 0.1,
          repeat: -1,
          repeatDelay: 2.8,
          yoyo: true,
          ease: "power1.inOut",
        });
      }

      // Wave near thrive
      const armRight = child.querySelector(".journey-arm-right");
      if (armRight) {
        gsap.fromTo(
          armRight,
          { rotation: 0, transformOrigin: "10px 12px" },
          {
            rotation: -28,
            duration: 0.45,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: layoutMode === "mobile" ? "+=220%" : "+=200%",
              scrub: 0.5,
              onUpdate: (self) => {
                gsap.set(armRight, { rotation: self.progress > 0.82 ? -28 * Math.sin(self.progress * 20) : 0 });
              },
            },
          },
        );
      }

      return () => {
        bounceTween.kill();
      };
    },
    { scope: sectionRef, dependencies: [reducedMotion, layoutMode, pathD] },
  );

  const startPoint = layoutMode === "mobile" ? { x: 200, y: 70 } : { x: 90, y: 400 };
  const endProgress = reducedMotion ? 1 : 0;
  const activeMilestones = reducedMotion
    ? new Set(MILESTONES.map((m) => m.id))
    : new Set<string>();

  return (
    <div ref={sectionRef} className="relative bg-[color:var(--color-snow)]">
      <Section className="!py-10 md:!py-14">
        <SectionHeading
          kicker="Your Child's Journey"
          title="From first steps to everyday confidence"
          description="Scroll to follow a gentle path — how children grow through assessment, therapy, and thriving independence."
          center
        />
      </Section>

      <div ref={pinRef} className="relative flex min-h-[70vh] items-center justify-center overflow-hidden md:min-h-screen">
        {/* Soft ambient blobs */}
        <div
          className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full opacity-40 blur-3xl"
          style={{ background: JOURNEY_COLORS.blue }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-16 bottom-10 h-56 w-56 rounded-full opacity-35 blur-3xl"
          style={{ background: JOURNEY_COLORS.peach }}
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-6xl px-2 md:px-6">
          <svg
            viewBox={viewBox}
            className="h-auto w-full will-change-transform"
            style={{ maxHeight: layoutMode === "mobile" ? "85vh" : "72vh" }}
            role="img"
            aria-label="Animated journey from challenges through therapy to thriving"
          >
            <defs>
              <linearGradient id="journey-path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={JOURNEY_COLORS.pathStroke} />
                <stop offset="50%" stopColor={JOURNEY_COLORS.sageAccent} stopOpacity="0.6" />
                <stop offset="100%" stopColor={JOURNEY_COLORS.peachAccent} stopOpacity="0.5" />
              </linearGradient>
              <filter id="journey-soft-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background path track */}
            <path
              d={pathD}
              fill="none"
              stroke={JOURNEY_COLORS.pathStroke}
              strokeWidth={layoutMode === "mobile" ? 6 : 8}
              strokeLinecap="round"
              opacity="0.25"
            />

            {/* Animated journey path */}
            <path
              ref={pathRef}
              id="journey-motion-path"
              d={pathD}
              fill="none"
              stroke="url(#journey-path-gradient)"
              strokeWidth={layoutMode === "mobile" ? 6 : 8}
              strokeLinecap="round"
              filter="url(#journey-soft-glow)"
              style={
                reducedMotion
                  ? { strokeDasharray: "none", strokeDashoffset: 0 }
                  : { willChange: "stroke-dashoffset" }
              }
            />

            {/* Starting challenges — soft abstract shapes */}
            <g
              ref={challengeRef}
              transform={`translate(${startPoint.x - (layoutMode === "mobile" ? 0 : 30)}, ${startPoint.y - (layoutMode === "mobile" ? 50 : 20)})`}
              opacity={reducedMotion ? 0 : 1}
            >
              <ellipse cx="-28" cy="-8" rx="18" ry="12" fill={JOURNEY_COLORS.lavender} opacity="0.55" />
              <ellipse cx="24" cy="-14" rx="14" ry="10" fill={JOURNEY_COLORS.peach} opacity="0.5" />
              <path
                d="M -8 -22 Q 0 -30 8 -22"
                fill="none"
                stroke={JOURNEY_COLORS.coralAccent}
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.35"
              />
            </g>

            {/* Milestone markers */}
            {MILESTONES.map((milestone) => {
              const pos = getMilestonePosition(milestone, layoutMode);
              return (
                <MilestoneMarker
                  key={milestone.id}
                  milestone={milestone}
                  x={pos.x}
                  y={pos.y}
                  active={reducedMotion || activeMilestones.has(milestone.id)}
                />
              );
            })}

            {/* Walking child */}
            <g
              ref={childRef}
              transform={
                reducedMotion
                  ? `translate(${getMilestonePosition(MILESTONES[MILESTONES.length - 1]!, layoutMode).x}, ${getMilestonePosition(MILESTONES[MILESTONES.length - 1]!, layoutMode).y + 20})`
                  : `translate(${startPoint.x}, ${startPoint.y})`
              }
              style={{ willChange: "transform", opacity: reducedMotion ? 1 : undefined }}
            >
              <JourneyChild walking={!reducedMotion} waving={reducedMotion || endProgress > 0.82} />
            </g>
          </svg>

          <p className="mt-4 text-center text-xs text-[color:var(--color-muted)] md:mt-6">
            {reducedMotion
              ? "Every milestone leads toward confident independence."
              : "Scroll to walk the path together"}
          </p>
        </div>
      </div>
    </div>
  );
}
