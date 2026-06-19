import Link from "next/link";

export const metadata = {
  title: "About — FourShots Coffee Co.",
  description: "The story behind FourShots: a rule about the fourth shot, and a lot of pink.",
};

const VALUES = [
  {
    title: "Specific, not solemn.",
    body: "We say 18g to 38g in 26 seconds. We don't say “an exquisite extraction journey.” Numbers are sexy. Adjectives are tired.",
  },
  {
    title: "Sweet without sugar.",
    body: "Pink is the welcome. The coffee is the work. We sound warm because we are, not because the brand book says to.",
  },
  {
    title: "Short. Like the shot.",
    body: "Headlines under six words. Captions under fifteen. If it takes a paragraph to say, it's the menu, not the marketing.",
  },
];

const TIMELINE = [
  { year: "2021", text: "One 40m² shop, one La Marzocco, one fridge of oat milk. The fourth-shot rule starts here." },
  { year: "2022", text: "First single-origin direct trade contract — the Boquete Gesha farm we still buy from today." },
  { year: "2023", text: "Roastery opens on Pink Lane. Subscriptions launch. Walls get pinker." },
  { year: "2024", text: "Second bar opens in Old Town — three stools, one lever machine, no laptops allowed." },
  { year: "2026", text: "14 single origins a year, 2,400+ subscribers, and the rule hasn't changed once." },
];

export default function AboutPage() {
  return (
    <>
      <section className="px-5 sm:px-12 pt-16 pb-20 bg-gradient-to-b from-petal to-bubblegum">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-plum mb-6">— Our deal</div>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-[0.95] mb-8">
            Four shots is a number, not a <span className="text-berry">slogan.</span>
          </h1>
          <p className="font-sans text-lg leading-relaxed text-espresso max-w-2xl mx-auto">
            We started in a 40-square-meter shop with one La Marzocco, one
            fridge full of oat, and a rule: if the fourth shot doesn&rsquo;t
            taste as good as the first, we&rsquo;re not serving it.
            That&rsquo;s still the rule.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-12 py-24 bg-cream">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-md overflow-hidden shadow-xl bg-grape">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#6b2d8c_0_6px,#5a2477_6px_12px)]" />
            <div className="absolute top-8 right-[-12px] bg-blush px-6 py-4 rounded-md rotate-3 shadow-lg font-display text-2xl text-espresso">
              since 2021
            </div>
          </div>
          <div>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.1] mb-6">
              Today we roast 14 single origins a year, dial in daily, and
              ship wherever you&rsquo;re brewing.
            </h2>
            <p className="font-sans text-lg leading-relaxed text-plum mb-4 max-w-xl">
              Same rule. Pinker walls. Every bag is roasted Tuesday and out
              the door Wednesday — we&rsquo;d rather sell out of a lot than
              let it sit past its peak.
            </p>
            <p className="font-sans text-lg leading-relaxed text-plum max-w-xl">
              The wordmark, the pink, the bubble-script lettering — all of it
              came after the coffee was already good. We figured if the cup
              was going to be serious, the branding didn&rsquo;t have to be.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-12 py-24 bg-espresso text-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] text-blush mb-14 text-center">
            Five years, <span className="text-hotpink">one rule.</span>
          </h2>
          <div className="flex flex-col gap-6 max-w-3xl mx-auto">
            {TIMELINE.map((t) => (
              <div key={t.year} className="flex gap-6 items-baseline border-b border-rose/15 pb-6">
                <div className="font-display text-2xl text-hotpink w-20 shrink-0">{t.year}</div>
                <p className="font-sans text-base text-rose/90">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-12 py-24 bg-rose">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] text-center mb-14">
            Confident on craft. <span className="text-plum">Casual on everything else.</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-plum text-blush rounded-xl p-8">
                <div className="font-display text-2xl mb-4">{v.title}</div>
                <p className="font-sans text-sm leading-relaxed text-rose">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-12 py-20 bg-hotpink text-espresso text-center">
        <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] mb-8 max-w-2xl mx-auto">
          Come taste the rule for yourself.
        </h2>
        <div className="flex flex-wrap justify-center gap-3.5">
          <Link href="/shop" className="bg-espresso text-blush px-8 py-4 rounded-full font-sans font-semibold text-sm">
            Shop beans →
          </Link>
          <Link href="/visit" className="border-[1.5px] border-espresso px-8 py-4 rounded-full font-sans font-semibold text-sm">
            Find the bar ↗
          </Link>
        </div>
      </section>
    </>
  );
}
