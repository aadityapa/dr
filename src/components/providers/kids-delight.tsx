"use client";

import { useEffect, useRef } from "react";

/**
 * KidsDelight — one lightweight canvas overlay running three playful systems:
 *
 *  1. Floating bubbles — pastel bubbles drift up the screen; tapping/clicking
 *     near one pops it with a tiny droplet burst (delegated pointerdown, so
 *     the canvas never blocks links or buttons).
 *  2. Sparkle trail — soft stars trail the cursor / finger.
 *  3. Confetti — a celebratory burst whenever a link to /appointment is
 *     clicked (the "Book Consultation" moment).
 *
 * One rAF loop, pointer-events: none, paused on hidden tabs, skipped entirely
 * for prefers-reduced-motion. Mounted inside AmbientEffects, so the navbar
 * "effects" toggle turns it off too.
 */

type Bubble = {
  x: number;
  y: number;
  r: number;
  vy: number;
  wobble: number;
  wobbleSpeed: number;
  hue: string;
  alive: boolean;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  rotation: number;
  spin: number;
  kind: "spark" | "confetti" | "droplet";
};

const BUBBLE_COLORS = [
  "rgba(185, 221, 236, 0.55)", // sky
  "rgba(228, 221, 245, 0.55)", // lavender
  "rgba(252, 232, 220, 0.55)", // peach
  "rgba(216, 240, 228, 0.55)", // mint
  "rgba(253, 243, 212, 0.55)", // butter
  "rgba(245, 224, 232, 0.55)", // rose
];

const SPARK_COLORS = ["#f5cf79", "#f2b8c6", "#9ad1b5", "#b9ddec", "#cdbcf0"];

const CONFETTI_COLORS = [
  "#4a9b73",
  "#f5cf79",
  "#e8927c",
  "#7fb8d8",
  "#9b8fc0",
  "#f2b8c6",
];

