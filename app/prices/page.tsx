import type { Metadata } from "next";
import Link from "next/link";
import { experiences } from "@/lib/experiences";
import { conciergePricing } from "@/lib/site";

export const metadata: Metadata = {
  title: "Prices — Private Hideout Experiences & Concierge Bookings",
  description:
    "Simple, all-in pricing for private Hideout experiences in Crosby, Liverpool. Concierge bookings from £150 including collection, your experience and refreshments."
};

// LOCAL PRICING: add confirmed prices here when set, e.g. { "sauna-cold": "£70" }.
// Until then the page shows an honest "confirmed when you book" state rather
// than invented numbers.
const localPrices: Record<string, string> = {};

export default function PricesPage() {
  return (
    <>
      <section className="mx-auto max-w-site px-5 pb-16 pt-20 md:px-8 md:pt-28">
        <p className="eyebrow reveal">Prices</p>
        <h1 className="display reveal mt-3 max-w-2xl text-5xl md:text-7xl">
          Simple, all-in pricing.
        </h1>
        <p className="lede reveal mt-6 max-w-lg">
          Every experience is private and includes refreshments. No hidden
          extras, no upsells on the day.
        </p>
      </section>

      {/* LOCAL --------------------------------------------------------- */}
      <section className="mx-auto max-w-site px-5 pb-20 md:px-8">
        <h2 className="display reveal text-3xl md:text-4xl">
          Making your own way here
        </h2>
        <div className="mt-8 grid gap-4">
          {experiences.map((exp) => (
            <div
              key={exp.slug}
              className="reveal flex flex-col justify-between gap-4 rounded-2xl border border-bone/10 bg-smoke p-6 sm:flex-row sm:items-center"
            >
              <div>
                <p className="font-display text-xl md:text-2xl">{exp.name}</p>
                <p className="text-sm text-steam">{exp.tagline}</p>
              </div>
              <div className="flex items-center gap-5">
                <p className="text-sm text-steam">
                  {localPrices[exp.slug] ?? "Price confirmed when you book"}
                </p>
                <Link
                  href={`/book?experience=${exp.slug}`}
                  className="btn-ghost !px-5 !py-2.5"
                >
                  Book
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONCIERGE ----------------------------------------------------- */}
      <section className="border-t border-bone/10 bg-smoke">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8">
          <h2 className="display reveal text-3xl md:text-4xl">
            Visiting Liverpool — with collection
          </h2>
          <p className="reveal mt-3 max-w-md text-steam">
            90-minute Concierge experiences, everything included:
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {conciergePricing.map((tier) => (
              <div
                key={tier.id}
                className="reveal rounded-3xl border border-bone/10 bg-ember p-8"
              >
                <p className="eyebrow">{tier.guests}</p>
                <p className="display mt-3 text-6xl">
                  {tier.price}
                  <span className="ml-2 text-lg text-steam">{tier.per}</span>
                </p>
                {tier.highlight && (
                  <p className="mt-3 w-fit rounded-full border border-brass/50 px-3 py-1 text-xs uppercase tracking-[0.14em] text-brass">
                    {tier.highlight}
                  </p>
                )}
                <ul className="mt-6 space-y-2 text-steam">
                  {tier.includes.map((i) => (
                    <li key={i} className="flex gap-3">
                      <span aria-hidden className="text-brass">—</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="reveal mt-10 flex flex-wrap gap-4">
            <Link href="/book?mode=concierge" className="btn-primary">
              Book with collection
            </Link>
            <Link href="/visiting-liverpool" className="btn-quiet">
              How collection works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
