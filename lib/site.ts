// ---------------------------------------------------------------------------
// SITE SETTINGS — edit everything about the business in this one file.
// Do not publish a private residential address. Add a public address only
// when one has been approved for publication.
// ---------------------------------------------------------------------------

export const site = {
  name: "The Hideout Liverpool",
  strapline: "This isn't a spa. It's your Hideout.",
  area: "Crosby, Liverpool",
  // NAP — keep identical everywhere (Google Business Profile, Bing, TripAdvisor)
  phone: "", // e.g. "0151 000 0000" — add when confirmed
  email: "hello@thehideoutliverpool.co.uk", // replace with the live inbox
  bookingEmail: "bookings@thehideoutliverpool.co.uk", // replace with the live inbox
  url: "https://thehideoutliverpool.co.uk", // replace with the live domain
  instagram: "", // e.g. "https://instagram.com/thehideoutliverpool"
  collectionRadiusMiles: 8,
  // Live Fresha booking page — all BOOK buttons point here.
  // If your Fresha link ever changes, update this one line.
  bookingUrl: "https://www.fresha.com/a/the-hideout-liverpool-crosby-liverpool-pwv9paxk"
};

export const conciergePricing = [
  {
    id: "solo",
    guests: "1 guest",
    price: "£100",
    per: "total",
    includes: [
      "90-minute private Hideout experience",
      "Refreshments",
      "Collection",
      "Return journey"
    ]
  },
  {
    id: "two",
    guests: "2 guests",
    price: "£150",
    per: "total",
    highlight: "£75 each",
    includes: [
      "90-minute private Hideout experience",
      "Refreshments",
      "Collection",
      "Return journey"
    ]
  },
  {
    id: "three",
    guests: "3 guests",
    price: "£200",
    per: "total",
    includes: [
      "90-minute private Hideout experience",
      "Refreshments",
      "Collection",
      "Return journey"
    ]
  },
  {
    id: "four",
    guests: "4 guests",
    price: "£220",
    per: "total",
    highlight: "£55 each when four attend",
    includes: [
      "90-minute private Hideout experience",
      "Refreshments",
      "Collection",
      "Return journey"
    ]
  }
];
