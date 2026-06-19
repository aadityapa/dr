import type { CardPastel } from "./pastel-palette";
import { getCardPastel, getCardPastelByKey } from "./pastel-palette";

export type ServicePastel = CardPastel;

const slugOrder = [
  "looking-beyond-a-diagnosis",
  "brain-gym",
  "double-doodle-play",
  "sensory-integration",
  "rmti",
  "handwriting-without-tears",
  "oral-placement-therapy",
  "aquatic-therapy",
  "piastm",
  "kinesio-taping",
  "mnri",
  "kdct",
  "occupational-therapy",
  "handwriting-training",
  "opt",
] as const;

const slugIndexMap = Object.fromEntries(slugOrder.map((s, i) => [s, i])) as Record<string, number>;

export function getServicePastel(slug: string): ServicePastel {
  const idx = slugIndexMap[slug];
  if (idx !== undefined) return getCardPastel(idx);
  return getCardPastelByKey(slug);
}
