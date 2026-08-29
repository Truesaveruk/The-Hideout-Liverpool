import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-bone/10 bg-smoke">
      <div className="mx-auto grid max-w-site gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <Image
            src="/logo-wordmark.png"
            alt="The Hideout Liverpool — Sauna, Cold, Sound, Reset"
            width={1402}
            height={1122}
            className="h-auto w-48"
          />
          <p className="mt-4 text-sm text-steam">
            A private wellness space in {site.area}.
            <br />
            Heat. Cold. Breath. Sound. Stillness.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.16em] text-brass">
            Private • Personal • No crowds • Your space
          </p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-2 text-sm text-steam">
          <Link className="hover:text-brass" href="/experiences">Experiences</Link>
          <Link className="hover:text-brass" href="/visiting-liverpool">Visiting Liverpool</Link>
          <Link className="hover:text-brass" href="/prices">Prices</Link>
          <Link className="hover:text-brass" href="/gift">Gift The Hideout</Link>
          <Link className="hover:text-brass" href="/about">About</Link>
          <Link className="hover:text-brass" href="/andrew-reeves">Andrew Reeves</Link>
          <Link className="hover:text-brass" href="/faq">FAQ</Link>
          <a className="hover:text-brass" href={site.bookingUrl} target="_blank" rel="noopener">Book</a>
        </nav>

        <div className="text-sm text-steam">
          <p className="field-label">Contact</p>
          <a className="block hover:text-brass" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <p className="mt-4 max-w-xs text-xs leading-relaxed text-steam/70">
            Our experiences are designed for relaxation and wellbeing. They are
            not medical treatments. If you have a health condition or concern,
            please seek professional medical advice before sauna, cold exposure
            or breathwork.
          </p>
        </div>
      </div>
      <div className="border-t border-bone/10 py-5 text-center text-xs text-steam/60">
        © {new Date().getFullYear()} {site.name}. This isn&apos;t a spa. It&apos;s your Hideout.
      </div>
    </footer>
  );
}
