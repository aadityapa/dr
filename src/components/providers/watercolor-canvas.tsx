"use client";

import { useEffect, useRef } from "react";

/**
 * WatercolorCanvas — site-wide watercolour pigment-mixing effect.
 *
 * Renders soft drifting pigment blobs (brand pastels) that bleed into each
 * other, plus interactive blooms that follow the pointer / touch, like drops
 * of paint spreading on wet paper.
 *
 * Performance safeguards:
 *  - Internal canvas renders at a tiny resolution (~1/7 of viewport) and is
 *    upscaled by CSS with blur — the softness is free, fill cost is tiny.
 *  - Animation throttled to ~30fps; paused when the tab is hidden.
 *  - `prefers-reduced-motion` → renders one static wash, no animation loop.
 *  - Mobile gets fewer blobs.
 *  - `pointer-events: none` + `aria-hidden` — never blocks the UI.
 */

type Blob = {
  hue: string;
  x: number; // 0..1 viewport space
  y: number;
  r: number; // radius as fraction of min(viewport)
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
  life: number; // ms
  maxR: number;
};

const PIGMENTS = [
  "182, 213, 233", // sky
  "214, 232, 245", // pastel blue
  "216, 240, 228", // mint
  "228, 221, 245", // lavender
  "252, 232, 220", // peach
  "245, 224, 232", // rose
  "232, 237, 232", // soft sage
  "253, 243, 212", // pastel yellow
];

const SCALE = 0.14; // internal resolution factor
const FRAME_MS = 33; // ~30fps

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
    const blobCount = isMobile ? 5 : 8;
    const blobs: Blob[] = Array.from({ length: blobCount }, (_, i) => ({
      hue: PIGMENTS[i % PIGMENTS.length],
      x: rand(0.05, 0.95),
      y: rand(0.05, 0.95),
      r: rand(0.28, 0.5),
      spdX: rand(-0.012, 0.012),
      spdY: rand(-0.012, 0.012),
      phase: rand(0, Math.PI * 2),
      drift: rand(0.4, 1),
    }));

    let drops: Drop[] = [];
    let pigmentIdx = 0;
    let lastDropAt = 0;

    const addDrop = (clientX: number, clientY: number, strong = false) => {
      const now = performance.now();
      if (now - lastDropAt < (strong ? 60 : 120)) return;
      lastDropAt = now;
      pigmentIdx = (pigmentIdx + 1) % PIGMENTS.length;
      drops.push({
        hue: PIGMENTS[pigmentIdx],
        x: clientX / window.innerWidth,
        y: clientY / window.innerHeight,
        born: now,
        life: strong ? 2600 : 1800,
        maxR: strong ? 0.22 : 0.14,
      });
      if (drops.length > 24) drops = drops.slice(-24);
    };

    const onMove = (e: PointerEvent) => addDrop(e.clientX, e.clientY);
    const onDown = (e: PointerEvent) => addDrop(e.clientX, e.clientY, true);

    const drawBlob = (
      x: number,
      y: number,
      r: number,
      hue: string,
      alpha: number,
    ) => {
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

    const render = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      // "multiply" makes overlapping pigments darken and mix like real paint
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
        drawBlob(b.x + wobX, b.y + wobY, b.r * breathe, b.hue, 0.55);
      }

      const now = performance.now();
      drops = drops.filter((d) => now - d.born < d.life);
      for (const d of drops) {
        const p = (now - d.born) / d.life; // 0..1
        const spread = Math.sqrt(p); // fast bloom, slow settle — like wet paper
        const fade = 1 - p * p;
        drawBlob(d.x, d.y, d.maxR * spread, d.hue, 0.5 * fade);
      }

      ctx.globalCompositeOperation = "source-over";
    };

    if (reduced) {
      // Static wash only — no animation loop.
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
