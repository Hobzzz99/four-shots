export type Location = {
  slug: string;
  name: string;
  address: string;
  blurb: string;
  hours: string;
};

export const locations: Location[] = [
  {
    slug: "zamalek",
    name: "Roastery — Zamalek",
    address: "12 Brazil St, Zamalek, Cairo",
    blurb: "Roasting Tuesdays — drop by for the smell, the playlist, and a round of bonding games.",
    hours: "07:00 — 17:00 · Mon–Sat",
  },
  {
    slug: "maadi",
    name: "The Bar — Maadi",
    address: "9 Road 9, Maadi, Cairo",
    blurb: "Espresso bar only — three stools, a lever machine, and a jazzy night every Friday.",
    hours: "08:00 — 16:00 · Daily",
  },
];

export function directionsUrl(loc: Location) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    loc.address
  )}`;
}
