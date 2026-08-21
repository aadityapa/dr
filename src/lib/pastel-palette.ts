export type CardPastel = {
  bg: string;
  border: string;
  accent: string;
  text: string;
};

/** Unique pastel identity per card index — never repeats within a single grid under 20 items */
export const cardPastels: CardPastel[] = [
  { bg: "var(--cp0-bg)", border: "var(--cp0-border)", accent: "var(--cp0-accent)", text: "var(--cp0-text)" },
  { bg: "var(--cp1-bg)", border: "var(--cp1-border)", accent: "var(--cp1-accent)", text: "var(--cp1-text)" },
  { bg: "var(--cp2-bg)", border: "var(--cp2-border)", accent: "var(--cp2-accent)", text: "var(--cp2-text)" },
  { bg: "var(--cp3-bg)", border: "var(--cp3-border)", accent: "var(--cp3-accent)", text: "var(--cp3-text)" },
  { bg: "var(--cp4-bg)", border: "var(--cp4-border)", accent: "var(--cp4-accent)", text: "var(--cp4-text)" },
  { bg: "var(--cp5-bg)", border: "var(--cp5-border)", accent: "var(--cp5-accent)", text: "var(--cp5-text)" },
  { bg: "var(--cp6-bg)", border: "var(--cp6-border)", accent: "var(--cp6-accent)", text: "var(--cp6-text)" },
  { bg: "var(--cp7-bg)", border: "var(--cp7-border)", accent: "var(--cp7-accent)", text: "var(--cp7-text)" },
  { bg: "var(--cp8-bg)", border: "var(--cp8-border)", accent: "var(--cp8-accent)", text: "var(--cp8-text)" },
  { bg: "var(--cp9-bg)", border: "var(--cp9-border)", accent: "var(--cp9-accent)", text: "var(--cp9-text)" },
  { bg: "var(--cp10-bg)", border: "var(--cp10-border)", accent: "var(--cp10-accent)", text: "var(--cp10-text)" },
  { bg: "var(--cp11-bg)", border: "var(--cp11-border)", accent: "var(--cp11-accent)", text: "var(--cp11-text)" },
  { bg: "var(--cp12-bg)", border: "var(--cp12-border)", accent: "var(--cp12-accent)", text: "var(--cp12-text)" },
  { bg: "var(--cp13-bg)", border: "var(--cp13-border)", accent: "var(--cp13-accent)", text: "var(--cp13-text)" },
  { bg: "var(--cp14-bg)", border: "var(--cp14-border)", accent: "var(--cp14-accent)", text: "var(--cp14-text)" },
  { bg: "var(--cp15-bg)", border: "var(--cp15-border)", accent: "var(--cp15-accent)", text: "var(--cp15-text)" },
  { bg: "var(--cp16-bg)", border: "var(--cp16-border)", accent: "var(--cp16-accent)", text: "var(--cp16-text)" },
  { bg: "var(--cp17-bg)", border: "var(--cp17-border)", accent: "var(--cp17-accent)", text: "var(--cp17-text)" },
  { bg: "var(--cp18-bg)", border: "var(--cp18-border)", accent: "var(--cp18-accent)", text: "var(--cp18-text)" },
  { bg: "var(--cp19-bg)", border: "var(--cp19-border)", accent: "var(--cp19-accent)", text: "var(--cp19-text)" },
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
