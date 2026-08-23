import type { Metadata } from "next";
import { Suspense } from "react";
import BookingWizard from "@/components/BookingWizard";

export const metadata: Metadata = {
  title: "Book The Hideout — Private Wellness Experiences, Crosby, Liverpool",
  description:
    "Book your private Hideout experience — sauna, cold plunge, breathwork or immersive sound in Crosby, Liverpool. Collection available for visitors staying in Liverpool."
};

export default function BookPage() {
  return (
    <section className="mx-auto max-w-site px-5 pb-24 pt-16 md:px-8 md:pt-24">
      <p className="eyebrow">Book</p>
      <h1 className="display mb-12 mt-3 text-4xl md:text-6xl">
        Book The Hideout.
      </h1>
      <Suspense>
        <BookingWizard />
      </Suspense>
    </section>
  );
}
