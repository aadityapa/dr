import type { LucideIcon } from "lucide-react";
import {
  Award,
  Brain,
  Hand,
  HeartHandshake,
  PenLine,
  Sparkles,
  Target,
  Utensils,
  Waves,
} from "lucide-react";

export type ExpertiseCategory =
  | "movement"
  | "sensory"
  | "motor"
  | "feeding"
  | "aquatic"
  | "learning"
  | "neurological";

export const EXPERTISE_CATEGORY_KEYS: ExpertiseCategory[] = [
  "movement",
  "sensory",
  "motor",
  "feeding",
  "aquatic",
  "learning",
  "neurological",
];

export const expertiseCategoriesMap: Record<string, ExpertiseCategory[]> = {
  "looking-beyond-a-diagnosis": ["learning"],
  "brain-gym": ["movement", "learning"],
  "double-doodle-play": ["motor", "learning"],
  "sensory-integration": ["sensory"],
  rmti: ["movement", "neurological"],
  "handwriting-without-tears": ["motor", "learning"],
  "oral-placement-therapy": ["feeding"],
  "aquatic-therapy": ["aquatic", "motor"],
  piastm: ["motor"],
  "kinesio-taping": ["motor"],
  mnri: ["neurological", "movement"],
  kdct: ["motor"],
};

export const expertiseIcons: Record<string, LucideIcon> = {
  "looking-beyond-a-diagnosis": HeartHandshake,
  "brain-gym": Brain,
  "double-doodle-play": PenLine,
  "sensory-integration": Sparkles,
  rmti: Target,
  "handwriting-without-tears": PenLine,
  "oral-placement-therapy": Utensils,
  "aquatic-therapy": Waves,
  piastm: Hand,
  "kinesio-taping": Award,
  mnri: Brain,
  kdct: HeartHandshake,
};

export function getUnderstandingSnippet(text: string, maxSentences = 2): string {
  const sentences = text.match(/[^.!?]+[.!?]+(?:\s|$)/g);
  if (!sentences?.length) return text;
  return sentences.slice(0, maxSentences).join("").trim();
}

export function getExpertiseCategories(slug: string): ExpertiseCategory[] {
  return expertiseCategoriesMap[slug] ?? ["learning"];
}
