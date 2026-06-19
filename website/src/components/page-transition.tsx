"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Sunburst from "@/components/sunburst";

const COLUMNS = [
  { bg: "#FFC5E5", accent: "#582C83" },
  { bg: "#C86CF7", accent: "#1D1D1B" },
  { bg: "#F65E17", accent: "#1D1D1B" },
  { bg: "#FF585D", accent: "#FFFFFF" },
  { bg: "#582C83", accent: "#FFC5E5" },
  { bg: "#1D1D1B", accent: "#FFC5E5" },
  { bg: "#8FD9A8", accent: "#1D1D1B" },
  { bg: "#FCD300", accent: "#1D1D1B" },
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
            <Sunburst
              variant="spiky"
              fill={col.accent}
              className="absolute w-10 h-10"
              style={{ top: "22%", left: "50%", transform: "translateX(-50%) rotate(-18deg)" }}
            />
            <Sunburst
              variant="rounded-spiky"
              fill={col.accent}
              className="absolute w-7 h-7 opacity-70"
              style={{ top: "58%", left: "50%", transform: "translateX(-50%) rotate(12deg)" }}
            />
          </div>
        ))}
      </div>
      {children}
    </>
  );
}
