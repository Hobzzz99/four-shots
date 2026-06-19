"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd(e: React.MouseEvent) {
    e.preventDefault();
    add({
      slug: product.slug,
      name: product.name,
      price: product.price,
      weightG: product.weightG,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  }

  return (
    <div
      className="rounded-2xl p-8 flex flex-col min-h-[540px] relative overflow-hidden"
      style={{ background: product.cardBg, color: "#2a0f3a" }}
    >
      <div className="flex justify-between font-mono text-[11px] tracking-[0.08em] uppercase opacity-70">
        <span>N° {product.batch}</span>
        <span>◐ {product.kind}</span>
      </div>

      <Link
        href={`/shop/${product.slug}`}
        className="flex-1 flex items-center justify-center my-6"
      >
        <div
          className="w-[170px] h-[240px] rounded-t-md rounded-b-xl relative shadow-xl px-4 py-5 flex flex-col justify-between"
          style={{ background: product.bagBg }}
        >
          <div
            className="absolute -top-1.5 left-4 right-4 h-2.5 rounded"
            style={{ background: product.accent }}
          />
          <div className="font-mono text-[8px] uppercase tracking-[0.1em]" style={{ color: product.accent }}>
            FourShots / {product.weightG}g
          </div>
          <div className="font-display text-2xl text-center leading-none" style={{ color: product.accent }}>
            {product.name}
          </div>
          <div className="font-mono text-[8px]" style={{ color: product.accent }}>
            {product.origin.toUpperCase()}
          </div>
        </div>
      </Link>

      <div>
        <h3 className="font-display text-4xl leading-none mb-1">
          <Link href={`/shop/${product.slug}`}>{product.name}</Link>
        </h3>
        <div className="font-sans text-sm mb-4 opacity-80">
          {product.origin} · {product.process}
        </div>
        <div className="flex gap-1.5 flex-wrap mb-5">
          {product.notes.map((n) => (
            <span
              key={n}
              className="bg-espresso text-blush px-2.5 py-1 rounded-full font-mono text-[10px]"
            >
              {n}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div>
            <div className="font-display text-3xl leading-none">${product.price}</div>
            <div className="font-mono text-[10px] opacity-70">
              {product.weightG}g · whole bean
            </div>
          </div>
          <button
            type="button"
            onClick={handleAdd}
            className="bg-espresso text-blush px-5 py-3 rounded-full font-sans font-semibold text-sm cursor-pointer"
          >
            {added ? "Added ✓" : "Add to bag →"}
          </button>
        </div>
      </div>

      {product.badge && (
        <div
          className="absolute top-4 -right-2 px-3.5 py-1.5 rotate-6 font-display text-lg shadow-md"
          style={{ background: product.accent, color: product.bagBg }}
        >
          {product.badge}
        </div>
      )}
    </div>
  );
}
