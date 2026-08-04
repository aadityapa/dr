"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Colourful, child-friendly ORIGINAL illustrations for pediatric OT pages.
 * All are hand-built SVG (no external/copyrighted images), use the site
 * pastel palette, are decorative (aria-hidden) and respect reduced motion.
 *
 * Palette: sun #f5cf79 · sky #b9ddec · lavender #c9a3e0 · peach #fce8dc
 *          terracotta #a85a42 · coral #f6a5a0 · sage #7d927f · greenDark #2f4d3b
 */

const C = {
  sun: "#f5cf79",
  sky: "#b9ddec",
  lav: "#c9a3e0",
  peach: "#fce8dc",
  terra: "#a85a42",
  coral: "#f6a5a0",
  sage: "#7d927f",
  green: "#2f4d3b",
  mint: "#8fc7a8",
};

type WrapProps = { className?: string; children: React.ReactNode };

/** Shared positioned wrapper for hero illustrations (right side, desktop only). */
function HeroArtWrap({ className = "", children }: WrapProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 items-center justify-center md:flex lg:w-[46%] ${className}`}
      aria-hidden
    >
      <div className="relative h-[340px] w-full max-w-[420px]">{children}</div>
    </div>
  );
}

function useFloat() {
  const reduced = useReducedMotion();
  return (dy: number, dur: number, delay = 0) =>
    reduced
      ? {}
      : {
          animate: { y: [0, dy, 0] },
          transition: { duration: dur, repeat: Infinity, ease: "easeInOut" as const, delay },
        };
}

/* ----------------------------------------------------------------------- */
/* Reusable primitives                                                     */
/* ----------------------------------------------------------------------- */

function Blob({ cx, cy, r, fill, o = 1 }: { cx: number; cy: number; r: number; fill: string; o?: number }) {
  return <circle cx={cx} cy={cy} r={r} fill={fill} opacity={o} />;
}

/** Soft colourful background wash — drop into any section with `relative`. */
export function SoftColorWash({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <svg className="absolute -left-16 -top-10 h-72 w-72" viewBox="0 0 200 200">
        <Blob cx={100} cy={100} r={90} fill={C.peach} o={0.5} />
      </svg>
      <svg className="absolute -right-10 top-1/3 h-64 w-64" viewBox="0 0 200 200">
        <Blob cx={100} cy={100} r={90} fill={C.sky} o={0.4} />
      </svg>
      <svg className="absolute bottom-0 left-1/3 h-56 w-56" viewBox="0 0 200 200">
        <Blob cx={100} cy={100} r={90} fill={C.lav} o={0.3} />
      </svg>
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/* Hero illustrations (for PageHero `art` slot)                            */
/* ----------------------------------------------------------------------- */

/** Child reading with floating books — resources / library */
export function ReadingScene() {
  const f = useFloat();
  return (
    <HeroArtWrap>
      <motion.svg className="absolute left-10 top-16 h-14 w-16" viewBox="0 0 80 70" {...f(-10, 8)}>
        <path d="M40 12 C30 4 12 4 6 12 L6 58 C12 50 30 50 40 58 Z" fill={C.coral} />
        <path d="M40 12 C50 4 68 4 74 12 L74 58 C68 50 50 50 40 58 Z" fill={C.sky} />
        <line x1="40" y1="12" x2="40" y2="58" stroke="#fff" strokeWidth="2" />
      </motion.svg>
      <motion.svg className="absolute right-14 top-6 h-12 w-14" viewBox="0 0 80 70" {...f(9, 10, 0.5)}>
        <path d="M40 12 C30 4 12 4 6 12 L6 58 C12 50 30 50 40 58 Z" fill={C.sun} />
        <path d="M40 12 C50 4 68 4 74 12 L74 58 C68 50 50 50 40 58 Z" fill={C.lav} />
        <line x1="40" y1="12" x2="40" y2="58" stroke="#fff" strokeWidth="2" />
      </motion.svg>
      <motion.svg className="absolute bottom-4 left-1/2 h-48 w-48 -translate-x-1/2" viewBox="0 0 160 160" {...f(-6, 9, 0.2)}>
        <ellipse cx="80" cy="150" rx="60" ry="8" fill={C.sage} opacity="0.2" />
        <rect x="30" y="96" width="100" height="46" rx="10" fill={C.mint} />
        <path d="M80 100 C64 92 40 92 30 100 L30 138 C40 130 64 130 80 138 Z" fill="#fff" />
        <path d="M80 100 C96 92 120 92 130 100 L130 138 C120 130 96 130 80 138 Z" fill="#fff" />
        <line x1="80" y1="100" x2="80" y2="138" stroke={C.sage} strokeWidth="2" />
        <circle cx="80" cy="70" r="20" fill={C.peach} />
        <path d="M60 66 q20 -22 40 0 v-6 q-20 -18 -40 0 Z" fill={C.terra} />
        <circle cx="73" cy="70" r="2.4" fill={C.green} />
        <circle cx="87" cy="70" r="2.4" fill={C.green} />
        <path d="M74 78 q6 5 12 0" stroke={C.green} strokeWidth="2" fill="none" strokeLinecap="round" />
      </motion.svg>
    </HeroArtWrap>
  );
}

/** Warm chat bubbles + heart + envelope — contact */
export function ContactScene() {
  const f = useFloat();
  return (
    <HeroArtWrap>
      <motion.svg className="absolute left-8 top-10 h-28 w-40" viewBox="0 0 160 110" {...f(-10, 8)}>
        <path d="M18 14 h96 a14 14 0 0 1 14 14 v34 a14 14 0 0 1 -14 14 H54 l-20 18 v-18 H18 a14 14 0 0 1 -14 -14 V28 a14 14 0 0 1 14 -14 Z" fill={C.sky} />
        <circle cx="46" cy="45" r="5" fill="#fff" />
        <circle cx="68" cy="45" r="5" fill="#fff" />
        <circle cx="90" cy="45" r="5" fill="#fff" />
      </motion.svg>
      <motion.svg className="absolute right-10 top-24 h-24 w-32" viewBox="0 0 140 100" {...f(10, 10, 0.4)}>
        <path d="M40 12 h84 a12 12 0 0 1 12 12 v30 a12 12 0 0 1 -12 12 H92 l-18 16 v-16 H40 a12 12 0 0 1 -12 -12 V24 a12 12 0 0 1 12 -12 Z" fill={C.coral} />
      </motion.svg>
      <motion.svg className="absolute bottom-6 left-1/2 h-24 w-28 -translate-x-1/2" viewBox="0 0 120 100" {...f(-6, 9, 0.7)}>
        <rect x="14" y="26" width="92" height="60" rx="8" fill={C.sun} />
        <path d="M14 30 L60 62 L106 30" fill="none" stroke="#fff" strokeWidth="4" />
        <path d="M60 20 c-6 -10 -22 -6 -22 6 0 10 22 20 22 20 s22 -10 22 -20 c0 -12 -16 -16 -22 -6 Z" fill={C.terra} />
      </motion.svg>
    </HeroArtWrap>
  );
}

/** Question marks + lightbulb — faqs */
export function QuestionScene() {
  const f = useFloat();
  const bubble = (x: number, y: number, s: number, fill: string, ch: string, delay: number) => (
    <motion.svg className="absolute h-20 w-20" style={{ left: x, top: y, transform: `scale(${s})` }} viewBox="0 0 80 80" {...f(-8, 8, delay)}>
      <circle cx="40" cy="40" r="34" fill={fill} />
      <text x="40" y="54" fontSize="42" fontWeight="800" fill="#fff" textAnchor="middle">{ch}</text>
    </motion.svg>
  );
  return (
    <HeroArtWrap>
      {bubble(20, 30, 1, C.sky, "?", 0)}
      {bubble(150, 10, 0.8, C.coral, "?", 0.5)}
      {bubble(210, 130, 0.9, C.lav, "?", 0.9)}
      <motion.svg className="absolute bottom-8 left-16 h-32 w-32" viewBox="0 0 120 120" {...f(8, 10, 0.3)}>
        <circle cx="60" cy="50" r="34" fill={C.sun} />
        <rect x="48" y="80" width="24" height="16" rx="4" fill={C.sage} />
        <rect x="52" y="96" width="16" height="8" rx="3" fill={C.green} />
        <path d="M60 30 v14 M60 44 l-8 8 M60 44 l8 8" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
      </motion.svg>
    </HeroArtWrap>
  );
}

/** Camera + photo frames — gallery */
export function GalleryScene() {
  const f = useFloat();
  return (
    <HeroArtWrap>
      <motion.svg className="absolute left-8 top-8 h-28 w-32" viewBox="0 0 140 120" {...f(-8, 9)}>
        <rect x="14" y="18" width="90" height="80" rx="8" fill="#fff" stroke={C.sky} strokeWidth="6" />
        <path d="M24 88 L52 54 L70 76 L92 46 L96 88 Z" fill={C.mint} />
        <circle cx="44" cy="40" r="8" fill={C.sun} />
      </motion.svg>
      <motion.svg className="absolute right-12 top-20 h-24 w-28" viewBox="0 0 140 120" {...f(10, 11, 0.5)}>
        <rect x="14" y="18" width="90" height="80" rx="8" fill="#fff" stroke={C.coral} strokeWidth="6" />
        <path d="M24 88 L48 60 L66 80 L88 52 L96 88 Z" fill={C.lav} />
        <circle cx="42" cy="42" r="7" fill={C.sun} />
      </motion.svg>
      <motion.svg className="absolute bottom-4 left-1/2 h-28 w-36 -translate-x-1/2" viewBox="0 0 150 110" {...f(-6, 8, 0.3)}>
        <rect x="18" y="34" width="114" height="70" rx="12" fill={C.terra} />
        <rect x="52" y="22" width="46" height="20" rx="6" fill={C.terra} />
        <circle cx="75" cy="70" r="26" fill={C.peach} />
        <circle cx="75" cy="70" r="16" fill={C.sky} />
        <circle cx="118" cy="48" r="5" fill={C.sun} />
      </motion.svg>
    </HeroArtWrap>
  );
}

/** Map pin over rooftops — locations */
export function MapScene() {
  const f = useFloat();
  return (
    <HeroArtWrap>
      <motion.svg className="absolute bottom-6 left-1/2 h-64 w-72 -translate-x-1/2" viewBox="0 0 260 220" {...f(-6, 10)}>
        <rect x="20" y="150" width="220" height="10" rx="5" fill={C.sage} opacity="0.25" />
        <rect x="34" y="96" width="52" height="60" rx="6" fill={C.sky} />
        <rect x="96" y="72" width="46" height="84" rx="6" fill={C.mint} />
        <rect x="152" y="112" width="60" height="44" rx="6" fill={C.peach} />
        <rect x="46" y="110" width="12" height="12" rx="2" fill="#fff" />
        <rect x="66" y="110" width="12" height="12" rx="2" fill="#fff" />
        <rect x="108" y="90" width="12" height="12" rx="2" fill="#fff" />
        <rect x="118" y="112" width="12" height="12" rx="2" fill="#fff" />
      </motion.svg>
      <motion.svg className="absolute left-1/2 top-2 h-32 w-24 -translate-x-1/2" viewBox="0 0 90 130" {...f(-12, 6, 0.2)}>
        <path d="M45 6 C24 6 8 22 8 44 c0 28 37 74 37 74 s37 -46 37 -74 C82 22 66 6 45 6 Z" fill={C.coral} />
        <circle cx="45" cy="44" r="16" fill="#fff" />
        <circle cx="45" cy="44" r="8" fill={C.terra} />
      </motion.svg>
    </HeroArtWrap>
  );
}

/** Clipboard checklist — screening */
export function ChecklistScene() {
  const f = useFloat();
  return (
    <HeroArtWrap>
      <motion.svg className="absolute bottom-2 left-1/2 h-72 w-56 -translate-x-1/2" viewBox="0 0 200 260" {...f(-6, 9)}>
        <rect x="30" y="30" width="140" height="200" rx="16" fill="#fff" stroke={C.sky} strokeWidth="6" />
        <rect x="74" y="18" width="52" height="26" rx="8" fill={C.sage} />
        {[70, 110, 150, 190].map((y, i) => (
          <g key={i}>
            <rect x="50" y={y} width="28" height="28" rx="7" fill={[C.sun, C.coral, C.mint, C.lav][i]} />
            <path d={`M56 ${y + 14} l6 7 l11 -14`} stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="90" y={y + 8} width="62" height="10" rx="5" fill={C.peach} />
          </g>
        ))}
      </motion.svg>
      <motion.svg className="absolute right-8 top-6 h-16 w-16" viewBox="0 0 60 60" {...f(8, 7, 0.4)}>
        <circle cx="30" cy="30" r="26" fill={C.coral} />
        <path d="M18 30 l8 9 l16 -19" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </motion.svg>
    </HeroArtWrap>
  );
}

/** Stars + medal — testimonials & milestones */
export function MilestonesScene() {
  const f = useFloat();
  const star = (x: number, y: number, s: number, fill: string, d: number) => (
    <motion.svg className="absolute h-12 w-12" style={{ left: x, top: y, transform: `scale(${s})` }} viewBox="0 0 24 24" fill={fill} {...f(-8, 7, d)}>
      <path d="M12 2l2.6 6.3L21 9l-5 4.3L17.5 20 12 16.3 6.5 20 8 13.3 3 9l6.4-.7z" />
    </motion.svg>
  );
  return (
    <HeroArtWrap>
      {star(24, 20, 1.1, C.sun, 0)}
      {star(150, 8, 0.8, C.coral, 0.4)}
      {star(230, 60, 0.9, C.lav, 0.8)}
      {star(40, 150, 0.7, C.sky, 1.1)}
      <motion.svg className="absolute bottom-6 left-1/2 h-44 w-44 -translate-x-1/2" viewBox="0 0 160 170" {...f(-6, 9, 0.2)}>
        <path d="M56 20 L80 78 L56 96 Z" fill={C.coral} />
        <path d="M104 20 L80 78 L104 96 Z" fill={C.sky} />
        <circle cx="80" cy="118" r="42" fill={C.sun} />
        <circle cx="80" cy="118" r="30" fill={C.peach} />
        <path d="M80 98l6.8 14.4L102 114l-11 10 3 15-14-8-14 8 3-15-11-10 15.2-1.6z" fill={C.terra} />
      </motion.svg>
    </HeroArtWrap>
  );
}

/** Growing plant + rising chart — therapy outcomes */
export function GrowthScene() {
  const f = useFloat();
  return (
    <HeroArtWrap>
      <motion.svg className="absolute bottom-4 left-8 h-56 w-40" viewBox="0 0 150 210" {...f(-6, 10)}>
        <path d="M75 200 V96" stroke={C.sage} strokeWidth="8" strokeLinecap="round" />
        <path d="M75 120 C40 116 26 92 26 70 C60 72 78 96 75 120 Z" fill={C.mint} />
        <path d="M75 150 C110 146 128 120 128 98 C92 100 72 126 75 150 Z" fill={C.sage} />
        <path d="M75 96 C58 92 48 74 50 56 C70 60 82 80 75 96 Z" fill={C.coral} />
        <ellipse cx="75" cy="204" rx="42" ry="7" fill={C.terra} opacity="0.3" />
        <rect x="44" y="188" width="62" height="18" rx="6" fill={C.terra} />
      </motion.svg>
      <motion.svg className="absolute right-6 top-8 h-40 w-44" viewBox="0 0 170 150" {...f(9, 9, 0.4)}>
        <rect x="20" y="16" width="140" height="118" rx="12" fill="#fff" stroke={C.sky} strokeWidth="5" />
        <polyline points="34,110 66,80 92,92 128,44" fill="none" stroke={C.coral} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="128" cy="44" r="8" fill={C.sun} />
        {[110, 80, 92, 44].map((y, i) => (
          <circle key={i} cx={[34, 66, 92, 128][i]} cy={y} r="4" fill={C.sage} />
        ))}
      </motion.svg>
    </HeroArtWrap>
  );
}

/** Podium + microphone — invite Sharuja (speaking/workshops) */
export function SpeakerScene() {
  const f = useFloat();
  return (
    <HeroArtWrap>
      <motion.svg className="absolute bottom-6 left-1/2 h-60 w-56 -translate-x-1/2" viewBox="0 0 210 220" {...f(-6, 10)}>
        <ellipse cx="105" cy="204" rx="70" ry="10" fill={C.sage} opacity="0.2" />
        <rect x="78" y="150" width="54" height="56" rx="6" fill={C.mint} />
        <rect x="70" y="140" width="70" height="16" rx="6" fill={C.sage} />
        <rect x="100" y="70" width="10" height="72" fill={C.terra} />
        <circle cx="105" cy="52" r="20" fill={C.coral} />
        <rect x="96" y="46" width="18" height="12" rx="6" fill={C.terra} />
      </motion.svg>
      <motion.svg className="absolute left-8 top-8 h-16 w-24" viewBox="0 0 120 80" {...f(-10, 8, 0.3)}>
        <path d="M20 20 h70 a14 14 0 0 1 14 14 v10 a14 14 0 0 1 -14 14 H44 l-16 12 v-12 h-8 a14 14 0 0 1 -14 -14 V34 a14 14 0 0 1 14 -14 Z" fill={C.sky} />
      </motion.svg>
      <motion.svg className="absolute right-10 top-16 h-12 w-12" viewBox="0 0 40 40" fill={C.sun} {...f(8, 7, 0.6)}>
        <path d="M20 3l4.3 10.5L36 15l-8.3 7.1L30 34 20 27.2 10 34l2.3-11.9L4 15l11.7-1.5z" />
      </motion.svg>
    </HeroArtWrap>
  );
}

/** Heart + child hands (mission / warmth) — inline, not absolute */
export function MissionArt({ className = "" }: { className?: string }) {
  const f = useFloat();
  return (
    <div className={`pointer-events-none relative mx-auto h-56 w-full max-w-sm ${className}`} aria-hidden>
      <motion.svg className="absolute inset-0 mx-auto h-full" viewBox="0 0 260 220" {...f(-8, 9)}>
        <ellipse cx="130" cy="200" rx="90" ry="12" fill={C.sage} opacity="0.15" />
        {/* two hands cupping a heart */}
        <path d="M60 150 C40 140 40 116 60 112 C76 108 96 120 130 120 C164 120 184 108 200 112 C220 116 220 140 200 150 C176 162 84 162 60 150 Z" fill={C.peach} />
        <path d="M130 60 c-14 -22 -50 -14 -50 14 0 24 50 46 50 46 s50 -22 50 -46 c0 -28 -36 -36 -50 -14 Z" fill={C.terra} />
        <path d="M112 78 c-6 -9 -21 -6 -21 6 0 10 21 19 21 19" fill="none" stroke="#fff" strokeWidth="3" opacity="0.6" strokeLinecap="round" />
      </motion.svg>
      <motion.svg className="absolute left-2 top-2 h-10 w-10" viewBox="0 0 24 24" fill={C.sun} {...f(-6, 6, 0.4)}>
        <path d="M12 2l2.6 6.3L21 9l-5 4.3L17.5 20 12 16.3 6.5 20 8 13.3 3 9l6.4-.7z" />
      </motion.svg>
      <motion.svg className="absolute right-4 top-6 h-8 w-8" viewBox="0 0 24 24" fill={C.lav} {...f(7, 7, 0.7)}>
        <circle cx="12" cy="12" r="10" />
      </motion.svg>
    </div>
  );
}

/** Building blocks + puzzle — expertise / conditions hero decor (absolute) */
export function PlayScene() {
  const f = useFloat();
  return (
    <HeroArtWrap>
      <motion.svg className="absolute right-10 top-8 h-24 w-24" viewBox="0 0 100 100" {...f(-10, 8)}>
        <circle cx="50" cy="50" r="30" fill={C.sun} />
        {Array.from({ length: 6 }).map((_, i) => {
          const a = (i * Math.PI) / 5;
          return <line key={i} x1={50 + Math.cos(a) * 32} y1={50 + Math.sin(a) * 32} x2={50 + Math.cos(a) * 44} y2={50 + Math.sin(a) * 44} stroke={C.sun} strokeWidth="4" strokeLinecap="round" />;
        })}
      </motion.svg>
      <motion.svg className="absolute bottom-4 left-1/2 h-40 w-48 -translate-x-1/2" viewBox="0 0 190 150" {...f(9, 10, 0.4)}>
        {/* puzzle piece */}
        <path d="M40 40 h34 a10 10 0 1 1 20 0 h34 v34 a10 10 0 1 1 0 20 v34 h-34 a10 10 0 1 0 -20 0 h-34 v-34 a10 10 0 1 0 0 -20 Z" fill={C.lav} />
        <rect x="120" y="96" width="46" height="46" rx="8" fill={C.coral} />
        <rect x="14" y="100" width="42" height="42" rx="8" fill={C.sky} />
        <text x="35" y="128" fontSize="20" fontWeight="800" fill="#fff" textAnchor="middle">1</text>
        <text x="143" y="124" fontSize="20" fontWeight="800" fill="#fff" textAnchor="middle">2</text>
      </motion.svg>
      <motion.svg className="absolute left-8 top-16 h-14 w-14" viewBox="0 0 60 60" fill={C.coral} {...f(-6, 7, 0.8)}>
        <path d="M30 6l6.8 14.4L52 22l-11 10 3 15-14-8-14 8 3-15L8 22l15.2-1.6z" />
      </motion.svg>
    </HeroArtWrap>
  );
}

/** Inline colourful skill-building scene — expertise detail hero right column.
 *  Notebook + pencil + ABC + sparkles. Works for handwriting, learning, motor,
 *  sensory and other therapy areas. Sized for a grid column (not absolute). */
export function ExpertiseSpot({ className = "" }: { className?: string }) {
  const f = useFloat();
  return (
    <div className={`pointer-events-none relative mx-auto aspect-square w-full max-w-sm ${className}`} aria-hidden>
      <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_35%_30%,#fce8dc_0%,transparent_60%),radial-gradient(circle_at_75%_70%,#b9ddec55_0%,transparent_55%)]" />
      <motion.svg className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2" viewBox="0 0 240 240" {...f(-8, 9)}>
        <ellipse cx="120" cy="214" rx="82" ry="12" fill={C.sage} opacity="0.15" />
        {/* notebook */}
        <g transform="rotate(-7 120 130)">
          <rect x="52" y="70" width="136" height="120" rx="12" fill="#fff" stroke={C.sky} strokeWidth="5" />
          <rect x="52" y="70" width="20" height="120" fill={C.mint} />
          {[96, 116, 136, 156].map((y) => (
            <line key={y} x1="84" y1={y} x2="172" y2={y} stroke={C.peach} strokeWidth="6" strokeLinecap="round" />
          ))}
          <circle cx="62" cy="96" r="3.5" fill="#fff" />
          <circle cx="62" cy="130" r="3.5" fill="#fff" />
          <circle cx="62" cy="164" r="3.5" fill="#fff" />
        </g>
        {/* big pencil */}
        <g transform="rotate(32 170 150)">
          <rect x="150" y="60" width="20" height="120" rx="4" fill={C.sun} />
          <rect x="150" y="60" width="20" height="120" fill={C.terra} opacity="0.12" />
          <path d="M150 180 L160 202 L170 180 Z" fill="#f2d3ab" />
          <path d="M156 191 L160 202 L164 191 Z" fill={C.green} />
          <rect x="150" y="48" width="20" height="14" rx="4" fill={C.coral} />
        </g>
      </motion.svg>
      {/* floating letters */}
      <motion.svg className="absolute left-3 top-6 h-12 w-12" viewBox="0 0 48 48" {...f(-6, 7, 0.3)}>
        <circle cx="24" cy="24" r="22" fill={C.coral} />
        <text x="24" y="32" fontSize="24" fontWeight="800" fill="#fff" textAnchor="middle">A</text>
      </motion.svg>
      <motion.svg className="absolute right-4 top-10 h-10 w-10" viewBox="0 0 48 48" {...f(8, 8, 0.6)}>
        <circle cx="24" cy="24" r="22" fill={C.lav} />
        <text x="24" y="32" fontSize="22" fontWeight="800" fill="#fff" textAnchor="middle">B</text>
      </motion.svg>
      <motion.svg className="absolute bottom-6 right-8 h-11 w-11" viewBox="0 0 48 48" {...f(-7, 7, 0.9)}>
        <circle cx="24" cy="24" r="22" fill={C.sky} />
        <text x="24" y="32" fontSize="22" fontWeight="800" fill={C.green} textAnchor="middle">C</text>
      </motion.svg>
      <motion.svg className="absolute left-8 bottom-10 h-8 w-8" viewBox="0 0 24 24" fill={C.sun} {...f(6, 6, 0.5)}>
        <path d="M12 2l2.6 6.3L21 9l-5 4.3L17.5 20 12 16.3 6.5 20 8 13.3 3 9l6.4-.7z" />
      </motion.svg>
    </div>
  );
}
