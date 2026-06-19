"use client";

import Link from "next/link";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/lib/client-content/home";

export function HomeFinalCtaSection() {
  const copy = homeContent.finalCta;

  return (
    <Section compact className="bg-[color:var(--color-sage-dark)] text-white">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl">{copy.title}</h2>
        <p className="mt-4 text-base leading-relaxed text-white/80">{copy.description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="bg-white text-[color:var(--color-sage-dark)] hover:bg-white/90">
            <Link href="/appointment">{copy.primary}</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
            <Link href="/contact">{copy.secondary}</Link>
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
