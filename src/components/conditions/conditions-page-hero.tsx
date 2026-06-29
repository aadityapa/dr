"use client";

import { useLanguage } from "@/components/providers/language-provider";

export function ConditionsPageHero() {
  const { content } = useLanguage();
  const copy = content.pages.conditionsList;

  return (
    <section className="bg-[#F8FBFB] px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-semibold text-[#005B5B] md:text-4xl lg:text-5xl">{copy.kicker}</h1>
        <p className="mt-4 font-[family-name:var(--font-serif)] text-xl italic text-[#3d8f8f] md:text-2xl">
          {copy.title}
        </p>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#3d5555] md:text-lg">{copy.description}</p>
      </div>
    </section>
  );
}
