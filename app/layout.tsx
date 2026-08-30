import type { Metadata } from "next";
import { Fraunces, Albert_Sans } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileCTA from "@/components/MobileCTA";
import { site } from "@/lib/site";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["SOFT", "opsz"]
});
const body = Albert_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "The Hideout Liverpool — Private Sauna, Cold Plunge & Sound Experiences in Crosby",
    template: "%s | The Hideout Liverpool"
  },
  description:
    "A private wellness space in Crosby, Liverpool. Traditional sauna, cold plunge, breathwork and immersive sound — booked privately, with collection available for visitors staying in Liverpool.",
  keywords: [
    "private sauna Liverpool",
    "sauna Liverpool",
    "cold plunge Liverpool",
    "private wellness Liverpool",
    "wellness experience Liverpool",
    "things to do in Liverpool for couples",
    "sound bath Liverpool",
    "breathwork Liverpool",
    "sauna Crosby",
    "wellness Crosby"
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "The Hideout Liverpool — This isn't a spa. It's your Hideout.",
    description:
      "Private sauna, cold plunge, breathwork and immersive sound experiences in Crosby, Liverpool. Collection available for Liverpool visitors.",
    locale: "en_GB"
  },
  robots: { index: true, follow: true }
};

// Local structured data. Street address intentionally omitted until a public
// address is approved for publication — never expose a private residence.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": site.url,
  name: site.name,
  alternateName: "The Hideout",
  slogan: site.strapline,
  description:
    "A small, private wellness space in Crosby, Liverpool offering private sauna, cold plunge, breathwork and immersive sound experiences, plus a concierge collection service for visitors to Liverpool.",
  email: site.email,
  url: site.url,
  image: `${site.url}/photos/sound-room.jpg`,
  priceRange: "££",
  currenciesAccepted: "GBP",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Crosby",
    addressRegion: "Merseyside",
    addressCountry: "GB"
  },
  areaServed: ["Liverpool", "Crosby", "Waterloo", "Formby", "Blundellsands", "Merseyside"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "20:00"
    }
  ],
  potentialAction: {
    "@type": "ReserveAction",
    target: site.bookingUrl,
    name: "Book The Hideout"
  },
  makesOffer: [
    { "@type": "Offer", name: "The Full Hideout Experience", priceCurrency: "GBP", price: "120" },
    { "@type": "Offer", name: "Private Sauna Hire", priceCurrency: "GBP", price: "60" },
    { "@type": "Offer", name: "Private Sound Immersion (1-2-1)", priceCurrency: "GBP", price: "60" },
    { "@type": "Offer", name: "Couples Immersive Sound Journey", priceCurrency: "GBP", price: "80" },
    { "@type": "Offer", name: "Private 4 Person Sound Bath", priceCurrency: "GBP", price: "100" },
    { "@type": "Offer", name: "Private Breathwork", priceCurrency: "GBP", price: "100" },
    { "@type": "Offer", name: "Open Sauna Session", priceCurrency: "GBP", price: "15" },
    { "@type": "Offer", name: "Concierge Experience with Collection", priceCurrency: "GBP", price: "100" }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main className="pb-24 md:pb-0">{children}</main>
        <SiteFooter />
        <MobileCTA />
      </body>
    </html>
  );
}
