import type { CardPastel } from "./pastel-palette";
import { getCardPastel, getCardPastelByKey } from "./pastel-palette";

export type ServicePastel = CardPastel;

const slugOrder = [
  "occupational-therapy",
  "aquatic-therapy",
  "brain-gym",
  "handwriting-training",
  "rmti",
  "opt",
  "piastm",
  "kinesio-taping",
  "mnri",
  "kdct",
] as const;

const slugIndexMap = Object.fromEntries(slugOrder.map((s, i) => [s, i])) as Record<string, number>;

export function getServicePastel(slug: string): ServicePastel {
  const idx = slugIndexMap[slug];
  if (idx !== undefined) return getCardPastel(idx);
  return getCardPastelByKey(slug);
}
