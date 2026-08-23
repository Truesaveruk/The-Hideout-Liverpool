import Link from "next/link";
import { bookHref, type Experience } from "@/lib/experiences";
import ImagePanel from "./ImagePanel";

export default function ExperienceCard({
  exp,
  full = false
}: {
  exp: Experience;
  full?: boolean;
}) {
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
          <Link href={bookHref(exp)} className="btn-primary">
            {exp.cta}
          </Link>
          {!full && (
            <Link href={`/experiences#${exp.slug}`} className="btn-quiet">
              More detail
            </Link>
          )}
        </div>
      </div>
      <ImagePanel
        label={
          exp.accent === "heat"
            ? "sauna interior, warm light"
            : exp.accent === "sound"
              ? "sound room, instruments, low light"
              : exp.accent === "breath"
                ? "guest resting, soft blankets"
                : "the full Hideout space"
        }
        ratio="aspect-[4/3] md:aspect-auto md:min-h-full"
      />
    </article>
  );
}
