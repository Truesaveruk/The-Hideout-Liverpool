import type { Metadata } from "next";
import Link from "next/link";
import ImagePanel from "@/components/ImagePanel";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sound Immersion & Wellness Events at Your Space — Liverpool & Merseyside",
  description:
    "Bring the experience to you. Private sound immersion at your home, studio or venue across Liverpool and Merseyside — plus bespoke wellness days built around your group, workplace or event."
};

const forWho = [
  "Homes and private gatherings",
  "Workplaces and away days",
  "Studios and gyms",
  "Retreats and residentials",
  "Birthdays and celebrations",
  "Community groups and clubs"
];

const steps = [
  {
    n: "01",
    title: "We talk it through",
    copy: "A proper conversation first — what the day is for, who's coming, what you want people to leave feeling. No package to squeeze into."
  },
  {
    n: "02",
    title: "We shape the session",
    copy: "Sound immersion on its own, or a fuller day built with practitioners from the wider network — depending on what fits."
  },
  {
    n: "03",
    title: "We come to you",
    copy: "Everything is brought to your space and set up. You don't need equipment, a studio, or any experience."
  },
  {
    n: "04",
    title: "You switch off",
    copy: "You take part like everyone else. We handle the rest and leave the space as we found it."
  }
];

export default function BringToYouPage() {
  return (
    <>
      {/* HERO ---------------------------------------------------------- */}
      <section className="mx-auto max-w-site px-5 pb-16 pt-20 md:px-8 md:pt-28">
        <p className="eyebrow reveal">Bring The Hideout to you</p>
        <h1 className="display reveal mt-3 max-w-3xl text-5xl md:text-7xl">
          Can&apos;t come to us?
          <br />
          We&apos;ll come to you.
        </h1>
        <p className="lede reveal mt-6 max-w-xl">
          Private sound immersion at your home, studio or venue — and bespoke
          wellness days built around your group, shaped in a conversation rather
          than picked off a list.
        </p>
        <div className="reveal mt-8 flex flex-wrap gap-4">
          <a href={`mailto:${site.email}?subject=${encodeURIComponent("Bringing The Hideout to my space")}`} className="btn-primary">
            Start a conversation
          </a>
          <Link href="/experiences" className="btn-quiet">
            See what happens at The Hideout →
          </Link>
        </div>
      </section>

      {/* SOUND AT YOUR SPACE ------------------------------------------- */}
      <section className="mx-auto max-w-site px-5 pb-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow reveal">Sound immersion, brought to you</p>
            <h2 className="display reveal mt-3 text-4xl md:text-5xl">
              The sound comes with me.
            </h2>
            <div className="reveal mt-6 max-w-md space-y-4 text-steam leading-relaxed">
              <p>
                A sound immersion delivered wherever you are — a living room, a
                studio, a hall, a workplace. Traditional instruments and immersive
                sound, set up in your space.
              </p>
              <p>
                It&apos;s a genuinely easy way to bring something different into a
                home or an event. No equipment needed at your end, no experience
                required from anyone taking part, and nothing anybody has to be
                &ldquo;good&rdquo; at.
              </p>
              <p className="text-bone">
                People lie down, close their eyes, and let the hour do the work.
              </p>
            </div>
          </div>
          <ImagePanel label="sound room, instruments, low light" ratio="aspect-[4/3]" />
        </div>
      </section>

      {/* WELLNESS DAYS ------------------------------------------------- */}
      <section className="border-t border-bone/10 bg-smoke">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <ImagePanel label="the Hideout entrance, warm light" ratio="aspect-[4/3]" />
            <div>
              <p className="eyebrow reveal">Wellness days &amp; events</p>
              <h2 className="display reveal mt-3 text-4xl md:text-5xl">
                A day built around your people.
              </h2>
              <div className="reveal mt-6 max-w-md space-y-4 text-steam leading-relaxed">
                <p>
                  For bigger days, I work alongside a network of trained
                  practitioners — so a session can grow into a full wellness day
                  shaped around what your group actually needs.
                </p>
                <p>
                  Everything is arranged through a conversation first. We talk
                  about who&apos;s coming, what the day is for, and what you want
                  people to take away from it — then build it from there.
                </p>
                <p className="text-bone">
                  Nothing off a shelf. No two days the same.
                </p>
              </div>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent("Wellness day enquiry")}`}
                className="btn-ghost reveal mt-8"
              >
                Tell us what you have in mind
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS -------------------------------------------------- */}
      <section className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28">
        <p className="eyebrow reveal">How it works</p>
        <h2 className="display reveal mt-3 max-w-xl text-4xl md:text-5xl">
          It starts with a conversation.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="reveal rounded-3xl border border-bone/10 bg-smoke p-7">
              <p className="eyebrow text-brass">{s.n}</p>
              <p className="font-display mt-3 text-xl">{s.title}</p>
              <p className="mt-3 text-sm text-steam leading-relaxed">{s.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO IT'S FOR -------------------------------------------------- */}
      <section className="border-y border-bone/10">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8">
          <h2 className="display reveal text-3xl md:text-4xl">Where we bring it</h2>
          <ul className="reveal mt-8 flex flex-wrap gap-3">
            {forWho.map((w) => (
              <li key={w} className="rounded-full border border-bone/15 bg-smoke px-5 py-2.5 text-steam">
                {w}
              </li>
            ))}
          </ul>
          <p className="reveal mt-8 max-w-xl text-steam leading-relaxed">
            Based in Crosby and travelling across Liverpool and Merseyside. Further
            afield may be possible — ask and we&apos;ll see what works.
          </p>
        </div>
      </section>

      {/* CTA ----------------------------------------------------------- */}
      <section className="mx-auto max-w-site px-5 py-24 text-center md:px-8 md:py-32">
        <h2 className="display reveal text-4xl md:text-6xl">
          Tell us about your space.
        </h2>
        <p className="reveal mx-auto mt-6 max-w-lg text-steam leading-relaxed">
          Whether it&apos;s an hour of sound in a living room or a full day for a
          team, the starting point is the same — a conversation about what you&apos;re
          hoping for.
        </p>
        <div className="reveal mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent("Bringing The Hideout to my space")}`}
            className="btn-primary"
          >
            Start a conversation
          </a>
          <Link href="/andrew-reeves" className="btn-quiet">
            About Andrew →
          </Link>
        </div>
      </section>
    </>
  );
}
