export type Article = {
  slug: string;
  category: string;
  readMins: number;
  title: string;
  excerpt: string;
  cardBg: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "a-week-at-the-gesha-farm",
    category: "Origin",
    readMins: 6,
    title: "A week at the Gesha farm in Boquete",
    excerpt:
      "Why this lot tasted like raspberry the moment we cracked the sample bag.",
    cardBg: "#ffe2ef",
    body: [
      "We flew into Panama City expecting jet lag and got a 4am pickup truck ride into the highlands instead. Boquete sits at 1,600 meters, wrapped in cloud most mornings, and the farm we were visiting had exactly one block of Gesha planted on a slope steep enough that the pickers worked in harnesses.",
      "The anaerobic natural process is finicky — too long in the sealed tanks and you get boozy, vinegar notes; too short and you lose the fruit entirely. The farm's processing lead let us taste the lot at six different fermentation windows. The one we bought was the fourth jar: 84 hours, raspberry up front, rose in the middle, bergamot hanging on the finish.",
      "We bought the entire micro-lot. 38 bags total. When it's gone, it's gone — we won't be cutting it with anything else to stretch it further.",
    ],
  },
  {
    slug: "why-we-pull-at-26-seconds",
    category: "Craft",
    readMins: 4,
    title: "Why we pull at 26 seconds (and not 28)",
    excerpt: "The two-second window where everything sweet stops being sweet.",
    cardBg: "#ec9cc1",
    body: [
      "Every bag we roast gets dialed in fresh, every morning, before the first customer walks in. The rule is simple: 18 grams in, somewhere around 38 grams out, in 26 seconds. Not 24. Not 28.",
      "At 24 seconds the shot is under-extracted — sharp, sour, thin. At 28 it tips into bitter, the sweetness washed out by everything that comes after the good part of the extraction. 26 is the window where the sugars and the acids are still arguing, and that argument is what tastes interesting.",
      "We taste every new bag against this number before it goes on the bar. If a roast can't hit a clean 26-second shot, it doesn't go out as espresso — it becomes a filter offering instead.",
    ],
  },
  {
    slug: "why-the-walls-are-pink",
    category: "Brand",
    readMins: 3,
    title: "Why the walls are pink, since you asked",
    excerpt:
      "A short history of how we landed on Petal #F7C5DA and never looked back.",
    cardBg: "#f4ecde",
    body: [
      "The first shop had white walls for exactly eleven days. Then someone spilled an entire bag of hibiscus syrup across the back counter, and instead of repainting it back to white, we just... kept going.",
      "Pink isn't a gimmick — it's a decision about who we wanted to be. Coffee branding defaults to kraft paper and muted earth tones, all serious, all the same. We wanted the shop to feel like the inside of a good mood. The coffee still has to be excellent. The walls just don't have to apologize for being loud about it.",
      "Petal — #F7C5DA — is the exact pink off the original tin of logo proofs. We had it color-matched and it's been the spine of every can, cup, and wall since.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
