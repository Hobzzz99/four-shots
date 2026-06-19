"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }
      setStatus("done");
    } catch {
      setError("Couldn't reach the server — try again.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="bg-ink text-pink rounded-full px-6 py-4 font-sans font-medium text-sm max-w-[460px]">
        You&rsquo;re on the list, {email}. First email lands Friday.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-[460px]">
      <div className="flex gap-2 bg-pink p-2 rounded-full">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="hello@yourname.com"
          className="flex-1 bg-transparent border-0 outline-none px-5 py-3.5 font-sans text-[15px] text-ink min-w-0"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-ink text-pink border-0 px-6 py-3.5 rounded-full font-sans font-semibold text-sm cursor-pointer disabled:opacity-60 whitespace-nowrap"
        >
          {status === "loading" ? "Pouring…" : "Pour me one →"}
        </button>
      </div>
      {error && <p className="font-mono text-xs text-coral px-2">{error}</p>}
    </form>
  );
}
