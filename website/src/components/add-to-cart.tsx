"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";

export default function AddToCart({
  slug,
  name,
  price,
  weightG,
}: {
  slug: string;
  name: string;
  price: number;
  weightG: number;
}) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    add({ slug, name, price, weightG }, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-4 bg-pink rounded-full px-2 py-2">
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="w-9 h-9 rounded-full bg-paper border border-ink/10 font-display text-lg cursor-pointer"
        >
          −
        </button>
        <span className="font-mono text-sm w-6 text-center">{qty}</span>
        <button
          type="button"
          aria-label="Increase quantity"
          onClick={() => setQty((q) => q + 1)}
          className="w-9 h-9 rounded-full bg-paper border border-ink/10 font-display text-lg cursor-pointer"
        >
          +
        </button>
      </div>
      <button
        type="button"
        onClick={handleAdd}
        className="bg-ink text-pink px-8 py-4 rounded-full font-sans font-semibold text-sm cursor-pointer"
      >
        {added ? "Added to bag ✓" : `Add to bag — $${(price * qty).toFixed(2)}`}
      </button>
    </div>
  );
}
