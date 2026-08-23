"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { experiences, saunaSessions, soundSessions } from "@/lib/experiences";

const bookable = [...saunaSessions, ...soundSessions, ...experiences];
const hourlySlots = ["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"];
import { site } from "@/lib/site";

/**
 * Booking journey.
 *
 * INTEGRATION POINT — payments & availability:
 * This wizard collects a complete, structured booking request and (for now)
 * sends it as an email enquiry via the guest's own mail app. No fake
 * availability or fake payment is shown. To take live bookings, connect:
 *   - a booking/availability provider (Cal.com, Calendly, or a specialist
 *     platform) at the date/time step, and
 *   - Stripe Checkout / Payment Links at the confirm step, and
 *   - a server route for email confirmations + admin notifications.
 */

type Mode = "local" | "concierge" | null;

const steps = ["How you're visiting", "Experience", "Your visit", "Details", "Review"];

export default function BookingWizard() {
  const params = useSearchParams();
  const [step, setStep] = useState(() => {
    if (params.get("mode") === "concierge") return 1;
    if (params.get("experience")) return 0;
    return 0;
  });
  const [mode, setMode] = useState<Mode>(
    params.get("mode") === "concierge" ? "concierge" : null
  );
  const [experience, setExperience] = useState<string>(
    params.get("experience") ?? ""
  );
  const [form, setForm] = useState({
    guests: "2",
    date: "",
    time: "",
    name: "",
    email: "",
    mobile: "",
    accommodationName: "",
    accommodationAddress: "",
    postcode: "",
    pickup: "",
    dropoff: "",
    samePickup: false,
    withinRadius: "" as "" | "yes" | "no" | "unsure",
    discountCode: ""
  });

  const set = (k: keyof typeof form, v: string | boolean) =>
    setForm((f) => ({ ...f, [k]: v }));

  const chosen = bookable.find((e) => e.slug === experience);
  const maxGuests = chosen?.maxGuests ?? 4;
  const concierge = mode === "concierge";
  const outsideArea = concierge && form.withinRadius === "no";

  const canContinue = [
    mode !== null,
    experience !== "",
    form.guests && form.date && form.time,
    form.name &&
      form.email &&
      form.mobile &&
      (!concierge ||
        (form.accommodationName &&
          form.postcode &&
          form.pickup &&
          form.dropoff &&
          form.samePickup &&
          form.withinRadius !== "")),
    true
  ][step];

  const submit = () => {
    const lines = [
      `Booking request — ${chosen?.name ?? ""}`,
      `Visiting: ${concierge ? "Needs collection (Concierge)" : "Local / making own way"}`,
      `Guests: ${form.guests}`,
      `Preferred date: ${form.date}`,
      `Preferred time: ${form.time}`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Mobile: ${form.mobile}`
    ];
    if (form.discountCode) lines.push(`Discount code: ${form.discountCode}`);
    if (concierge) {
      lines.push(
        `Accommodation: ${form.accommodationName}`,
        `Address: ${form.accommodationAddress}`,
        `Postcode: ${form.postcode}`,
        `Pickup location: ${form.pickup}`,
        `Return drop-off: ${form.dropoff}`,
        `Everyone meeting at one pickup point: ${form.samePickup ? "Yes" : "No"}`,
        `Within ${site.collectionRadiusMiles} miles: ${form.withinRadius}`
      );
    }
    window.location.href = `mailto:${site.bookingEmail}?subject=${encodeURIComponent(
      `Booking request — ${chosen?.name ?? "The Hideout"}`
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
  };

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress */}
      <ol className="mb-10 flex flex-wrap gap-x-5 gap-y-2 text-[0.65rem] uppercase tracking-[0.14em]">
        {steps.map((label, i) => (
          <li
            key={label}
            className={i === step ? "text-brass" : i < step ? "text-bone/70" : "text-steam/50"}
          >
            {i + 1}. {label}
          </li>
        ))}
      </ol>

      {/* STEP 1 — how visiting */}
      {step === 0 && (
        <div>
          <h2 className="display text-3xl md:text-5xl">How are you visiting?</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <button
              type="button"
              onClick={() => setMode("local")}
              className={`rounded-2xl border p-6 text-left transition-colors ${
                mode === "local" ? "border-brass bg-smoke" : "border-bone/15 hover:border-bone/40"
              }`}
            >
              <p className="font-display text-xl">I&apos;m local / making my own way</p>
              <p className="mt-2 text-sm text-steam">
                From Liverpool, Crosby, Waterloo, Formby and around.
              </p>
            </button>
            <button
              type="button"
              onClick={() => setMode("concierge")}
              className={`rounded-2xl border p-6 text-left transition-colors ${
                mode === "concierge" ? "border-brass bg-smoke" : "border-bone/15 hover:border-bone/40"
              }`}
            >
              <p className="font-display text-xl">I&apos;m visiting Liverpool / need collection</p>
              <p className="mt-2 text-sm text-steam">
                We&apos;ll collect you and return you — included in Concierge
                pricing.
              </p>
            </button>
          </div>
        </div>
      )}

      {/* STEP 2 — experience */}
      {step === 1 && (
        <div>
          <h2 className="display text-3xl md:text-5xl">Choose your experience</h2>
          <div className="mt-8 grid gap-3">
            {bookable.map((exp) => (
              <button
                key={exp.slug}
                type="button"
                onClick={() => {
                  setExperience(exp.slug);
                  const cap = exp.maxGuests ?? 4;
                  if (parseInt(form.guests) > cap) set("guests", String(cap));
                }}
                className={`flex items-center justify-between gap-4 rounded-2xl border p-5 text-left transition-colors ${
                  experience === exp.slug
                    ? "border-brass bg-smoke"
                    : "border-bone/15 hover:border-bone/40"
                }`}
              >
                <span>
                  <span className="font-display text-lg">{exp.name}</span>
                  <span className="block text-sm text-steam">{exp.tagline}</span>
                </span>
                <span className="shrink-0 text-right">
                  {exp.price && (
                    <span className="block font-display text-xl text-brass">{exp.price}</span>
                  )}
                  {exp.priceNote && (
                    <span className="block text-[0.65rem] uppercase tracking-[0.1em] text-steam">{exp.priceNote}</span>
                  )}
                  {exp.badge && !exp.price && (
                    <span className="hidden rounded-full border border-brass/50 px-3 py-1 text-[0.6rem] uppercase tracking-[0.14em] text-brass sm:block">
                      {exp.badge}
                    </span>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* STEP 3 — guests, date, time */}
      {step === 2 && (
        <div>
          <h2 className="display text-3xl md:text-5xl">Your visit</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div>
              <label className="field-label" htmlFor="b-guests">Number of guests</label>
              <select id="b-guests" className="field" value={form.guests} onChange={(e) => set("guests", e.target.value)}>
                {Array.from({ length: maxGuests }, (_, i) => String(i + 1)).map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="field-label" htmlFor="b-date">Preferred date</label>
              <input id="b-date" type="date" className="field" value={form.date} onChange={(e) => set("date", e.target.value)} />
            </div>
            <div>
              <label className="field-label" htmlFor="b-time">Preferred time</label>
              {chosen?.hourly ? (
                <select id="b-time" className="field" value={form.time} onChange={(e) => set("time", e.target.value)}>
                  <option value="">Choose an hour</option>
                  {hourlySlots.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              ) : (
                <input id="b-time" type="time" className="field" value={form.time} onChange={(e) => set("time", e.target.value)} />
              )}
            </div>
          </div>
          <p className="mt-4 text-xs text-steam/70">
            {chosen?.hourly ? "These sessions are booked by the hour and run on the hour. " : ""}We&apos;ll confirm availability with you directly — your preferred
            slot isn&apos;t booked until we&apos;ve confirmed it.
          </p>
        </div>
      )}

      {/* STEP 4 — details */}
      {step === 3 && (
        <div>
          <h2 className="display text-3xl md:text-5xl">Your details</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="field-label" htmlFor="b-name">Name</label>
              <input id="b-name" className="field" value={form.name} onChange={(e) => set("name", e.target.value)} />
            </div>
            <div>
              <label className="field-label" htmlFor="b-email">Email</label>
              <input id="b-email" type="email" className="field" value={form.email} onChange={(e) => set("email", e.target.value)} />
            </div>
            <div>
              <label className="field-label" htmlFor="b-mobile">Mobile number</label>
              <input id="b-mobile" type="tel" className="field" value={form.mobile} onChange={(e) => set("mobile", e.target.value)} />
            </div>
            <div className="sm:col-span-2">
              <label className="field-label" htmlFor="b-code">Discount code (optional)</label>
              <input id="b-code" className="field" value={form.discountCode} onChange={(e) => set("discountCode", e.target.value)} placeholder="Got a code from us? Pop it in here" />
            </div>
          </div>

          {concierge && (
            <div className="mt-10">
              <h3 className="eyebrow">Collection details</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="field-label" htmlFor="b-acc">Accommodation name</label>
                  <input id="b-acc" className="field" value={form.accommodationName} onChange={(e) => set("accommodationName", e.target.value)} />
                </div>
                <div>
                  <label className="field-label" htmlFor="b-post">Postcode</label>
                  <input id="b-post" className="field" value={form.postcode} onChange={(e) => set("postcode", e.target.value)} />
                </div>
                <div className="sm:col-span-2">
                  <label className="field-label" htmlFor="b-addr">Accommodation address</label>
                  <input id="b-addr" className="field" value={form.accommodationAddress} onChange={(e) => set("accommodationAddress", e.target.value)} />
                </div>
                <div>
                  <label className="field-label" htmlFor="b-pickup">Pickup location</label>
                  <input id="b-pickup" className="field" value={form.pickup} onChange={(e) => set("pickup", e.target.value)} />
                </div>
                <div>
                  <label className="field-label" htmlFor="b-drop">Return drop-off location</label>
                  <input id="b-drop" className="field" value={form.dropoff} onChange={(e) => set("dropoff", e.target.value)} />
                </div>
              </div>

              <label className="mt-5 flex items-start gap-3 text-sm text-steam">
                <input
                  type="checkbox"
                  checked={form.samePickup}
                  onChange={(e) => set("samePickup", e.target.checked)}
                  className="mt-1 accent-[#D4AF5A]"
                />
                Everyone in our booking will meet at the same pickup point.
              </label>

              <fieldset className="mt-6">
                <legend className="field-label">
                  Is your location within {site.collectionRadiusMiles} miles of
                  The Hideout (Crosby)? Liverpool city centre and the waterfront
                  are within the area.
                </legend>
                <div className="flex flex-wrap gap-3">
                  {(["yes", "no", "unsure"] as const).map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => set("withinRadius", v)}
                      className={`rounded-full border px-5 py-2 text-sm capitalize transition-colors ${
                        form.withinRadius === v
                          ? "border-brass text-brass"
                          : "border-bone/20 text-steam hover:border-bone/50"
                      }`}
                    >
                      {v === "unsure" ? "Not sure" : v}
                    </button>
                  ))}
                </div>
              </fieldset>

              {outsideArea && (
                <p className="mt-5 rounded-2xl border border-brass/40 bg-smoke p-5 text-sm text-bone">
                  Your location is outside our standard collection area. Please{" "}
                  <a className="text-brass underline underline-offset-4" href={`mailto:${site.email}`}>
                    contact us
                  </a>{" "}
                  and we&apos;ll see what we can arrange.
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* STEP 5 — review */}
      {step === 4 && (
        <div>
          <h2 className="display text-3xl md:text-5xl">Nearly there.</h2>
          <dl className="mt-8 space-y-3 rounded-2xl border border-bone/10 bg-smoke p-6 text-sm">
            <Row k="Experience" v={chosen?.name ?? "—"} />
            {chosen?.price && <Row k="Price" v={`${chosen.price} ${chosen.priceNote ?? ""}`} />}
            <Row k="Visiting" v={concierge ? "With collection (Concierge)" : "Making my own way"} />
            <Row k="Guests" v={form.guests} />
            <Row k="Preferred date" v={form.date || "—"} />
            <Row k="Preferred time" v={form.time || "—"} />
            <Row k="Name" v={form.name} />
            {concierge && <Row k="Pickup" v={form.pickup} />}
            {concierge && <Row k="Return drop-off" v={form.dropoff} />}
          </dl>
          {outsideArea ? (
            <p className="mt-6 rounded-2xl border border-brass/40 bg-smoke p-5 text-sm text-bone">
              Your location is outside our standard collection area, so we
              can&apos;t confirm collection automatically. Please contact us and
              we&apos;ll see what we can arrange.
            </p>
          ) : (
            <>
              <button type="button" onClick={submit} className="btn-primary mt-8 w-full sm:w-auto">
                Send booking request
              </button>
              <p className="mt-4 text-xs text-steam/70">
                This opens your email app with your request ready to send.
                We&apos;ll reply personally to confirm your time. Nothing is
                charged now.
              </p>
            </>
          )}
        </div>
      )}

      {/* Nav */}
      <div className="mt-12 flex items-center justify-between border-t border-bone/10 pt-6">
        {step > 0 ? (
          <button type="button" onClick={() => setStep(step - 1)} className="btn-quiet">
            Back
          </button>
        ) : (
          <Link href="/experiences" className="btn-quiet">
            View experiences first
          </Link>
        )}
        {step < steps.length - 1 && (
          <button
            type="button"
            onClick={() => setStep(step + 1)}
            disabled={!canContinue}
            className="btn-primary disabled:opacity-40"
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-6">
      <dt className="text-steam">{k}</dt>
      <dd className="text-right text-bone">{v}</dd>
    </div>
  );
}
