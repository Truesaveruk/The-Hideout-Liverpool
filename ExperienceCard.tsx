import Link from "next/link";
import Image from "next/image";
import type { Experience } from "@/lib/experiences";

// Image mapping for each experience
const experienceImages: Record<string, { src: string; alt: string }> = {
  "sauna-cold": {
    src: "/photos/sauna-interior.jpg",
    alt: "Wooden sauna interior with benches"
  },
  "sauna-sound": {
    src: "/photos/sauna-interior.jpg",
    alt: "Wooden sauna interior"
  },
  "immersive-sound-journey": {
    src: "/photos/sound-room-bowls.jpg",
    alt: "Sound room with singing bowls and mats"
  },
  "breathwork": {
    src: "/photos/breathwork-room.jpg",
    alt: "Breathwork room with mats and green wall"
  },
  "full-hideout": {
    src: "/photos/cold-plunge.jpg",
    alt: "Cold plunge pool with LED lighting"
  }
};

export default function ExperienceCard({
  exp,
  full = false
}: {
  exp: Experience;
  full?: boolean;
}) {
  const imageData = experienceImages[exp.slug] || {
    src: "/photos/default.jpg",
    alt: exp.name
  };

  return (
    <article
      id={exp.slug}
      className="reveal grid gap-8 rounded-3xl border border-bone/10 bg-smoke p-6 md:grid-cols-2 md:p-10"
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          <span className="eyebrow">{exp.number}</span>
          {exp.badge && (
            <span className="rounded-full border border-brass/50 px-3 py-1 text-[0.62rem] uppercase tracking-[0.16em] text-brass">
              {exp.badge}
            </span>
          )}
        </div>
        <h3 className="display mt-4 text-3xl md:text-4xl">{exp.name}</h3>
        <p className="mt-2 font-display text-lg italic text-brass/90">{exp.tagline}</p>

        {full ? (
          <div className="mt-5 space-y-3 text-steam leading-relaxed">
            {exp.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        ) : (
          <p className="mt-5 text-steam leading-relaxed">{exp.summary}</p>
        )}

        {full && (
          <div className="mt-6">
            <p className="field-label">Ideal for</p>
            <ul className="flex flex-wrap gap-2">
              {exp.idealFor.map((who) => (
                <li
                  key={who}
                  className="rounded-full bg-hearth px-3 py-1 text-xs text-bone/80"
                >
                  {who}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href={`/book?experience=${exp.slug}`} className="btn-primary">
            {exp.cta}
          </Link>
          {!full && (
            <Link href={`/experiences#${exp.slug}`} className="btn-quiet">
              More detail
            </Link>
          )}
        </div>
      </div>

      <div className="relative aspect-[4/3] md:aspect-auto md:min-h-full overflow-hidden rounded-2xl">
        <Image
          src={imageData.src}
          alt={imageData.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={false}
        />
      </div>
    </article>
  );
}
