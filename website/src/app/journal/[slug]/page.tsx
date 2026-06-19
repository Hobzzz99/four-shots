import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} — FourShots Journal`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <article className="px-5 sm:px-12 py-16 bg-paper">
        <div className="max-w-2xl mx-auto">
          <Link href="/journal" className="font-mono text-xs uppercase tracking-[0.1em] text-coral mb-10 inline-block">
            ← Back to journal
          </Link>

          <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-coral mb-5">
            {article.category} · {article.readMins} min read
          </div>
          <h1 className="font-display text-4xl sm:text-5xl leading-[1.05] mb-10">{article.title}</h1>

          <div className="flex flex-col gap-6 font-sans text-lg leading-relaxed text-ink">
            {article.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </article>

      <section className="px-5 sm:px-12 py-20 bg-pink">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl mb-10">More field notes</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
            {more.map((a) => (
              <Link
                key={a.slug}
                href={`/journal/${a.slug}`}
                className="rounded-xl p-7"
                style={{ background: a.cardBg }}
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-coral mb-3">
                  {a.category} · {a.readMins} min read
                </div>
                <h3 className="font-display text-2xl leading-[1.05]">{a.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
