import type { ExpertisePastel } from "./expertise-pastels";

/**
 * TherapyIllustration — a unique, hand-drawn-style SVG scene for every
 * expertise approach, so each card on the listing page carries its own
 * image representing the heading (instead of repeating the same visual).
 *
 * Each scene is tinted with the card's pastel palette so the set feels
 * cohesive while staying distinct per approach.
 */

type Palette = Pick<ExpertisePastel, "bg" | "border" | "accent" | "text">;
type SceneProps = { c: Palette };

/* Brain Gym® — brain with movement orbits and energy sparks */
function BrainGymScene({ c }: SceneProps) {
  return (
    <>
      <ellipse cx="100" cy="60" rx="34" ry="27" fill="white" opacity="0.85" />
      <path
        d="M78 58c-2-12 8-22 20-21 3-6 14-6 17 0 10 0 17 9 15 19 4 8-2 18-11 19-4 5-13 6-18 2-10 3-21-6-23-19Z"
        fill={c.accent}
        opacity="0.9"
      />
      <path
        d="M100 38v42M88 48c6 4 6 14 0 20M112 48c-6 4-6 14 0 20"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      <path
        d="M48 76c14 16 42 22 62 12M152 44C140 28 114 20 94 28"
        stroke={c.text}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />
      <path d="M108 88l6-2-3-6" stroke={c.text} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.55" />
      <path d="M96 26l-6 2 3 6" stroke={c.text} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.55" />
      <circle cx="46" cy="38" r="4" fill={c.border} />
      <circle cx="156" cy="76" r="5" fill={c.border} />
      <path d="M150 24l2 6 6 2-6 2-2 6-2-6-6-2 6-2Z" fill={c.accent} opacity="0.7" />
      <path d="M42 84l1.5 4.5L48 90l-4.5 1.5L42 96l-1.5-4.5L36 90l4.5-1.5Z" fill={c.accent} opacity="0.6" />
    </>
  );
}

/* Double Doodle Play® — two crayons drawing mirrored loops */
function DoubleDoodleScene({ c }: SceneProps) {
  return (
    <>
      <path
        d="M100 78C84 78 62 66 62 50s16-22 24-12 8 26 0 34"
        stroke={c.accent}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M100 78c16 0 38-12 38-28s-16-22-24-12-8 26 0 34"
        stroke={c.text}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <g transform="rotate(-24 58 84)">
        <rect x="52" y="70" width="12" height="30" rx="3" fill={c.accent} />
        <path d="M52 70h12l-6-12Z" fill={c.text} />
        <rect x="52" y="92" width="12" height="8" rx="3" fill={c.border} />
      </g>
      <g transform="rotate(24 142 84)">
        <rect x="136" y="70" width="12" height="30" rx="3" fill={c.text} opacity="0.85" />
        <path d="M136 70h12l-6-12Z" fill={c.accent} />
        <rect x="136" y="92" width="12" height="8" rx="3" fill={c.border} />
      </g>
      <circle cx="100" cy="30" r="4" fill={c.border} />
      <path d="M40 30l1.5 4.5L46 36l-4.5 1.5L40 42l-1.5-4.5L34 36l4.5-1.5Z" fill={c.accent} opacity="0.6" />
      <path d="M160 26l1.5 4.5 4.5 1.5-4.5 1.5-1.5 4.5-1.5-4.5-4.5-1.5 4.5-1.5Z" fill={c.accent} opacity="0.6" />
    </>
  );
}

/* Sensory Integration — open hand meeting textured swirls and dots */
function SensoryScene({ c }: SceneProps) {
  return (
    <>
      <path
        d="M64 96V66c0-4 6-4 6 0v14-24c0-5 7-5 7 0v22-28c0-5 7-5 7 0v28-24c0-5 7-5 7 0v26c4-6 8-8 12-6 3 2 2 6-1 10L92 96"
        fill="white"
        opacity="0.9"
      />
      <path
        d="M64 96V66c0-4 6-4 6 0v14-24c0-5 7-5 7 0v22-28c0-5 7-5 7 0v28-24c0-5 7-5 7 0v26c4-6 8-8 12-6 3 2 2 6-1 10L92 96"
        stroke={c.accent}
        strokeWidth="2.5"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M124 62c0-12 10-20 20-16M132 66c0-8 7-13 13-11M139 69c0-4 3-6 6-5"
        stroke={c.text}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <circle cx="126" cy="30" r="5" fill={c.accent} opacity="0.75" />
      <circle cx="142" cy="24" r="3.5" fill={c.border} />
      <circle cx="156" cy="34" r="4" fill={c.accent} opacity="0.5" />
      <circle cx="48" cy="34" r="3.5" fill={c.border} />
      <circle cx="38" cy="48" r="4.5" fill={c.accent} opacity="0.55" />
      <path d="M52 20l1.5 4.5L58 26l-4.5 1.5L52 32l-1.5-4.5L46 26l4.5-1.5Z" fill={c.accent} opacity="0.65" />
    </>
  );
}

