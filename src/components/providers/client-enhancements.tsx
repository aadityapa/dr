"use client";

import dynamic from "next/dynamic";

const SmoothScrollProvider = dynamic(
  () => import("@/components/providers/smooth-scroll-provider").then((mod) => mod.SmoothScrollProvider),
  { ssr: false },
);
const CartoonCursor = dynamic(
  () => import("@/components/providers/cartoon-cursor").then((mod) => mod.CartoonCursor),
  { ssr: false },
);

export function ClientEnhancements() {
  return (
    <>
      <SmoothScrollProvider />
      <CartoonCursor />
    </>
  );
}
