import type { Metadata } from "next";
import Link from "next/link";
import ImagePanel from "@/components/ImagePanel";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gift The Hideout — Private Wellness Experience Vouchers, Liverpool",
  description:
    "Give someone 90 minutes away from everything. Hideout gift vouchers cover private sauna, cold plunge, breathwork and immersive sound experiences in Crosby, Liverpool."
};

const occasions = [
  "Birthdays",
  "Anniversaries",
  "Christmas",
  "Couples",
  "Mother's Day",
  "Father's Day",
  "Thank-you gifts"
];

export default function GiftPage() {
  return (
    <>
      <section className="mx-auto max-w-site px-5 pb-16 pt-20 md:px-8 md:pt-28">
        <p className="eyebrow reveal">Gift The Hideout</p>
        <h1 className="display reveal mt-3 max-w-3xl text-5xl md:text-7xl">
          Don&apos;t buy them more stuff.
        </h1>
        <p className="display reveal mt-4 text-2xl text-brass md:text-4xl">
          Give them an experience.
        </p>
      </section>

      <section className="mx-auto max-w-site px-5 pb-24 md:px-8 md:pb-32">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="reveal max-w-md text-steam leading-relaxed">
              Any Hideout experience can be given as a gift — from Sauna + Cold
              to the full Immersive Sound Journey. They choose their date. We
              take care of the rest.
            </p>
            <ul className="reveal mt-6 flex max-w-md flex-wrap gap-2">
              {occasions.map((o) => (
                <li
                  key={o}
                  className="rounded-full bg-hearth px-3 py-1 text-sm text-bone/80"
                >
                  {o}
                </li>
              ))}
            </ul>
            {/* INTEGRATION POINT: connect a gift voucher provider (e.g. Stripe
                payment links or a voucher platform) and replace this mailto. */}
            <div className="reveal mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent("Gift voucher enquiry")}`}
                className="btn-primary"
              >
                Gift The Hideout
              </a>
              <Link href="/experiences" className="btn-quiet">
                See the experiences
              </Link>
            </div>
            <p className="reveal mt-4 text-xs text-steam/70">
              Online voucher purchase is coming soon — for now, email us and
              we&apos;ll arrange your voucher personally.
            </p>
          </div>
          <ImagePanel label="voucher with dried botanicals, wood surface" ratio="aspect-[4/3]" />
        </div>
      </section>
    </>
  );
}
