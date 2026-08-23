import type { Metadata } from "next";
import Link from "next/link";
import ImagePanel from "@/components/ImagePanel";

export const metadata: Metadata = {
  title: "About — The Story Behind The Hideout",
  description:
    "The Hideout began with a simple idea: people need somewhere to switch off. A small, private wellness space in Crosby, Liverpool, combining traditional practices with modern sound and vibroacoustic technology."
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-site px-5 pb-16 pt-20 md:px-8 md:pt-28">
        <p className="eyebrow reveal">About</p>
        <h1 className="display reveal mt-3 max-w-2xl text-5xl md:text-7xl">
          It started with a simple idea.
        </h1>
        <p className="display reveal mt-5 text-2xl text-brass md:text-3xl">
          People need somewhere to switch off.
        </p>
      </section>

      <section className="mx-auto max-w-site px-5 pb-24 md:px-8 md:pb-32">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-5 text-steam leading-relaxed">
            <p>
              Not another appointment. Not another queue for the sauna. Not a
              huge facility where you&apos;re one of a hundred people moving
              between treatments.
            </p>
            <p>
              Somewhere small. Somewhere warm. Somewhere that, for ninety
              minutes, is completely yours.
            </p>
            <p>
              That&apos;s The Hideout. A private wellness space tucked away in
              Crosby, near the Liverpool coastline, built around a simple
              belief: a small space can offer a more personal experience than a
              big one.
            </p>
            <p>
              We bring together traditional practices — sauna, cold, breath and
              sound — with emerging wellness technology, including immersive
              audio and vibroacoustic vibration you can physically feel.
            </p>
            <p>
              The Hideout was created by a trained sound and breathwork
              practitioner with a genuine, ongoing curiosity about wellbeing
              practices — old ones and new ones — and how they feel when
              you&apos;re given the time and space to actually experience them.
              We&apos;re not medics and we don&apos;t pretend to be. We just
              think everyone deserves a place to slow down.
            </p>
            <p className="font-display text-xl text-bone">
              Come alone. Come together. Find your Hideout.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/experiences" className="btn-primary">
                Discover the experiences
              </Link>
              <Link href="/andrew-reeves" className="btn-ghost">
                Meet Andrew
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <ImagePanel label="the founder in the sound room" />
            <div className="grid grid-cols-2 gap-4">
              <ImagePanel label="instruments detail" ratio="aspect-square" />
              <ImagePanel label="sauna stove, glowing" ratio="aspect-square" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
