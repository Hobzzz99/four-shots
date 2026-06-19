"use client";

import { useState } from "react";

export type Plan = {
  id: string;
  name: string;
  cadence: string;
  price: number;
  blurb: string;
  features: string[];
  featured?: boolean;
  bg: string;
  fg: string;
};

export default function SubscribeCard({ plan }: { plan: Plan }) {
  const [joined, setJoined] = useState(false);

  return (
    <div
      className={`rounded-2xl p-9 relative ${plan.featured ? "lg:scale-105 shadow-2xl" : ""}`}
      style={{ background: plan.bg, color: plan.fg }}
    >
      {plan.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-ink text-pink px-5 py-2 rounded-full font-mono text-[10px] tracking-[0.12em] uppercase whitespace-nowrap">
          ✺ Most picked
        </div>
      )}

      <div className="font-mono text-[11px] uppercase tracking-[0.1em] opacity-80 mb-3">— {plan.cadence}</div>
      <h3 className="font-display text-5xl leading-none mb-2">{plan.name}</h3>
      <p className="font-sans text-sm opacity-90 mb-6 leading-relaxed">{plan.blurb}</p>

      <div className="flex items-baseline gap-2 mb-6">
        <div className="font-display text-5xl leading-none">${plan.price}</div>
        <div className="font-mono text-[11px] opacity-80">/ delivery</div>
      </div>

      <ul className="font-sans text-sm flex flex-col gap-2.5 mb-8 leading-snug">
        {plan.features.map((f) => (
          <li key={f}>◉ {f}</li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => setJoined(true)}
        disabled={joined}
        className="w-full bg-ink text-pink py-4 rounded-full font-sans font-semibold text-sm cursor-pointer disabled:opacity-80"
      >
        {joined ? "You're in ✓" : `Start ${plan.name.toLowerCase()} →`}
      </button>

      {joined && (
        <p className="font-mono text-[11px] mt-4 text-center opacity-90">
          First bag roasts this Tuesday. (Demo signup — no payment taken.)
        </p>
      )}
    </div>
  );
}
