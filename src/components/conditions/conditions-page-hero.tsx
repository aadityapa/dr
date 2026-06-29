"use client";

import { useLanguage } from "@/components/providers/language-provider";

export function ConditionsPageHero() {
  const { content } = useLanguage();
  const copy = content.pages.conditionsList;

  return (
    <section className="bg-[#f4f9f9] px-6 py-14 md:px-10 md:py-20 lg:px-16">
      <div className="mx-auto max-w-5xl text-left">
        <h1 className="font-[family-name:var(--font-serif)] text-3xl font-bold text-[#004d4d] md:text-4xl lg:text-5xl">
          {copy.kicker}
        </h1>
        <p className="mt-4 font-[family-name:var(--font-serif)] text-lg italic text-[#444] md:text-xl">
          {copy.title}
        </p>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#444] md:text-lg">
          {copy.description}
        </p>
      </div>
    </section>
  );
}
