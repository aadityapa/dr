"use client";

import { useCallback, useState } from "react";

import { ConditionDetailCard } from "@/components/conditions/condition-detail-card";
import { ConditionsPillNav } from "@/components/conditions/conditions-pill-nav";
import { useLanguage } from "@/components/providers/language-provider";
import { clientConditions } from "@/lib/client-content/conditions";
import { getLabels, getLocalizedClientCondition } from "@/lib/i18n/localize";

export function ConditionsLanding() {
  const { locale } = useLanguage();
  const labels = getLabels(locale);
  const [activeSlug, setActiveSlug] = useState(clientConditions[0]?.slug ?? "");

  const scrollToCondition = useCallback((slug: string) => {
    setActiveSlug(slug);
    const element = document.getElementById(`condition-${slug}`);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="space-y-10">
      <ConditionsPillNav activeSlug={activeSlug} onSelect={scrollToCondition} />

      <div className="space-y-8">
        {clientConditions.map((condition) => {
          const localized = getLocalizedClientCondition(condition.slug, locale) ?? condition;
          return (
            <ConditionDetailCard
              key={condition.slug}
              id={`condition-${condition.slug}`}
              condition={localized}
              labels={labels}
            />
          );
        })}
      </div>
    </div>
  );
}
