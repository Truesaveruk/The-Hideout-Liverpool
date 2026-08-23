import type { Metadata } from "next";
import Link from "next/link";
import { experiences } from "@/lib/experiences";
import ExperienceCard from "@/components/ExperienceCard";

export const metadata: Metadata = {
  title: "Private Wellness Experiences — Sauna, Cold Plunge, Sound & Breathwork",
  description:
    "Five private Hideout experiences in Crosby, Liverpool: Sauna + Cold, Sauna + Sound, the Immersive Sound Journey, Private Breathwork and the Full Hideout Experience."
};

export default function ExperiencesPage() {
  return (
    <>
      <section className="mx-auto max-w-site px-5 pb-16 pt-20 md:px-8 md:pt-28">
        <p className="eyebrow reveal">Experiences</p>
        <h1 className="display reveal mt-3 max-w-2xl text-5xl md:text-7xl">
          Choose how you disappear.
        </h1>
        <p className="lede reveal mt-6 max-w-lg">
          Five experiences. All private. All yours. Every one finishes with time
          to relax and enjoy refreshments.
        </p>
      </section>

      <section className="mx-auto max-w-site space-y-8 px-5 pb-24 md:px-8 md:pb-32">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.slug} exp={exp} full />
        ))}
      </section>

      <section className="border-t border-bone/10 bg-smoke">
        <div className="mx-auto max-w-site px-5 py-20 text-center md:px-8">
          <h2 className="display reveal text-4xl md:text-5xl">
            Not sure which one?
          </h2>
          <p className="reveal mx-auto mt-4 max-w-md text-steam">
            Start with the Full Hideout Experience and try everything as one
            flowing journey — or visiting Liverpool? We&apos;ll come and get you.
          </p>
          <div className="reveal mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/book" className="btn-primary">
              Book The Hideout
            </Link>
            <Link href="/visiting-liverpool" className="btn-ghost">
              Visiting Liverpool?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
