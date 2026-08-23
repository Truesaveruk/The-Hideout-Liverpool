"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/**
 * Partner enquiry form.
 * INTEGRATION POINT: currently composes an email via the visitor's own mail
 * app (no data is sent anywhere by the site itself). Swap `handleSubmit` for
 * a POST to your form handler / CRM / email service when ready, and add a
 * server-side notification to the admin inbox.
 */
export default function PartnerForm() {
  const [form, setForm] = useState({
    business: "",
    contact: "",
    email: "",
    phone: "",
    website: "",
    type: "Hotel",
    rooms: "",
    message: ""
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const handleSubmit = () => {
    const body = [
      `Business / accommodation name: ${form.business}`,
      `Contact name: ${form.contact}`,
      `Email: ${form.email}`,
      `Telephone: ${form.phone}`,
      `Website: ${form.website}`,
      `Type of accommodation: ${form.type}`,
      `Number of rooms / properties: ${form.rooms}`,
      "",
      form.message
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      "Hideout partner enquiry — " + form.business
    )}&body=${encodeURIComponent(body)}`;
  };

  const ready = form.business && form.contact && form.email;

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div>
        <label className="field-label" htmlFor="p-business">Business / accommodation name</label>
        <input id="p-business" className="field" value={form.business} onChange={set("business")} />
      </div>
      <div>
        <label className="field-label" htmlFor="p-contact">Contact name</label>
        <input id="p-contact" className="field" value={form.contact} onChange={set("contact")} />
      </div>
      <div>
        <label className="field-label" htmlFor="p-email">Email</label>
        <input id="p-email" type="email" className="field" value={form.email} onChange={set("email")} />
      </div>
      <div>
        <label className="field-label" htmlFor="p-phone">Telephone</label>
        <input id="p-phone" type="tel" className="field" value={form.phone} onChange={set("phone")} />
      </div>
      <div>
        <label className="field-label" htmlFor="p-web">Website</label>
        <input id="p-web" className="field" value={form.website} onChange={set("website")} placeholder="https://" />
      </div>
      <div>
        <label className="field-label" htmlFor="p-type">Type of accommodation</label>
        <select id="p-type" className="field" value={form.type} onChange={set("type")}>
          {["Hotel", "Boutique hotel", "Airbnb host", "Serviced apartments", "Holiday lets", "Other short stay"].map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="md:col-span-2">
        <label className="field-label" htmlFor="p-rooms">Number of rooms / properties</label>
        <input id="p-rooms" className="field" value={form.rooms} onChange={set("rooms")} />
      </div>
      <div className="md:col-span-2">
        <label className="field-label" htmlFor="p-msg">Message</label>
        <textarea id="p-msg" rows={4} className="field" value={form.message} onChange={set("message")} />
      </div>
      <div className="md:col-span-2">
        <button type="button" onClick={handleSubmit} disabled={!ready} className="btn-primary disabled:opacity-40">
          Let&apos;s work together
        </button>
        <p className="mt-3 text-xs text-steam/70">
          This opens an email to us in your mail app — nothing is stored on this
          website.
        </p>
      </div>
    </div>
  );
}
