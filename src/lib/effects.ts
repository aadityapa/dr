"use client";

import { useEffect, useState } from "react";

/**
 * "Reduce effects" preference — lets users switch off the heavy ambient
 * layers (watercolour canvas, smooth scroll, cursor mascot) independently
 * of dark mode / prefers-reduced-motion. Persisted in localStorage and
 * broadcast via a window event so every consumer updates instantly.
 */

export const EFFECTS_STORAGE_KEY = "tws-effects";
export const EFFECTS_EVENT = "tws-effects-change";

export function effectsEnabled(): boolean {
  try {
    return localStorage.getItem(EFFECTS_STORAGE_KEY) !== "off";
  } catch {
    return true;
  }
}

export function setEffectsEnabled(on: boolean) {
  try {
    localStorage.setItem(EFFECTS_STORAGE_KEY, on ? "on" : "off");
  } catch {}
  window.dispatchEvent(new CustomEvent<boolean>(EFFECTS_EVENT, { detail: on }));
}

export function useEffectsEnabled(): boolean {
  const [on, setOn] = useState(true);

  useEffect(() => {
    setOn(effectsEnabled());
    const handler = (e: Event) => setOn((e as CustomEvent<boolean>).detail);
    window.addEventListener(EFFECTS_EVENT, handler);
    return () => window.removeEventListener(EFFECTS_EVENT, handler);
  }, []);

  return on;
}
