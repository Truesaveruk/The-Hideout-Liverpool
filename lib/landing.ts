// ---------------------------------------------------------------------------
// SEO LANDING PAGES — one page per thing people search for on Google.
// Each entry becomes a page at /<slug>. Prices must match Fresha (and
// lib/experiences.ts). Never add medical or healing claims here.
// ---------------------------------------------------------------------------

export type LandingOffer = {
  name: string;
  price: string;
  note: string;
  summary: string;
  status: "PRIVATE" | "SHARED";
};

export type LandingFaq = { q: string; a: string };

export type LandingPage = {
  slug: string;
  /** <title> — keyword first, under ~60 characters. */
  title: string;
  /** Meta description — under ~155 characters, with a reason to click. */
  description: string;
  /** Short name used in breadcrumbs, footer links and schema. */
  short: string;
  serviceType: string;
  eyebrow: string;
  h1: string;
  lede: string;
  photo: string;
  photoAlt: string;
  intro: string[];
  offersHeading: string;
  offers: LandingOffer[];
  whyHeading: string;
  why: { title: string; copy: string }[];
  faqs: LandingFaq[];
  related: string[];
  /** Optional: replace the Book buttons (e.g. gift vouchers). */
  ctaLabel?: string;
  ctaHref?: string;
};

import { site } from "./site";

const GIFT_HREF = `mailto:${site.email}?subject=${encodeURIComponent("Gift voucher enquiry")}`;

const OPEN_SAUNA: LandingOffer = {
  name: "Open Sauna — Shared",
  price: "£15",
  note: "per person · 1 hour · shared",
  status: "SHARED",
  summary:
    "A one-hour sauna session with full use of the cold plunge, shared with a few other guests. Numbers are capped so it never feels crowded."
};
const PRIVATE_SAUNA: LandingOffer = {
  name: "Private Sauna Hire",
  price: "£60",
  note: "1 hour · up to 6 · private",
  status: "PRIVATE",
  summary: "The whole sauna and cold plunge, completely private for your group of up to six."
};
const FULL_HIDEOUT: LandingOffer = {
  name: "The Full Hideout Experience",
  price: "£120",
  note: "2 hours · £120 up to 2 · £180 up to 4 · private",
  status: "PRIVATE",
  summary:
    "Sauna, cold plunge, breathwork, immersive sound, vibration and stillness — the whole space, privately, as one flowing journey."
};
const SOUND_121: LandingOffer = {
  name: "Private Sound Immersion (1-2-1)",
  price: "£60",
  note: "1 hour · 1-to-1 · private",
  status: "PRIVATE",
  summary:
    "A one-to-one sound journey on a specialist vibroacoustic mat — traditional instruments, immersive audio and low-frequency vibration you feel through the body."
};
const SOUND_COUPLES: LandingOffer = {
  name: "Couples Immersive Sound Journey",
  price: "£80",
  note: "1 hour · for two · private",
  status: "PRIVATE",
  summary: "Side by side on two vibroacoustic mats — one shared sound journey for two."
};
const SOUND_GROUP: LandingOffer = {
  name: "Private 4 Person Sound Bath",
  price: "£100",
  note: "1 hour · up to 4 · private",
  status: "PRIVATE",
  summary: "A private sound bath for your own group of up to four. No strangers, just the people you bring."
};
const SAUNA_SOUND_SHARED: LandingOffer = {
  name: "Sauna & Sound — Shared",
  price: "£30",
  note: "per person · 1 hour 30 · shared",
  status: "SHARED",
  summary: "Sauna and cold plunge first, then lie back for immersive sound and vibration with a small group."
};
const BREATHWORK: LandingOffer = {
  name: "Private Breathwork",
  price: "£100",
  note: "1 hour · up to 4 · private",
  status: "PRIVATE",
  summary: "A private, guided breathwork session — calm and accessible rather than intense. No experience needed."
};
const FULL_SHARED: LandingOffer = {
  name: "The Full Journey — Shared",
  price: "£45",
  note: "per person · 2 hours · shared",
  status: "SHARED",
  summary: "Sauna and cold, guided breathwork, meditation and immersive sound, shared with a small group."
};

