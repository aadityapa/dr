"use client";

import dynamic from "next/dynamic";

const HomeStorySceneLazy = dynamic(
  () => import("@/components/home/home-story-scene").then((mod) => mod.HomeStoryScene),
  {
    ssr: false,
    loading: () => <HomeStorySceneFallback />,
  },
);

function HomeStorySceneFallback() {
  return (
    <section className="bg-[color:var(--color-snow)]">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 md:px-8 md:py-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.35fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-sage-text)]">
              The Journey
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-serif)] text-3xl leading-tight text-[color:var(--color-sage-dark)] md:text-4xl">
              A beautiful story of progress
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[color:var(--color-muted)] md:text-base">
              A calm, scroll‑told path from first conversation to thriving participation.
            </p>
          </div>

          <div className="h-[58vh] min-h-[360px] max-h-[560px] w-full animate-pulse rounded-[2rem] bg-[color:var(--color-soft-sage)]/35" />
        </div>
      </div>
    </section>
  );
}

export { HomeStorySceneLazy };

