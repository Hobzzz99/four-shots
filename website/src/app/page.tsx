import Link from "next/link";
import ProductCard from "@/components/product-card";
import NewsletterForm from "@/components/newsletter-form";
import Logo from "@/components/logo";
import Sunburst from "@/components/sunburst";
import TextureOverlay from "@/components/texture-overlay";
import { products } from "@/lib/products";
import { articles } from "@/lib/articles";
import { locations, directionsUrl } from "@/lib/locations";

export default function Home() {
  const featured = products.slice(0, 3);
  const recentArticles = articles.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative px-5 sm:px-12 pt-12 pb-20 bg-gradient-to-b from-pink to-purple-light overflow-hidden">
        <TextureOverlay />
        <Sunburst
          variant="asymmetric-h"
          fill="var(--color-orange)"
          className="hidden lg:block absolute -top-10 -right-10 w-64 h-64 opacity-80"
        />
        <div className="relative z-10 grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center max-w-7xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-2 bg-ink text-pink px-4 py-2 rounded-full font-mono text-[11px] tracking-[0.1em] uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-orange" />
              Currently pulling — Ethiopia Halo Beriti
            </div>

            <h1 className="font-display text-[14vw] sm:text-7xl lg:text-[110px] leading-[0.94] tracking-tight mb-8">
              Four shots.
              <br />
              <span className="stroke-outline">Nothing less.</span>
            </h1>

            <p className="font-sans text-lg max-w-[520px] mb-10 text-ink">
              A community roastery built on coffee, music, and bonding games.
              Small batches, tight ratios, and a barista who&rsquo;ll happily
              pull you a fourth.
            </p>

            <div className="flex flex-wrap gap-3.5 mb-14">
              <Link
                href="/shop"
                className="bg-ink text-pink px-8 py-4 rounded-full font-sans font-semibold text-sm inline-flex items-center gap-2.5"
              >
                Shop beans <span className="font-mono text-xs">→</span>
              </Link>
              <Link
                href="/visit"
                className="bg-transparent text-ink px-8 py-4 rounded-full font-sans font-semibold text-sm border-[1.5px] border-ink inline-flex items-center gap-2.5"
              >
                Find the bar <span className="font-mono text-xs">↗</span>
              </Link>
            </div>

            <div className="flex gap-10 font-numeral text-[11px] tracking-[0.08em] uppercase text-purple">
              <div>
                <div className="font-display text-3xl text-ink leading-none">14</div>
                <div className="mt-1.5">single origins / yr</div>
              </div>
              <div>
                <div className="font-display text-3xl text-ink leading-none">2.4k</div>
                <div className="mt-1.5">subscribers</div>
              </div>
              <div>
                <div className="font-display text-3xl text-ink leading-none">86+</div>
                <div className="mt-1.5">avg cupping score</div>
              </div>
            </div>
          </div>

          <div className="relative aspect-square max-w-[440px] mx-auto lg:max-w-none">
            <div className="absolute inset-[8%] bg-[radial-gradient(circle_at_30%_30%,#FFC5E5_0%,#C86CF7_70%)] rounded-full shadow-2xl" />
            <div className="relative w-full h-full flex items-center justify-center -rotate-3">
              <Logo variant="display" className="text-6xl sm:text-7xl text-ink" />
            </div>
            <div className="absolute top-8 right-0 w-28 h-28 bg-orange rounded-full flex items-center justify-center rotate-12 shadow-lg text-center">
              <div>
                <div className="font-display text-2xl text-paper leading-[0.9]">new<br />roast</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="px-5 sm:px-12 py-24 bg-paper">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="relative aspect-[4/5] rounded-md overflow-hidden shadow-xl bg-purple order-2 lg:order-1">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#582C83_0_6px,#43215f_6px_12px)]" />
            <div className="absolute top-8 right-[-12px] bg-pink px-6 py-4 rounded-md rotate-3 shadow-lg font-display text-2xl text-ink">
              since 2021
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-coral mb-6">— Our deal</div>
            <h2 className="font-display text-5xl sm:text-6xl leading-[1.05] mb-8">
              Four shots is a number, not a <span className="text-coral">slogan.</span>
            </h2>
            <p className="font-sans text-lg leading-relaxed text-ink/80 mb-6 max-w-[520px]">
              We started in a 40-square-meter shop with one La Marzocco and a
              rule: if the fourth shot doesn&rsquo;t taste as good as the
              first, we&rsquo;re not serving it. That&rsquo;s still the rule.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-sans font-semibold text-sm border-b-2 border-orange pb-1"
            >
              Read the full story <span className="font-mono">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SHOP TEASER */}
      <section className="px-5 sm:px-12 py-24 bg-ink text-paper">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-6 mb-14">
            <div>
              <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-pink mb-6">— On the bar</div>
              <h2 className="font-display text-5xl sm:text-6xl leading-[0.95] text-pink">
                On the bar <span className="text-orange">this week.</span>
              </h2>
            </div>
            <Link
              href="/shop"
              className="font-sans font-semibold text-sm text-pink inline-flex items-center gap-2"
            >
              See all origins <span className="font-mono">→</span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* MENU TEASER */}
      <section className="relative px-5 sm:px-12 py-24 bg-pink overflow-hidden">
        <Sunburst
          variant="rounded-spiky"
          fill="var(--color-purple-light)"
          className="hidden lg:block absolute -bottom-16 -left-16 w-72 h-72 opacity-60"
        />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.3fr] gap-16">
          <div>
            <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-purple mb-6">— Drinks board</div>
            <h2 className="font-display text-6xl sm:text-7xl leading-[0.92] mb-8">At the bar.</h2>
            <p className="font-sans text-lg leading-relaxed mb-8 max-w-[360px]">
              Espresso the way it should be — short, hot, honest. Oat by
              default, dairy on request.
            </p>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-ink text-pink px-7 py-3.5 rounded-full font-sans font-semibold text-sm"
            >
              View full menu <span className="font-mono">→</span>
            </Link>
          </div>

          <div className="bg-paper rounded-md p-10 shadow-xl font-sans">
            {[
              { name: "Espresso", price: 4 },
              { name: "Cortado", price: 5 },
              { name: "Flat white", price: 5.5 },
              { name: "Four Shots ✺", price: 7, highlight: true },
            ].map((item) => (
              <div
                key={item.name}
                className={`flex justify-between items-baseline py-2.5 text-base ${
                  item.highlight ? "bg-pink/40 px-4 -mx-4 rounded-md font-semibold" : ""
                }`}
              >
                <span>{item.name}</span>
                <span className="font-display text-xl text-coral">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBSCRIBE TEASER */}
      <section className="px-5 sm:px-12 py-24 bg-paper text-center">
        <div className="max-w-3xl mx-auto mb-14">
          <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-coral mb-4">— Subscribe</div>
          <h2 className="font-display text-6xl sm:text-7xl leading-[0.92] mb-6">
            Beans on <span className="text-coral">repeat.</span>
          </h2>
          <p className="font-sans text-lg text-ink/80">
            Pick your shot count, pick your cadence. Skip, pause, or change
            anytime.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto text-left mb-10">
          {[
            { name: "Solo", price: 24, cadence: "1 bag / fortnight" },
            { name: "Pair", price: 44, cadence: "2 bags / week" },
            { name: "Four Shots", price: 88, cadence: "4 bags / month" },
          ].map((plan) => (
            <Link
              href="/subscribe"
              key={plan.name}
              className="bg-pink rounded-xl p-7"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-coral mb-3">{plan.cadence}</div>
              <div className="font-display text-3xl mb-2">{plan.name}</div>
              <div className="font-display text-2xl text-coral">${plan.price}</div>
            </Link>
          ))}
        </div>

        <Link
          href="/subscribe"
          className="inline-flex items-center gap-2 font-sans font-semibold text-sm border-b-2 border-orange pb-1"
        >
          See all plans <span className="font-mono">→</span>
        </Link>
      </section>

      {/* JOURNAL TEASER */}
      <section className="px-5 sm:px-12 py-24 bg-mint/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-6 mb-14">
            <h2 className="font-display text-5xl sm:text-6xl leading-[0.95]">Field notes.</h2>
            <Link href="/journal" className="font-sans font-semibold text-sm border-b-2 border-ink pb-1">
              Read everything →
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {recentArticles.map((a) => (
              <Link
                key={a.slug}
                href={`/journal/${a.slug}`}
                className="rounded-xl p-7 flex flex-col min-h-[320px]"
                style={{ background: a.cardBg }}
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-coral mb-3">
                  {a.category} · {a.readMins} min read
                </div>
                <h3 className="font-display text-2xl leading-[1.05] mb-3">{a.title}</h3>
                <p className="font-sans text-sm text-ink/80">{a.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT TEASER */}
      <section className="px-5 sm:px-12 py-24 bg-ink text-paper">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-5xl sm:text-6xl leading-[0.95] text-pink mb-10">
            Two bars, <span className="text-orange">one obsession.</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {locations.map((loc) => (
              <div key={loc.slug} className="bg-purple rounded-lg p-7 flex justify-between items-start gap-4 flex-wrap">
                <div>
                  <div className="font-display text-2xl text-pink mb-2">{loc.name}</div>
                  <p className="font-sans text-sm text-pink/90 mb-2 max-w-[320px]">{loc.blurb}</p>
                  <div className="font-mono text-[11px] text-pink">{loc.hours}</div>
                </div>
                <a
                  href={directionsUrl(loc)}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-orange text-ink px-4 py-2.5 rounded-full font-sans font-semibold text-sm whitespace-nowrap"
                >
                  Directions →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="px-5 sm:px-12 py-20 bg-orange text-ink">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.92]">
            New roast in your inbox before <span className="text-paper">9am.</span>
          </h2>
          <div>
            <p className="font-sans text-lg mb-7 max-w-[420px]">
              One email, every Friday morning. New origins, tasting notes,
              and the brew recipe before everyone else gets it.
            </p>
            <NewsletterForm />
            <div className="font-mono text-[11px] mt-4 text-ink/70">
              No spam. Unsub in one tap. Pinky promise.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
