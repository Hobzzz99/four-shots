export type Location = {
  slug: string;
  name: string;
  address: string;
  blurb: string;
  hours: string;
};

export const locations: Location[] = [
  {
    slug: "pink-lane",
    name: "Roastery — Pink Lane",
    address: "42 Pink Lane, East Side",
    blurb: "Roasting Tuesdays — drop by for the smell alone.",
    hours: "07:00 — 17:00 · Mon–Sat",
  },
  {
    slug: "old-town",
    name: "The Bar — Old Town",
    address: "9 Mercer St, Old Town",
    blurb: "Espresso bar only — three stools and a view of the lever.",
    hours: "08:00 — 16:00 · Daily",
  },
];

export function directionsUrl(loc: Location) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    loc.address
  )}`;
}
