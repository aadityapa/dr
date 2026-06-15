"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { CSSProperties, RefObject } from "react";
import { useEffect, useRef, useState } from "react";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

gsap.registerPlugin(ScrollTrigger);

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

type LayoutMode = "desktop" | "tablet" | "mobile";
function useLayoutMode() {
  const [mode, setMode] = useState<LayoutMode>("desktop");

  useEffect(() => {
    const get = (w: number): LayoutMode => {
      if (w < 640) return "mobile";
      if (w < 1024) return "tablet";
      return "desktop";
    };

    const update = () => setMode(get(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return mode;
}

// Blob paths must share the same command structure for GSAP attr:{d} morphing.
// Each path is: M ... C ... C ... C ... C ... C ... Z
const BLOB_1 =
  "M 170 160 C 270 70 420 60 540 130 C 660 200 690 320 620 420 C 550 520 420 540 290 500 C 160 460 110 330 130 250 C 140 210 145 185 170 160 Z";
const BLOB_2 =
  "M 170 160 C 300 90 450 40 565 150 C 680 260 680 350 610 450 C 540 550 390 560 275 500 C 160 440 110 320 135 240 C 150 195 140 185 170 160 Z";
const BLOB_3 =
  "M 170 160 C 280 70 430 90 545 155 C 660 220 720 320 640 430 C 560 540 420 520 300 490 C 180 460 90 340 140 245 C 165 200 145 185 170 160 Z";
const BLOB_4 =
  "M 170 160 C 290 55 455 70 565 150 C 675 230 705 335 625 440 C 545 545 405 560 280 505 C 155 450 105 330 130 250 C 145 205 145 185 170 160 Z";
const BLOB_5 =
  "M 170 160 C 305 95 460 55 575 165 C 690 275 670 355 600 455 C 530 555 385 555 270 495 C 155 435 105 315 138 235 C 155 190 142 185 170 160 Z";
const BLOB_6 =
  "M 170 160 C 285 60 440 75 565 155 C 690 235 715 355 625 455 C 535 555 395 545 275 500 C 155 455 95 340 135 245 C 155 200 145 185 170 160 Z";

const SCENE_STEP = 430;

type StoryWorldSvgProps = {
  viewBoxHeight: number;
  className: string;
  style?: CSSProperties;
  worldRef: RefObject<SVGGElement | null>;
  blobRef: RefObject<SVGPathElement | null>;
  threadRef: RefObject<SVGPathElement | null>;
  layerBackRef: RefObject<SVGGElement | null>;
  layerFrontRef: RefObject<SVGGElement | null>;
};

function StoryWorldSvg({
  viewBoxHeight,
  className,
  style,
  worldRef,
  blobRef,
  threadRef,
  layerBackRef,
  layerFrontRef,
}: StoryWorldSvgProps) {
  return (
    <svg
      viewBox={`0 0 1000 ${viewBoxHeight}`}
      className={className}
      role="img"
      aria-label="A warm, illustrated story of assessment, therapy, and thriving confidence"
      style={style}
    >
      <defs>
        <linearGradient id="hsw-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-snow)" />
          <stop offset="60%" stopColor="var(--color-almond)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--color-snow)" />
        </linearGradient>
        <linearGradient id="hsw-thread" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-sage)" stopOpacity="0.45" />
          <stop offset="50%" stopColor="var(--color-terracotta)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--color-sage)" stopOpacity="0.35" />
        </linearGradient>
        <filter id="hsw-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect x="0" y="0" width="1000" height={viewBoxHeight} fill="url(#hsw-sky)" />

      <g ref={worldRef} style={{ willChange: "transform" }}>
        {/* BACK LAYER */}
        <g ref={layerBackRef} opacity="0.95">
          <path
            ref={blobRef}
            d={BLOB_1}
            transform="translate(170 40) scale(1.25)"
            fill="var(--color-soft-sage)"
            opacity="0.5"
            filter="url(#hsw-soft)"
          />

          {/* Soft clouds */}
          <g opacity="0.55">
            <g className="hsw-float" transform="translate(620 120)">
              <ellipse cx="0" cy="0" rx="68" ry="28" fill="var(--color-snow)" />
              <ellipse cx="-42" cy="6" rx="36" ry="18" fill="var(--color-snow)" opacity="0.9" />
              <ellipse cx="46" cy="8" rx="30" ry="16" fill="var(--color-snow)" opacity="0.85" />
            </g>
            <g className="hsw-float" transform="translate(260 240)">
              <ellipse cx="0" cy="0" rx="60" ry="25" fill="var(--color-snow)" opacity="0.95" />
              <ellipse cx="-38" cy="6" rx="30" ry="16" fill="var(--color-snow)" opacity="0.85" />
              <ellipse cx="40" cy="8" rx="28" ry="14" fill="var(--color-snow)" opacity="0.8" />
            </g>
          </g>

          {/* Story thread (connective motif) */}
          <path
            ref={threadRef}
            d="M 520 120 C 470 230 610 330 520 430 C 430 530 610 640 520 760 C 430 880 610 990 520 1110 C 430 1230 610 1340 520 1460 C 430 1580 610 1690 520 1810 C 430 1930 610 2040 520 2160 C 470 2260 520 2350 560 2420"
            fill="none"
            stroke="url(#hsw-thread)"
            strokeWidth="10"
            strokeLinecap="round"
            opacity="0.32"
          />
        </g>

        {/* MID LAYER (SCENES) */}
        <g opacity="1">
          {/* HERO */}
          <g transform="translate(0 0)">
            {/* Ground */}
            <path
              d="M 0 740 C 190 690 340 720 500 760 C 660 800 810 780 1000 740 L 1000 900 L 0 900 Z"
              fill="var(--color-almond)"
              opacity="0.85"
            />

            {/* Tree */}
            <g transform="translate(120 360)">
              <path
                className="hsw-pop"
                d="M 130 320 C 120 250 120 210 145 160 C 170 110 205 92 240 90 C 280 88 310 110 330 145 C 355 185 360 245 340 320"
                fill="var(--color-sage)"
                opacity="0.55"
              />
              <rect x="220" y="210" width="34" height="140" rx="16" fill="var(--color-sage-dark)" opacity="0.25" />
              <g className="hsw-float" transform="translate(250 150)">
                <circle cx="-40" cy="30" r="16" fill="var(--color-terracotta)" opacity="0.25" />
                <circle cx="50" cy="18" r="14" fill="var(--color-sage)" opacity="0.25" />
                <circle cx="18" cy="-10" r="12" fill="var(--color-almond)" opacity="0.35" />
              </g>
            </g>

            {/* Child + therapist */}
            <g transform="translate(520 520)">
              {/* Therapist */}
              <g className="hsw-pop" transform="translate(80 10)">
                <circle cx="0" cy="0" r="26" fill="var(--color-almond)" opacity="0.95" />
                <path d="M -14 -6 C -8 -22 8 -22 14 -6" fill="var(--color-sage-dark)" opacity="0.25" />
                <rect x="-24" y="22" width="48" height="68" rx="22" fill="var(--color-soft-sage)" opacity="0.9" />
                <path
                  d="M -20 55 C -55 70 -70 90 -80 112"
                  fill="none"
                  stroke="var(--color-sage)"
                  strokeOpacity="0.45"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              </g>

              {/* Child */}
              <g className="hsw-pop" transform="translate(0 35)">
                <circle cx="0" cy="0" r="22" fill="var(--color-almond)" opacity="0.98" />
                <rect x="-22" y="18" width="44" height="60" rx="18" fill="var(--color-lavender)" opacity="0.9" />
                <path
                  d="M 18 48 C 44 58 60 76 74 94"
                  fill="none"
                  stroke="var(--color-terracotta)"
                  strokeOpacity="0.35"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <circle cx="-7" cy="-2" r="2.4" fill="var(--color-sage-dark)" opacity="0.35" />
                <circle cx="7" cy="-2" r="2.4" fill="var(--color-sage-dark)" opacity="0.35" />
                <path
                  d="M -6 8 C -2 12 2 12 6 8"
                  fill="none"
                  stroke="var(--color-sage-dark)"
                  strokeOpacity="0.25"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </g>

              {/* Nature sparkles */}
              <g className="hsw-float" transform="translate(-80 -50)" opacity="0.55">
                <circle cx="0" cy="0" r="6" fill="var(--color-sun)" opacity="0.35" />
                <circle cx="24" cy="16" r="4" fill="var(--color-sage)" opacity="0.35" />
                <circle cx="-22" cy="22" r="5" fill="var(--color-terracotta)" opacity="0.25" />
              </g>
            </g>
          </g>

          {/* ASSESSMENT */}
          <g transform="translate(0 430)">
            <path
              d="M 0 740 C 200 700 340 730 500 770 C 660 810 820 790 1000 740 L 1000 900 L 0 900 Z"
              fill="var(--color-soft-sage)"
              opacity="0.55"
            />

            {/* Play hill */}
            <path
              d="M 80 720 C 180 610 320 610 420 720"
              fill="none"
              stroke="var(--color-sage)"
              strokeOpacity="0.25"
              strokeWidth="40"
              strokeLinecap="round"
            />

            {/* Child exploring */}
            <g transform="translate(520 520)">
              <g className="hsw-pop" transform="translate(-20 40)">
                <circle cx="0" cy="0" r="22" fill="var(--color-almond)" opacity="0.98" />
                <rect x="-22" y="18" width="44" height="62" rx="18" fill="var(--color-peach)" opacity="0.85" />
                <path
                  d="M 18 45 C 46 35 62 26 78 12"
                  fill="none"
                  stroke="var(--color-sage-dark)"
                  strokeOpacity="0.18"
                  strokeWidth="9"
                  strokeLinecap="round"
                />
              </g>

              {/* Magnifier + leaf */}
              <g className="hsw-pop" transform="translate(110 78)">
                <circle cx="0" cy="0" r="26" fill="none" stroke="var(--color-sage)" strokeOpacity="0.35" strokeWidth="8" />
                <path d="M 18 18 L 46 46" stroke="var(--color-sage)" strokeOpacity="0.35" strokeWidth="10" strokeLinecap="round" />
                <path
                  d="M -10 8 C -8 -10 10 -16 16 -2 C 22 12 6 20 -6 18 C -14 17 -12 12 -10 8 Z"
                  fill="var(--color-sage)"
                  opacity="0.28"
                />
              </g>
            </g>

            {/* Clipboard + heart infographic */}
            <g className="hsw-pop" transform="translate(170 520)" opacity="0.95">
              <rect x="0" y="0" width="120" height="150" rx="26" fill="white" opacity="0.85" />
              <rect x="32" y="-14" width="56" height="34" rx="14" fill="var(--color-almond)" opacity="0.9" />
              <rect x="22" y="38" width="76" height="10" rx="5" fill="var(--color-sage)" opacity="0.25" />
              <rect x="22" y="62" width="58" height="10" rx="5" fill="var(--color-terracotta)" opacity="0.22" />
              <path
                d="M 60 122 C 46 110 36 104 36 92 C 36 82 44 74 54 74 C 58 74 62 76 65 80 C 68 76 72 74 76 74 C 86 74 94 82 94 92 C 94 104 84 110 70 122 L 65 127 Z"
                fill="var(--color-terracotta)"
                opacity="0.32"
              />
            </g>
          </g>

          {/* THERAPY */}
          <g transform="translate(0 860)">
            <path
              d="M 0 740 C 170 700 330 730 500 770 C 670 810 840 790 1000 740 L 1000 900 L 0 900 Z"
              fill="var(--color-lavender)"
              opacity="0.35"
            />

            {/* Puzzle play */}
            <g transform="translate(520 520)">
              <g className="hsw-pop" transform="translate(-90 70)" opacity="0.95">
                <rect x="-120" y="-40" width="240" height="140" rx="40" fill="white" opacity="0.78" />
                <path d="M -30 10 h 60 v 60 h -60 Z" fill="var(--color-soft-sage)" opacity="0.9" />
                <path d="M 50 10 h 60 v 60 h -60 Z" fill="var(--color-peach)" opacity="0.75" />
                <path d="M -110 10 h 60 v 60 h -60 Z" fill="var(--color-almond)" opacity="0.85" />
                <circle cx="-30" cy="40" r="10" fill="white" opacity="0.65" />
                <circle cx="50" cy="40" r="10" fill="white" opacity="0.55" />
              </g>

              {/* Therapist helping hand */}
              <g className="hsw-pop" transform="translate(140 70)">
                <path
                  d="M -10 40 C 20 15 55 10 90 26"
                  fill="none"
                  stroke="var(--color-sage)"
                  strokeOpacity="0.4"
                  strokeWidth="12"
                  strokeLinecap="round"
                />
                <circle cx="96" cy="28" r="10" fill="var(--color-almond)" opacity="0.9" />
              </g>

              {/* Soft bubbles */}
              <g className="hsw-float" transform="translate(-210 -20)" opacity="0.55">
                <circle cx="0" cy="0" r="10" fill="var(--color-snow)" opacity="0.8" />
                <circle cx="28" cy="18" r="7" fill="var(--color-snow)" opacity="0.7" />
                <circle cx="-24" cy="22" r="6" fill="var(--color-snow)" opacity="0.65" />
              </g>
            </g>
          </g>

          {/* GROWTH */}
          <g transform="translate(0 1290)">
            <path
              d="M 0 740 C 200 710 350 730 500 770 C 650 810 810 790 1000 740 L 1000 900 L 0 900 Z"
              fill="var(--color-almond)"
              opacity="0.75"
            />

            {/* Growing plant infographic */}
            <g className="hsw-pop" transform="translate(190 520)">
              <rect x="-10" y="60" width="20" height="110" rx="10" fill="var(--color-sage)" opacity="0.65" />
              <path
                d="M 0 90 C -40 70 -70 60 -88 70 C -64 104 -30 114 0 110 Z"
                fill="var(--color-soft-sage)"
                opacity="0.95"
              />
              <path
                d="M 0 120 C 40 96 74 92 92 106 C 66 138 34 146 0 140 Z"
                fill="var(--color-peach)"
                opacity="0.55"
              />
              <circle cx="0" cy="50" r="18" fill="var(--color-sun)" opacity="0.22" />
            </g>

            {/* Skill cards as mini tiles */}
            <g transform="translate(520 520)">
              <g className="hsw-pop" transform="translate(-160 20)">
                <rect x="0" y="0" width="160" height="120" rx="32" fill="white" opacity="0.8" />
                <path
                  d="M 42 78 C 56 60 74 56 94 66"
                  fill="none"
                  stroke="var(--color-sage)"
                  strokeOpacity="0.35"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <circle cx="52" cy="48" r="12" fill="var(--color-soft-sage)" opacity="0.9" />
                <circle cx="98" cy="44" r="10" fill="var(--color-peach)" opacity="0.6" />
                <rect x="34" y="92" width="92" height="10" rx="5" fill="var(--color-sage)" opacity="0.2" />
              </g>
              <g className="hsw-pop" transform="translate(30 40)">
                <rect x="0" y="0" width="160" height="120" rx="32" fill="white" opacity="0.78" />
                <path
                  d="M 44 58 L 70 82 L 116 36"
                  fill="none"
                  stroke="var(--color-terracotta)"
                  strokeOpacity="0.32"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect x="34" y="92" width="92" height="10" rx="5" fill="var(--color-terracotta)" opacity="0.18" />
              </g>
            </g>
          </g>

          {/* CONFIDENCE */}
          <g transform="translate(0 1720)">
            <path
              d="M 0 740 C 200 700 350 730 500 770 C 650 810 810 790 1000 740 L 1000 900 L 0 900 Z"
              fill="var(--color-peach)"
              opacity="0.32"
            />

            {/* Child standing tall */}
            <g transform="translate(540 520)">
              <g className="hsw-pop" transform="translate(-20 20)">
                <circle cx="0" cy="0" r="24" fill="var(--color-almond)" opacity="0.98" />
                <rect x="-24" y="20" width="48" height="74" rx="20" fill="var(--color-soft-sage)" opacity="0.9" />
                <path
                  d="M -18 38 C -56 30 -80 18 -106 -4"
                  fill="none"
                  stroke="var(--color-terracotta)"
                  strokeOpacity="0.28"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <path
                  d="M 18 38 C 56 30 80 18 106 -4"
                  fill="none"
                  stroke="var(--color-terracotta)"
                  strokeOpacity="0.28"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              </g>

              {/* Stars */}
              <g className="hsw-float" transform="translate(170 -60)" opacity="0.55">
                <path
                  d="M 0 -18 L 5 -5 L 18 0 L 5 5 L 0 18 L -5 5 L -18 0 L -5 -5 Z"
                  fill="var(--color-sun)"
                  opacity="0.35"
                />
                <path
                  d="M -60 -4 L -56 6 L -46 10 L -56 14 L -60 24 L -64 14 L -74 10 L -64 6 Z"
                  fill="var(--color-sage)"
                  opacity="0.25"
                />
              </g>
            </g>

            {/* Open-world doorway */}
            <g className="hsw-pop" transform="translate(170 520)" opacity="0.95">
              <path
                d="M 0 150 V 40 C 0 8 26 -18 58 -18 H 132 C 164 -18 190 8 190 40 V 150"
                fill="white"
                opacity="0.78"
              />
              <path
                d="M 58 150 V 46 C 58 34 68 24 80 24 H 110 C 122 24 132 34 132 46 V 150"
                fill="var(--color-almond)"
                opacity="0.85"
              />
              <circle cx="120" cy="88" r="6" fill="var(--color-sage-dark)" opacity="0.18" />
            </g>
          </g>

          {/* THRIVE */}
          <g transform="translate(0 2150)">
            <path
              d="M 0 740 C 190 700 340 730 500 770 C 660 810 820 790 1000 740 L 1000 900 L 0 900 Z"
              fill="var(--color-almond)"
              opacity="0.85"
            />

            {/* Celebration confetti */}
            <g transform="translate(520 420)" opacity="0.75">
              <g className="hsw-float">
                <rect x="-210" y="-120" width="12" height="34" rx="6" fill="var(--color-terracotta)" opacity="0.35" />
                <rect x="-140" y="-160" width="10" height="28" rx="5" fill="var(--color-sage)" opacity="0.28" />
                <rect x="160" y="-140" width="10" height="28" rx="5" fill="var(--color-peach)" opacity="0.35" />
                <rect x="210" y="-110" width="12" height="34" rx="6" fill="var(--color-sun)" opacity="0.22" />
                <circle cx="-40" cy="-160" r="8" fill="var(--color-lavender)" opacity="0.28" />
                <circle cx="30" cy="-180" r="7" fill="var(--color-sage)" opacity="0.22" />
                <circle cx="90" cy="-150" r="6" fill="var(--color-terracotta)" opacity="0.22" />
              </g>
            </g>

            {/* Child + parent hug */}
            <g transform="translate(520 520)">
              <g className="hsw-pop" transform="translate(-10 40)">
                <circle cx="0" cy="0" r="22" fill="var(--color-almond)" opacity="0.98" />
                <rect x="-22" y="18" width="44" height="62" rx="18" fill="var(--color-peach)" opacity="0.75" />
              </g>
              <g className="hsw-pop" transform="translate(70 22)">
                <circle cx="0" cy="0" r="26" fill="var(--color-almond)" opacity="0.96" />
                <rect x="-26" y="22" width="52" height="78" rx="22" fill="var(--color-soft-sage)" opacity="0.88" />
                <path
                  d="M -20 60 C -55 54 -82 46 -110 26"
                  fill="none"
                  stroke="var(--color-sage)"
                  strokeOpacity="0.32"
                  strokeWidth="12"
                  strokeLinecap="round"
                />
              </g>
            </g>

            {/* Badge star */}
            <g className="hsw-pop" transform="translate(170 520)" opacity="0.95">
              <circle cx="90" cy="90" r="78" fill="white" opacity="0.82" />
              <path
                d="M 90 28 L 104 70 L 148 70 L 112 96 L 126 138 L 90 112 L 54 138 L 68 96 L 32 70 L 76 70 Z"
                fill="var(--color-sun)"
                opacity="0.25"
              />
              <circle cx="90" cy="90" r="30" fill="var(--color-terracotta)" opacity="0.12" />
            </g>
          </g>
        </g>

        {/* FRONT LAYER */}
        <g ref={layerFrontRef} opacity="0.9">
          {/* Foreground leaves */}
          <g className="hsw-float" transform="translate(80 90)" opacity="0.55">
            <path
              d="M 0 30 C 20 4 44 0 56 6 C 44 32 20 44 0 48 C -10 50 -6 42 0 30 Z"
              fill="var(--color-soft-sage)"
              opacity="0.9"
            />
          </g>
          <g className="hsw-float" transform="translate(880 260)" opacity="0.5">
            <path
              d="M 0 30 C 24 6 50 2 64 10 C 52 38 26 52 6 54 C -8 56 -6 42 0 30 Z"
              fill="var(--color-peach)"
              opacity="0.65"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export function HomeStoryWorld() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<SVGGElement>(null);
  const blobRef = useRef<SVGPathElement>(null);
  const threadRef = useRef<SVGPathElement>(null);
  const layerBackRef = useRef<SVGGElement>(null);
  const layerFrontRef = useRef<SVGGElement>(null);

  const reducedMotion = usePrefersReducedMotion();
  const layoutMode = useLayoutMode();

  useGSAP(
    () => {
      if (reducedMotion || !sectionRef.current || !stageRef.current || !worldRef.current) return;

      const sectionEl = sectionRef.current;
      const stageEl = stageRef.current;
      const worldEl = worldRef.current;
      const setBackY = layerBackRef.current ? gsap.quickSetter(layerBackRef.current, "y", "") : null;
      const setFrontY = layerFrontRef.current ? gsap.quickSetter(layerFrontRef.current, "y", "") : null;

      const floatEls = gsap.utils.toArray<SVGGElement>(".hsw-float");
      const floatTweens = floatEls.map((el, i) =>
        gsap.to(el, {
          x: i % 2 === 0 ? "+=6" : "-=6",
          y: i % 3 === 0 ? "+=10" : "+=7",
          duration: 2.6 + i * 0.15,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }),
      );

      if (threadRef.current) {
        const length = threadRef.current.getTotalLength();
        gsap.set(threadRef.current, { strokeDasharray: length, strokeDashoffset: length });
      }

      gsap.set(".hsw-card", { opacity: 0, y: 12 });
      gsap.set('[data-card="hero"]', { opacity: 1, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          start: "top top",
          end: layoutMode === "mobile" ? "+=640%" : "+=560%",
          pin: stageEl,
          scrub: 0.65,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Layered parallax inside the moving world (small offsets only).
            if (setBackY) setBackY(self.progress * 36);
            if (setFrontY) setFrontY(self.progress * -22);
          },
        },
      });

      // Camera travel through the vertical world.
      tl.to(
        worldEl,
        {
          y: -(SCENE_STEP * 5),
          duration: 1,
          ease: "none",
        },
        0,
      );

      // Story thread draws in as the journey begins (subtle, not a "walking path").
      if (threadRef.current) {
        tl.to(threadRef.current, { strokeDashoffset: 0, duration: 0.5, ease: "none" }, 0.05);
      }

      // Premium background morph across scenes.
      if (blobRef.current) {
        tl.to(blobRef.current, { attr: { d: BLOB_2 }, duration: 0.18, ease: "none" }, 0.12)
          .to(blobRef.current, { attr: { d: BLOB_3 }, duration: 0.18, ease: "none" }, 0.28)
          .to(blobRef.current, { attr: { d: BLOB_4 }, duration: 0.18, ease: "none" }, 0.44)
          .to(blobRef.current, { attr: { d: BLOB_5 }, duration: 0.18, ease: "none" }, 0.62)
          .to(blobRef.current, { attr: { d: BLOB_6 }, duration: 0.18, ease: "none" }, 0.8);
      }

      // Card choreography (short copy; visuals do the work).
      const show = (id: string, at: number) => {
        tl.to(`.hsw-card[data-card="${id}"]`, { opacity: 1, y: 0, duration: 0.09, ease: "power2.out" }, at);
      };
      const hide = (id: string, at: number) => {
        tl.to(`.hsw-card[data-card="${id}"]`, { opacity: 0, y: -10, duration: 0.08, ease: "power1.in" }, at);
      };

      show("hero", 0.0);
      hide("hero", 0.14);
      show("assessment", 0.18);
      hide("assessment", 0.32);
      show("therapy", 0.36);
      hide("therapy", 0.5);
      show("growth", 0.54);
      hide("growth", 0.68);
      show("confidence", 0.72);
      hide("confidence", 0.86);
      show("thrive", 0.88);

      // Small scene pops (GPU-friendly transforms).
      tl.fromTo(
        ".hsw-pop",
        { scale: 0.96, opacity: 0.001, transformOrigin: "center center" },
        { scale: 1, opacity: 1, duration: 0.12, ease: "power2.out", stagger: 0.02 },
        0.06,
      );

      return () => {
        floatTweens.forEach((t) => t.kill());
      };
    },
    { scope: sectionRef, dependencies: [reducedMotion, layoutMode] },
  );

  const viewBoxHeight = layoutMode === "mobile" ? 1080 : layoutMode === "tablet" ? 980 : 900;

  return (
    <div ref={sectionRef} className="bg-[color:var(--color-snow)]">
      <Section className="!pb-6 !pt-10 md:!pb-8 md:!pt-14">
        <SectionHeading
          kicker="A gentle story of growth"
          title="From first hello to thriving independence"
          description="A scroll‑told journey: assessment, play-based therapy, growing skills, and everyday confidence."
          center
        />
      </Section>

      {reducedMotion ? (
        <Section className="!pt-0">
          <StoryWorldSvg
            viewBoxHeight={viewBoxHeight}
            className="h-[60vh] w-full md:h-[72vh]"
            style={{ maxWidth: 1120 }}
            worldRef={worldRef}
            blobRef={blobRef}
            threadRef={threadRef}
            layerBackRef={layerBackRef}
            layerFrontRef={layerFrontRef}
          />

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              { id: "Hero", title: "Safety first. Connection always.", body: "A calm start where your child feels seen." },
              { id: "Assessment", title: "Curiosity becomes a clue.", body: "We notice strengths, needs, and what helps." },
              { id: "Therapy", title: "Learning through play.", body: "Skills grow inside games, stories, and movement." },
              { id: "Growth", title: "Small wins, steady roots.", body: "We track progress and adjust the plan gently." },
              { id: "Confidence", title: "More “I can.”", body: "Daily routines feel lighter. School feels possible." },
              { id: "Thrive", title: "Independence — with joy.", body: "We celebrate what your child can do, today." },
            ].map((c) => (
              <div key={c.id} className="rounded-2xl border border-[color:var(--color-border)]/60 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold tracking-wide text-[color:var(--color-sage-dark)]">{c.id}</p>
                <p className="mt-1 font-[family-name:var(--font-serif)] text-lg text-[color:var(--color-sage-dark)]">
                  {c.title}
                </p>
                <p className="mt-1 text-sm text-[color:var(--color-muted)]">{c.body}</p>
              </div>
            ))}
          </div>
        </Section>
      ) : (
        <div
          ref={stageRef}
          className="relative mx-auto flex min-h-[72vh] max-w-6xl items-center justify-center overflow-hidden px-3 pb-10 md:min-h-screen md:px-6"
        >
          <StoryWorldSvg
            viewBoxHeight={viewBoxHeight}
            className="h-[72vh] w-full md:h-[78vh]"
            style={{ maxWidth: 1120 }}
            worldRef={worldRef}
            blobRef={blobRef}
            threadRef={threadRef}
            layerBackRef={layerBackRef}
            layerFrontRef={layerFrontRef}
          />

        {/* Story cards (kept short; the illustration carries the story) */}
        <div className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto flex max-w-6xl justify-center px-4 md:bottom-10">
          <div className="grid w-full max-w-2xl gap-3 md:max-w-xl">
            <div
              className="hsw-card pointer-events-auto rounded-2xl border border-[color:var(--color-border)]/60 bg-white/90 p-4 shadow-lg backdrop-blur-md"
              data-card="hero"
            >
              <p className="text-xs font-semibold tracking-wide text-[color:var(--color-sage-dark)]">Hero</p>
              <p className="mt-1 font-[family-name:var(--font-serif)] text-lg text-[color:var(--color-sage-dark)]">
                Safety first. Connection always.
              </p>
              <p className="mt-1 text-sm text-[color:var(--color-muted)]">A calm start where your child feels seen.</p>
            </div>

            <div
              className="hsw-card pointer-events-auto rounded-2xl border border-[color:var(--color-border)]/60 bg-white/90 p-4 shadow-lg backdrop-blur-md"
              data-card="assessment"
            >
              <p className="text-xs font-semibold tracking-wide text-[color:var(--color-sage-dark)]">Assessment</p>
              <p className="mt-1 font-[family-name:var(--font-serif)] text-lg text-[color:var(--color-sage-dark)]">
                Curiosity becomes a clue.
              </p>
              <p className="mt-1 text-sm text-[color:var(--color-muted)]">We notice strengths, needs, and what helps.</p>
            </div>

            <div
              className="hsw-card pointer-events-auto rounded-2xl border border-[color:var(--color-border)]/60 bg-white/90 p-4 shadow-lg backdrop-blur-md"
              data-card="therapy"
            >
              <p className="text-xs font-semibold tracking-wide text-[color:var(--color-sage-dark)]">Therapy</p>
              <p className="mt-1 font-[family-name:var(--font-serif)] text-lg text-[color:var(--color-sage-dark)]">
                Learning through play.
              </p>
              <p className="mt-1 text-sm text-[color:var(--color-muted)]">Skills grow inside games, stories, and movement.</p>
            </div>

            <div
              className="hsw-card pointer-events-auto rounded-2xl border border-[color:var(--color-border)]/60 bg-white/90 p-4 shadow-lg backdrop-blur-md"
              data-card="growth"
            >
              <p className="text-xs font-semibold tracking-wide text-[color:var(--color-sage-dark)]">Growth</p>
              <p className="mt-1 font-[family-name:var(--font-serif)] text-lg text-[color:var(--color-sage-dark)]">
                Small wins, steady roots.
              </p>
              <p className="mt-1 text-sm text-[color:var(--color-muted)]">We track progress and adjust the plan gently.</p>
            </div>

            <div
              className="hsw-card pointer-events-auto rounded-2xl border border-[color:var(--color-border)]/60 bg-white/90 p-4 shadow-lg backdrop-blur-md"
              data-card="confidence"
            >
              <p className="text-xs font-semibold tracking-wide text-[color:var(--color-sage-dark)]">Confidence</p>
              <p className="mt-1 font-[family-name:var(--font-serif)] text-lg text-[color:var(--color-sage-dark)]">
                More “I can.”
              </p>
              <p className="mt-1 text-sm text-[color:var(--color-muted)]">Daily routines feel lighter. School feels possible.</p>
            </div>

            <div
              className="hsw-card pointer-events-auto rounded-2xl border border-[color:var(--color-border)]/60 bg-white/90 p-4 shadow-lg backdrop-blur-md"
              data-card="thrive"
            >
              <p className="text-xs font-semibold tracking-wide text-[color:var(--color-sage-dark)]">Thrive</p>
              <p className="mt-1 font-[family-name:var(--font-serif)] text-lg text-[color:var(--color-sage-dark)]">
                Independence — with joy.
              </p>
              <p className="mt-1 text-sm text-[color:var(--color-muted)]">We celebrate what your child can do, today.</p>
            </div>
          </div>
        </div>

        <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center text-xs text-[color:var(--color-muted)]">
          {reducedMotion ? "Animations are reduced based on your settings." : "Scroll to continue the story"}
        </p>
        </div>
      )}
    </div>
  );
}

