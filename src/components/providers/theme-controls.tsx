"use client";

import { Moon, Palette, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

/**
 * ThemeControls — dark/light toggle + accent colour cycle button.
 *
 * The current theme is applied to <html> before hydration by the inline
 * script in src/app/layout.tsx (no flash of wrong theme). This component
 * only reads that state on mount and updates it on click.
 */

const ACCENTS = ["sage", "ocean", "lavender", "sunset"] as const;
type Accent = (typeof ACCENTS)[number];

const ACCENT_DOTS: Record<Accent, string> = {
  sage: "#7d927f",
  ocean: "#7d9db8",
  lavender: "#9b8fc0",
  sunset: "#c08a6a",
};

const ACCENT_LABELS: Record<Accent, string> = {
  sage: "Sage green",
  ocean: "Ocean blue",
  lavender: "Lavender",
  sunset: "Sunset",
};

export function ThemeControls({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  const [accent, setAccent] = useState<Accent>("sage");

  useEffect(() => {
    const el = document.documentElement;
    setDark(el.classList.contains("dark"));
    const a = el.getAttribute("data-accent") as Accent | null;
    if (a && (ACCENTS as readonly string[]).includes(a)) setAccent(a);
    setMounted(true);
  }, []);

  const animateThemeChange = () => {
    const el = document.documentElement;
    el.classList.add("theme-anim");
    window.setTimeout(() => el.classList.remove("theme-anim"), 650);
  };

  const toggleDark = () => {
    animateThemeChange();
    const next = !dark;
    setDark(next);
    const el = document.documentElement;
    el.classList.toggle("dark", next);
    el.style.colorScheme = next ? "dark" : "light";
    try {
      localStorage.setItem("tws-theme", next ? "dark" : "light");
    } catch {}
  };

  const cycleAccent = () => {
    animateThemeChange();
    const next = ACCENTS[(ACCENTS.indexOf(accent) + 1) % ACCENTS.length];
    setAccent(next);
    const el = document.documentElement;
    if (next === "sage") el.removeAttribute("data-accent");
    else el.setAttribute("data-accent", next);
    try {
      localStorage.setItem("tws-accent", next);
    } catch {}
  };

  const btn =
    "relative rounded-xl border border-[color:var(--color-border)] p-2 text-[color:var(--color-sage-dark)] transition-colors hover:bg-[color:var(--color-soft-green)]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--color-sage-dark)]";

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <button
        type="button"
        onClick={toggleDark}
        className={btn}
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        title={dark ? "Light mode" : "Dark mode"}
        aria-pressed={dark}
      >
        {mounted && dark ? (
          <Sun className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Moon className="h-4 w-4" aria-hidden="true" />
        )}
      </button>
      <button
        type="button"
        onClick={cycleAccent}
        className={cn(btn, "hidden sm:block")}
        aria-label={`Change colour theme (current: ${ACCENT_LABELS[accent]})`}
        title={`Colour theme: ${ACCENT_LABELS[accent]}`}
      >
        <Palette className="h-4 w-4" aria-hidden="true" />
        <span
          aria-hidden="true"
          className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full ring-2 ring-[color:var(--color-snow)]"
          style={{ backgroundColor: ACCENT_DOTS[accent] }}
        />
      </button>
    </div>
  );
}
