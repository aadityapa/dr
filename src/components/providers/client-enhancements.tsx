"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const SmoothScrollProvider = dynamic(
  () => import("@/components/providers/smooth-scroll-provider").then((mod) => mod.SmoothScrollProvider),
  { ssr: false },
);
const DynamicCursor = dynamic(
  () => import("@/components/providers/dynamic-cursor").then((mod) => mod.DynamicCursor),
  { ssr: false },
);

export function ClientEnhancements() {
  const pathname = usePathname();
  const enableCursor = pathname === "/";

  return (
    <>
      <SmoothScrollProvider />
      {enableCursor ? <DynamicCursor /> : null}
    </>
  );
}
