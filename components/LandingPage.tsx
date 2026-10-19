import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getLanding, landingPages, type LandingPage } from "@/lib/landing";
import { site } from "@/lib/site";

/** Page metadata for a landing page, with its canonical URL. */
export function landingMetadata(slug: string): Metadata {
  const p = getLanding(slug);
  return {
    title: { absolute: p.title },
    description: p.description,
    alternates: { canonical: `/${p.slug}` },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_GB",
      url: `/${p.slug}`,
      title: p.title,
      description: p.description,
      images: [{ url: p.photo, alt: p.photoAlt }]
    }
  };
}

function schemaFor(p: LandingPage) {
  const pageUrl = `${site.url}/${p.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: p.short,
      serviceType: p.serviceType,
      url: pageUrl,
      description: p.description,
      image: `${site.url}${p.photo}`,
      provider: { "@id": site.url },
      areaServed: { "@type": "City", name: "Liverpool" },
      offers: p.offers.map((o) => ({
        "@type": "Offer",
        name: o.name,
        price: o.price.replace(/[^0-9.]/g, ""),
        priceCurrency: "GBP",
        url: p.ctaHref ? `${site.url}/gift` : site.bookingUrl,
        availability: "https://schema.org/InStock"
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: p.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: p.short, item: pageUrl }
      ]
    }
  ];
}

export default function LandingPageView({ slug }: { slug: string }) {
  const p = getLanding(slug);
  const related = p.related
    .map((s) => landingPages.find((l) => l.slug === s))
    .filter((l): l is LandingPage => Boolean(l));
  const ctaHref = p.ctaHref ?? site.bookingUrl;
  const external = ctaHref.startsWith("http");
  const ctaProps = external ? { target: "_blank", rel: "noopener" } : {};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFor(p)) }}
      />

      {/* HERO ---------------------------------------------------------- */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <Image src={p.photo} alt="" fill priority sizes="100vw" className="drift object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-ember via-ember/75 to-ember/40" />
        </div>
        <div className="relative mx-auto flex min-h-[70svh] max-w-site flex-col justify-end px-5 pb-16 pt-28 md:px-8">
          <nav aria-label="Breadcrumb" className="reveal text-xs uppercase tracking-[0.16em] text-steam">
            <Link href="/" className="hover:text-brass">Home</Link>
            <span className="mx-2 text-brass">/</span>
            <span>{p.short}</span>
          </nav>
          <p className="eyebrow reveal mt-6">{p.eyebrow}</p>
          <h1 className="display reveal mt-4 max-w-3xl text-4xl md:text-6xl">{p.h1}</h1>
          <p className="lede reveal mt-6 max-w-xl">{p.lede}</p>
          <div className="reveal mt-8 flex flex-wrap gap-4">
            <a {...ctaProps} href={ctaHref} className="btn-primary">
              {p.ctaLabel ?? "Check availability"}
            </a>
            <a href="#prices" className="btn-ghost">
              See prices
            </a>
          </div>
        </div>
      </section>

      {/* INTRO --------------------------------------------------------- */}
      <section className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-4 text-steam leading-relaxed">
            {p.intro.map((para) => (
              <p key={para} className="reveal">{para}</p>
            ))}
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-bone/10">
            <Image
              src={p.photo}
              alt={p.photoAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* PRICES -------------------------------------------------------- */}
      <section id="prices" className="border-y border-bone/10 bg-smoke">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28">
          <h2 className="display reveal text-4xl md:text-5xl">{p.offersHeading}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {p.offers.map((o) => (
              <div key={o.name} className="reveal flex flex-col rounded-3xl border border-bone/10 bg-ember p-8">
                <p className="eyebrow">{o.status === "PRIVATE" ? "Private" : "Shared"}</p>
                <h3 className="mt-3 font-display text-2xl">{o.name}</h3>
                <p className="display mt-4 text-5xl">{o.price}</p>
                <p className="mt-2 text-sm text-steam">{o.note}</p>
                <p className="mt-4 flex-1 text-steam leading-relaxed">{o.summary}</p>
                <a {...ctaProps} href={ctaHref} className="btn-primary mt-6 w-fit">
                  {p.ctaHref ? "Gift this" : "Book"}
                </a>
              </div>
            ))}
          </div>
          <p className="reveal mt-8">
            <Link href="/prices" className="btn-quiet">All prices →</Link>
          </p>
        </div>
      </section>

      {/* WHY ----------------------------------------------------------- */}
      <section className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28">
        <h2 className="display reveal text-4xl md:text-5xl">{p.whyHeading}</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {p.why.map((w) => (
            <div key={w.title} className="reveal">
              <h3 className="font-display text-xl text-brass">{w.title}</h3>
              <p className="mt-2 text-steam leading-relaxed">{w.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COLLECTION ---------------------------------------------------- */}
      <section className="border-y border-bone/10 bg-smoke">
        <div className="mx-auto flex max-w-site flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center md:px-8">
          <div>
            <p className="eyebrow reveal">Staying in Liverpool?</p>
            <p className="display reveal mt-2 text-2xl md:text-3xl">
              We&apos;ll collect you from your hotel or Airbnb
              <span className="text-brass"> and take you back afterwards.</span>
            </p>
          </div>
          <Link href="/visiting-liverpool" className="btn-ghost reveal shrink-0">
            How collection works
          </Link>
        </div>
      </section>

      {/* FAQ ----------------------------------------------------------- */}
      <section className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <h2 className="display reveal text-4xl md:text-5xl">Questions</h2>
        <div className="mt-8 divide-y divide-bone/10 border-y border-bone/10">
          {p.faqs.map((f) => (
            <details key={f.q} className="faq reveal group">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 font-display text-lg md:text-xl">
                {f.q}
                <span aria-hidden className="faq-icon text-brass">+</span>
              </summary>
              <p className="pb-6 text-steam leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="reveal mt-6">
          <Link href="/faq" className="btn-quiet">More questions →</Link>
        </p>
      </section>

      {/* RELATED ------------------------------------------------------- */}
      <section className="border-t border-bone/10">
        <div className="mx-auto max-w-site px-5 py-16 md:px-8">
          <p className="eyebrow reveal">You might also like</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/${r.slug}`}
                className="reveal rounded-2xl border border-bone/10 bg-smoke p-6 transition-colors hover:border-brass/50"
              >
                <p className="font-display text-xl">{r.short}</p>
                <p className="mt-2 text-sm text-steam">{r.lede}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA ----------------------------------------------------- */}
      <section className="border-t border-bone/10 bg-smoke">
        <div className="mx-auto max-w-site px-5 py-20 text-center md:px-8">
          <h2 className="display reveal text-4xl md:text-6xl">Ready to find your Hideout?</h2>
          <div className="reveal mt-8 flex flex-wrap justify-center gap-4">
            <a {...ctaProps} href={ctaHref} className="btn-primary">
              {p.ctaLabel ?? "Book The Hideout"}
            </a>
            <Link href="/experiences" className="btn-ghost">
              All experiences
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
