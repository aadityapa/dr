export type CardPastel = {
  bg: string;
  border: string;
  accent: string;
  text: string;
};

/** Unique pastel identity per card index — never repeats within a single grid under 20 items */
export const cardPastels: CardPastel[] = [
  { bg: "#D6E8F5", border: "#A8CCE8", accent: "#3D7AB5", text: "#1E4A6E" },
  { bg: "#C8EEF0", border: "#9ADEE3", accent: "#2A9DA8", text: "#1A5F66" },
  { bg: "#E4DDF5", border: "#C9BCE8", accent: "#7B5BB5", text: "#4A3570" },
  { bg: "#FCE8DC", border: "#F5C9B0", accent: "#D4845C", text: "#8B4A2A" },
  { bg: "#D8F0E4", border: "#B5E0CC", accent: "#4A9B73", text: "#2D6047" },
  { bg: "#FDF3D4", border: "#F5E09A", accent: "#C9A020", text: "#7A6010" },
  { bg: "#FADED4", border: "#F0B8A8", accent: "#D47058", text: "#8B4030" },
  { bg: "#F5E0E8", border: "#E8B8CC", accent: "#C45A82", text: "#7A3048" },
  { bg: "#D9EDFA", border: "#B3D9F2", accent: "#4A90C4", text: "#2A5580" },
  { bg: "#E0EBE0", border: "#BFD4BF", accent: "#5A8A5A", text: "#3A5A3A" },
  { bg: "#FFE8F0", border: "#F5C0D8", accent: "#D45A8A", text: "#8B3058" },
  { bg: "#E8F5E0", border: "#C8E8B0", accent: "#6A9B4A", text: "#3F5E2A" },
  { bg: "#FFF0E0", border: "#F5D8B0", accent: "#D49A4A", text: "#8B5E20" },
  { bg: "#E0E8F5", border: "#B8CCE8", accent: "#5A7AB5", text: "#354A70" },
  { bg: "#F0E8FF", border: "#D8C0F5", accent: "#8A5AD4", text: "#50308B" },
  { bg: "#E8FFF5", border: "#B8F5D8", accent: "#4AB58A", text: "#2A7058" },
  { bg: "#FFF5E8", border: "#F5E0C0", accent: "#D4A05A", text: "#8B6020" },
  { bg: "#F5E8FF", border: "#E0C0F5", accent: "#9A5AD4", text: "#5A308B" },
  { bg: "#E8F8FF", border: "#C0E8F5", accent: "#4AA8D4", text: "#2A688B" },
  { bg: "#FFF8E8", border: "#F5ECC0", accent: "#D4B85A", text: "#8B7820" },
];

export function getCardPastel(index: number): CardPastel {
  return cardPastels[index % cardPastels.length]!;
}

/** Slug-stable color (same service always same color) */
export function getCardPastelByKey(key: string): CardPastel {
  let hash = 0;
  for (let i = 0; i < key.length; i++) hash = (hash + key.charCodeAt(i) * (i + 1)) % cardPastels.length;
  return cardPastels[hash]!;
}
