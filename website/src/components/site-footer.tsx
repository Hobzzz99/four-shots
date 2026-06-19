import Link from "next/link";
import Logo from "@/components/logo";

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
    <footer className="bg-ink text-pink px-5 sm:px-12 pt-16 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 pb-16 border-b border-pink/20">
        <div>
          <Logo variant="standard" className="mb-6 text-pink" />
          <p className="font-sans text-sm leading-relaxed text-pink/80 max-w-[280px]">
            FourShots Specialty Coffee Co. A community hub for coffee, music,
            and bonding games — more than coffee.
          </p>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-orange mb-4">
              — {col.title}
            </div>
            <div className="flex flex-col gap-2.5 font-sans text-sm">
              {col.links.map((l) => (
                <Link key={l.label} href={l.href} className="hover:text-mint transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center my-10 select-none">
        <Logo variant="signature" className="inline-flex items-center text-[14vw] sm:text-[120px] text-paper" />
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 font-mono text-[11px] tracking-[0.08em] uppercase text-pink/60">
        <span>© {new Date().getFullYear()} FourShots Coffee Co. — More than coffee.</span>
        <div className="flex gap-6">
          <Link href="/about">About</Link>
          <Link href="/visit">Visit</Link>
        </div>
      </div>
    </footer>
  );
}
