import type { Metadata } from "next";
import { bookHref, saunaSessions, sharedSessions, soundSessions, experiences } from "@/lib/experiences";
import { conciergePricing } from "@/lib/site";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Prices — Private Hideout Experiences & Concierge Bookings",
  description:
    "Full pricing for The Hideout Liverpool — private experiences, sauna hire, sound baths, breathwork, shared sessions and concierge collection. Booked securely via Fresha."
};

function Tag({ status }: { status?: "PRIVATE" | "SHARED" }) {
  if (!status) return null;
  const isPrivate = status === "PRIVATE";
  return (
    <span
      className={`w-fit rounded-full border px-3 py-1 text-[0.65rem] uppercase tracking-[0.16em] ${
        isPrivate ? "border-brass/50 text-brass" : "border-bone/30 text-steam"
      }`}
    >
      {status}
    </span>
  );
}

function Row({ name, note, price, status }: { name: string; note?: string; price?: string; status?: "PRIVATE" | "SHARED" }) {
  return (
    <div className="reveal flex flex-col justify-between gap-4 rounded-2xl border border-bone/10 bg-smoke p-6 sm:flex-row sm:items-center">
      <div className="space-y-2">
        <Tag status={status} />
        <p className="font-display text-xl md:text-2xl">{name}</p>
        {note && <p className="text-sm text-steam">{note}</p>}
      </div>
      <div className="flex items-center gap-5">
        <span className="font-display text-2xl text-brass whitespace-nowrap">{price}</span>
        <a href={site.bookingUrl} target="_blank" rel="noopener" className="btn-ghost !px-5 !py-2.5">
          Book
        </a>
      </div>
    </div>
  );
}

export default function PricesPage() {
  return (
    <>
      <section className="mx-auto max-w-site px-5 pb-14 pt-20 md:px-8 md:pt-28">
        <p className="eyebrow reveal">Prices</p>
        <h1 className="display reveal mt-3 max-w-2xl text-5xl md:text-7xl">
          Simple, all-in pricing.
        </h1>
        <p className="lede reveal mt-6 max-w-xl">
          Choose from private Hideout experiences or a small number of shared
          sessions. Every service is booked and paid securely through our booking
          system. Bookings can be cancelled or rescheduled with at least 48 hours&apos;
          notice.
        </p>
      </section>

      <section className="mx-auto max-w-site px-5 pb-20 md:px-8">
        {/* THE FULL HIDEOUT EXPERIENCE */}
        <h2 className="display reveal text-3xl md:text-4xl">The Full Hideout Experience</h2>
        <p className="reveal mt-2 text-steam">Private · 2 hours · make your own way to Crosby.</p>
        <div className="mt-6 grid gap-4">
          <Row name="The Full Hideout Experience — up to 2" note="2 hours · up to 2 guests" price="£120" status="PRIVATE" />
          <Row name="The Full Hideout Experience — up to 4" note="2 hours · up to 4 guests" price="£180" status="PRIVATE" />
        </div>

        {/* SAUNA */}
        <h2 className="display reveal mt-16 text-3xl md:text-4xl">Sauna</h2>
        <div className="mt-6 grid gap-4">
          <Row name="Private Sauna Hire" note="1 hour · up to 6 guests" price="£60" status="PRIVATE" />
        </div>

        {/* SOUND BATH */}
        <h2 className="display reveal mt-16 text-3xl md:text-4xl">Sound Bath</h2>
        <div className="mt-6 grid gap-4">
          {soundSessions.map((s) => (
            <Row key={s.slug} name={s.name} note={s.priceNote} price={s.price} status={s.status} />
          ))}
        </div>

        {/* BREATHWORK */}
        <h2 className="display reveal mt-16 text-3xl md:text-4xl">Breathwork</h2>
        <div className="mt-6 grid gap-4">
          <Row name="Private Breathwork" note="1 hour · up to 4 · led by a trained facilitator" price="£100" status="PRIVATE" />
        </div>

        {/* OPEN GROUP SESSIONS */}
        <h2 className="display reveal mt-16 text-3xl md:text-4xl">Open Group Sessions</h2>
        <p className="reveal mt-2 text-steam">
          Shared with a small, capped group — the easy way in when you can&apos;t get a group together. Available at set times.
        </p>
        <div className="mt-6 grid gap-4">
          {sharedSessions.map((s) => (
            <Row key={s.slug} name={s.name} note={s.priceNote} price={s.price} status={s.status} />
          ))}
        </div>
      </section>

      {/* CONCIERGE */}
      <section className="border-t border-bone/10 bg-smoke">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8">
          <h2 className="display reveal text-3xl md:text-4xl">Concierge — With Collection</h2>
          <p className="reveal mt-3 max-w-lg text-steam">
            For visitors staying in Liverpool. A 2-hour private Hideout experience with
            collection from your hotel or Airbnb and return afterwards, towels and refreshments
            included. Collection within 8 miles.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {conciergePricing.map((tier) => (
              <div key={tier.id} className="reveal rounded-3xl border border-bone/10 bg-ember p-6">
                <p className="eyebrow">{tier.guests}</p>
                <p className="display mt-3 text-5xl">{tier.price}</p>
                {tier.highlight && (
                  <p className="mt-3 w-fit rounded-full border border-brass/50 px-3 py-1 text-xs uppercase tracking-[0.14em] text-brass">
                    {tier.highlight}
                  </p>
                )}
                <ul className="mt-6 space-y-2 text-sm text-steam">
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
            <a href="/visiting-liverpool" className="btn-quiet">How collection works</a>
          </div>
        </div>
      </section>
    </>
  );
}
