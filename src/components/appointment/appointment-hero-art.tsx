"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Colourful, child-friendly decorative illustration for the appointment hero.
 * Uses the site pastel palette (sun, sky, lavender, peach, terracotta, sage).
 * Purely decorative — hidden from assistive tech and disabled for
 * users who prefer reduced motion (falls back to a static version).
 */
export function AppointmentHeroArt() {
  const reduced = useReducedMotion();

  const float = (dy: number, dur: number, delay = 0) =>
    reduced
      ? {}
      : {
          animate: { y: [0, dy, 0] },
          transition: { duration: dur, repeat: Infinity, ease: "easeInOut" as const, delay },
        };

  return (
    <div
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 items-center justify-center md:flex lg:w-[46%]"
      aria-hidden
    >
      <div className="relative h-[360px] w-[420px]">
        {/* Sun */}
        <motion.svg
          className="absolute right-6 top-2 h-24 w-24"
          viewBox="0 0 100 100"
          {...float(-10, 8)}
        >
          <g stroke="#f5cf79" strokeWidth="4" strokeLinecap="round">
            {Array.from({ length: 12 }).map((_, i) => {
              const a = (i * Math.PI) / 6;
              return (
                <line
                  key={i}
                  x1={50 + Math.cos(a) * 30}
                  y1={50 + Math.sin(a) * 30}
                  x2={50 + Math.cos(a) * 42}
                  y2={50 + Math.sin(a) * 42}
                />
              );
            })}
          </g>
          <circle cx="50" cy="50" r="24" fill="#f5cf79" />
          <circle cx="50" cy="50" r="24" fill="#fce8dc" opacity="0.35" />
        </motion.svg>

        {/* Cloud */}
        <motion.svg
          className="absolute left-2 top-6 h-16 w-28"
          viewBox="0 0 120 60"
          {...float(8, 10, 0.6)}
        >
          <g fill="#b9ddec">
            <circle cx="35" cy="38" r="20" />
            <circle cx="60" cy="30" r="24" />
            <circle cx="88" cy="40" r="18" />
            <rect x="30" y="38" width="62" height="18" rx="9" />
          </g>
        </motion.svg>

        {/* Balloons */}
        <motion.svg
          className="absolute left-8 top-24 h-40 w-32"
          viewBox="0 0 120 160"
          {...float(-14, 9, 0.2)}
        >
          <g strokeWidth="1.5">
            <path d="M34 70 q10 22 6 44" fill="none" stroke="#a85a42" />
            <path d="M66 60 q-8 26 -2 54" fill="none" stroke="#7d927f" />
            <path d="M92 78 q6 20 0 40" fill="none" stroke="#c9a3e0" />
          </g>
          <ellipse cx="34" cy="46" rx="24" ry="28" fill="#f6a5a0" />
          <ellipse cx="66" cy="38" rx="26" ry="30" fill="#f5cf79" />
          <ellipse cx="94" cy="56" rx="20" ry="24" fill="#c9a3e0" />
          <ellipse cx="27" cy="38" rx="7" ry="9" fill="#fff" opacity="0.5" />
          <ellipse cx="58" cy="28" rx="7" ry="9" fill="#fff" opacity="0.5" />
        </motion.svg>

        {/* Building blocks */}
        <motion.svg
          className="absolute bottom-4 right-10 h-32 w-40"
          viewBox="0 0 160 120"
          {...float(10, 11, 0.4)}
        >
          <rect x="20" y="70" width="44" height="44" rx="8" fill="#b9ddec" />
          <rect x="70" y="70" width="44" height="44" rx="8" fill="#f6a5a0" />
          <rect x="45" y="24" width="44" height="44" rx="8" fill="#f5cf79" />
          <text x="42" y="100" fontSize="22" fontWeight="700" fill="#2f4d3b" textAnchor="middle">A</text>
          <text x="92" y="100" fontSize="22" fontWeight="700" fill="#2f4d3b" textAnchor="middle">B</text>
          <text x="67" y="54" fontSize="22" fontWeight="700" fill="#2f4d3b" textAnchor="middle">C</text>
        </motion.svg>

        {/* Crayon */}
        <motion.svg
          className="absolute bottom-16 left-6 h-10 w-32"
          viewBox="0 0 130 30"
          {...float(-8, 7, 0.9)}
        >
          <rect x="24" y="8" width="86" height="14" rx="4" fill="#7d927f" />
          <path d="M24 8 L10 15 L24 22 Z" fill="#e0c9a6" />
          <path d="M14 12 L10 15 L14 18 Z" fill="#2f4d3b" />
          <rect x="110" y="8" width="10" height="14" rx="3" fill="#5f7a63" />
        </motion.svg>

        {/* Stars */}
        {[
          { x: 250, y: 40, s: 1, c: "#f5cf79", d: 0.3 },
          { x: 30, y: 120, s: 0.7, c: "#c9a3e0", d: 0.7 },
          { x: 300, y: 150, s: 0.85, c: "#f6a5a0", d: 1.1 },
        ].map((st, i) => (
          <motion.svg
            key={i}
            className="absolute h-6 w-6"
            style={{ left: st.x * 0.5, top: st.y }}
            viewBox="0 0 24 24"
            fill={st.c}
            {...(reduced
              ? {}
              : {
                  animate: { scale: [1, 1.25, 1], rotate: [0, 15, 0] },
                  transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay: st.d },
                })}
          >
            <path d="M12 2l2.6 6.3L21 9l-5 4.3L17.5 20 12 16.3 6.5 20 8 13.3 3 9l6.4-.7z" />
          </motion.svg>
        ))}
      </div>
    </div>
  );
}
