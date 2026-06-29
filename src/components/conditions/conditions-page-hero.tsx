"use client";

import { useLanguage } from "@/components/providers/language-provider";

export function ConditionsPageHero() {
  const { content } = useLanguage();
  const copy = content.pages.conditionsList;

  return (
    <section className="bg-[color:var(--color-cream)] px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-[family-name:var(--font-serif)] text-3xl text-[#005B5B] md:text-4xl lg:text-5xl">
          {copy.kicker}
        </h1>
        <p className="mt-3 font-[family-name:var(--font-serif)] text-lg italic text-[color:var(--color-sage)] md:text-xl">
          {copy.title}
        </p>
      </div>
    </section>
  );
}
