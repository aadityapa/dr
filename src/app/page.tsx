import type { Metadata } from "next";

import { HomeContent } from "@/components/home/home-content";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Premium pediatric occupational therapy clinic by Dr. Sharuja Sarap helping children regulate, connect, participate, and thrive.",
};

export default function Home() {
  return <HomeContent />;
}
