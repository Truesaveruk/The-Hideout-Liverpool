// ---------------------------------------------------------------------------
// SERVICES — mirrors the live Fresha menu exactly (Fresha is the source of
// truth for names, prices, durations, guest limits and private/shared status).
// Do not change prices here to "optimise" — update Fresha first, then mirror.
// ---------------------------------------------------------------------------

export type Experience = {
  slug: string;
  number: string;
  name: string;
  tagline: string;
  badge?: string;
  summary: string;
  body: string[];
  idealFor: string[];
  cta: string;
  accent: "heat" | "cold" | "sound" | "breath" | "all";
  kind?: "session";
  price?: string;
  priceNote?: string;
  maxGuests?: number;
  hourly?: boolean;
  status?: "PRIVATE" | "SHARED";
  bookingUrl?: string;
};

import { site } from "./site";

/** Every Book button points at the live Fresha booking page. */
export const bookHref = (_e?: Experience) => site.bookingUrl;

// --- PRIVATE SIGNATURE EXPERIENCES (homepage cards + Experiences page) ------
export const experiences: Experience[] = [
  {
    slug: "full-hideout",
    number: "01",
    name: "The Full Hideout Experience",
    tagline: "Experience everything.",
    badge: "The complete experience",
    status: "PRIVATE",
    summary:
      "Heat, cold, breath, sound, vibration and stillness — the whole space, experienced privately as one flowing journey.",
    body: [
      "Rather than choosing one element of The Hideout, experience the space as one flowing journey.",
      "Move from heat into cold, from breath into immersive sound and vibration, and finally into stillness.",
      "Nothing feels like separate treatments. Each part flows naturally into the next.",
      "Finish with refreshments and time to come back to the world slowly.",
      "Private for your group. Make your own way to us in Crosby."
    ],
    idealFor: ["Couples", "Special occasions", "Birthdays", "Gifts", "Visitors to Liverpool", "First-time guests"],
    cta: "Book the Full Hideout",
    accent: "all",
    price: "£120",
    priceNote: "2 hours · £120 up to 2 · £180 up to 4 · private",
    maxGuests: 4
  },
  {
    slug: "sound-immersion-1-2-1",
    number: "02",
    name: "Private Sound Immersion (1-2-1)",
    tagline: "Don't just hear sound. Feel it.",
    badge: "Signature 1-to-1 experience",
    status: "PRIVATE",
    summary:
      "A private one-to-one journey on a specialist vibroacoustic mat — traditional instruments, immersive audio and low-frequency vibration you feel through the body.",
    body: [
      "A private 1-to-1 experience combining traditional sound and instruments with modern immersive audio and vibroacoustic technology.",
      "Lie comfortably while the experience moves between therapeutic instruments, immersive sound, guided relaxation and low-frequency vibration.",
      "A specialist vibration mat lets selected sound and frequencies be physically felt through the body.",
      "It should feel like stepping inside sound rather than simply listening to it."
    ],
    idealFor: ["Anyone curious about sound", "People who find group sound baths aren't for them", "Deep relaxation", "Gifts"],
    cta: "Book your Sound Immersion",
    accent: "sound",
    price: "£60",
    priceNote: "1 hour · 1-to-1 · private",
    maxGuests: 1
  },
  {
    slug: "couples-sound-journey",
    number: "03",
    name: "The Couples Immersive Sound Journey",
    tagline: "Two mats. One journey.",
    status: "PRIVATE",
    summary:
      "The immersive sound journey for two, side by side — each on your own vibroacoustic mat, feeling the sound as well as hearing it.",
    body: [
      "Side by side on two specialist vibroacoustic mats, sound and low-frequency vibration experienced through the body.",
      "Traditional instruments meet modern immersive audio in one shared journey.",
      "A completely different kind of date in Liverpool."
    ],
    idealFor: ["Couples", "Anniversaries", "Date nights", "Gifts for two"],
    cta: "Book for two",
    accent: "sound",
    price: "£80",
    priceNote: "1 hour · for two · private",
    maxGuests: 2
  },
  {
    slug: "private-4-person-sound-bath",
    number: "04",
    name: "Private 4 Person Sound Bath",
    tagline: "Bring your people. Lie back.",
    status: "PRIVATE",
    summary:
      "A private sound bath for your own group of up to four — traditional instruments and immersive sound washing over the room while you switch off together.",
    body: [
      "Lie back on the mats while the hour moves through traditional instruments and immersive sound.",
      "Private for your own group of up to four — no strangers, just the people you bring.",
      "Birthdays, close friends, or simply a reason to slow down together."
    ],
    idealFor: ["Groups of friends", "Birthdays", "Family sessions", "A calm celebration"],
    cta: "Book a private sound bath",
    accent: "sound",
    price: "£100",
    priceNote: "1 hour · up to 4 · private",
    maxGuests: 4
  },
  {
    slug: "breathwork",
    number: "05",
    name: "Private Breathwork",
    tagline: "Everything starts with a breath.",
    status: "PRIVATE",
    summary:
      "A private guided breathwork session in the calm of The Hideout. Accessible and unhurried — no experience needed.",
    body: [
      "A private guided breathwork session, calm and accessible rather than intense.",
      "Begin with a proper introduction to the practice, then you're guided the whole way through.",
      "No previous breathwork experience is required. Finish with time to rest.",
      "You're free to skip any part of the experience at any time."
    ],
    idealFor: ["Beginners", "Solo guests", "People exploring breathwork", "Personal reset days"],
    cta: "Book Breathwork",
    accent: "breath",
    price: "£100",
    priceNote: "1 hour · up to 4 · private",
    maxGuests: 4
  }
];