/* RMTI — rhythmic rocking arcs with a gliding ball */
function RmtiScene({ c }: SceneProps) {
  return (
    <>
      <path
        d="M36 84c20-26 44-26 64 0 16 20 36 20 48 4"
        stroke={c.accent}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M36 66c20-22 44-22 64 0 16 17 36 17 48 3"
        stroke={c.border}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M36 48c20-18 44-18 64 0 16 14 36 14 48 2"
        stroke={c.text}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.45"
      />
      <circle cx="100" cy="64" r="10" fill="white" opacity="0.9" />
      <circle cx="100" cy="64" r="10" stroke={c.accent} strokeWidth="3" fill="none" />
      <path d="M94 64a6 6 0 0 1 12 0" stroke={c.accent} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="48" cy="28" r="3.5" fill={c.border} />
      <path d="M152 24l1.5 4.5 4.5 1.5-4.5 1.5-1.5 4.5-1.5-4.5-4.5-1.5 4.5-1.5Z" fill={c.accent} opacity="0.6" />
    </>
  );
}

/* Handwriting Without Tears® — pencil writing a happy line on lined paper */
function HandwritingScene({ c }: SceneProps) {
  return (
    <>
      <rect x="40" y="26" width="88" height="66" rx="10" fill="white" opacity="0.92" />
      <rect x="40" y="26" width="88" height="66" rx="10" stroke={c.border} strokeWidth="2.5" fill="none" />
      <path d="M52 44h64M52 60h64M52 76h40" stroke={c.border} strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      <path
        d="M54 72c8-10 12 4 20-4s10 6 18-2"
        stroke={c.accent}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <g transform="rotate(40 132 62)">
        <rect x="126" y="34" width="13" height="44" rx="3" fill={c.accent} />
        <rect x="126" y="34" width="13" height="9" rx="3" fill={c.border} />
        <path d="M126 78h13l-6.5 13Z" fill="#F5D9B8" />
        <path d="M129.5 84.5l3-6 3 6Z" fill={c.text} />
      </g>
      <circle cx="150" cy="30" r="4" fill={c.border} />
      <path d="M36 84l1.5 4.5L42 90l-4.5 1.5L36 96l-1.5-4.5L30 90l4.5-1.5Z" fill={c.accent} opacity="0.6" />
    </>
  );
}

/* Oral Placement Therapy® — profile blowing bubbles */
function OralPlacementScene({ c }: SceneProps) {
  return (
    <>
      <path
        d="M64 92V60c0-18 14-32 32-32 16 0 26 10 28 22l6 12c1 2 0 4-2 4h-6v10c0 6-5 10-11 10h-9v6"
        fill="white"
        opacity="0.9"
      />
      <path
        d="M64 92V60c0-18 14-32 32-32 16 0 26 10 28 22l6 12c1 2 0 4-2 4h-6v10c0 6-5 10-11 10h-9v6"
        stroke={c.accent}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="104" cy="52" r="3" fill={c.text} />
      <path d="M118 70c4-1 8-1 10 1" stroke={c.text} strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="142" cy="62" r="5" stroke={c.accent} strokeWidth="2.5" fill="none" opacity="0.8" />
      <circle cx="154" cy="50" r="7" stroke={c.accent} strokeWidth="2.5" fill="none" opacity="0.6" />
      <circle cx="164" cy="70" r="4" stroke={c.accent} strokeWidth="2.5" fill="none" opacity="0.7" />
      <circle cx="150" cy="82" r="3" fill={c.border} />
      <path d="M44 40l1.5 4.5L50 46l-4.5 1.5L44 52l-1.5-4.5L38 46l4.5-1.5Z" fill={c.accent} opacity="0.6" />
    </>
  );
}

