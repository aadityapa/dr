"use client";

import Link from "next/link";

import { useLanguage } from "@/components/providers/language-provider";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

export function ConditionsPageCta() {
  const { content } = useLanguage();

  return (
    <Reveal className="mt-12 text-center">
      <Button asChild size="lg">
        <Link href="/appointment">{content.pages.conditionsList.cta}</Link>
      </Button>
    </Reveal>
  );
}
