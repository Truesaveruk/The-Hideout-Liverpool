import type { Metadata } from "next";
import Link from "next/link";
import { faqGroups } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "FAQ — Everything You Need to Know Before You Visit",
  description:
    "Answers about The Hideout Liverpool: privacy, the sauna and cold plunge, breathwork, vibroacoustic sound, what to bring, gift vouchers and how collection works for Liverpool visitors."
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqGroups.flatMap((g) =>
      g.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a }
      }))
    )
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="mx-auto max-w-site px-5 pb-16 pt-20 md:px-8 md:pt-28">
        <p className="eyebrow reveal">FAQ</p>
        <h1 className="display reveal mt-3 max-w-2xl text-5xl md:text-7xl">
          Good questions.
        </h1>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-24 md:px-8 md:pb-32">
        {faqGroups.map((group) => (
          <div key={group.title} className="mb-12">
            <h2 className="eyebrow reveal mb-4">{group.title}</h2>
            <div className="divide-y divide-bone/10 border-y border-bone/10">
              {group.faqs.map((f) => (
                <details key={f.q} className="faq reveal group">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 font-display text-lg md:text-xl">
                    {f.q}
                    <span aria-hidden className="faq-icon text-brass">+</span>
                  </summary>
                  <p className="pb-6 text-steam leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}

        <div className="reveal mt-16 rounded-3xl border border-bone/10 bg-smoke p-8 text-center">
          <h2 className="display text-3xl">Still wondering something?</h2>
          <p className="mt-3 text-steam">
            Ask us anything — or just come and find out.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/book" className="btn-primary">
              Book The Hideout
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
