/** Spec-aligned pastel palette for expertise therapy cards */
export const EXPERTISE_PASTELS = [
  { bg: "#EAF4FF", border: "#B8D4F0", accent: "#3D7AB5", text: "#1E4A6E" },
  { bg: "#EAFBF2", border: "#B5E8CC", accent: "#4A9B73", text: "#2D6047" },
  { bg: "#F4EDFF", border: "#D4C4F0", accent: "#7B5BB5", text: "#4A3570" },
  { bg: "#FFF2E9", border: "#F5D0B8", accent: "#D4845C", text: "#8B4A2A" },
  { bg: "#FFF9DE", border: "#F5E8A8", accent: "#C9A020", text: "#7A6010" },
  { bg: "#EDF8EC", border: "#C8E8B8", accent: "#5A9B4A", text: "#3A5A2A" },
  { bg: "#E8F5FF", border: "#B8DCF5", accent: "#4A90C4", text: "#2A5580" },
  { bg: "#FFEFF7", border: "#F5C8DC", accent: "#C45A82", text: "#7A3048" },
] as const;

export type ExpertisePastel = (typeof EXPERTISE_PASTELS)[number];

export function getExpertisePastelByKey(key: string): ExpertisePastel {
  let hash = 0;
  for (let i = 0; i < key.length; i++) hash = (hash + key.charCodeAt(i) * (i + 1)) % EXPERTISE_PASTELS.length;
  return EXPERTISE_PASTELS[hash]!;
}
