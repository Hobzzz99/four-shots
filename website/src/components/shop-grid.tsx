"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/product-card";
import type { Product } from "@/lib/products";

const KINDS = ["All", "Espresso", "Filter", "Blend"] as const;

export default function ShopGrid({ products }: { products: Product[] }) {
  const [kind, setKind] = useState<(typeof KINDS)[number]>("All");

  const filtered = useMemo(
    () => (kind === "All" ? products : products.filter((p) => p.kind === kind)),
    [products, kind]
  );

  return (
    <div>
      <div className="flex gap-2 mb-10 flex-wrap">
        {KINDS.map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setKind(k)}
            className={`px-5 py-2.5 rounded-full font-sans font-semibold text-sm border-[1.5px] cursor-pointer ${
              kind === k
                ? "bg-espresso text-blush border-espresso"
                : "bg-transparent text-espresso border-espresso/30"
            }`}
          >
            {k}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="font-sans text-plum py-20 text-center">No bags in this category right now.</p>
      )}
    </div>
  );
}
