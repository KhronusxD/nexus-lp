"use client";

import { useRef, ReactNode, CSSProperties } from "react";

const glowColors = {
  cyan:   "rgba(0, 206, 209, 0.08)",
  orange: "rgba(255, 107, 53, 0.08)",
  green:  "rgba(50, 205, 50, 0.08)",
} as const;

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  glow?: keyof typeof glowColors;
}

export default function GlowCard({ children, className = "", style, glow = "cyan" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    ref.current!.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    ref.current!.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      className={`glow-card ${className}`}
      style={{ "--glow-color": glowColors[glow], ...style } as CSSProperties}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
}
