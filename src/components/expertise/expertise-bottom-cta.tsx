"use client";

import { ConditionsBottomCta } from "@/components/conditions/conditions-bottom-cta";
import type { SharedLabels } from "@/lib/i18n/content/labels";

import type { ExpertisePageProps } from "./expertise-types";

type Props = Pick<ExpertisePageProps, "shells"> & { labels: SharedLabels };

/** Reuses conditions CTA layout with expertise page shell copy. */
export function ExpertiseBottomCta({ shells, labels }: Props) {
  return (
    <ConditionsBottomCta
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
      labels={labels}
    />
  );
}
