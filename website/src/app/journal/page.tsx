import Link from "next/link";
import { articles } from "@/lib/articles";

export const metadata = {
  title: "Journal — FourShots Coffee Co.",
  description: "Field notes on origin, craft, and why the walls are pink.",
};

export default function JournalPage() {
  return (
    <section className="px-5 sm:px-12 py-16 bg-petal min-h-[60vh]">
      <div className="max-w-7xl mx-auto">
        <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-plum mb-6">— Journal</div>
        <h1 className="font-display text-6xl sm:text-7xl leading-[0.92] mb-14">Field notes.</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/journal/${a.slug}`}
              className="rounded-xl p-8 flex flex-col min-h-[340px]"
              style={{ background: a.cardBg }}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-berry mb-4">
                {a.category} · {a.readMins} min read
              </div>
              <h2 className="font-display text-3xl leading-[1.05] mb-4">{a.title}</h2>
              <p className="font-sans text-sm text-plum">{a.excerpt}</p>
              <span className="font-sans font-semibold text-sm mt-auto pt-6 inline-flex items-center gap-2">
                Read it <span className="font-mono">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
