"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useCart } from "@/lib/cart-context";
import Logo from "@/components/logo";

const NAV_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/menu", label: "Menu" },
  { href: "/subscribe", label: "Subscribe" },
  { href: "/journal", label: "Journal" },
  { href: "/visit", label: "Visit" },
];

const MARQUEE_ITEMS = [
  "✺ New roast — Gesha, Boquete — drops Friday",
  "Free shipping over $40",
  "Fourth espresso always on us — ask the bar",
  "Roasted Tuesdays · shipped Wednesdays",
];

export default function SiteNav() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!trackRef.current) return;
    tweenRef.current = gsap.to(trackRef.current, {
      xPercent: -50,
      duration: 22,
      ease: "none",
      repeat: -1,
    });
    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-md border-b border-purple/10">
      <div className="flex items-center justify-between px-5 sm:px-12 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Logo variant="micro" className="h-11 w-11" />
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-purple leading-tight hidden sm:block">
            Specialty<br />Coffee Co.
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-sans font-medium text-sm text-ink">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-coral transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="flex items-center gap-2 bg-ink text-pink px-4 py-2.5 rounded-full font-sans font-semibold text-sm"
          >
            Bag
            <span className="bg-orange text-ink w-5 h-5 rounded-full flex items-center justify-center font-mono text-[11px] font-medium">
              {count}
            </span>
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="w-5 h-[2px] bg-ink" />
            <span className="w-5 h-[2px] bg-ink" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-4 px-6 pb-6 font-sans font-medium text-sm text-ink">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
      )}

      <div
        className="bg-orange text-ink py-2 overflow-hidden border-t border-ink"
        onMouseEnter={() => tweenRef.current?.pause()}
        onMouseLeave={() => tweenRef.current?.resume()}
      >
        <div ref={trackRef} className="flex gap-10 whitespace-nowrap font-mono text-[11px] tracking-[0.1em] uppercase w-max">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-10">
              {item} <span aria-hidden>◐</span>
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
