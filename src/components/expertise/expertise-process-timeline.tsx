"use client";

import { TherapyProcessTimeline } from "@/components/conditions/therapy-process-timeline";

import type { ExpertisePageProps } from "./expertise-types";

type Props = Pick<ExpertisePageProps, "shells">;

/** Reuses conditions process timeline with expertise page shell copy. */
export function ExpertiseProcessTimeline({ shells }: Props) {
  return (
    <TherapyProcessTimeline
      shells={{
        ...shells,
        categories: {
          development: shells.categories.learning,
          sensory: shells.categories.sensory,
          motor: shells.categories.motor,
          neurological: shells.categories.neurological,
          learning: shells.categories.learning,
          behavioral: shells.categories.movement,
        },
        therapyFocusLabel: shells.therapyFocusLabel,
        therapyFocus: shells.therapyFocus,
      }}
    />
  );
}
