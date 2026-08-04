"use client";

import dynamic from "next/dynamic";

/**
 * Below-the-fold home sections, code-split so the initial bundle and
 * hydration only cover the hero + first sections (mirrors the pattern
 * used by about-page-content.tsx).
 */

const sectionFallback = (
  <div className="mx-auto my-16 h-72 max-w-6xl animate-pulse rounded-[2rem] bg-[color:var(--color-soft-green)]/20" />
);

const HowICanHelpSection = dynamic(
  () => import("./how-i-can-help-section").then((m) => ({ default: m.HowICanHelpSection })),
  { loading: () => sectionFallback },
);

const WhoWeHelpSection = dynamic(
  () => import("./who-we-help-section").then((m) => ({ default: m.WhoWeHelpSection })),
  { loading: () => sectionFallback },
);

const SuccessStoriesSection = dynamic(
  () => import("./success-stories-section").then((m) => ({ default: m.SuccessStoriesSection })),
  { loading: () => sectionFallback },
);

export function HomeBelowFold() {
  return (
    <>
      <HowICanHelpSection />
      <WhoWeHelpSection />
      <SuccessStoriesSection />
    </>
  );
}
