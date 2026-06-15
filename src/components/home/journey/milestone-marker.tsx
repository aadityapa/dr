import type { FC } from "react";

import type { MilestoneConfig } from "./journey-constants";

type MilestoneMarkerProps = {
  milestone: MilestoneConfig;
  x: number;
  y: number;
  active?: boolean;
};

function AssessmentIcon({ accent }: { accent: string }) {
  return (
    <g>
      <rect x="-14" y="-18" width="22" height="28" rx="3" fill="white" opacity="0.9" />
      <rect x="-12" y="-16" width="18" height="6" rx="2" fill={accent} opacity="0.25" />
      <line x1="-8" y1="-4" x2="4" y2="-4" stroke={accent} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="-8" y1="2" x2="0" y2="2" stroke={accent} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path
        d="M 10 -8 C 14 -12 18 -8 16 -4 C 14 0 10 2 10 2 C 10 2 6 0 4 -4 C 2 -8 6 -12 10 -8 Z"
        fill={accent}
        opacity="0.85"
      />
    </g>
  );
}

function TherapyIcon({ accent }: { accent: string }) {
  return (
    <g>
      <path
        d="M -12 -10 C -12 -16 -4 -16 -4 -10 L -4 -4 L -10 -4 C -16 -4 -16 4 -10 4 L -4 4 L -4 10 C -4 16 4 16 4 10 L 4 4 L 10 4 C 16 4 16 -4 10 -4 L 4 -4 L 4 -10 C 4 -16 -4 -16 -4 -10 Z"
        fill={accent}
        opacity="0.3"
        transform="translate(-4, -2) scale(0.85)"
      />
      <circle cx="10" cy="8" r="5" fill="white" opacity="0.9" />
      <path d="M 8 8 L 10 6 L 12 8 L 10 11 Z" fill={accent} opacity="0.7" />
    </g>
  );
}

function SkillsIcon({ accent }: { accent: string }) {
  return (
    <g>
      <ellipse cx="0" cy="10" rx="10" ry="4" fill={accent} opacity="0.2" />
      <path d="M 0 10 L 0 -6" stroke={accent} strokeWidth="2" strokeLinecap="round" />
      <path d="M 0 -2 C -8 -6 -10 2 -4 4" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" />
      <path d="M 0 -4 C 8 -8 10 0 4 2" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" />
      <circle cx="0" cy="-8" r="3" fill={accent} opacity="0.5" />
    </g>
  );
}

function ConfidenceIcon({ accent }: { accent: string }) {
  return (
    <g>
      <path
        d="M 0 -14 L 3.5 -5 L 13 -4.5 L 6 2 L 8 12 L 0 7 L -8 12 L -6 2 L -13 -4.5 L -3.5 -5 Z"
        fill={accent}
        opacity="0.35"
      />
      <circle cx="0" cy="14" r="5" fill="white" opacity="0.85" />
      <circle cx="0" cy="12" r="3.5" fill={accent} opacity="0.25" />
    </g>
  );
}

function ThriveIcon({ accent }: { accent: string }) {
  return (
    <g>
      <path
        d="M -18 8 Q -10 -4 0 -8 Q 10 -4 18 8 L 18 12 Q 0 6 -18 12 Z"
        fill={accent}
        opacity="0.2"
      />
      <circle cx="-8" cy="0" r="4" fill="white" opacity="0.7" />
      <circle cx="8" cy="-2" r="3" fill="white" opacity="0.6" />
      <ellipse cx="0" cy="10" rx="5" ry="7" fill={accent} opacity="0.4" />
      <circle cx="0" cy="4" r="4" fill="white" opacity="0.9" />
    </g>
  );
}

const ICONS: Record<string, FC<{ accent: string }>> = {
  assessment: AssessmentIcon,
  therapy: TherapyIcon,
  skills: SkillsIcon,
  confidence: ConfidenceIcon,
  thrive: ThriveIcon,
};

export function MilestoneMarker({ milestone, x, y, active = false }: MilestoneMarkerProps) {
  const Icon = ICONS[milestone.id] ?? AssessmentIcon;

  return (
    <g
      className="journey-milestone"
      transform={`translate(${x}, ${y})`}
      data-milestone={milestone.id}
      role="img"
      aria-label={milestone.label}
    >
      {/* Glow ring when active */}
      <circle
        r={active ? 42 : 36}
        fill={milestone.color}
        stroke={milestone.accent}
        strokeWidth={active ? 2 : 1}
        strokeOpacity={active ? 0.5 : 0.2}
        className="journey-milestone-bg"
        style={{
          filter: active ? `drop-shadow(0 0 12px ${milestone.accent}40)` : undefined,
        }}
      />

      <g className="journey-milestone-icon" opacity={active ? 1 : 0.75}>
        <Icon accent={milestone.accent} />
      </g>

      <text
        y={52}
        textAnchor="middle"
        className="journey-milestone-label"
        fill={milestone.accent}
        fontSize="11"
        fontWeight="600"
        fontFamily="var(--font-inter), sans-serif"
      >
        {milestone.label}
      </text>
    </g>
  );
}
