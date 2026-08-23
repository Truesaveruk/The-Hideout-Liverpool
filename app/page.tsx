import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { bookHref, experiences, saunaSessions } from "@/lib/experiences";
import ExperienceCard from "@/components/ExperienceCard";
import ImagePanel from "@/components/ImagePanel";
import JourneyThread from "@/components/JourneyThread";

export const metadata: Metadata = {
  title:
    "Private Sauna, Cold Plunge & Sound Experiences in Crosby | The Hideout Liverpool",
  description:
    "Find your Hideout. A private wellness space in Crosby, Liverpool — sauna, cold plunge, breathwork and immersive sound, booked privately. No crowds. No strangers. Your space."
};

export default function HomePage() {
  return (
    <>
      {/* HERO ---------------------------------------------------------- */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <Image
            src="/photos/sound-room.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="drift object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ember via-ember/70 to-ember/35" />
        </div>
        <div className="relative mx-auto flex min-h-[88svh] max-w-site flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24">
          <p className="eyebrow reveal">Crosby · Liverpool</p>
          <h1 className="display reveal mt-4 text-6xl md:text-8xl">
            Find your
            <br />
            Hideout.
          </h1>
          <p className="lede reveal mt-6 max-w-md">
            A private wellness space in Crosby, Liverpool.
            <br />
            Heat. Cold. Breath. Sound. Stillness.
          </p>
          <p className="reveal mt-4 max-w-md text-steam">
            Come alone. Come together. Switch off for a while.
          </p>
          <div className="reveal mt-8 flex flex-wrap items-center gap-4">
            <Link href="/book" className="btn-primary">
              Book The Hideout
            </Link>
            <Link href="/experiences" className="btn-ghost">
              Explore experiences
            </Link>
          </div>
          <Link href="/visiting-liverpool" className="btn-quiet reveal mt-6 w-fit">
            Visiting Liverpool?
          </Link>
        </div>
      </section>

      {/* PRIVATE STRIP -------------------------------------------------- */}
      <div className="border-y border-bone/10 bg-smoke py-4 text-center text-xs uppercase tracking-[0.22em] text-brass md:text-sm">
        Private • Personal • No crowds • Your space
      </div>

      {/* THIS ISN'T A SPA ---------------------------------------------- */}
      <section className="mx-auto max-w-site px-5 py-24 md:px-8 md:py-36">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="display reveal text-5xl md:text-7xl">
              This isn&apos;t
              <br />a spa.
            </h2>
            <p className="display reveal mt-4 text-3xl text-brass md:text-4xl">
              It&apos;s your Hideout.
            </p>
            <div className="reveal mt-8 max-w-md space-y-4 text-steam leading-relaxed">
              <p>
                The Hideout is something a little different. A private wellness
                space tucked away in Crosby where you can shut the outside world
                out for a while.
              </p>
              <p>
                No crowded sauna. No busy changing rooms. No rushing between
                treatments. No strangers sharing your experience.
              </p>
              <p>
                Just your own space to slow down, reset and explore heat, cold,
                breath and sound.
              </p>
              <p className="text-bone">
                Come alone. Bring your partner. Bring a few friends.
                <br />
                For a little while, The Hideout is yours.
              </p>
            </div>
            <Link href="/experiences" className="btn-ghost reveal mt-8">
              Discover the experiences
            </Link>
          </div>
          <div className="grid gap-4">
            <ImagePanel label="the Hideout entrance, warm light" />
            <div className="grid grid-cols-2 gap-4">
              <ImagePanel label="steam rising" ratio="aspect-square" />
              <ImagePanel label="tea by the fire" ratio="aspect-square" />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCES --------------------------------------------------- */}
      <section className="mx-auto max-w-site px-5 pb-24 md:px-8 md:pb-36">
        <p className="eyebrow reveal">The experiences</p>
        <h2 className="display reveal mt-3 max-w-xl text-4xl md:text-6xl">
          Five ways to disappear for a while.
        </h2>
        <div className="mt-12 space-y-6">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.slug} exp={exp} />
          ))}
        </div>
      </section>

      {/* SAUNA SESSIONS ------------------------------------------------ */}
      <section className="mx-auto max-w-site px-5 pb-24 md:px-8 md:pb-36">
        <p className="eyebrow reveal">Just want the sauna?</p>
        <h2 className="display reveal mt-3 max-w-xl text-4xl md:text-6xl">
          Sauna sessions, by the hour.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {saunaSessions.map((s) => (
            <div key={s.slug} className="reveal flex flex-col rounded-3xl border border-bone/10 bg-smoke p-8">
              <h3 className="font-display text-2xl md:text-3xl">{s.name}</h3>
              <p className="mt-1 font-display italic text-brass/90">{s.tagline}</p>
              <p className="display mt-5 text-5xl">
                {s.price}
                <span className="ml-3 text-base text-steam">{s.priceNote}</span>
              </p>
              <p className="mt-4 flex-1 text-steam leading-relaxed">{s.summary}</p>
              <Link href={bookHref(s)} className="btn-primary mt-6 w-fit">
                {s.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* THE JOURNEY (signature) --------------------------------------- */}
      <section className="border-y border-bone/10 bg-smoke">
        <div className="mx-auto max-w-site px-5 py-24 md:px-8 md:py-32">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="eyebrow reveal">The Full Hideout</p>
              <h2 className="display reveal mt-3 text-4xl md:text-6xl">
                One flowing journey.
              </h2>
              <p className="lede reveal mt-6 max-w-md">
                Not separate treatments. One experience that moves from heat,
                through cold and breath, into sound you can feel — and finally,
                stillness.
              </p>
              <Link href="/book?experience=full-hideout" className="btn-primary reveal mt-8">
                Book the Full Hideout
              </Link>
            </div>
            <JourneyThread />
          </div>
        </div>
      </section>

      {/* COUPLES ------------------------------------------------------- */}
      <section className="mx-auto max-w-site px-5 py-24 md:px-8 md:py-36">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <ImagePanel label="two chairs, two teas, low light" ratio="aspect-[5/4]" />
          <div>
            <p className="eyebrow reveal">For couples</p>
            <h2 className="display reveal mt-3 text-5xl md:text-6xl">
              Switch off together.
            </h2>
            <p className="reveal mt-6 max-w-md font-display text-2xl leading-snug text-steam">
              No phones. No crowds. No strangers.
              <br />
              <span className="text-bone">Just some time together.</span>
            </p>
            <p className="reveal mt-6 max-w-md text-steam leading-relaxed">
              Dates, anniversaries, birthdays, Liverpool weekend breaks — or no
              occasion at all. The Hideout is yours for the evening.
            </p>
            <Link href="/book" className="btn-ghost reveal mt-8">
              Experience The Hideout together
            </Link>
          </div>
        </div>
      </section>

      {/* PRACTITIONER STRIP -------------------------------------------- */}
      <section className="border-t border-bone/10">
        <div className="mx-auto flex max-w-site flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center md:px-8">
          <div>
            <p className="eyebrow reveal">The practitioner</p>
            <p className="display reveal mt-2 text-2xl md:text-3xl">
              Every session is delivered personally by Andrew Reeves —
              <span className="text-brass"> and he&apos;ll travel to you.</span>
            </p>
          </div>
          <Link href="/andrew-reeves" className="btn-ghost reveal shrink-0">
            Meet Andrew
          </Link>
        </div>
      </section>

      {/* VISITING LIVERPOOL TEASER ------------------------------------- */}
      <section className="border-y border-bone/10 bg-smoke">
        <div className="mx-auto max-w-site px-5 py-24 md:px-8 md:py-32">
          <p className="eyebrow reveal">Visiting Liverpool?</p>
          <h2 className="display reveal mt-3 max-w-2xl text-4xl md:text-6xl">
            Staying in Liverpool?
            <br />
            <span className="text-brass">We&apos;ll come and get you.</span>
          </h2>
          <p className="lede reveal mt-6 max-w-lg">
            Choose your experience, tell us where you&apos;re staying, and The
            Hideout Concierge will collect you, bring you here, and return you
            afterwards.
          </p>
          <div className="reveal mt-8 flex flex-wrap gap-4">
            <Link href="/visiting-liverpool" className="btn-primary">
              How it works
            </Link>
            <Link href="/book?mode=concierge" className="btn-ghost">
              Book with collection
            </Link>
          </div>
        </div>
      </section>

      {/* GIFT TEASER --------------------------------------------------- */}
      <section className="mx-auto max-w-site px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="display reveal text-4xl md:text-6xl">
              Don&apos;t buy them more stuff.
            </h2>
            <p className="display reveal mt-3 text-2xl text-brass md:text-3xl">
              Give them an experience.
            </p>
            <Link href="/gift" className="btn-ghost reveal mt-8">
              Gift The Hideout
            </Link>
          </div>
          <ImagePanel label="gift voucher flat-lay, natural textures" ratio="aspect-[16/10]" />
        </div>
      </section>

      {/* 90 MINUTES OFFLINE -------------------------------------------- */}
      <section className="border-y border-bone/10">
        <div className="mx-auto max-w-site px-5 py-24 text-center md:px-8 md:py-32">
          <h2 className="display reveal text-5xl md:text-7xl">90 minutes offline.</h2>
          <p className="reveal mx-auto mt-6 max-w-md text-steam">
            Take a photo before or after if you like — then put your phone away.
            Some experiences don&apos;t need to be posted to be remembered.
          </p>
        </div>
      </section>

      {/* SOCIAL PROOF (placeholders — do not invent reviews) ----------- */}
      <section className="mx-auto max-w-site px-5 py-24 md:px-8 md:py-32">
        <p className="eyebrow reveal">Guests &amp; partners</p>
        <h2 className="display reveal mt-3 text-4xl md:text-5xl">
          What people say
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {["Google reviews", "TripAdvisor reviews", "Guest testimonials"].map(
            (label) => (
              <div
                key={label}
                className="reveal rounded-2xl border border-dashed border-bone/20 p-8 text-center text-sm text-steam"
              >
                <p className="field-label">{label}</p>
                Coming soon — genuine {label.toLowerCase()} will appear here
                once our first guests have visited.
              </div>
            )
          )}
        </div>
        <div className="reveal mt-6 rounded-2xl border border-dashed border-bone/20 p-6 text-center text-sm text-steam">
          <p className="field-label">Accommodation partners</p>
          Partner logos will appear here.{" "}
          <Link href="/visiting-liverpool#partners" className="text-brass underline underline-offset-4">
            Become a Hideout partner
          </Link>
        </div>
      </section>

      {/* FINAL CTA ----------------------------------------------------- */}
      <section className="border-t border-bone/10 bg-smoke">
        <div className="mx-auto max-w-site px-5 py-24 text-center md:px-8">
          <h2 className="display reveal text-5xl md:text-7xl">
            Ready to find your Hideout?
          </h2>
          <div className="reveal mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/book" className="btn-primary">
              Book The Hideout
            </Link>
            <Link href="/experiences" className="btn-ghost">
              View experiences
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