// --- SAUNA (by the hour) — homepage "Sauna sessions" section ----------------
export const saunaSessions: Experience[] = [
  {
    slug: "open-sauna",
    number: "S1",
    name: "Open Sauna — Shared",
    tagline: "Drop in. Heat up. Plunge.",
    kind: "session",
    status: "SHARED",
    price: "£15",
    priceNote: "per person · 1 hour · shared",
    hourly: true,
    summary:
      "A one-hour sauna session with full use of the cold plunge, shared with a few other guests. Numbers are capped so it never feels crowded. Available at set times.",
    body: [
      "Book a spot, turn up, and take the hour at your own pace — sauna rounds, cold plunge, and time to sit out and breathe between them.",
      "Open sessions are shared with other guests, with numbers capped so it never feels crowded.",
      "Available at set daytime slots. Want the whole place to yourselves? That's Private Sauna Hire."
    ],
    idealFor: ["Regular sauna-goers", "Solo visits", "A quick reset", "Trying The Hideout for the first time"],
    cta: "Book an open session",
    accent: "heat"
  },
  {
    slug: "private-sauna-hire",
    number: "S2",
    name: "Private Sauna Hire",
    tagline: "The whole sauna. Just your group.",
    kind: "session",
    status: "PRIVATE",
    price: "£60",
    priceNote: "1 hour · up to 6 · private",
    maxGuests: 6,
    hourly: true,
    summary:
      "The sauna and cold plunge, completely private for up to six people.",
    body: [
      "Book the whole sauna by the hour — no other guests, no sharing, just your group.",
      "Full use of the cold plunge, and the outdoor space to relax between rounds.",
      "Up to six people."
    ],
    idealFor: ["Groups of friends", "Couples", "Birthdays", "Post-gym or post-run groups"],
    cta: "Book private hire",
    accent: "heat"
  }
];

// --- OPEN GROUP SESSIONS (shared) — for the Prices page ---------------------
export const sharedSessions: Experience[] = [
  {
    slug: "open-sauna-shared",
    number: "G1",
    name: "Open Sauna — Shared",
    tagline: "Drop in. Heat up. Plunge.",
    kind: "session",
    status: "SHARED",
    price: "£15",
    priceNote: "per person · 1 hour · shared",
    summary: "Full use of the sauna and cold plunge, shared with a few others in small capped numbers. Available at set times.",
    body: [],
    idealFor: [],
    cta: "Book",
    accent: "heat"
  },
  {
    slug: "sauna-sound-shared",
    number: "G2",
    name: "Sauna & Sound — Shared",
    tagline: "From heat into stillness.",
    kind: "session",
    status: "SHARED",
    price: "£30",
    priceNote: "per person · 1 hour 30 · shared",
    summary: "Begin in the sauna and cold plunge, then lie back for immersive sound and vibration — side by side with a few like-minded people. Available at set times.",
    body: [],
    idealFor: [],
    cta: "Book",
    accent: "sound"
  },
  {
    slug: "full-journey-shared",
    number: "G3",
    name: "The Full Journey — Shared",
    tagline: "The complete journey, shared.",
    kind: "session",
    status: "SHARED",
    price: "£45",
    priceNote: "per person · 2 hours · shared",
    summary: "The complete Hideout journey — sauna and cold, guided breathwork, meditation and immersive sound — shared with a small group. Available at set times.",
    body: [],
    idealFor: [],
    cta: "Book",
    accent: "all"
  }
];

// --- SOUND BATH (private) — for the Prices page -----------------------------
export const soundSessions: Experience[] = [
  {
    slug: "sound-immersion-1-2-1-p",
    number: "SB1",
    name: "Private Sound Immersion (1-2-1)",
    tagline: "Don't just hear sound. Feel it.",
    kind: "session",
    status: "PRIVATE",
    price: "£60",
    priceNote: "1 hour · 1-to-1 · private",
    maxGuests: 1,
    summary: "A private one-to-one immersive sound journey on a specialist vibroacoustic mat.",
    body: [],
    idealFor: [],
    cta: "Book",
    accent: "sound"
  },
  {
    slug: "couples-sound-journey-p",
    number: "SB2",
    name: "The Couples Immersive Sound Journey",
    tagline: "Two mats. One journey.",
    kind: "session",
    status: "PRIVATE",
    price: "£80",
    priceNote: "1 hour · for two · private",
    maxGuests: 2,
    summary: "The immersive sound journey for two, side by side on two vibroacoustic mats.",
    body: [],
    idealFor: [],
    cta: "Book",
    accent: "sound"
  },
  {
    slug: "private-4-person-sound-bath-p",
    number: "SB3",
    name: "Private 4 Person Sound Bath",
    tagline: "Bring your people. Lie back.",
    kind: "session",
    status: "PRIVATE",
    price: "£100",
    priceNote: "1 hour · up to 4 · private",
    maxGuests: 4,
    summary: "A private sound bath for your own group of up to four.",
    body: [],
    idealFor: [],
    cta: "Book",
    accent: "sound"
  }
];

/** The signature journey, in order. */
export const journey = [
  { stage: "Sauna", phase: "heat" },
  { stage: "Cold", phase: "cold" },
  { stage: "Breath", phase: "breath" },
  { stage: "Immersive sound", phase: "sound" },
  { stage: "Vibration", phase: "sound" },
  { stage: "Stillness", phase: "still" },
  { stage: "Refreshments", phase: "still" }
] as const;
