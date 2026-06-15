export const JOURNEY_COLORS = {
  blue: "#D6E8F5",
  sage: "#D8F0E4",
  peach: "#FCE8DC",
  lavender: "#E4DDF5",
  coral: "#FADED4",
  white: "#FAFAFA",
  blueAccent: "#3D7AB5",
  sageAccent: "#4A9B73",
  peachAccent: "#D4845C",
  lavenderAccent: "#7B5BB5",
  coralAccent: "#D47058",
  childBody: "#7D927F",
  childSkin: "#F5D4C0",
  childHair: "#5A4A3A",
  pathStroke: "#B5D4C8",
  pathGlow: "#7D927F",
} as const;

export type MilestoneConfig = {
  id: string;
  label: string;
  progress: number;
  color: string;
  accent: string;
  desktop: { x: number; y: number };
  tablet: { x: number; y: number };
  mobile: { x: number; y: number };
};

export const MILESTONES: MilestoneConfig[] = [
  {
    id: "assessment",
    label: "Assessment",
    progress: 0.16,
    color: JOURNEY_COLORS.blue,
    accent: JOURNEY_COLORS.blueAccent,
    desktop: { x: 260, y: 310 },
    tablet: { x: 220, y: 290 },
    mobile: { x: 120, y: 240 },
  },
  {
    id: "therapy",
    label: "Therapy Support",
    progress: 0.34,
    color: JOURNEY_COLORS.lavender,
    accent: JOURNEY_COLORS.lavenderAccent,
    desktop: { x: 480, y: 230 },
    tablet: { x: 400, y: 220 },
    mobile: { x: 200, y: 400 },
  },
  {
    id: "skills",
    label: "Skill Development",
    progress: 0.52,
    color: JOURNEY_COLORS.sage,
    accent: JOURNEY_COLORS.sageAccent,
    desktop: { x: 680, y: 300 },
    tablet: { x: 560, y: 280 },
    mobile: { x: 120, y: 560 },
  },
  {
    id: "confidence",
    label: "Confidence",
    progress: 0.7,
    color: JOURNEY_COLORS.peach,
    accent: JOURNEY_COLORS.peachAccent,
    desktop: { x: 860, y: 240 },
    tablet: { x: 700, y: 230 },
    mobile: { x: 200, y: 720 },
  },
  {
    id: "thrive",
    label: "Thrive",
    progress: 0.88,
    color: JOURNEY_COLORS.coral,
    accent: JOURNEY_COLORS.coralAccent,
    desktop: { x: 1040, y: 200 },
    tablet: { x: 840, y: 190 },
    mobile: { x: 200, y: 880 },
  },
];

/** Hand-drawn S-curve — desktop */
export const DESKTOP_PATH =
  "M 90 400 C 160 400 190 320 280 300 C 370 280 420 210 520 250 C 620 290 680 340 780 280 C 880 220 960 180 1060 210";

/** Compressed curve — tablet */
export const TABLET_PATH =
  "M 70 380 C 140 380 170 300 250 285 C 330 270 380 210 470 245 C 560 280 620 320 700 270 C 780 220 850 185 930 205";

/** Vertical winding path — mobile */
export const MOBILE_PATH =
  "M 200 70 C 200 130 130 170 130 250 C 130 330 270 370 200 430 C 130 490 130 570 200 630 C 270 690 270 770 200 830 C 130 890 160 950 200 980";

export type LayoutMode = "desktop" | "tablet" | "mobile";

export function getLayoutMode(width: number): LayoutMode {
  if (width < 640) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
}

export function getPathForLayout(mode: LayoutMode): string {
  if (mode === "mobile") return MOBILE_PATH;
  if (mode === "tablet") return TABLET_PATH;
  return DESKTOP_PATH;
}

export function getViewBox(mode: LayoutMode): string {
  if (mode === "mobile") return "0 0 400 1020";
  if (mode === "tablet") return "0 0 1000 460";
  return "0 0 1200 480";
}

export function getMilestonePosition(
  milestone: MilestoneConfig,
  mode: LayoutMode,
): { x: number; y: number } {
  if (mode === "mobile") return milestone.mobile;
  if (mode === "tablet") return milestone.tablet;
  return milestone.desktop;
}
