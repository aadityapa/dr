import type { Metadata } from "next";

import { StitchMilestonesPage } from "@/components/stitch/milestones-page";

export const metadata: Metadata = {
  title: "Testimonials & Milestones",
  description: "Parent stories and child milestones presented with empathy and ethical care.",
};

export default function TestimonialsMilestonesPage() {
  return <StitchMilestonesPage />;
}
