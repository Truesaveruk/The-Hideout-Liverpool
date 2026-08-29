import type { Metadata } from "next";
import Link from "next/link";
import { bookHref, experiences, saunaSessions, soundSessions } from "@/lib/experiences";
import { conciergePricing } from "@/lib/site";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Prices — Private Hideout Experiences & Concierge Bookings",
  description:
    "Simple, all-in pricing for private Hideout experiences in Crosby, Liverpool. Concierge bookings from £150 including collection, your experience and refreshments."
};

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
          Sauna sessions
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {saunaSessions.map((s) => (
            <div key={s.slug} className="reveal flex flex-col rounded-3xl border border-bone/10 bg-smoke p-8">
              <p className="font-display text-2xl">{s.name}</p>
              <p className="display mt-3 text-5xl">
                {s.price}
                <span className="ml-3 text-base text-steam">{s.priceNote}</span>
              </p>
              <p className="mt-4 flex-1 text-sm text-steam leading-relaxed">{s.summary}</p>
              <Link href={bookHref(s)} className="btn-primary mt-6 w-fit">
                Book
              </Link>
            </div>
          ))}
        </div>

        <h2 className="display reveal mt-16 text-3xl md:text-4xl">
          Sound sessions
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {soundSessions.map((s) => (
            <div key={s.slug} className="reveal flex flex-col rounded-3xl border border-bone/10 bg-smoke p-8">
              <p className="font-display text-2xl">{s.name}</p>
              <p className="display mt-3 text-5xl">
                {s.price}
                <span className="ml-3 text-base text-steam">{s.priceNote}</span>
              </p>
              <p className="mt-4 flex-1 text-sm text-steam leading-relaxed">{s.summary}</p>
              <Link href={bookHref(s)} className="btn-primary mt-6 w-fit">
                Book
              </Link>
            </div>
          ))}
        </div>

        <h2 className="display reveal mt-16 text-3xl md:text-4xl">
          The 90-minute experiences
        </h2>
        <p className="reveal mt-3 max-w-md text-steam">
          One price. Choose your journey. Every experience is fully private,
          hosted, and finishes with refreshments.
        </p>
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
                <p className="text-right">
                  <span className="font-display text-2xl text-brass">{exp.price}</span>
                  <span className="block text-xs text-steam">{exp.priceNote}</span>
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
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {conciergePricing.map((tier) => (
              <div
                key={tier.id}
                className="reveal rounded-3xl border border-bone/10 bg-ember p-6"
              >
                <p className="eyebrow">{tier.guests}</p>
                <p className="display mt-3 text-5xl">
                  {tier.price}
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
            <a target="_blank" rel="noopener" href={site.bookingUrl} className="btn-primary">
              Book with collection
            </a>
            <Link href="/visiting-liverpool" className="btn-quiet">
              How collection works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