export function KidsDelight() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    let running = true;
    let lastSpark = 0;

    const isMobile = window.innerWidth < 768;
    const bubbleCount = isMobile ? 6 : 10;
    const bubbles: Bubble[] = [];
    const particles: Particle[] = [];

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function spawnBubble(b?: Bubble): Bubble {
      const bubble: Bubble = b ?? ({} as Bubble);
      bubble.r = 10 + Math.random() * 20;
      bubble.x = Math.random() * width;
      bubble.y = height + bubble.r + Math.random() * height * 0.5;
      bubble.vy = 0.25 + Math.random() * 0.45;
      bubble.wobble = Math.random() * Math.PI * 2;
      bubble.wobbleSpeed = 0.008 + Math.random() * 0.012;
      bubble.hue = BUBBLE_COLORS[Math.floor(Math.random() * BUBBLE_COLORS.length)];
      bubble.alive = true;
      return bubble;
    }

    function popBubble(b: Bubble) {
      b.alive = false;
      for (let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 * i) / 8 + Math.random() * 0.5;
        particles.push({
          x: b.x,
          y: b.y,
          vx: Math.cos(angle) * (1 + Math.random() * 1.6),
          vy: Math.sin(angle) * (1 + Math.random() * 1.6),
          life: 0,
          maxLife: 26 + Math.random() * 10,
          size: 2 + Math.random() * 2.5,
          color: b.hue.replace("0.55", "0.9"),
          rotation: 0,
          spin: 0,
          kind: "droplet",
        });
      }
      // respawn from the bottom after a short delay
      window.setTimeout(() => {
        if (running) spawnBubble(b);
      }, 1200 + Math.random() * 2000);
    }

    function spawnSparkles(x: number, y: number) {
      const now = performance.now();
      if (now - lastSpark < 30) return;
      lastSpark = now;
      particles.push({
        x: x + (Math.random() - 0.5) * 10,
        y: y + (Math.random() - 0.5) * 10,
        vx: (Math.random() - 0.5) * 0.6,
        vy: 0.2 + Math.random() * 0.5,
        life: 0,
        maxLife: 34 + Math.random() * 14,
        size: 3 + Math.random() * 4,
        color: SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)],
        rotation: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * 0.12,
        kind: "spark",
      });
    }

    function burstConfetti(x: number, y: number) {
      const count = isMobile ? 50 : 90;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2.5 + Math.random() * 6;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 3,
          life: 0,
          maxLife: 70 + Math.random() * 50,
          size: 4 + Math.random() * 4,
          color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
          rotation: Math.random() * Math.PI,
          spin: (Math.random() - 0.5) * 0.25,
          kind: "confetti",
        });
      }
    }

    function drawStar(x: number, y: number, size: number, rotation: number) {
      ctx!.save();
      ctx!.translate(x, y);
      ctx!.rotate(rotation);
      ctx!.beginPath();
      for (let i = 0; i < 4; i++) {
        ctx!.moveTo(0, 0);
        ctx!.lineTo(0, -size);
        ctx!.quadraticCurveTo(size * 0.18, -size * 0.18, size, 0);
        ctx!.rotate(Math.PI / 2);
      }
      ctx!.fill();
      ctx!.restore();
    }

    function tick() {
      if (!running) return;
      ctx!.clearRect(0, 0, width, height);

      // bubbles
      for (const b of bubbles) {
        if (!b.alive) continue;
        b.wobble += b.wobbleSpeed;
        b.x += Math.sin(b.wobble) * 0.4;
        b.y -= b.vy;
        if (b.y < -b.r * 2) spawnBubble(b);

        ctx!.beginPath();
        ctx!.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx!.fillStyle = b.hue;
        ctx!.fill();
        ctx!.strokeStyle = "rgba(255,255,255,0.55)";
        ctx!.lineWidth = 1.2;
        ctx!.stroke();
        // highlight glint
        ctx!.beginPath();
        ctx!.arc(b.x - b.r * 0.35, b.y - b.r * 0.35, b.r * 0.22, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(255,255,255,0.65)";
        ctx!.fill();
      }

      // particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += 1;
        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }
        const t = p.life / p.maxLife;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.spin;

        if (p.kind === "confetti") {
          p.vy += 0.16; // gravity
          p.vx *= 0.985;
          ctx!.save();
          ctx!.globalAlpha = 1 - t * t;
          ctx!.translate(p.x, p.y);
          ctx!.rotate(p.rotation);
          ctx!.fillStyle = p.color;
          ctx!.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
          ctx!.restore();
        } else if (p.kind === "spark") {
          ctx!.save();
          ctx!.globalAlpha = 1 - t;
          ctx!.fillStyle = p.color;
          drawStar(p.x, p.y, p.size * (1 - t * 0.5), p.rotation);
          ctx!.restore();
        } else {
          ctx!.save();
          ctx!.globalAlpha = 1 - t;
          ctx!.fillStyle = p.color;
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, p.size * (1 - t), 0, Math.PI * 2);
          ctx!.fill();
          ctx!.restore();
        }
      }

      raf = requestAnimationFrame(tick);
    }

    function onPointerMove(e: PointerEvent) {
      spawnSparkles(e.clientX, e.clientY);
    }

    function onPointerDown(e: PointerEvent) {
      // pop any bubble near the tap (generous slop for little fingers)
      for (const b of bubbles) {
        if (!b.alive) continue;
        const dx = e.clientX - b.x;
        const dy = e.clientY - b.y;
        if (dx * dx + dy * dy < (b.r + 16) * (b.r + 16)) {
          popBubble(b);
        }
      }
    }

    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.('a[href*="/appointment"], a[href*="wa.me"]');
      if (link) burstConfetti(e.clientX, e.clientY);
    }

    function onVisibility() {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    }

    resize();
    for (let i = 0; i < bubbleCount; i++) {
      const b = spawnBubble();
      // stagger the first wave across the whole screen height
      b.y = height * Math.random() + height * 0.3;
      bubbles.push(b);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    document.addEventListener("click", onClick, true);
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40"
    />
  );
}
