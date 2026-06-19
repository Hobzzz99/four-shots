"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { lines, subtotal, setQty, remove, clear, ready } = useCart();
  const [orderNumber, setOrderNumber] = useState<string | null>(null);

  const shipping = subtotal === 0 || subtotal >= 40 ? 0 : 6;
  const total = subtotal + shipping;

  function handleCheckout() {
    const num = Math.floor(1000 + Math.random() * 9000);
    setOrderNumber(`FS-${num}`);
    clear();
  }

  if (orderNumber) {
    return (
      <section className="px-5 sm:px-12 py-24 bg-paper min-h-[60vh] text-center">
        <div className="max-w-lg mx-auto">
          <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-coral mb-4">Order confirmed</div>
          <h1 className="font-display text-5xl leading-[0.95] mb-6">
            Order <span className="text-coral">{orderNumber}</span> is in.
          </h1>
          <p className="font-sans text-base text-purple mb-10">
            This is a demo checkout — no payment was taken and nothing
            ships. Hook up a real payment provider when you&rsquo;re ready
            to take orders for real.
          </p>
          <Link href="/shop" className="bg-ink text-pink px-8 py-4 rounded-full font-sans font-semibold text-sm inline-block">
            Keep browsing →
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="px-5 sm:px-12 py-16 bg-paper min-h-[60vh]">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-5xl leading-[0.95] mb-12">Your bag.</h1>

        {!ready ? null : lines.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-sans text-lg text-purple mb-8">Your bag is empty. Let&rsquo;s fix that.</p>
            <Link href="/shop" className="bg-ink text-pink px-8 py-4 rounded-full font-sans font-semibold text-sm">
              Shop beans →
            </Link>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-4 mb-10">
              {lines.map((line) => (
                <div
                  key={line.slug}
                  className="bg-pink rounded-xl p-5 flex flex-wrap items-center justify-between gap-4"
                >
                  <div className="min-w-[160px]">
                    <Link href={`/shop/${line.slug}`} className="font-display text-2xl leading-none">
                      {line.name}
                    </Link>
                    <div className="font-mono text-[11px] text-purple mt-1">{line.weightG}g · whole bean</div>
                  </div>

                  <div className="flex items-center gap-3 bg-paper rounded-full px-2 py-2">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      onClick={() => setQty(line.slug, line.qty - 1)}
                      className="w-8 h-8 rounded-full bg-white font-display text-base cursor-pointer"
                    >
                      −
                    </button>
                    <span className="font-mono text-sm w-5 text-center">{line.qty}</span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      onClick={() => setQty(line.slug, line.qty + 1)}
                      className="w-8 h-8 rounded-full bg-white font-display text-base cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <div className="font-display text-xl w-20 text-right">
                    ${(line.price * line.qty).toFixed(2)}
                  </div>

                  <button
                    type="button"
                    onClick={() => remove(line.slug)}
                    className="font-mono text-[11px] uppercase tracking-[0.08em] text-coral underline cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-ink text-paper rounded-xl p-7 max-w-md ml-auto">
              <div className="flex justify-between font-sans text-sm mb-2 text-pink">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-sans text-sm mb-4 text-pink">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between font-display text-2xl mb-6 text-pink border-t border-pink/20 pt-4">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button
                type="button"
                onClick={handleCheckout}
                className="w-full bg-orange text-ink py-4 rounded-full font-sans font-semibold text-sm cursor-pointer"
              >
                Checkout →
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
