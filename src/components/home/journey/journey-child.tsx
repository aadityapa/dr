import { JOURNEY_COLORS } from "./journey-constants";

type JourneyChildProps = {
  className?: string;
  walking?: boolean;
  waving?: boolean;
};

/** Premium flat child silhouette — soft rounded shapes, minimal detail */
export function JourneyChild({ className, walking = false, waving = false }: JourneyChildProps) {
  return (
    <g className={className} aria-hidden="true">
      {/* Soft ground shadow */}
      <ellipse cx="0" cy="34" rx="14" ry="4" fill={JOURNEY_COLORS.pathStroke} opacity="0.35" />

      {/* Legs */}
      <g className="journey-child-legs">
        <path
          d="M -5 22 Q -7 30 -6 34"
          fill="none"
          stroke={JOURNEY_COLORS.childBody}
          strokeWidth="4"
          strokeLinecap="round"
          className={walking ? "journey-leg-left" : undefined}
        />
        <path
          d="M 5 22 Q 7 30 6 34"
          fill="none"
          stroke={JOURNEY_COLORS.childBody}
          strokeWidth="4"
          strokeLinecap="round"
          className={walking ? "journey-leg-right" : undefined}
        />
      </g>

      {/* Body */}
      <ellipse cx="0" cy="14" rx="11" ry="13" fill={JOURNEY_COLORS.childBody} />

      {/* Arms */}
      <path
        d="M -10 12 Q -16 16 -14 22"
        fill="none"
        stroke={JOURNEY_COLORS.childBody}
        strokeWidth="3.5"
        strokeLinecap="round"
        className="journey-arm-left"
      />
      <path
        d={waving ? "M 10 12 Q 18 8 20 2" : "M 10 12 Q 16 16 14 22"}
        fill="none"
        stroke={JOURNEY_COLORS.childBody}
        strokeWidth="3.5"
        strokeLinecap="round"
        className="journey-arm-right"
      />

      {/* Head */}
      <circle cx="0" cy="-4" r="10" fill={JOURNEY_COLORS.childSkin} />

      {/* Hair — soft cap */}
      <path
        d="M -9 -6 C -8 -14 8 -14 9 -6 C 6 -10 0 -11 -4 -9 Z"
        fill={JOURNEY_COLORS.childHair}
      />

      {/* Eyes */}
      <g className="journey-child-eyes">
        <ellipse cx="-3.5" cy="-4" rx="1.2" ry="1.6" fill={JOURNEY_COLORS.childHair} />
        <ellipse cx="3.5" cy="-4" rx="1.2" ry="1.6" fill={JOURNEY_COLORS.childHair} />
      </g>

      {/* Gentle smile */}
      <path
        d="M -3 0 Q 0 2.5 3 0"
        fill="none"
        stroke={JOURNEY_COLORS.peachAccent}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </g>
  );
}
