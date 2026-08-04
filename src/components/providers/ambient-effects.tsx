"use client";

import { ClientEnhancements } from "@/components/providers/client-enhancements";
import { WatercolorCanvas } from "@/components/providers/watercolor-canvas";
import { useEffectsEnabled } from "@/lib/effects";

/**
 * AmbientEffects — mounts the always-running decorative layers (watercolour
 * canvas, Lenis smooth scroll, cursor mascot) only while the user's
 * "effects" preference is on. Unmounting cancels their rAF loops, so the
 * toggle is also a performance/battery switch.
 */
export function AmbientEffects() {
  const enabled = useEffectsEnabled();
  if (!enabled) return null;

  return (
    <>
      <WatercolorCanvas />
      <ClientEnhancements />
    </>
  );
}
