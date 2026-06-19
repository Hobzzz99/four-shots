import Link from "next/link";

export const metadata = {
  title: "About — FourShots Coffee Co.",
  description:
    "The story behind FourShots: four friends, one shared love of coffee and music, and a space built for connection.",
};

const VALUES = [
  {
    title: "Connection first.",
    body: "We believe in the power of personal relationships and community bonds. Every cup is an invitation to stay a while.",
  },
  {
    title: "Rooted in heritage.",
    body: "We honor our Egyptian roots, weaving culture into the decor, the playlists, and the way we welcome people in.",
  },
  {
    title: "Playful by design.",
    body: "Bonding games on the table, handpicked playlists in the air. Shared experiences break down barriers — that's the whole idea.",
  },
];

const TIMELINE = [
  { year: "2021", text: "Four friends in Egypt set out to build something more than a coffee shop — a hub for coffee, music, and connection." },
  { year: "2022", text: "First single-origin direct trade contract — the Boquete Gesha farm we still buy from today." },
  { year: "2023", text: "Our roastery bar opens, with handpicked playlists running the floor and bonding games on every table." },
  { year: "2024", text: "Second bar opens in Old Town — three stools, one lever machine, and a jazzy night every Friday." },
  { year: "2026", text: "14 single origins a year, 2,400+ subscribers, and the same founding rule: four shots, nothing less." },
];

export default function AboutPage() {
  return (
    <>
      <section className="px-5 sm:px-12 pt-16 pb-20 bg-gradient-to-b from-pink to-purple-light">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-purple mb-6">— Our story</div>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-[0.95] mb-8">
            More than a <span className="text-coral">coffee shop.</span>
          </h1>
          <p className="font-sans text-lg leading-relaxed text-ink max-w-2xl mx-auto">
            In the heart of Egypt, four passionate friends came together with
            a shared vision: a space where exceptional coffee, shared music,
            and bonding games create deeper connections — for friends catching
            up and strangers becoming friends.
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-12 py-24 bg-paper">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-md overflow-hidden shadow-xl bg-purple">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#582C83_0_6px,#43215f_6px_12px)]" />
            <div className="absolute top-8 right-[-12px] bg-pink px-6 py-4 rounded-md rotate-3 shadow-lg font-display text-2xl text-ink">
              since 2021
            </div>
          </div>
          <div>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.1] mb-6">
              Drawing on Egyptian heritage and a love for music, we built a
              space that transcends the ordinary coffee shop.
            </h2>
            <p className="font-sans text-lg leading-relaxed text-purple mb-4 max-w-xl">
              Each cup is brewed with care, complemented by handpicked
              playlists that resonate with the vibe of the day. The bonding
              games came from a simple belief: shared experiences, like
              music, break down barriers and create lasting memories.
            </p>
            <p className="font-sans text-lg leading-relaxed text-purple max-w-xl">
              From the decor to the dynamic events celebrating different
              musical genres, every detail is designed to enhance the
              experience — a lively testament to the power of connection.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-12 py-24 bg-ink text-paper">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] text-pink mb-14 text-center">
            Five years, <span className="text-orange">one rule.</span>
          </h2>
          <div className="flex flex-col gap-6 max-w-3xl mx-auto">
            {TIMELINE.map((t) => (
              <div key={t.year} className="flex gap-6 items-baseline border-b border-pink/15 pb-6">
                <div className="font-display text-2xl text-orange w-20 shrink-0">{t.year}</div>
                <p className="font-sans text-base text-pink/90">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-12 py-24 bg-pink">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] text-center mb-14">
            Warm, dynamic, inclusive. <span className="text-purple">Always playful.</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-purple text-pink rounded-xl p-8">
                <div className="font-display text-2xl mb-4">{v.title}</div>
                <p className="font-sans text-sm leading-relaxed text-pink">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-12 py-20 bg-orange text-ink text-center">
        <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] mb-8 max-w-2xl mx-auto">
          Come taste the rule for yourself.
        </h2>
        <div className="flex flex-wrap justify-center gap-3.5">
          <Link href="/shop" className="bg-ink text-pink px-8 py-4 rounded-full font-sans font-semibold text-sm">
            Shop beans →
          </Link>
          <Link href="/visit" className="border-[1.5px] border-ink px-8 py-4 rounded-full font-sans font-semibold text-sm">
            Find the bar ↗
          </Link>
        </div>
      </section>
    </>
  );
}
