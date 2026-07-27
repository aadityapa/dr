"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Hydration-safe motion gate for Framer Motion entrance animations.
 *
 * `useReducedMotion()` is `null` on the server (falsy), so gating `initial` on it
 * makes SSR render hidden styles while the client may hydrate at the animate state.
 * This hook stays `false` through SSR and the first client paint, then becomes
 * `true` only after mount when the user has not requested reduced motion.
 */
export function useMotionReady() {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    /** True when ambient / loop animations may run (after mount, motion allowed). */
    reduced: !!reduced,
    /** Safe to pass a non-false `initial` only when this is true. */
    motionReady: mounted && !reduced,
  };
}
