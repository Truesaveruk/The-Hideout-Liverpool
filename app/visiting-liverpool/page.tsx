import type { Metadata } from "next";
import Link from "next/link";
import ImagePanel from "@/components/ImagePanel";
import PartnerForm from "@/components/PartnerForm";
import { conciergePricing, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visiting Liverpool? Private Wellness Experience with Collection",
  description:
    "Discover Liverpool's hidden wellness experience. Staying in a hotel, Airbnb or apartment? The Hideout Concierge collects you, delivers a private sauna, cold plunge and sound experience in Crosby, and returns you afterwards."
};

const steps = [
  { n: "01", title: "Choose", copy: "Choose your Hideout experience." },
  { n: "02", title: "Book", copy: "Select your preferred date and time." },
  { n: "03", title: "We collect you", copy: "We'll collect your group from one agreed location." },
  { n: "04", title: "Find your Hideout", copy: "Enjoy your private Hideout experience." },
  { n: "05", title: "We take you back", copy: "After your experience and refreshments, we'll return you to your agreed drop-off point." }
];

export default function VisitingPage() {
  return (
    <>
      {/* HERO ---------------------------------------------------------- */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          {/* Replace with Crosby Beach / Another Place + Hideout imagery */}
          <div className="img-panel drift h-full w-full !rounded-none !border-0 opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-ember via-ember/70 to-ember/40" />
        </div>
        <div className="relative mx-auto flex min-h-[80svh] max-w-site flex-col justify-end px-5 pb-16 pt-28 md:px-8">
          <p className="eyebrow reveal">The Hideout Concierge</p>
          <h1 className="display reveal mt-4 max-w-3xl text-4xl md:text-6xl">
            Discover Liverpool&apos;s hidden wellness experience.
          </h1>
          <p className="reveal mt-6 text-lg text-steam">Staying in Liverpool?</p>
          <p className="display reveal mt-1 text-4xl text-brass md:text-6xl">
            We&apos;ll come and get you.
          </p>
          <div className="reveal mt-8">
            <a target="_blank" rel="noopener" href={site.bookingUrl} className="btn-primary">
              Book with collection
            </a>
          </div>
        </div>
      </section>

      {/* INTRO --------------------------------------------------------- */}
      <section className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-4 text-steam leading-relaxed">
            <p>
              Liverpool has incredible music, football, restaurants, nightlife
              and culture. But sometimes you need to escape the city for a
              while.
            </p>
            <p>
              The Hideout is a private wellness space tucked away in Crosby,
              offering visitors something a little different.
            </p>
            <p className="text-bone">
              Choose your experience. Tell us where you&apos;re staying.
              We&apos;ll collect you. Bring you to The Hideout. And return you
              afterwards.
            </p>
            <p>
              No unfamiliar public transport. No taxi to organise. No
              complicated planning. Just choose your experience and we&apos;ll
              take care of the rest.
            </p>
          </div>
          <ImagePanel label="Another Place iron men, Crosby Beach" ratio="aspect-[4/3]" />
        </div>
      </section>

      {/* HOW IT WORKS -------------------------------------------------- */}
      <section className="border-y border-bone/10 bg-smoke">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28">
          <p className="eyebrow reveal">How the Concierge works</p>
          <h2 className="display reveal mt-3 text-4xl md:text-5xl">
            Five steps. Zero planning.
          </h2>
          <ol className="relative mt-12 max-w-2xl">
            <div aria-hidden className="thread absolute left-[4px] top-3 bottom-3" />
            {steps.map((s) => (
              <li key={s.n} className="reveal relative flex gap-6 py-5">
                <span aria-hidden className="thread-dot relative z-10 mt-2" data-phase="sound" />
                <div>
                  <p className="eyebrow">{s.n}</p>
                  <h3 className="display mt-1 text-2xl md:text-3xl">{s.title}</h3>
                  <p className="mt-1 text-steam">{s.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* COLLECTION AREA ----------------------------------------------- */}
      <section className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28">
        <div className="rounded-3xl border border-brass/30 bg-smoke p-8 md:p-12">
          <p className="eyebrow reveal">Collection + return included</p>
          <h2 className="display reveal mt-3 text-3xl md:text-5xl">
            Within {site.collectionRadiusMiles} miles of The Hideout.
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="space-y-3 text-steam leading-relaxed">
              <p>
                Concierge bookings include{" "}
                <strong className="text-bone">one pickup point</strong> and{" "}
                <strong className="text-bone">one return drop-off point</strong>
                , both within {site.collectionRadiusMiles} miles of The Hideout
                — which comfortably covers Liverpool city centre and the
                waterfront.
              </p>
              <p>
                Everyone in the booking meets at the same collection point.
              </p>
              <p className="text-sm">
                Collection outside the {site.collectionRadiusMiles}-mile area
                may be available by prior arrangement and may incur an
                additional charge — contact us before booking and we&apos;ll
                see what we can arrange.
              </p>
            </div>
            <ImagePanel label="Liverpool waterfront at dusk" ratio="aspect-[16/10]" />
          </div>
        </div>
      </section>

      {/* PRICING ------------------------------------------------------- */}
      <section className="border-y border-bone/10 bg-smoke">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28">
          <p className="eyebrow reveal">Concierge pricing</p>
          <h2 className="display reveal mt-3 text-4xl md:text-5xl">
            One price. Everything included.
          </h2>
          <p className="reveal mt-4 max-w-md text-steam">
            For 90-minute Concierge experiences:
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {conciergePricing.map((tier) => (
              <div
                key={tier.id}
                className="reveal flex flex-col rounded-3xl border border-bone/10 bg-ember p-6"
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
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener"
                  className="btn-primary mt-8 w-fit"
                >
                  Book with collection
                </a>
              </div>
            ))}
          </div>

          <div className="reveal mt-16 rounded-3xl border border-bone/10 p-8 text-center md:p-12">
            <h3 className="display text-3xl md:text-5xl">
              Ready to find your Hideout?
            </h3>
            <p className="mt-3 text-steam">
              Choose your experience and we&apos;ll take care of the rest.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/experiences" className="btn-ghost">
                View experiences
              </Link>
              <a target="_blank" rel="noopener" href={site.bookingUrl} className="btn-primary">
                Book with collection
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CROSBY -------------------------------------------------------- */}
      <section className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <ImagePanel label="Crosby coastline, wide shot" ratio="aspect-[4/3]" />
          <div>
            <h2 className="display reveal text-5xl md:text-6xl">
              Escape the city.
            </h2>
            <p className="display reveal mt-3 text-2xl text-brass">
              And discover another side of Liverpool.
            </p>
            <div className="reveal mt-6 max-w-md space-y-4 text-steam leading-relaxed">
              <p>
                The Hideout sits in Crosby, close to the Liverpool coastline and
                Antony Gormley&apos;s Another Place — a hundred iron figures
                looking out to sea.
              </p>
              <p>
                Leaving the city centre isn&apos;t a detour. It&apos;s part of
                the experience.
              </p>
              <p className="font-display text-xl text-bone">
                From Liverpool city centre to your own private Hideout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS ------------------------------------------------------ */}
      <section id="partners" className="border-t border-bone/10 bg-smoke">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28">
          <p className="eyebrow reveal">Accommodation partners</p>
          <h2 className="display reveal mt-3 max-w-2xl text-4xl md:text-5xl">
            Do you look after guests in Liverpool?
          </h2>
          <p className="lede reveal mt-5 max-w-lg">
            Give your guests something they won&apos;t find in their hotel room.
          </p>
          <p className="reveal mt-4 max-w-lg text-steam">
            The Hideout works with hotels, boutique hotels, Airbnb hosts,
            serviced apartment operators, holiday-let managers and short-stay
            accommodation providers. You don&apos;t need to arrange anything.
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center gap-3 font-display text-lg md:text-xl">
            {["You recommend", "They book", "We collect", "We deliver the experience", "We bring them back"].map(
              (step, i, arr) => (
                <span key={step} className="flex items-center gap-3">
                  <span>{step}.</span>
                  {i < arr.length - 1 && (
                    <span aria-hidden className="text-brass">→</span>
                  )}
                </span>
              )
            )}
          </div>

          <div className="mt-14 max-w-3xl rounded-3xl border border-bone/10 bg-ember p-6 md:p-10">
            <h3 className="display text-2xl md:text-3xl">
              Become a Hideout partner
            </h3>
            <div className="mt-6">
              <PartnerForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
