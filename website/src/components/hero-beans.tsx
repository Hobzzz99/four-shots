"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Bean from "@/components/bean";

const BEANS = [
  { left: "8%", size: 26, delay: 0, dur: 9, rotate: -20, base: "#4a1f5e", crease: "#6b2d8c" },
  { left: "22%", size: 18, delay: 2.2, dur: 7.5, rotate: 10, base: "#6b2d8c", crease: "#9c3568" },
  { left: "38%", size: 22, delay: 4.5, dur: 10, rotate: -8, base: "#2a0f3a", crease: "#4a1f5e" },
  { left: "55%", size: 16, delay: 1.2, dur: 8, rotate: 18, base: "#9c3568", crease: "#c25588" },
  { left: "70%", size: 24, delay: 3.4, dur: 9.5, rotate: -14, base: "#4a1f5e", crease: "#b54d83" },
  { left: "86%", size: 19, delay: 0.6, dur: 7, rotate: 6, base: "#6b2d8c", crease: "#ec9cc1" },
  { left: "92%", size: 14, delay: 5.1, dur: 8.5, rotate: -22, base: "#2a0f3a", crease: "#6b2d8c" },
];

export default function HeroBeans() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const beans = containerRef.current.querySelectorAll<HTMLDivElement>("[data-bean]");
    const tweens = Array.from(beans).map((el, i) => {
      const cfg = BEANS[i];
      gsap.set(el, { yPercent: -20, opacity: 0 });
      return gsap.to(el, {
        yPercent: 130,
        opacity: 1,
        duration: cfg.dur,
        delay: cfg.delay,
        ease: "none",
        repeat: -1,
        onRepeat: () => gsap.set(el, { yPercent: -20 }),
      });
    });
    return () => tweens.forEach((t) => t.kill());
  }, []);

  return (
    <div ref={containerRef} aria-hidden className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
      {BEANS.map((b, i) => (
        <div key={i} data-bean style={{ position: "absolute", left: b.left, top: 0 }}>
          <Bean size={b.size} rotate={b.rotate} base={b.base} crease={b.crease} />
        </div>
      ))}
    </div>
  );
}
