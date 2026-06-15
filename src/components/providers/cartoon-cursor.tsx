"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const MASCOT_W = 44;
const MASCOT_H = 52;

export function CartoonCursor() {
  const [enabled, setEnabled] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });

  const x = useMotionValue(-120);
  const y = useMotionValue(-120);
  const rotateY = useMotionValue(0);
  const rotateX = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 380, damping: 26, mass: 0.4 });
  const smoothY = useSpring(y, { stiffness: 380, damping: 26, mass: 0.4 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 220, damping: 18 });
  const smoothRotateX = useSpring(rotateX, { stiffness: 220, damping: 18 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (prefersReducedMotion || !isFinePointer) return;

    setEnabled(true);

    const move = (event: MouseEvent) => {
      const dx = event.clientX - lastPos.current.x;
      const dy = event.clientY - lastPos.current.y;

      rotateY.set(Math.max(-18, Math.min(18, dx * 2.5)));
      rotateX.set(Math.max(-12, Math.min(12, -dy * 2)));

      x.set(event.clientX - MASCOT_W / 2);
      y.set(event.clientY - MASCOT_H + 8);

      lastPos.current = { x: event.clientX, y: event.clientY };
    };

    const leave = () => {
      x.set(-120);
      y.set(-120);
    };

    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [rotateX, rotateY, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="cartoon-cursor pointer-events-none fixed left-0 top-0 z-[90] hidden md:block"
      style={{
        x: smoothX,
        y: smoothY,
        rotateY: smoothRotateY,
        rotateX: smoothRotateX,
        transformPerspective: 500,
      }}
    >
      <motion.div
        className="cartoon-cursor__rig"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="cartoon-cursor__shadow" />
        <div className="cartoon-cursor__character">
          <div className="cartoon-cursor__hair" />
          <div className="cartoon-cursor__head">
            <div className="cartoon-cursor__cheek cartoon-cursor__cheek--left" />
            <div className="cartoon-cursor__cheek cartoon-cursor__cheek--right" />
            <div className="cartoon-cursor__eye cartoon-cursor__eye--left" />
            <div className="cartoon-cursor__eye cartoon-cursor__eye--right" />
            <div className="cartoon-cursor__smile" />
          </div>
          <div className="cartoon-cursor__body">
            <div className="cartoon-cursor__arm cartoon-cursor__arm--left" />
            <div className="cartoon-cursor__arm cartoon-cursor__arm--right" />
          </div>
          <div className="cartoon-cursor__legs">
            <div className="cartoon-cursor__leg" />
            <div className="cartoon-cursor__leg" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