/* Aquatic Therapy — sun, waves and a float ring */
function AquaticScene({ c }: SceneProps) {
  return (
    <>
      <circle cx="52" cy="34" r="12" fill={c.accent} opacity="0.75" />
      <path
        d="M52 14v6M52 48v6M32 34h6M66 34h6M38 20l4 4M66 48l-4-4M66 20l-4 4M38 48l4-4"
        stroke={c.accent}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <circle cx="124" cy="58" r="16" fill="white" opacity="0.9" />
      <circle cx="124" cy="58" r="16" stroke={c.accent} strokeWidth="6" fill="none" opacity="0.85" />
      <path d="M112 46l6 6M136 46l-6 6M112 70l6-6M136 70l-6-6" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M28 84c12-8 24-8 36 0s24 8 36 0 24-8 36 0 24 8 36 0"
        stroke={c.text}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />
      <path
        d="M40 96c12-8 24-8 36 0s24 8 36 0 24-8 36 0"
        stroke={c.accent}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      <circle cx="160" cy="34" r="3.5" fill={c.border} />
    </>
  );
}

/* PIASTM — instrument gliding over tissue with relief strokes */
function PiastmScene({ c }: SceneProps) {
  return (
    <>
      <path
        d="M32 88c16-14 40-20 68-18 24 2 44 8 68 4"
        stroke={c.text}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M32 96c16-14 40-20 68-18 24 2 44 8 68 4"
        stroke={c.border}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <g transform="rotate(-18 100 52)">
        <path
          d="M74 60c0-14 12-24 26-24s26 10 26 24c0 4-3 7-7 7-8 0-10-5-19-5s-11 5-19 5c-4 0-7-3-7-7Z"
          fill="white"
          opacity="0.92"
        />
        <path
          d="M74 60c0-14 12-24 26-24s26 10 26 24c0 4-3 7-7 7-8 0-10-5-19-5s-11 5-19 5c-4 0-7-3-7-7Z"
          stroke={c.accent}
          strokeWidth="3"
          fill="none"
        />
      </g>
      <path
        d="M64 78c4-3 8-3 12 0M92 82c4-3 8-3 12 0M120 80c4-3 8-3 12 0"
        stroke={c.accent}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      <path d="M150 30l1.5 4.5 4.5 1.5-4.5 1.5-1.5 4.5-1.5-4.5-4.5-1.5 4.5-1.5Z" fill={c.accent} opacity="0.6" />
      <circle cx="44" cy="34" r="3.5" fill={c.border} />
    </>
  );
}

/* Kinesio Taping® — crossed elastic tape strips on a joint */
function KinesioTapingScene({ c }: SceneProps) {
  return (
    <>
      <circle cx="100" cy="60" r="34" fill="white" opacity="0.75" />
      <g transform="rotate(-28 100 60)">
        <rect x="54" y="50" width="92" height="20" rx="10" fill={c.accent} opacity="0.9" />
        <path d="M66 55v10M80 55v10M94 55v10M108 55v10M122 55v10M136 55v10" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
      </g>
      <g transform="rotate(28 100 60)">
        <rect x="54" y="50" width="92" height="20" rx="10" fill={c.text} opacity="0.7" />
        <path d="M66 55v10M80 55v10M94 55v10M108 55v10M122 55v10M136 55v10" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
      </g>
      <path d="M150 26l2 6 6 2-6 2-2 6-2-6-6-2 6-2Z" fill={c.accent} opacity="0.65" />
      <path d="M46 86l1.5 4.5L52 92l-4.5 1.5L46 98l-1.5-4.5L40 92l4.5-1.5Z" fill={c.accent} opacity="0.55" />
      <circle cx="44" cy="30" r="3.5" fill={c.border} />
      <circle cx="158" cy="88" r="4" fill={c.border} />
    </>
  );
}

