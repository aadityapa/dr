import type { LucideIcon } from "lucide-react";
import {
  Baby,
  BookOpen,
  Focus,
  Footprints,
  ListChecks,
  PenLine,
  PersonStanding,
  Users,
  Waves,
} from "lucide-react";

export type ConditionCategory =
  | "development"
  | "sensory"
  | "motor"
  | "neurological"
  | "learning"
  | "behavioral";

export const CONDITION_CATEGORY_KEYS: ConditionCategory[] = [
  "development",
  "sensory",
  "motor",
  "neurological",
  "learning",
  "behavioral",
];

export const conditionCategories: Record<string, ConditionCategory[]> = {
  "autism-spectrum-disorder": ["behavioral", "development"],
  adhd: ["behavioral", "development"],
  "cerebral-palsy": ["neurological", "motor"],
  "developmental-delay": ["development"],
  "sensory-processing-difficulties": ["sensory"],
  "learning-difficulties": ["learning"],
  "motor-coordination-challenges": ["motor"],
  "handwriting-difficulties": ["learning", "motor"],
  "attention-difficulties": ["behavioral"],
};

export const conditionIcons: Record<string, LucideIcon> = {
  // Each icon mirrors the card's "therapy focus" label.
  "autism-spectrum-disorder": Users, // sensory & social — connection
  adhd: ListChecks, // executive function — planning & follow-through
  "cerebral-palsy": PersonStanding, // motor & independence — posture, movement
  "developmental-delay": Baby, // foundational skills — early milestones
  "sensory-processing-difficulties": Waves, // sensory regulation — sensory input
  "learning-difficulties": BookOpen, // academic skills — reading & writing
  "motor-coordination-challenges": Footprints, // motor planning — sequencing movement
  "handwriting-difficulties": PenLine, // fine motor & writing — pencil control
  "attention-difficulties": Focus, // focus & regulation — sustained attention
};

export function getUnderstandingSnippet(text: string, maxSentences = 2): string {
  const sentences = text.match(/[^.!?]+[.!?]+(?:\s|$)/g);
  if (!sentences?.length) return text;
  return sentences.slice(0, maxSentences).join("").trim();
}

export function getConditionCategories(slug: string): ConditionCategory[] {
  return conditionCategories[slug] ?? ["development"];
}
