"use client";

import { useEffect, useRef } from "react";

/**
 * WatercolorCanvas — site-wide watercolour pigment-mixing effect with a
 * water-reflection shimmer pass.
 *
 * Layer 1: saturated pastel pigment blobs drift and multiply into each other
 * like wet paint; pointer movement drops new pigment that blooms and fades.
 * Layer 2: soft elongated light streaks drift diagonally with screen
 * blending — reading as light reflecting off water.
 *
 * Performance safeguards: tiny internal resolution upscaled with CSS blur,
 * ~30fps cap, paused on hidden tabs, static wash for reduced motion, fewer
 * blobs on mobile, pointer-events: none.
 */

type Blob = {
  hue: string;
  x: number;
  y: number;
  r: number;
  spdX: number;
  spdY: number;
  phase: number;
  drift: number;
};

type Drop = {
  hue: string;
  x: number;
  y: number;
  born: number;
  life: number;
  maxR: number;
};

type Streak = {
  x: number;
  y: number;
  len: number; // ellipse x-radius as fraction of width
  thick: number; // ellipse y-radius as fraction of height
  angle: number;
  spd: number;
  phase: number;
};

// Saturated pastels — visible mixing, still on-brand.
const PIGMENTS = [
  "137, 184, 222", // sky
  "166, 214, 189", // mint
  "183, 166, 226", // lavender
  "247, 183, 151", // peach
  "240, 163, 193", // rose
  "247, 215, 130", // sun
  "149, 196, 178", // sage
  "150, 205, 220", // aqua
];

const SCALE = 0.14;
const FRAME_MS = 33;

export function WatercolorCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    let w = 0;
    let h = 0;
    const resize = () => {
      w = Math.max(1, Math.round(window.innerWidth * SCALE));
      h = Math.max(1, Math.round(window.innerHeight * SCALE));
      canvas.width = w;
      canvas.height = h;
    };
    resize();

    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    const blobCount = isMobile ? 6 : 9;
    const blobs: Blob[] = Array.from({ length: blobCount }, (_, i) => ({
      hue: PIGMENTS[i % PIGMENTS.length],
      x: rand(0.05, 0.95),
      y: rand(0.05, 0.95),
      r: rand(0.3, 0.52),
      spdX: rand(-0.014, 0.014),
      spdY: rand(-0.014, 0.014),
      phase: rand(0, Math.PI * 2),
      drift: rand(0.4, 1),
    }));

    // Water-reflection light streaks (screen-blended shimmer)
    const streaks: Streak[] = Array.from({ length: isMobile ? 3 : 5 }, () => ({
      x: rand(0, 1),
      y: rand(0.1, 0.9),
      len: rand(0.2, 0.4),
      thick: rand(0.02, 0.05),
      angle: rand(-0.35, -0.15),
      spd: rand(0.008, 0.02),
      phase: rand(0, Math.PI * 2),
    }));

    let drops: Drop[] = [];
    let pigmentIdx = 0;
    let lastDropAt = 0;

    const addDrop = (clientX: number, clientY: number, strong = false) => {
      const now = performance.now();
      if (now - lastDropAt < (strong ? 60 : 110)) return;
      lastDropAt = now;
      pigmentIdx = (pigmentIdx + 1) % PIGMENTS.length;
      drops.push({
        hue: PIGMENTS[pigmentIdx],
        x: clientX / window.innerWidth,
        y: clientY / window.innerHeight,
        born: now,
        life: strong ? 2800 : 2000,
        maxR: strong ? 0.26 : 0.17,
      });
      if (drops.length > 26) drops = drops.slice(-26);
    };

    const onMove = (e: PointerEvent) => addDrop(e.clientX, e.clientY);
    const onDown = (e: PointerEvent) => addDrop(e.clientX, e.clientY, true);

    const drawBlob = (x: number, y: number, r: number, hue: string, alpha: number) => {
      const px = x * w;
      const py = y * h;
      const pr = Math.max(2, r * Math.min(w, h) * 2.2);
      const g = ctx.createRadialGradient(px, py, 0, px, py, pr);
      g.addColorStop(0, `rgba(${hue}, ${alpha})`);
      g.addColorStop(0.55, `rgba(${hue}, ${alpha * 0.55})`);
      g.addColorStop(1, `rgba(${hue}, 0)`);
      ctx.fillStyle = g;
      ctx.fillRect(px - pr, py - pr, pr * 2, pr * 2);
    };

    const drawStreak = (st: Streak, t: number) => {
      const shimmer = 0.1 + 0.08 * (0.5 + 0.5 * Math.sin(t * 0.0011 + st.phase));
      const px = st.x * w;
      const py = st.y * h;
      const rx = Math.max(3, st.len * w);
      const ry = Math.max(1.5, st.thick * h);
      ctx.save();
      ctx.translate(px, py);
      ctx.rotate(st.angle);
      ctx.scale(rx, ry);
      const g = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
      g.addColorStop(0, `rgba(255, 255, 255, ${shimmer})`);
      g.addColorStop(0.6, `rgba(255, 255, 255, ${shimmer * 0.4})`);
      g.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(0, 0, 1, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const render = (t: number) => {
      ctx.clearRect(0, 0, w, h);

      // Pass 1 — pigment mixing ("multiply" darkens overlaps like real paint)
      ctx.globalCompositeOperation = "multiply";
      for (const b of blobs) {
        const wobX = Math.sin(t * 0.00012 * b.drift + b.phase) * 0.09;
        const wobY = Math.cos(t * 0.00009 * b.drift + b.phase * 1.7) * 0.09;
        b.x += b.spdX * 0.016;
        b.y += b.spdY * 0.016;
        if (b.x < -0.2) b.x = 1.2;
        if (b.x > 1.2) b.x = -0.2;
        if (b.y < -0.2) b.y = 1.2;
        if (b.y > 1.2) b.y = -0.2;
        const breathe = 1 + Math.sin(t * 0.0002 * b.drift + b.phase) * 0.12;
        drawBlob(b.x + wobX, b.y + wobY, b.r * breathe, b.hue, 0.72);
      }

      const now = performance.now();
      drops = drops.filter((d) => now - d.born < d.life);
      for (const d of drops) {
        const p = (now - d.born) / d.life;
        const spread = Math.sqrt(p);
        const fade = 1 - p * p;
        drawBlob(d.x, d.y, d.maxR * spread, d.hue, 0.62 * fade);
      }

      // Pass 2 — water-reflection shimmer (screen lightens like glints)
      ctx.globalCompositeOperation = "screen";
      for (const st of streaks) {
        st.x += st.spd * 0.016;
        st.y += st.spd * 0.006;
        if (st.x > 1.3) {
          st.x = -0.3;
          st.y = Math.random() * 0.8 + 0.1;
        }
        if (st.y > 1.2) st.y = -0.1;
        drawStreak(st, t);
      }

      ctx.globalCompositeOperation = "source-over";
    };

    if (reduced) {
      render(1000);
      const onStaticResize = () => {
        resize();
        render(1000);
      };
      window.addEventListener("resize", onStaticResize);
      return () => window.removeEventListener("resize", onStaticResize);
    }

    let frameId = 0;
    let lastFrame = 0;
    let running = true;

    const loop = (t: number) => {
      frameId = requestAnimationFrame(loop);
      if (!running || t - lastFrame < FRAME_MS) return;
      lastFrame = t;
      render(t);
    };
    frameId = requestAnimationFrame(loop);

    const onVisibility = () => {
      running = document.visibilityState === "visible";
    };

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="watercolor-canvas"
      data-watercolor
    />
  );
}
