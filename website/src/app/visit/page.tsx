import { locations, directionsUrl } from "@/lib/locations";

export const metadata = {
  title: "Visit — FourShots Coffee Co.",
  description: "Two bars, one obsession. Find us on Pink Lane or in Old Town.",
};

export default function VisitPage() {
  return (
    <section className="px-5 sm:px-12 py-16 bg-espresso text-cream min-h-[60vh]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div className="relative aspect-[5/4] bg-plum rounded-xl overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(247,197,218,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(247,197,218,0.5) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          {locations.map((loc, i) => (
            <div
              key={loc.slug}
              className="absolute w-8 h-8 bg-hotpink rounded-tl-full rounded-tr-full rounded-bl-full border-[3px] border-espresso -rotate-45"
              style={{
                top: i === 0 ? "28%" : "63%",
                left: i === 0 ? "22%" : "62%",
              }}
            />
          ))}
          <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-[0.1em] text-rose">
            ◐ map — open in directions below
          </div>
        </div>

        <div>
          <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-rose mb-6">— Find us</div>
          <h1 className="font-display text-5xl sm:text-6xl leading-[0.95] text-blush mb-10">
            Two bars, <span className="text-hotpink">one obsession.</span>
          </h1>

          <div className="flex flex-col gap-5">
            {locations.map((loc) => (
              <div key={loc.slug} className="bg-plum rounded-lg p-6">
                <div className="flex justify-between items-start gap-4 flex-wrap">
                  <div>
                    <div className="font-display text-3xl text-blush mb-2">{loc.name}</div>
                    <div className="font-mono text-[11px] text-rose mb-2">{loc.address}</div>
                    <p className="font-sans text-sm text-rose/90 mb-3 max-w-[320px]">{loc.blurb}</p>
                    <div className="font-mono text-[11px] text-hotpink">{loc.hours}</div>
                  </div>
                  <a
                    href={directionsUrl(loc)}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-hotpink text-espresso px-5 py-3 rounded-full font-sans font-semibold text-sm whitespace-nowrap"
                  >
                    Directions →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blush text-espresso rounded-lg p-6 mt-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-berry mb-2">— Wholesale &amp; events</div>
            <p className="font-sans text-sm">
              Want FourShots on your own menu, or want us to cater a
              cupping? <a href="mailto:hello@fourshots.co" className="font-semibold underline">hello@fourshots.co</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
