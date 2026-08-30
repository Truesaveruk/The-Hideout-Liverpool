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
          {exp.status && (
            <span
              className={`rounded-full border px-3 py-1 text-[0.62rem] uppercase tracking-[0.16em] ${
                exp.status === "PRIVATE" ? "border-brass/50 text-brass" : "border-bone/30 text-steam"
              }`}
            >
              {exp.status}
            </span>
          )}
          {exp.badge && (
            <span className="rounded-full border border-bone/20 px-3 py-1 text-[0.62rem] uppercase tracking-[0.16em] text-steam">
              {exp.badge}
            </span>
          )}
        </div>
        <h3 className="display mt-4 text-3xl md:text-4xl">{exp.name}</h3>
        <p className="mt-2 font-display text-lg italic text-brass/90">{exp.tagline}</p>
        {exp.price && (
          <p className="mt-3 text-sm text-steam">
            <span className="font-display text-xl text-bone">{exp.price}</span>
            {exp.priceNote ? ` · ${exp.priceNote}` : ""}
          </p>
        )}

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
          <a href={bookHref(exp)} target="_blank" rel="noopener" className="btn-primary">
            {exp.cta}
          </a>
          {!full && (
            <Link href={`/experiences#${exp.slug}`} className="btn-quiet">
              More detail
            </Link>
          )}
        </div>
      </div>
      <ImagePanel
        label={
          exp.photo ??
          (exp.accent === "heat"
            ? "sauna interior, warm light"
            : exp.accent === "sound"
              ? "sound room, instruments, low light"
              : exp.accent === "breath"
                ? "guest resting, soft blankets"
                : "the full Hideout space")
        }
        ratio="aspect-[4/3] md:aspect-auto md:min-h-full"
      />
    </article>
  );
}
