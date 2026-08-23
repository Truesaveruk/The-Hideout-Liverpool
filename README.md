# The Hideout Liverpool — website

**This isn't a spa. It's your Hideout.**

Next.js 14 (App Router) · TypeScript · Tailwind CSS. Built mobile-first for the
same stack as your other sites (GitHub → Vercel).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy

Push to a GitHub repo and import into Vercel. Zero config needed.

## Edit content (no code knowledge required beyond text edits)

| What | Where |
|---|---|
| Business name, email, collection radius | `lib/site.ts` |
| Concierge pricing (£150 / £250) | `lib/site.ts` |
| The five experiences (and future ones) | `lib/experiences.ts` |
| FAQs | `lib/faqs.ts` |
| Local per-experience prices | `app/prices/page.tsx` → `localPrices` |

Adding a new experience to `lib/experiences.ts` automatically adds it to the
homepage, Experiences page, Prices page and booking wizard.

## Photography

Every image is a labelled placeholder (`components/ImagePanel.tsx`) telling you
exactly which shot to take: sauna interior, sound room, steam, tea, Crosby
Beach / Another Place, Liverpool waterfront. Replace placeholders with
`next/image` once real photos exist. No stock resort imagery.

## Integration points (clearly marked in code — nothing is faked)

1. **Booking** — `components/BookingWizard.tsx`. Currently sends a structured
   booking request via the guest's own email app. Wire up Cal.com/Calendly for
   availability and Stripe Checkout for payment when ready.
2. **Partner enquiries** — `components/PartnerForm.tsx`. Same mailto pattern;
   swap for a form handler + admin notification.
3. **Gift vouchers** — `app/gift/page.tsx`. Connect Stripe Payment Links or a
   voucher platform.
4. **Analytics** — add GA4 / Meta Pixel via a consent-gated script in
   `app/layout.tsx` alongside a cookie banner (e.g. CookieYes) before going
   live with ads.
5. **Address / NAP** — `lib/site.ts` and the JSON-LD in `app/layout.tsx`
   intentionally omit a street address. Add one only when a public address is
   approved — never expose the private residence. Keep it identical across
   Google Business Profile, Bing Places and TripAdvisor.

## SEO already in place

- Per-page titles/descriptions targeting: private sauna Liverpool, cold plunge
  Liverpool, sound bath Liverpool, breathwork Liverpool, things to do in
  Liverpool for couples, wellness Crosby.
- LocalBusiness JSON-LD (layout) and FAQPage JSON-LD (FAQ page).
- Open Graph tags. Add an `opengraph-image.jpg` in `app/` once photos exist.
- Submit to Google Search Console after deploy.

## Deliberately not included

- Invented reviews, ratings, awards, press or partner logos (labelled
  placeholders only).
- Any supplier/brand names for the vibroacoustic equipment.
- Medical claims of any kind.
