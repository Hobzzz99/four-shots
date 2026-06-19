import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/products";
import AddToCart from "@/components/add-to-cart";
import ProductCard from "@/components/product-card";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — FourShots Coffee Co.`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="px-5 sm:px-12 py-16 bg-paper">
        <div className="max-w-7xl mx-auto">
          <Link href="/shop" className="font-mono text-xs uppercase tracking-[0.1em] text-coral mb-10 inline-block">
            ← Back to shop
          </Link>

          <div className="grid lg:grid-cols-2 gap-16">
            <div
              className="rounded-2xl flex items-center justify-center p-12 min-h-[480px]"
              style={{ background: product.cardBg }}
            >
              <div
                className="w-[220px] h-[320px] rounded-t-md rounded-b-xl relative shadow-2xl px-6 py-7 flex flex-col justify-between rotate-[-2deg]"
                style={{ background: product.bagBg }}
              >
                <div
                  className="absolute -top-2 left-5 right-5 h-3 rounded"
                  style={{ background: product.accent }}
                />
                <div className="font-mono text-[9px] uppercase tracking-[0.1em]" style={{ color: product.accent }}>
                  FourShots / {product.weightG}g
                </div>
                <div className="font-display text-3xl text-center leading-none" style={{ color: product.accent }}>
                  {product.name}
                </div>
                <div className="font-mono text-[9px]" style={{ color: product.accent }}>
                  {product.origin.toUpperCase()}
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.08em] text-coral mb-5">
                <span>N° {product.batch}</span>
                <span>·</span>
                <span>◐ {product.kind}</span>
                {product.score && (
                  <>
                    <span>·</span>
                    <span>{product.score} pts</span>
                  </>
                )}
              </div>

              <h1 className="font-display text-5xl sm:text-6xl leading-[0.95] mb-4">{product.name}</h1>
              <div className="font-sans text-lg text-purple mb-6">
                {product.origin} · {product.process}
              </div>

              <div className="flex gap-2 flex-wrap mb-8">
                {product.notes.map((n) => (
                  <span key={n} className="bg-ink text-pink px-3 py-1.5 rounded-full font-mono text-[11px]">
                    {n}
                  </span>
                ))}
              </div>

              <p className="font-sans text-base leading-relaxed text-ink mb-8 max-w-xl">
                {product.description}
              </p>

              <div className="bg-pink rounded-xl p-6 mb-8 max-w-sm">
                <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-coral mb-3">— Recipe</div>
                <div className="font-display text-3xl leading-none">
                  {product.brew.ratio}
                  <span className="text-base font-sans ml-3 text-purple">in {product.brew.time}</span>
                </div>
              </div>

              <div className="font-display text-4xl mb-6">${product.price}</div>

              <AddToCart
                slug={product.slug}
                name={product.name}
                price={product.price}
                weightG={product.weightG}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-12 py-20 bg-ink text-paper">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl text-pink mb-10">You might also like</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
