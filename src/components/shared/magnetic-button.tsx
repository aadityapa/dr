"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export function MagneticButton({ children, className }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 300, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 300, damping: 20 });

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const offsetX = (event.clientX - (rect.left + rect.width / 2)) * 0.15;
    const offsetY = (event.clientY - (rect.top + rect.height / 2)) * 0.15;
    x.set(offsetX);
    y.set(offsetY);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: smoothX, y: smoothY }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
