import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Manager — The Hideout",
  // Keep this page out of Google entirely.
  robots: { index: false, follow: false, nocache: true }
};

/**
 * PRIVATE PHOTO MANAGER
 * Not linked from anywhere on the site. Reach it at /admin
 *
 * This page tells Andrew exactly which FILENAME controls which picture,
 * so photos can be swapped by uploading a file with the same name to
 * GitHub — no code editing, no asking anyone.
 */

type Slot = {
  file: string;
  what: string;
  where: string;
  shape: "tall" | "wide" | "square";
};

const SLOTS: Slot[] = [
  {
    file: "sound-room-ai.jpg",
    what: "Main sound room — the site's hero image",
    where: "Homepage hero, Full Hideout Experience",
    shape: "tall"
  },
  {
    file: "sound-room-green.jpg",
    what: "Sound room, green wall + fire",
    where: "Couples Sound Journey",
    shape: "tall"
  },
  {
    file: "sound-room-purple.jpg",
    what: "Sound room, purple light",
    where: "Private Sound Immersion (1-2-1)",
    shape: "wide"
  },
  {
    file: "sound-room-purple-wide.jpg",
    what: "Sound room, purple, wide",
    where: "Private 4 Person Sound Bath, Gift page",
    shape: "tall"
  },
  {
    file: "sauna-interior.jpg",
    what: "Inside the sauna",
    where: "Open Sauna session card, 'steam rising'",
    shape: "tall"
  },
  {
    file: "sauna-exterior.jpg",
    what: "Sauna + cold plunge outside, lit at dusk",
    where: "Private Sauna Hire card, entrance slot",
    shape: "tall"
  },
  {
    file: "andrew-gong.jpg",
    what: "Andrew working — gong",
    where: "About page, Andrew Reeves page, 'tea by the fire'",
    shape: "tall"
  },
  {
    file: "andrew-drum.jpg",
    what: "Andrew working — frame drum",
    where: "Instrument detail slots",
    shape: "tall"
  },
  {
    file: "garden.jpg",
    what: "Outdoor / location shot",
    where: "Crosby + Liverpool location sections",
    shape: "wide"
  }
];

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-brass">
        Private — not linked publicly
      </p>
      <h1 className="display mt-3 text-4xl md:text-5xl">Photo Manager</h1>
      <p className="mt-4 max-w-2xl text-bone/70">
        Every picture on the site is controlled by a filename. To change any
        photo, upload a new image with the <strong>exact same filename</strong>{" "}
        — the site swaps it automatically. No code, no waiting.
      </p>

      <section className="mt-10 rounded-2xl border border-brass/30 bg-brass/5 p-6">
        <h2 className="display text-2xl">How to swap a photo</h2>
        <ol className="mt-4 space-y-3 text-bone/80">
          <li>
            <strong>1.</strong> Find the photo below you want to change. Note its
            filename.
          </li>
          <li>
            <strong>2.</strong> Rename your new photo to that exact filename
            (including <code className="text-brass">.jpg</code>).
          </li>
          <li>
            <strong>3.</strong> In GitHub, open{" "}
            <code className="text-brass">public/photos</code> → Add file → Upload
            files → drop it in → Commit.
          </li>
          <li>
            <strong>4.</strong> Wait 2 minutes, then hard-refresh the site
            (Cmd+Shift+R).
          </li>
        </ol>
        <p className="mt-4 text-sm text-bone/60">
          Tip: save photos around 1500px on the longest side so pages stay fast.
          Portrait (tall) photos suit most slots.
        </p>
      </section>

      <div className="mt-12 space-y-4">
        {SLOTS.map((s) => (
          <div
            key={s.file}
            className="flex flex-col gap-4 rounded-xl border border-bone/10 p-4 sm:flex-row sm:items-center"
          >
            <div className="h-28 w-28 shrink-0 overflow-hidden rounded-lg bg-bone/5">
              {/* plain img so this page never breaks if a file is missing */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/photos/${s.file}`}
                alt={s.what}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-medium">{s.what}</p>
              <p className="mt-1 text-sm text-bone/60">Appears: {s.where}</p>
              <code className="mt-2 inline-block rounded bg-brass/10 px-2 py-1 text-sm text-brass">
                {s.file}
              </code>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-12 rounded-2xl border border-bone/10 p-6">
        <h2 className="display text-2xl">Other things you can change yourself</h2>
        <ul className="mt-4 space-y-3 text-bone/80">
          <li>
            <strong>Booking link</strong> — one line in{" "}
            <code className="text-brass">lib/site.ts</code> (
            <code className="text-brass">bookingUrl</code>). Change it and every
            Book button on the site follows.
          </li>
          <li>
            <strong>Prices and service wording</strong> —{" "}
            <code className="text-brass">lib/experiences.ts</code>. Keep these
            matching Fresha exactly.
          </li>
          <li>
            <strong>Email addresses</strong> —{" "}
            <code className="text-brass">lib/site.ts</code>.
          </li>
          <li>
            <strong>FAQ questions</strong> —{" "}
            <code className="text-brass">lib/faqs.ts</code>.
          </li>
        </ul>
      </section>
    </main>
  );
}
