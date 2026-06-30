import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Brain,
  Ear,
  Eye,
  Footprints,
  Pencil,
  BookOpen,
  HeartHandshake,
  Sprout,
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
  "autism-spectrum-disorder": Brain,
  adhd: Activity,
  "cerebral-palsy": HeartHandshake,
  "developmental-delay": Sprout,
  "sensory-processing-difficulties": Ear,
  "learning-difficulties": BookOpen,
  "motor-coordination-challenges": Footprints,
  "handwriting-difficulties": Pencil,
  "attention-difficulties": Eye,
};

export function getUnderstandingSnippet(text: string, maxSentences = 2): string {
  const sentences = text.match(/[^.!?]+[.!?]+(?:\s|$)/g);
  if (!sentences?.length) return text;
  return sentences.slice(0, maxSentences).join("").trim();
}

export function getConditionCategories(slug: string): ConditionCategory[] {
  return conditionCategories[slug] ?? ["development"];
}
