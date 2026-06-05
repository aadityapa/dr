import type { Metadata } from "next";

import { StitchServicesPage } from "@/components/stitch/services-page";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore sensory integration, aquatic therapy, feeding support, ADL training, parent counseling, and group sessions.",
};

export default function ServicesPage() {
  return <StitchServicesPage />;
}
