import ShopGrid from "@/components/shop-grid";
import { products } from "@/lib/products";

export const metadata = {
  title: "Shop — FourShots Coffee Co.",
  description: "Single origins, blends, and whatever's roasting this week.",
};

export default function ShopPage() {
  return (
    <section className="px-5 sm:px-12 py-16 bg-cream min-h-[60vh]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
          <div>
            <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-berry mb-4">— The Shop</div>
            <h1 className="font-display text-5xl sm:text-6xl leading-[0.95]">
              All <span className="text-berry">14 origins.</span>
            </h1>
          </div>
          <p className="font-sans text-base text-plum max-w-sm">
            Roasted Tuesday, shipped Wednesday. Drink within 28 days for the
            best of it.
          </p>
        </div>

        <ShopGrid products={products} />
      </div>
    </section>
  );
}
