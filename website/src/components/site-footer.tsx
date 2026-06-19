import Image from "next/image";
import Link from "next/link";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { href: "/shop", label: "Single origins" },
      { href: "/shop", label: "Blends" },
      { href: "/subscribe", label: "Subscriptions" },
    ],
  },
  {
    title: "The Brand",
    links: [
      { href: "/about", label: "Our story" },
      { href: "/journal", label: "Journal" },
      { href: "/visit", label: "Visit us" },
    ],
  },
  {
    title: "Help",
    links: [
      { href: "/menu", label: "Drinks board" },
      { href: "/cart", label: "Your bag" },
      { href: "mailto:hello@fourshots.co", label: "hello@fourshots.co" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-rose px-5 sm:px-12 pt-16 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 pb-16 border-b border-rose/20">
        <div>
          <Image
            src="/images/fourshots-logo-transparent.png"
            alt="FourShots"
            width={60}
            height={60}
            className="mb-6"
          />
          <p className="font-sans text-sm leading-relaxed text-rose/80 max-w-[280px]">
            FourShots Specialty Coffee Co. A small, pink-soaked roastery making
            espresso the way it should be.
          </p>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-hotpink mb-4">
              — {col.title}
            </div>
            <div className="flex flex-col gap-2.5 font-sans text-sm">
              {col.links.map((l) => (
                <Link key={l.label} href={l.href} className="hover:text-blush transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center my-10 select-none">
        <div className="font-display text-[14vw] sm:text-[120px] leading-[0.9] text-transparent [-webkit-text-stroke:2px_var(--color-plum)]">
          FourShots
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 font-mono text-[11px] tracking-[0.08em] uppercase text-rose/60">
        <span>© {new Date().getFullYear()} FourShots Coffee Co. — Roasted with love, served with attitude.</span>
        <div className="flex gap-6">
          <Link href="/about">About</Link>
          <Link href="/visit">Visit</Link>
        </div>
      </div>
    </footer>
  );
}
