export const metadata = {
  title: "Menu — FourShots Coffee Co.",
  description: "Espresso, slow brews, and pink specials — what's on the bar.",
};

const SECTIONS = [
  {
    title: "Espresso",
    note: "— short, hot",
    items: [
      { name: "Espresso", detail: "18g → 38g / 26s", price: 4 },
      { name: "Ristretto", price: 4 },
      { name: "Cortado", price: 5 },
      { name: "Flat white", price: 5.5 },
      {
        name: "Four Shots ✺",
        detail: "four ristrettos, on the house if it's your 4th",
        price: 7,
        highlight: true,
      },
    ],
  },
  {
    title: "Slow",
    note: "— 4 minutes give or take",
    items: [
      { name: "V60", price: 6 },
      { name: "Aeropress", price: 6 },
      { name: "Cold brew · on tap", price: 5.5 },
    ],
  },
  {
    title: "Pink Specials",
    note: "— playful",
    items: [
      { name: "Pink latte", detail: "beetroot · rose · oat", price: 6 },
      { name: "Strawberry matcha", price: 6.5 },
      { name: "Plum espresso tonic", price: 7 },
    ],
  },
];

export default function MenuPage() {
  return (
    <section className="px-5 sm:px-12 py-16 bg-rose min-h-[60vh]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-16">
        <div>
          <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-plum mb-6">— Drinks Board</div>
          <h1 className="font-display text-6xl sm:text-7xl leading-[0.9] mb-8">At the bar.</h1>
          <p className="font-sans text-lg leading-relaxed mb-10 max-w-sm">
            Espresso the way it should be — short, hot, honest. Milks are
            oat by default, dairy on request. Specials change with the
            roast.
          </p>

          <div className="bg-espresso text-blush rounded-md p-6 max-w-sm">
            <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-rose mb-3">— Bar Hours</div>
            <div className="font-sans text-sm flex flex-col gap-2">
              <div className="flex justify-between">
                <span>Mon — Fri</span>
                <span className="font-mono">07:00 — 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sat — Sun</span>
                <span className="font-mono">08:00 — 16:00</span>
              </div>
              <div className="flex justify-between text-hotpink">
                <span>Roast day · Tue</span>
                <span className="font-mono">07:00 — 14:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-cream rounded-md p-8 sm:p-10 shadow-xl">
          {SECTIONS.map((section) => (
            <div key={section.title} className="mb-10 last:mb-0">
              <div className="flex items-baseline gap-4 mb-4 flex-wrap">
                <h2 className="font-display text-3xl sm:text-4xl">{section.title}</h2>
                <div className="flex-1 border-b-2 border-dotted border-berry min-w-[40px]" />
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-berry">{section.note}</div>
              </div>
              <div className="font-sans text-base flex flex-col">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className={`flex justify-between items-baseline py-2.5 ${
                      item.highlight ? "bg-blush px-3 -mx-3 rounded-md" : ""
                    }`}
                  >
                    <span>
                      <span className={item.highlight ? "font-bold" : ""}>{item.name}</span>
                      {item.detail && (
                        <span className="font-mono text-[11px] text-grape ml-2">{item.detail}</span>
                      )}
                    </span>
                    <span className="font-display text-xl text-berry">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
