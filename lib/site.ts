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
  collectionRadiusMiles: 8
};

export const conciergePricing = [
  {
    id: "duo",
    guests: "1–2 guests",
    price: "£150",
    per: "total",
    includes: [
      "90-minute private Hideout experience",
      "Refreshments",
      "Collection",
      "Return journey"
    ]
  },
  {
    id: "group",
    guests: "Up to 4 guests",
    price: "£250",
    per: "total",
    highlight: "£62.50 each when four people attend",
    includes: [
      "90-minute private Hideout experience",
      "Refreshments",
      "Collection",
      "Return journey"
    ]
  }
];
