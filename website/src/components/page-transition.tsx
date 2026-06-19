"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Bean from "@/components/bean";

const COLUMNS = [
  { bg: "#f7c5da", base: "#6b2d8c", crease: "#9c3568" },
  { bg: "#ec9cc1", base: "#4a1f5e", crease: "#6b2d8c" },
  { bg: "#e8649a", base: "#2a0f3a", crease: "#4a1f5e" },
  { bg: "#b54d83", base: "#ffe2ef", crease: "#f7c5da" },
  { bg: "#6b2d8c", base: "#f7c5da", crease: "#ec9cc1" },
  { bg: "#4a1f5e", base: "#f4ecde", crease: "#e6d8c2" },
  { bg: "#2a0f3a", base: "#ec9cc1", crease: "#e8649a" },
  { bg: "#9c3568", base: "#ffe2ef", crease: "#f0a5c9" },
];

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);
  const isFirstRender = useRef(true);
  const colRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Park every column above the viewport once, on mount, before anything paints.
  useLayoutEffect(() => {
    const cols = colRefs.current.filter(Boolean) as HTMLDivElement[];
    gsap.set(cols, { yPercent: -100 });
  }, []);

  useLayoutEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      prevPathname.current = pathname;
      return;
    }
    if (pathname === prevPathname.current) return;
    prevPathname.current = pathname;

    const cols = colRefs.current.filter(Boolean) as HTMLDivElement[];

    // Snap to fully-covering instantly — this runs before the browser paints
    // the already-swapped new route, so there's never a bare flash of it.
    gsap.killTweensOf(cols);
    gsap.set(cols, { yPercent: 0 });

    gsap
      .timeline()
      .to({}, { duration: 0.2 })
      .to(cols, {
        yPercent: 100,
        duration: 0.65,
        ease: "power2.in",
        stagger: { each: 0.045, from: "start" },
        onComplete: () => gsap.set(cols, { yPercent: -100 }),
      });
  }, [pathname]);

  return (
    <>
      <div aria-hidden className="pointer-events-none fixed inset-0 z-[900] flex">
        {COLUMNS.map((col, i) => (
          <div
            key={i}
            ref={(el) => {
              colRefs.current[i] = el;
            }}
            className="h-full flex-1 relative"
            style={{ background: col.bg }}
          >
            <Bean
              base={col.base}
              crease={col.crease}
              size={32}
              rotate={-18}
              style={{ position: "absolute", top: "22%", left: "50%", transform: "translateX(-50%) rotate(-18deg)" }}
            />
            <Bean
              base={col.base}
              crease={col.crease}
              size={24}
              rotate={12}
              style={{ position: "absolute", top: "58%", left: "50%", transform: "translateX(-50%) rotate(12deg)" }}
            />
          </div>
        ))}
      </div>
      {children}
    </>
  );
}