/* MNRI® — foot and hand prints with radiating reflex arcs */
function MnriScene({ c }: SceneProps) {
  return (
    <>
      <ellipse cx="72" cy="66" rx="14" ry="22" fill={c.accent} opacity="0.85" />
      <circle cx="62" cy="38" r="4" fill={c.accent} opacity="0.85" />
      <circle cx="70" cy="34" r="4.5" fill={c.accent} opacity="0.85" />
      <circle cx="79" cy="35" r="4" fill={c.accent} opacity="0.85" />
      <circle cx="86" cy="40" r="3.5" fill={c.accent} opacity="0.85" />
      <path
        d="M124 88V64c0-4 5-4 5 0v8-16c0-4 5-4 5 0v14-18c0-4 5-4 5 0v18-14c0-4 5-4 5 0v18c3-4 6-6 8-4 2 1 1 4-1 7l-8 11"
        fill="white"
        opacity="0.9"
      />
      <path
        d="M124 88V64c0-4 5-4 5 0v8-16c0-4 5-4 5 0v14-18c0-4 5-4 5 0v18-14c0-4 5-4 5 0v18c3-4 6-6 8-4 2 1 1 4-1 7l-8 11"
        stroke={c.text}
        strokeWidth="2.5"
        fill="none"
        strokeLinejoin="round"
        opacity="0.8"
      />
      <path
        d="M104 30c8-6 20-8 30-4M100 44c6-4 14-6 22-4"
        stroke={c.text}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <path d="M44 26l1.5 4.5L50 32l-4.5 1.5L44 38l-1.5-4.5L38 32l4.5-1.5Z" fill={c.accent} opacity="0.6" />
      <circle cx="160" cy="30" r="3.5" fill={c.border} />
    </>
  );
}

/* KDCT — cupping domes with droplets */
function KdctScene({ c }: SceneProps) {
  return (
    <>
      <path
        d="M32 90c22-10 44-14 68-12 26 2 46 8 68 6"
        stroke={c.border}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M58 76a18 18 0 0 1 36 0c0 3-2 5-5 5H63c-3 0-5-2-5-5Z" fill={c.accent} opacity="0.9" />
      <rect x="70" y="50" width="12" height="10" rx="3" fill={c.text} opacity="0.7" />
      <path d="M112 72a14 14 0 0 1 28 0c0 3-2 5-5 5h-18c-3 0-5-2-5-5Z" fill={c.text} opacity="0.65" />
      <rect x="121" y="52" width="10" height="8" rx="3" fill={c.accent} opacity="0.8" />
      <path
        d="M52 34c4 5 6 8 6 11a6 6 0 1 1-12 0c0-3 2-6 6-11Z"
        fill={c.accent}
        opacity="0.7"
      />
      <path
        d="M156 40c4 5 6 8 6 11a6 6 0 1 1-12 0c0-3 2-6 6-11Z"
        fill={c.accent}
        opacity="0.55"
      />
      <path d="M104 26l1.5 4.5 4.5 1.5-4.5 1.5-1.5 4.5-1.5-4.5-4.5-1.5 4.5-1.5Z" fill={c.accent} opacity="0.6" />
      <circle cx="164" cy="84" r="3.5" fill={c.border} />
    </>
  );
}

/* Fallback — gentle sprout for any future approach without a scene */
function DefaultScene({ c }: SceneProps) {
  return (
    <>
      <path d="M100 92V58" stroke={c.accent} strokeWidth="4" strokeLinecap="round" />
      <path d="M100 66c-16 0-24-10-24-24 14 0 24 8 24 24Z" fill={c.accent} opacity="0.8" />
      <path d="M100 58c14 0 22-9 22-22-13 0-22 8-22 22Z" fill={c.text} opacity="0.6" />
      <circle cx="60" cy="36" r="4" fill={c.border} />
      <circle cx="144" cy="44" r="3.5" fill={c.border} />
    </>
  );
}

const SCENES: Record<string, (props: SceneProps) => React.ReactNode> = {
  "brain-gym": BrainGymScene,
  "double-doodle-play": DoubleDoodleScene,
  "sensory-integration": SensoryScene,
  rmti: RmtiScene,
  "handwriting-without-tears": HandwritingScene,
  "oral-placement-therapy": OralPlacementScene,
  "aquatic-therapy": AquaticScene,
  piastm: PiastmScene,
  "kinesio-taping": KinesioTapingScene,
  mnri: MnriScene,
  kdct: KdctScene,
};

type TherapyIllustrationProps = {
  slug: string;
  pastel: Palette;
  className?: string;
};

export function TherapyIllustration({ slug, pastel, className }: TherapyIllustrationProps) {
  const Scene = SCENES[slug] ?? DefaultScene;

  return (
    <svg
      viewBox="0 0 200 112"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-hidden
    >
      <defs>
        <linearGradient id={`ti-bg-${slug}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.65" />
          <stop offset="100%" stopColor={pastel.border} stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="200" height="112" rx="16" fill={`url(#ti-bg-${slug})`} />
      <Scene c={pastel} />
    </svg>
  );
}
