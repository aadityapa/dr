import type { Metadata } from "next";

import { StitchConditionsPage } from "@/components/stitch/conditions-page";

export const metadata: Metadata = {
  title: "Conditions We Work With",
  description: "Parent-friendly guidance and therapy pathways for common developmental conditions.",
};

export default function ConditionsPage() {
  return <StitchConditionsPage />;
}
