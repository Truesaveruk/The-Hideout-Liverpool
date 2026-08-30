import type { Metadata } from "next";
import Link from "next/link";
import ImagePanel from "@/components/ImagePanel";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Andrew Reeves — Sound Therapist & Breathwork Practitioner, Liverpool",
  description:
    "Andrew Reeves is the qualified sound therapist and breathwork practitioner behind The Hideout Liverpool. Book 1-2-1 sound therapy and breathwork in Crosby — or have the sound brought to your home, studio or workplace anywhere in the Liverpool area."
};

// Andrew's practitioner services. In-Hideout services link straight into the
// existing booking wizard; mobile services are enquiry-based.
const inHideout = [
  {
    name: "1-2-1 Sound Therapy",
    copy: "Private sound therapy in The Hideout's dedicated sound room — traditional instruments, immersive audio and vibroacoustic technology, tailored to you.",
    href: "/book?experience=immersive-sound-journey"
  },
  {
    name: "Private Breathwork",
    copy: "Guided breathwork sessions, always starting with a proper introduction. No experience needed.",
    href: "/book?experience=breathwork"
  },
  {
    name: "Couples Sound Bath",
    copy: "A shared sound experience for two, in your own private space.",
    href: "/book?experience=sauna-sound"
  }
];

const mobileFor = [
  "Your home",
  "Yoga & pilates studios",
  "Wellness studios",
  "Workplaces & team days",
  "Retreats & events",
  "Small private groups"
];

