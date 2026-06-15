"use client";

import dynamic from "next/dynamic";

import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

const DevelopmentJourneyScroll = dynamic(
  () =>
    import("@/components/home/development-journey-scroll").then(
      (mod) => mod.DevelopmentJourneyScroll,
    ),
  {
    ssr: false,
    loading: () => <DevelopmentJourneyFallback />,
  },
);

function DevelopmentJourneyFallback() {
  return (
    <div className="bg-[color:var(--color-snow)]">
      <Section className="!py-10 md:!py-14">
        <SectionHeading
          kicker="Your Child's Journey"
          title="From first steps to everyday confidence"
          description="Scroll to follow a gentle path — how children grow through assessment, therapy, and thriving independence."
          center
        />
      </Section>
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-48 w-full max-w-3xl animate-pulse rounded-3xl bg-[color:var(--color-soft-sage)]/40" />
      </div>
    </div>
  );
}

export { DevelopmentJourneyScroll };
