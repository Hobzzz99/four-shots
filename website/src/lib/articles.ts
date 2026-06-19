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
    cardBg: "#FFC5E5",
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
    cardBg: "#8FD9A8",
    body: [
      "Every bag we roast gets dialed in fresh, every morning, before the first customer walks in. The rule is simple: 18 grams in, somewhere around 38 grams out, in 26 seconds. Not 24. Not 28.",
      "At 24 seconds the shot is under-extracted — sharp, sour, thin. At 28 it tips into bitter, the sweetness washed out by everything that comes after the good part of the extraction. 26 is the window where the sugars and the acids are still arguing, and that argument is what tastes interesting.",
      "We taste every new bag against this number before it goes on the bar. If a roast can't hit a clean 26-second shot, it doesn't go out as espresso — it becomes a filter offering instead.",
    ],
  },
  {
    slug: "coffee-music-and-bonding-games",
    category: "Brand",
    readMins: 3,
    title: "Why we built a coffee shop around music and bonding games",
    excerpt:
      "Four friends, one shared vision: a space that's more than a cup of coffee.",
    cardBg: "#FCD300",
    body: [
      "In the heart of Egypt, four passionate friends came together with a shared vision: to create a space that transcends the ordinary coffee shop experience. Drawing on their diverse backgrounds and love for music, they envisioned somewhere the rich heritage of Egyptian culture meets contemporary social interactions.",
      "Coffee was never going to be enough on its own. The handpicked playlists came first — music that resonates with the vibe of the day, the same way a good shot resonates through the rest of your morning. The bonding games followed from a simple belief: shared experiences, much like music, break down barriers and create lasting memories.",
      "Every detail since has been designed to enhance that experience — from decor inspired by Egyptian heritage to events celebrating different musical genres. The shop is a lively testament to the power of connection. That's the whole idea behind \"more than coffee.\"",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
