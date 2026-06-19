export type Product = {
  slug: string;
  batch: string;
  kind: "Espresso" | "Filter" | "Blend";
  name: string;
  origin: string;
  process: string;
  notes: string[];
  price: number;
  weightG: number;
  score?: number;
  badge?: string;
  cardBg: string;
  bagBg: string;
  accent: string;
  description: string;
  brew: { ratio: string; time: string };
};

export const products: Product[] = [
  {
    slug: "gesha-boquete",
    batch: "0427-A",
    kind: "Espresso",
    name: "Gesha",
    origin: "Boquete, Panama",
    process: "Anaerobic Natural",
    notes: ["raspberry", "rose", "bergamot"],
    price: 32,
    weightG: 250,
    score: 90.5,
    badge: "new!",
    cardBg: "#f7c5da",
    bagBg: "#e6d8c2",
    accent: "#6b2d8c",
    description:
      "The lot that started the obsession. Anaerobic natural Gesha from a single block in Boquete — heavy on raspberry and rose, with a bergamot finish that lingers through the fourth shot.",
    brew: { ratio: "18g → 38g", time: "26s" },
  },
  {
    slug: "halo-beriti",
    batch: "0419-B",
    kind: "Filter",
    name: "Halo Beriti",
    origin: "Yirgacheffe, Ethiopia",
    process: "Washed",
    notes: ["peach", "jasmine", "black tea"],
    price: 26,
    weightG: 250,
    score: 88,
    badge: "house favourite",
    cardBg: "#ec9cc1",
    bagBg: "#f4ecde",
    accent: "#4a1f5e",
    description:
      "Our longest-running filter pour. Washed Yirgacheffe with a delicate, floral cup — peach and jasmine up front, black tea drying out the finish.",
    brew: { ratio: "1:16", time: "4:00" },
  },
  {
    slug: "four-way-blend",
    batch: "0411-C",
    kind: "Blend",
    name: "Four-Way",
    origin: "4 origins, 1 chord",
    process: "House Blend",
    notes: ["cocoa", "brown sugar", "cherry"],
    price: 22,
    weightG: 250,
    badge: "always on",
    cardBg: "#b54d83",
    bagBg: "#2a0f3a",
    accent: "#e8649a",
    description:
      "Four origins, blended to taste like one good decision. Cocoa and brown sugar carry the body, ripe cherry rides on top. Built for milk, built for daily.",
    brew: { ratio: "18g → 36g", time: "27s" },
  },
  {
    slug: "el-salvador-finca-kilimanjaro",
    batch: "0405-D",
    kind: "Filter",
    name: "Finca Kilimanjaro",
    origin: "Santa Ana, El Salvador",
    process: "Honey",
    notes: ["red apple", "honey", "almond"],
    price: 24,
    weightG: 250,
    score: 87,
    cardBg: "#f0a5c9",
    bagBg: "#f4ecde",
    accent: "#9c3568",
    description:
      "Honey-processed Bourbon from the slopes of Santa Ana volcano. Crisp red apple, a streak of honey sweetness, and a soft almond finish.",
    brew: { ratio: "1:16", time: "3:45" },
  },
  {
    slug: "sumatra-lintong",
    batch: "0398-A",
    kind: "Espresso",
    name: "Lintong",
    origin: "Lintongnihuta, Sumatra",
    process: "Wet-Hulled",
    notes: ["dark chocolate", "cedar", "molasses"],
    price: 23,
    weightG: 250,
    score: 86,
    cardBg: "#9c3568",
    bagBg: "#2a0f3a",
    accent: "#ec9cc1",
    description:
      "Heavy, earthy, and built like a winter coat. Wet-hulled Sumatra with dark chocolate and cedar up front and a long molasses finish under milk.",
    brew: { ratio: "18g → 40g", time: "28s" },
  },
  {
    slug: "kenya-kiambu",
    batch: "0388-B",
    kind: "Filter",
    name: "Kiambu AA",
    origin: "Kiambu County, Kenya",
    process: "Washed",
    notes: ["blackcurrant", "grapefruit", "brown spice"],
    price: 27,
    weightG: 250,
    score: 89,
    cardBg: "#ffe2ef",
    bagBg: "#e6d8c2",
    accent: "#b54d83",
    description:
      "The lot we keep reordering. Juicy AA-grade Kenyan with a blackcurrant punch, grapefruit acidity, and a warm brown-spice finish.",
    brew: { ratio: "1:16.5", time: "4:15" },
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
