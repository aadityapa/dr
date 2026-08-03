import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Bandage,
  Brain,
  Droplets,
  Footprints,
  HeartHandshake,
  PenLine,
  Palette,
  Sparkles,
  Utensils,
  Waves,
  Wind,
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
  // One distinct icon per approach, chosen to reflect what it actually does.
  "looking-beyond-a-diagnosis": HeartHandshake, // whole-child, family partnership
  "brain-gym": Brain, // movement-based learning readiness
  "double-doodle-play": Palette, // bilateral drawing & creative play
  "sensory-integration": Sparkles, // organising sensory input
  rmti: Activity, // rhythmic movement training
  "handwriting-without-tears": PenLine, // letter formation & pencil control
  "oral-placement-therapy": Utensils, // feeding & oral motor skills
  "aquatic-therapy": Waves, // water-based therapy
  piastm: Wind, // soft-tissue mobilisation
  "kinesio-taping": Bandage, // therapeutic taping
  mnri: Footprints, // reflex integration & movement patterns
  kdct: Droplets, // dry cupping therapy
};

export function getUnderstandingSnippet(text: string, maxSentences = 2): string {
  const sentences = text.match(/[^.!?]+[.!?]+(?:\s|$)/g);
  if (!sentences?.length) return text;
  return sentences.slice(0, maxSentences).join("").trim();
}

export function getExpertiseCategories(slug: string): ExpertiseCategory[] {
  return expertiseCategoriesMap[slug] ?? ["learning"];
}
