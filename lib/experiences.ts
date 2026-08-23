// ---------------------------------------------------------------------------
// EXPERIENCES — the five core experiences. Add future experiences here
// (Crosby Coastal Reset, workshops, corporate wellbeing…) and they will
// appear automatically on the Experiences page and in the booking journey.
// Never mention supplier/brand names for equipment on the public site.
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
  /** which side of the journey thread the accent leans towards */
  accent: "heat" | "cold" | "sound" | "breath" | "all";
};

export const experiences: Experience[] = [
  {
    slug: "sauna-cold",
    number: "01",
    name: "Sauna + Cold",
    tagline: "Heat. Cold. Reset.",
    summary:
      "Our traditional sauna and cold plunge, completely privately. Move between heat and cold at your own pace.",
    body: [
      "Experience our traditional sauna and cold plunge completely privately.",
      "Move between heat and cold at your own pace, taking time between rounds to sit outside, breathe and relax.",
      "No sharing the sauna with strangers. No crowded changing rooms. No pressure to use the cold if you don't want to.",
      "It's your space. It's your experience.",
      "Finish with time to relax and enjoy refreshments."
    ],
    idealFor: [
      "Solo guests",
      "Couples",
      "Friends",
      "First-time sauna users",
      "Regular sauna and cold enthusiasts"
    ],
    cta: "Book Sauna + Cold",
    accent: "heat"
  },
  {
    slug: "sauna-sound",
    number: "02",
    name: "Sauna + Sound",
    tagline: "From heat into stillness.",
    badge: "Hideout favourite",
    summary:
      "Begin in the warmth of the sauna, then move into our dedicated sound space and let everything slow down.",
    body: [
      "Begin with the warmth of the traditional sauna and optional cold plunge.",
      "Then move into The Hideout's dedicated sound space. Get comfortable. Close your eyes.",
      "Allow the experience to transition from heat and cold into immersive sound and relaxation.",
      "Traditional instruments meet modern sound technology to create an experience designed around slowing everything down."
    ],
    idealFor: [
      "Solo guests",
      "Couples",
      "Date experiences",
      "Gifts",
      "People wanting something different"
    ],
    cta: "Book Sauna + Sound",
    accent: "sound"
  },
  {
    slug: "immersive-sound-journey",
    number: "03",
    name: "The Immersive Sound Journey",
    tagline: "Don't just hear sound. Feel it.",
    badge: "Signature 1-to-1 experience",
    summary:
      "Ancient sound. Modern technology. One fully immersive private experience — sound you can physically feel.",
    body: [
      "A private 1-to-1 experience combining traditional sound practices and instruments with modern immersive audio and vibroacoustic technology.",
      "Lie comfortably while the experience moves between traditional therapeutic instruments, immersive sound, music, guided relaxation and low-frequency vibration.",
      "A specialist vibration mat allows selected sound, music and frequencies to be physically experienced through the body.",
      "It should feel like stepping inside sound rather than simply listening to it.",
      "Hear it. Feel it. Experience it."
    ],
    idealFor: [
      "Anyone curious about sound",
      "People who find group sound baths aren't for them",
      "Deep relaxation and switching off",
      "Gifts for someone hard to buy for"
    ],
    cta: "Book your Sound Journey",
    accent: "sound"
  },
  {
    slug: "breathwork",
    number: "04",
    name: "Private Breathwork",
    tagline: "Everything starts with a breath.",
    summary:
      "A private guided breathwork experience. Accessible, personal and unhurried — no experience needed.",
    body: [
      "A private guided breathwork experience inside The Hideout.",
      "Begin with an introduction to the breathing practice before being guided through the experience.",
      "Sessions are accessible and personal rather than intimidating. No previous breathwork experience is required.",
      "Finish with time for relaxation and reflection."
    ],
    idealFor: [
      "Beginners",
      "Solo guests",
      "People exploring breathwork",
      "Personal reset days"
    ],
    cta: "Book Breathwork",
    accent: "breath"
  },
  {
    slug: "full-hideout",
    number: "05",
    name: "The Full Hideout Experience",
    tagline: "Experience everything.",
    badge: "The complete experience",
    summary:
      "Heat. Cold. Breath. Sound. Vibration. Stillness. The whole space, experienced as one flowing journey.",
    body: [
      "Rather than choosing one element of The Hideout, experience the space as one flowing journey.",
      "Move from heat into cold, from breath into immersive sound and vibration, and finally into stillness.",
      "Nothing feels like separate treatments. Each part flows naturally into the next.",
      "Finish with refreshments and time to come back to the world slowly."
    ],
    idealFor: [
      "Couples",
      "Special occasions",
      "Birthdays",
      "Gifts",
      "Visitors to Liverpool",
      "People discovering The Hideout for the first time"
    ],
    cta: "Book the Full Hideout",
    accent: "all"
  }
];

/** The signature journey, in order — rendered by the JourneyThread component. */
export const journey = [
  { stage: "Sauna", phase: "heat" },
  { stage: "Cold", phase: "cold" },
  { stage: "Breath", phase: "breath" },
  { stage: "Immersive sound", phase: "sound" },
  { stage: "Vibration", phase: "sound" },
  { stage: "Stillness", phase: "still" },
  { stage: "Refreshments", phase: "still" }
] as const;
