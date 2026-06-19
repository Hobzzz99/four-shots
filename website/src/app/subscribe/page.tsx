import SubscribeCard, { type Plan } from "@/components/subscribe-card";

export const metadata = {
  title: "Subscribe — FourShots Coffee Co.",
  description: "Beans on repeat. Pick your shot count, pick your cadence.",
};

const PLANS: Plan[] = [
  {
    id: "solo",
    name: "Solo",
    cadence: "1 bag / fortnight",
    price: 24,
    blurb: "For one drinker, one method. We pick the week's best for your brew.",
    features: ["250g whole bean", "Tasting card included", "Every 14 days", "Free shipping"],
    bg: "#FFC5E5",
    fg: "#1D1D1B",
  },
  {
    id: "pair",
    name: "Pair",
    cadence: "2 bags / week",
    price: 44,
    blurb: "Two methods, two bags. One for the morning ritual, one for the slow weekend.",
    features: [
      "2 × 250g whole bean",
      "One espresso, one filter",
      "Every 7 days",
      "Brew guide cards + free shipping",
    ],
    featured: true,
    bg: "#F65E17",
    fg: "#1D1D1B",
  },
  {
    id: "four-shots",
    name: "Four Shots",
    cadence: "4 bags / month",
    price: 88,
    blurb: "The full deck — every single-origin we roast that month, plus first dibs on micro-lots.",
    features: [
      "4 × 250g whole bean",
      "All week's origins",
      "First-dibs micro-lots",
      "Members-only Tuesday cupping",
    ],
    bg: "#582C83",
    fg: "#FFC5E5",
  },
];

export default function SubscribePage() {
  return (
    <section className="px-5 sm:px-12 py-20 bg-paper min-h-[60vh]">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-coral mb-4">— Subscribe</div>
        <h1 className="font-display text-6xl sm:text-7xl leading-[0.92] mb-6">
          Beans on <span className="text-coral">repeat.</span>
        </h1>
        <p className="font-sans text-lg text-purple">
          Pick your shot count, pick your cadence. We roast and ship the
          freshest origins of the week. Skip, pause, or change anytime.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {PLANS.map((plan) => (
          <SubscribeCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
}