const COLLECTION_FAQ: LandingFaq = {
  q: "I'm staying in Liverpool city centre — how do I get to you?",
  a: "The Hideout is in Crosby, on the coast just north of Liverpool. If you're staying within 8 miles — which covers the city centre, the waterfront, Crosby, Waterloo and Formby — The Hideout Concierge can collect you from your hotel, Airbnb or apartment and take you back afterwards. Crosby is also on the Merseyrail Northern Line from Liverpool Central."
};
const ADDRESS_FAQ: LandingFaq = {
  q: "Where exactly is The Hideout?",
  a: "We're in Crosby, Liverpool, close to Crosby Beach and Antony Gormley's Another Place. The full address is sent to you after booking."
};

export const landingPages: LandingPage[] = [
  // 1 ------------------------------------------------------------------------
  {
    slug: "sauna-liverpool",
    title: "Sauna Liverpool — Private & Open Sauna with Cold Plunge",
    description:
      "Sauna and cold plunge in Crosby, Liverpool. Open sessions from £15 or hire the whole sauna privately from £60 for up to six. Book online.",
    short: "Sauna Liverpool",
    serviceType: "Sauna",
    eyebrow: "Sauna in Liverpool",
    h1: "Sauna in Liverpool, without the crowds.",
    lede: "A traditional sauna and cold plunge tucked away in Crosby. Drop into a small shared session, or have the whole place to yourselves.",
    photo: "/photos/sauna-interior.jpg",
    photoAlt: "Inside the sauna at The Hideout Liverpool, warm wood and low light",
    intro: [
      "Most saunas in Liverpool are part of a gym, a hotel spa or a busy social sauna. The Hideout is different: a small, private wellness space in Crosby where numbers are always capped and quiet is the point.",
      "Book an Open Sauna session for £15 and share the hour with a handful of other guests, or hire the whole sauna and cold plunge privately for your group. Either way you get proper heat, a cold plunge to step into between rounds, and space outside to sit and breathe.",
      "Towels are provided. Bring swimwear and something comfortable to relax in afterwards."
    ],
    offersHeading: "Sauna sessions & prices",
    offers: [OPEN_SAUNA, PRIVATE_SAUNA, FULL_HIDEOUT],
    whyHeading: "Why people choose The Hideout",
    why: [
      { title: "Never crowded", copy: "Shared sessions are capped to a small number of guests. Private hire means no one else at all." },
      { title: "Hot and cold", copy: "Every sauna session includes full use of the cold plunge. The cold is always optional." },
      { title: "Collection available", copy: "Staying in Liverpool? We can collect you and take you back, within 8 miles." },
      { title: "More than a sauna", copy: "Add breathwork and immersive sound with the Full Hideout Experience." }
    ],
    faqs: [
      {
        q: "How much is a sauna session in Liverpool at The Hideout?",
        a: "An Open Sauna session is £15 per person for one hour, shared with a few other guests. Private Sauna Hire is £60 for one hour for your whole group of up to six."
      },
      {
        q: "Is there a cold plunge?",
        a: "Yes. Every sauna session includes full use of the cold plunge. You never have to use it — plenty of guests build up to it, or skip it entirely."
      },
      {
        q: "What should I bring?",
        a: "Swimwear and something comfortable to relax in afterwards. Towels are provided."
      },
      COLLECTION_FAQ,
      ADDRESS_FAQ
    ],
    related: ["private-sauna-liverpool", "ice-bath-liverpool", "group-bookings-liverpool"]
  },

  // 2 ------------------------------------------------------------------------
  {
    slug: "private-sauna-liverpool",
    title: "Private Sauna Hire Liverpool — Exclusive Use from £60",
    description:
      "Hire a private sauna and cold plunge in Liverpool for just your group. Up to six people, £60 an hour. No strangers, no sharing. Book online.",
    short: "Private Sauna Hire",
    serviceType: "Private sauna hire",
    eyebrow: "Private sauna hire",
    h1: "Private sauna hire in Liverpool.",
    lede: "The whole sauna and cold plunge, just for you. Up to six people, £60 an hour.",
    photo: "/photos/sauna-interior.jpg",
    photoAlt: "The private sauna at The Hideout in Crosby, Liverpool",
    intro: [
      "Sometimes you don't want to share. Private Sauna Hire gives you the sauna, the cold plunge and the outdoor space at The Hideout completely to yourselves for an hour — no other guests, no changing-room queues.",
      "It's popular with couples, groups of friends, birthdays, run clubs and anyone who wants a proper sauna session without strangers. Up to six people can book together for £60.",
      "Want the full experience? The Full Hideout Experience adds guided breathwork, immersive sound and vibration, and refreshments to make a private two-hour journey."
    ],
    offersHeading: "Private options & prices",
    offers: [PRIVATE_SAUNA, FULL_HIDEOUT, OPEN_SAUNA],
    whyHeading: "What private really means",
    why: [
      { title: "Just your group", copy: "Nobody else in the sauna, the plunge or the garden while you're booked in." },
      { title: "Up to six people", copy: "One price for the hour, whether there are two of you or six." },
      { title: "Your pace", copy: "Heat, cold, rest — repeat as many rounds as you like." },
      { title: "We'll collect you", copy: "Visiting Liverpool? Collection is available within 8 miles." }
    ],
    faqs: [
      {
        q: "How much does private sauna hire cost?",
        a: "£60 for one hour, for up to six people. The price is for the whole booking, not per person."
      },
      {
        q: "Is it completely private?",
        a: "Yes. Private Sauna Hire is just your group — no other guests are booked into the sauna, cold plunge or outdoor space during your hour."
      },
      {
        q: "Can couples book private sauna hire?",
        a: "Absolutely. It's a favourite for dates, anniversaries and weekend breaks in Liverpool. For something longer, the Full Hideout Experience is £120 for two."
      },
      COLLECTION_FAQ,
      ADDRESS_FAQ
    ],
    related: ["sauna-liverpool", "couples-wellness-liverpool", "group-bookings-liverpool"]
  },

  // 3 ------------------------------------------------------------------------
  {
    slug: "sound-bath-liverpool",
    title: "Sound Bath Liverpool — Private & Couples Sound Baths",
    description:
      "Private sound baths in Liverpool with a qualified sound therapist. 1-to-1 from £60, couples £80, groups of four £100. Vibroacoustic mats. Book online.",
    short: "Sound Bath Liverpool",
    serviceType: "Sound bath",
    eyebrow: "Sound bath in Liverpool",
    h1: "A sound bath in Liverpool you can feel.",
    lede: "Traditional instruments, immersive audio and vibroacoustic mats — privately, for one, two or four people.",
    photo: "/photos/sound-room-purple.jpg",
    photoAlt: "The sound room at The Hideout Liverpool with instruments and mats",
    intro: [
      "Most sound baths in Liverpool are group classes in a studio or hall. At The Hideout, sound baths are private: just you, your partner, or your own small group, in a dedicated sound room in Crosby.",
      "Each session is led by Andrew Reeves, a qualified sound therapist. It moves between traditional instruments, modern immersive audio and guided relaxation, while specialist vibroacoustic mats let selected sounds and low frequencies be felt through the body as well as heard.",
      "You don't need any experience. Just lie back, get comfortable and let the hour happen."
    ],
    offersHeading: "Sound baths & prices",
    offers: [SOUND_121, SOUND_COUPLES, SOUND_GROUP, SAUNA_SOUND_SHARED],
    whyHeading: "What makes it different",
    why: [
      { title: "Private, not a class", copy: "No rows of strangers. Book for one, two or up to four." },
      { title: "Sound you can feel", copy: "Vibroacoustic mats carry sound and low frequencies through the body." },
      { title: "Qualified practitioner", copy: "Every session is designed and led by a qualified sound therapist." },
      { title: "We can come to you", copy: "Sound sessions can also be brought to your home, studio or workplace." }
    ],
    faqs: [
      {
        q: "How much is a sound bath at The Hideout?",
        a: "A private 1-to-1 Sound Immersion is £60, the Couples Immersive Sound Journey is £80 for two, and a Private 4 Person Sound Bath is £100 for up to four. Shared Sauna & Sound sessions are £30 per person."
      },
      {
        q: "What is a vibroacoustic sound bath?",
        a: "Alongside traditional instruments and immersive audio, you lie on a specialist vibration mat that lets selected sound, music and low frequencies be physically felt through the body — like stepping inside sound rather than just listening to it."
      },
      {
        q: "I've never done a sound bath — is that okay?",
        a: "Completely. There's nothing to learn or get right. You're guided the whole way and can simply lie back and relax."
      },
      {
        q: "Can you bring a sound bath to my home or event?",
        a: "Yes. Private sound immersion and wellness sessions can be brought to homes, studios, venues and workplaces across Liverpool and Merseyside — see At Your Space."
      },
      COLLECTION_FAQ
    ],
    related: ["couples-wellness-liverpool", "breathwork-liverpool", "group-bookings-liverpool"]
  },

  // 4 ------------------------------------------------------------------------
  {
    slug: "breathwork-liverpool",
    title: "Breathwork Liverpool — Private Guided Sessions",
    description:
      "Private guided breathwork in Liverpool for beginners and beyond. Calm, accessible sessions for up to four, £100. Add sauna and sound. Book online.",
    short: "Breathwork Liverpool",
    serviceType: "Breathwork",
    eyebrow: "Breathwork in Liverpool",
    h1: "Private breathwork in Liverpool.",
    lede: "Calm, guided and unhurried. No experience needed — just turn up and breathe.",
    photo: "/photos/group-sound-bath.jpg",
    photoAlt: "Mats laid out for a guided breathwork session at The Hideout Liverpool",
    intro: [
      "Breathwork can sound intimidating. At The Hideout it isn't. Every session begins with a proper introduction to the practice, and you're guided the whole way through by a qualified breathwork practitioner.",
      "Private Breathwork is booked just for you or your group of up to four, in the calm of The Hideout in Crosby. Sessions are accessible rather than intense, and you're free to pause or skip any part at any time.",
      "Breathwork also forms part of the Full Hideout Experience and the shared Full Journey, alongside sauna, cold plunge and immersive sound."
    ],
    offersHeading: "Breathwork sessions & prices",
    offers: [BREATHWORK, FULL_HIDEOUT, FULL_SHARED],
    whyHeading: "Why start here",
    why: [
      { title: "Beginner friendly", copy: "A full introduction first, then guidance throughout." },
      { title: "Private", copy: "Just you, or you and up to three others." },
      { title: "Unhurried", copy: "Time to rest afterwards, with refreshments." },
      { title: "Go further", copy: "Combine breath with heat, cold and sound in the Full Hideout." }
    ],
    faqs: [
      {
        q: "I've never tried breathwork — is that okay?",
        a: "Yes. Every session starts with an introduction and everything is guided. No previous experience is needed."
      },
      {
        q: "How much is a private breathwork session?",
        a: "Private Breathwork is £100 for one hour, for up to four people. The shared Full Journey, which includes breathwork, is £45 per person."
      },
      {
        q: "Is breathwork suitable for everyone?",
        a: "Not always. If you are pregnant or have a heart, circulatory, blood pressure, respiratory, epilepsy or other health condition, please get professional medical advice before booking. Our sessions are for relaxation and wellbeing and are not medical treatment."
      },
      COLLECTION_FAQ,
      ADDRESS_FAQ
    ],
    related: ["sound-bath-liverpool", "ice-bath-liverpool", "sauna-liverpool"]
  },

  // 5 ------------------------------------------------------------------------
  {
    slug: "ice-bath-liverpool",
    title: "Ice Bath & Cold Plunge Liverpool — With Sauna, from £15",
    description:
      "Cold plunge (ice bath) and sauna in Crosby, Liverpool. Shared sessions from £15 or private hire from £60. Go at your own pace. Book online.",
    short: "Ice Bath & Cold Plunge",
    serviceType: "Cold plunge",
    eyebrow: "Ice bath & cold plunge",
    h1: "Ice bath and cold plunge in Liverpool.",
    lede: "Heat, then cold, then breathe. A cold plunge paired with a traditional sauna in Crosby.",
    photo: "/photos/cold-plunge.jpg",
    photoAlt: "The cold plunge tub at The Hideout Liverpool, lit at dusk",
    intro: [
      "Looking for an ice bath in Liverpool? The Hideout has a cold plunge paired with a traditional sauna, so you can move between proper heat and proper cold, with space to sit out and breathe in between.",
      "Every sauna session includes full use of the cold plunge — from £15 in a small shared session, or £60 to hire the whole space privately for up to six. The cold is always optional and always at your pace: dip a toe, stay for ten seconds, or build up over a few visits.",
      "If you'd like guidance, the Full Hideout Experience includes breathwork to help you settle into the cold."
    ],
    offersHeading: "Cold plunge sessions & prices",
    offers: [OPEN_SAUNA, PRIVATE_SAUNA, FULL_HIDEOUT],
    whyHeading: "Hot and cold, done properly",
    why: [
      { title: "Sauna included", copy: "Warm up in the sauna before and after every plunge." },
      { title: "Always optional", copy: "No pressure, no challenge culture. Go as far as you want." },
      { title: "Small numbers", copy: "Shared sessions are capped. Private hire is just your group." },
      { title: "Breath support", copy: "Guided breathwork is part of the Full Hideout Experience." }
    ],
    faqs: [
      {
        q: "Is the cold plunge the same as an ice bath?",
        a: "It's a cold-water plunge used in the same way as an ice bath — a short immersion in cold water, usually between rounds in the sauna."
      },
      {
        q: "Do I have to use the cold plunge?",
        a: "No. It's always optional. Many guests build up to it over a few visits, and some skip it entirely."
      },
      {
        q: "How much does it cost?",
        a: "Cold plunge access is included with every sauna session: £15 per person for an Open Sauna session, or £60 for private hire for up to six."
      },
      {
        q: "Is cold water immersion safe for me?",
        a: "Cold exposure isn't suitable for everyone. If you are pregnant or have a heart, circulatory, blood pressure or other health condition, please get professional medical advice before booking."
      },
      COLLECTION_FAQ
    ],
    related: ["sauna-liverpool", "breathwork-liverpool", "private-sauna-liverpool"]
  },

  // 6 ------------------------------------------------------------------------
  {
    slug: "group-bookings-liverpool",
    title: "Things to Do With Friends in Liverpool — Private Group Wellness",
    description:
      "Reconnect with your closest friends in Liverpool: private sauna, sound bath and breathwork for small groups. Reunions, milestones, family. Up to six.",
    short: "Friends & Small Groups",
    serviceType: "Private group wellness experience",
    eyebrow: "For friends & small groups",
    h1: "Time with your people, properly.",
    lede: "Not another night out. Two hours of heat, cold, breath and sound with the friends and family who matter most.",
    photo: "/photos/sound-room-purple-wide.jpg",
    photoAlt: "The sound room at The Hideout Liverpool, set up for a private group",
    intro: [
      "When did you last spend time with your closest friends without a bar, a screen or a babysitter clock running? The Hideout gives small groups a private space in Crosby to slow down and actually be together.",
      "Uni friends back in town for the weekend. Sisters, mums and daughters. A milestone birthday spent with your three favourite people instead of a big night out. A group of mates who'd never book a spa but will happily do sauna, cold plunge and breathwork together.",
      "Bring up to four for a private sound bath, breathwork or the Full Hideout Experience, or up to six for private sauna hire. It's booked just for your group, so there are no strangers, and everything finishes with refreshments and time to talk."
    ],
    offersHeading: "Group options & prices",
    offers: [FULL_HIDEOUT, SOUND_GROUP, PRIVATE_SAUNA, BREATHWORK],
    whyHeading: "Made for small groups",
    why: [
      { title: "Reunions", copy: "Old friends, a once-a-year catch-up, a weekend back in Liverpool." },
      { title: "Family time", copy: "Sisters, siblings, mums and daughters, a calm celebration together." },
      { title: "Milestones", copy: "A 30th, 40th or 50th spent with the people closest to you." },
      { title: "A men's reset", copy: "Sauna, cold plunge and breathwork with your mates. No spa required." }
    ],
    faqs: [
      {
        q: "How many people can come in a group?",
        a: "Private Sauna Hire is up to six. The Full Hideout Experience, Private 4 Person Sound Bath and Private Breathwork are up to four. For anything larger, get in touch and we'll see what we can arrange."
      },
      {
        q: "We've never done anything like this. Will it feel awkward?",
        a: "Not at all. Everything is guided and nothing is compulsory. Most groups say the best part is the time to talk over refreshments afterwards."
      },
      {
        q: "Is it suitable for a group of men?",
        a: "Yes. Sauna, cold plunge and breathwork are a popular way for friends to switch off together, and the cold is always optional."
      },
      {
        q: "Can you collect our group from a hotel or Airbnb?",
        a: "Yes, within 8 miles. Concierge bookings cover up to four guests from one agreed pickup point and one return drop-off."
      },
      {
        q: "Can you run a session for our workplace or team?",
        a: "Yes. Sound immersion and bespoke wellness days can be brought to workplaces, studios and venues across Liverpool and Merseyside."
      }
    ],
    related: ["experience-gifts-liverpool", "private-sauna-liverpool", "sound-bath-liverpool"]
  },

  // 7 ------------------------------------------------------------------------
  {
    slug: "couples-wellness-liverpool",
    title: "Couples Experience Liverpool — Anniversary & Date Ideas",
    description:
      "A private couples experience in Liverpool for anniversaries, date nights and weekend breaks. Sauna, cold plunge and sound for two, from £80.",
    short: "Couples Experiences",
    serviceType: "Couples wellness experience",
    eyebrow: "For couples",
    h1: "Something special, just for the two of you.",
    lede: "Anniversaries, date nights, weekend breaks, or simply finding each other again after a busy few months.",
    photo: "/photos/sound-room-green.jpg",
    photoAlt: "Two vibroacoustic mats ready for a couples sound journey at The Hideout Liverpool",
    intro: [
      "Most date ideas in Liverpool involve a table for two and a busy room. The Hideout is the opposite: a private space in Crosby booked just for you both, with your phones away and nowhere else to be.",
      "Mark an anniversary with the Full Hideout Experience, two hours of sauna, cold plunge, breathwork, immersive sound and stillness, finishing with refreshments. Try the Couples Immersive Sound Journey as a date night that isn't dinner. Or hire the sauna and cold plunge privately and take it at your own pace.",
      "It's also a quiet way to reconnect. New parents, shift workers, couples who've been passing like ships: an hour or two side by side, without distractions, goes a long way. Visiting Liverpool for the weekend? We'll collect you from your hotel and take you back."
    ],
    offersHeading: "Couples options & prices",
    offers: [FULL_HIDEOUT, SOUND_COUPLES, PRIVATE_SAUNA],
    whyHeading: "Ways couples use The Hideout",
    why: [
      { title: "Anniversaries", copy: "Two hours where it's just you again." },
      { title: "Date night", copy: "A date you'll actually remember, with no restaurant in sight." },
      { title: "Reconnecting", copy: "Phones away, side by side, after a busy stretch." },
      { title: "Weekend breaks", copy: "Collected from your hotel or Airbnb within 8 miles." }
    ],
    faqs: [
      {
        q: "What's the best couples experience at The Hideout?",
        a: "The Full Hideout Experience (£120 for two, 2 hours) is our signature: sauna, cold plunge, breathwork, immersive sound and refreshments. For a shorter visit, the Couples Immersive Sound Journey is £80 for an hour."
      },
      {
        q: "Is it a good anniversary idea in Liverpool?",
        a: "It's one of the most popular reasons couples book. The space is completely private, so it feels like an occasion rather than a busy spa day."
      },
      {
        q: "Is it a spa?",
        a: "Not quite. It's a small, private wellness space with no crowds, treatment rooms or busy changing areas. Private experiences are never shared with strangers."
      },
      {
        q: "Can I buy it as a gift for my partner?",
        a: "Yes. Any Hideout experience can be given as a gift. See Gift The Hideout."
      },
      COLLECTION_FAQ
    ],
    related: ["experience-gifts-liverpool", "sound-bath-liverpool", "private-sauna-liverpool"]
  },

  // 8 ------------------------------------------------------------------------
  {
    slug: "experience-gifts-liverpool",
    title: "Experience Gifts Liverpool — Sauna & Sound Bath Vouchers",
    description:
      "Give an experience, not more stuff. Gift vouchers for private sauna, sound baths and the Full Hideout Experience in Liverpool. For birthdays and thank-yous.",
    short: "Experience Gifts",
    serviceType: "Wellness experience gift voucher",
    eyebrow: "Experience gifts in Liverpool",
    h1: "A gift that says “I've noticed.”",
    lede: "For the friend who's had a hard year, the partner who never stops, or the person who has everything.",
    photo: "/photos/sound-bath-candles.jpg",
    photoAlt: "Candles and singing bowls at The Hideout Liverpool, ready for a sound bath",
    ctaLabel: "Request a gift voucher",
    ctaHref: GIFT_HREF,
    intro: [
      "The best gifts aren't things. They're time, attention and a moment to breathe. A Hideout gift voucher gives someone a private experience in Crosby: heat, cold, sound and stillness, on a date that suits them.",
      "Give it to the friend who's burnt out or going through something, as a milestone birthday gift, or as a thank-you to someone who's been there for you. Or buy a voucher for two and go together: a gift and a catch-up in one.",
      "Choose any experience, from a one-to-one sound immersion to the two-hour Full Hideout. Request your voucher and we'll arrange it personally. The person you're treating simply gets in touch to book their date."
    ],
    offersHeading: "Popular gifts",
    offers: [FULL_HIDEOUT, SOUND_121, SOUND_COUPLES, PRIVATE_SAUNA],
    whyHeading: "Who it's for",
    why: [
      { title: "“You need this”", copy: "For the friend who's burnt out, grieving or just had a rough year." },
      { title: "Milestone birthdays", copy: "A 30th, 40th or 50th they'll remember." },
      { title: "Thank-you gifts", copy: "For a friend, carer or colleague who's gone above and beyond." },
      { title: "Come with me", copy: "A voucher for two, so you can go together." }
    ],
    faqs: [
      {
        q: "How do Hideout gift vouchers work?",
        a: "Choose the experience you'd like to give and request a voucher. We arrange it personally, and the person you're treating gets in touch to choose their date."
      },
      {
        q: "Which experience makes the best gift?",
        a: "The Full Hideout Experience is the most popular gift: two hours of sauna, cold plunge, breathwork and immersive sound, from £120 for two. For one person, the Private Sound Immersion (1-2-1) at £60 is a lovely introduction."
      },
      {
        q: "Can I buy a voucher for two so we can go together?",
        a: "Yes. The Full Hideout Experience, Couples Immersive Sound Journey and Private Sauna Hire are all designed to be shared."
      },
      COLLECTION_FAQ,
      ADDRESS_FAQ
    ],
    related: ["couples-wellness-liverpool", "group-bookings-liverpool", "sound-bath-liverpool"]
  }
];

export const getLanding = (slug: string) => {
  const page = landingPages.find((p) => p.slug === slug);
  if (!page) throw new Error(`Unknown landing page: ${slug}`);
  return page;
};