export default function AndrewReevesPage() {
  const enquire = `mailto:${site.email}?subject=${encodeURIComponent(
    "Mobile sound session enquiry"
  )}&body=${encodeURIComponent(
    "Hi Andrew,\n\nI'd like to bring the sound to:\n\nVenue type (home / studio / workplace / event):\nLocation:\nRough group size:\nPreferred dates:\n\nThanks,"
  )}`;

  return (
    <>
      {/* HERO ---------------------------------------------------------- */}
      <section className="mx-auto max-w-site px-5 pb-16 pt-20 md:px-8 md:pt-28">
        <p className="eyebrow reveal">The person behind The Hideout</p>
        <h1 className="display reveal mt-3 max-w-3xl text-5xl md:text-7xl">
          Andrew Reeves.
        </h1>
        <p className="display reveal mt-4 text-2xl text-brass md:text-3xl">
          Sound. Breath. Meditation.
        </p>
        <p className="lede reveal mt-6 max-w-xl">
          The Hideout grew from something that has been a big part of my own
          life for years — exploring different ways to slow down, reset and
          feel better.
        </p>
      </section>

      {/* STORY + PHOTO -------------------------------------------------- */}
      <section className="mx-auto max-w-site px-5 pb-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-4 text-steam leading-relaxed">
            <p>
              Over the years I&apos;ve trained in many modalities, but my passion
              is sound — and helping people. I&apos;ve also spent much of my
              working life in a completely different world: construction,
              utilities, project management, and now AI.
            </p>
            <p>
              That combination is probably what shaped The Hideout.
            </p>
            <p>
              I wanted to create something that felt grounded and welcoming. Not
              a clinical treatment room. Not a big commercial spa. And definitely
              somewhere you don&apos;t need to know anything about wellness
              before you walk through the door.
            </p>
            <p>
              The Hideout is a private space I&apos;ve created in Crosby where I
              can bring together some of the practices and experiences that have
              meant the most to me — traditional sauna, cold water, breathwork,
              meditation, immersive sound and vibroacoustic experiences.
            </p>
            <p>
              You can come for something as simple as an hour in the sauna,
              experience a sound journey, try breathwork for the first time, or
              combine several elements into a longer session.
            </p>
            <p className="text-bone">
              There&apos;s no pressure to perform, achieve anything or be
              &ldquo;good&rdquo; at any of it. Sometimes we just need somewhere
              to switch off for a while. That&apos;s really what The Hideout is
              about.
            </p>
            <p className="pt-2 font-display text-lg text-bone">
              Andrew Reeves
              <span className="block text-sm text-steam">Founder, The Hideout Liverpool</span>
            </p>
          </div>
          <ImagePanel label="Andrew with instruments in the sound room" ratio="aspect-[4/3]" />
        </div>
      </section>

      {/* AT THE HIDEOUT ------------------------------------------------- */}
      <section className="border-y border-bone/10 bg-smoke">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-24">
          <p className="eyebrow reveal">Work with Andrew at The Hideout</p>
          <h2 className="display reveal mt-3 text-4xl md:text-5xl">
            In the sound room, Crosby.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {inHideout.map((s) => (
              <div
                key={s.name}
                className="reveal flex flex-col rounded-2xl border border-bone/10 bg-ember p-6"
              >
                <h3 className="font-display text-xl">{s.name}</h3>
                <p className="mt-3 flex-1 text-sm text-steam leading-relaxed">
                  {s.copy}
                </p>
                <Link href={s.href} className="btn-quiet mt-5 w-fit">
                  Book at The Hideout
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE OFFER — the headline of this page ----------------------- */}
      <section className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow reveal">Mobile sound sessions</p>
            <h2 className="display reveal mt-3 text-5xl md:text-6xl">
              Can&apos;t come to
              <br />
              The Hideout?
            </h2>
            <p className="display reveal mt-4 text-2xl text-brass md:text-3xl">
              Andrew brings the sound to you.
            </p>
            <p className="reveal mt-6 max-w-md text-steam leading-relaxed">
              Sound baths and guided relaxation delivered at your home, your
              studio or your workplace — instruments, immersive sound and
              everything needed for the session. You provide the space and the
              people. Andrew brings the rest.
            </p>
            <ul className="reveal mt-6 flex max-w-md flex-wrap gap-2">
              {mobileFor.map((v) => (
                <li
                  key={v}
                  className="rounded-full bg-hearth px-3 py-1 text-sm text-bone/80"
                >
                  {v}
                </li>
              ))}
            </ul>
            <div className="reveal mt-8 flex flex-wrap items-center gap-4">
              {/* INTEGRATION POINT: swap mailto for a form handler when ready */}
              <a href={enquire} className="btn-primary">
                Bring the sound to you
              </a>
              <Link href="/faq" className="btn-quiet">
                Questions?
              </Link>
            </div>
            <p className="reveal mt-6 max-w-md text-bone">
              Home sound baths (up to 6 people) from{" "}
              <span className="font-display text-2xl text-brass">£180</span>.
            </p>
            <p className="reveal mt-2 max-w-md text-xs text-steam/70">
              Studios, workplaces and events are quoted individually based on
              location, group size and session length — tell us what you have
              in mind.
            </p>
          </div>
          <div className="grid gap-4">
            <ImagePanel label="sound bath set up in a yoga studio" />
            <div className="grid grid-cols-2 gap-4">
              <ImagePanel label="bowls & gong detail" ratio="aspect-square" />
              <ImagePanel label="group resting, studio setting" ratio="aspect-square" />
            </div>
          </div>
        </div>
      </section>

      {/* BREATHWORK — ANDY BLAKEMORE ------------------------------------ */}
      <section className="border-t border-bone/10">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <ImagePanel label="breathwork session, candlelit room" ratio="aspect-[4/3]" />
            <div>
              <p className="eyebrow reveal">Breathwork at The Hideout</p>
              <h2 className="display reveal mt-3 text-4xl md:text-5xl">
                Guided breathwork with Andy Blakemore.
              </h2>
              <div className="reveal mt-6 max-w-md space-y-4 text-steam leading-relaxed">
                <p>
                  Alongside Andrew&apos;s own practice, The Hideout hosts guided
                  breathwork led by trained facilitator Andy Blakemore.
                </p>
                <p>
                  Andy&apos;s sessions use conscious connected breathing and
                  somatic enquiry — a gentle, accessible way to release tension,
                  settle the mind and reconnect with the body.
                </p>
                <p>
                  No experience needed. You&apos;ll be introduced to the practice
                  and guided the whole way through, finishing with time to rest.
                </p>
                <p className="text-bone">
                  Andy Blakemore is a trained conscious connected breathwork
                  facilitator and somatic enquiry practitioner.
                </p>
              </div>
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener"
                className="btn-primary reveal mt-8"
              >
                Book breathwork
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CROSS-SELL BACK TO THE HIDEOUT --------------------------------- */}
      <section className="border-t border-bone/10 bg-smoke">
        <div className="mx-auto max-w-site px-5 py-20 text-center md:px-8">
          <h2 className="display reveal text-4xl md:text-5xl">
            Or come and find your Hideout.
          </h2>
          <p className="reveal mx-auto mt-4 max-w-md text-steam">
            The full experience — heat, cold, breath and sound — lives in
            Crosby.
          </p>
          <div className="reveal mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/experiences" className="btn-ghost">
              View experiences
            </Link>
            <a target="_blank" rel="noopener" href={site.bookingUrl} className="btn-primary">
              Book The Hideout
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
