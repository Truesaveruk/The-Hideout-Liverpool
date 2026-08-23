export type Faq = { q: string; a: string };
export type FaqGroup = { title: string; faqs: Faq[] };

export const faqGroups: FaqGroup[] = [
  {
    title: "About The Hideout",
    faqs: [
      {
        q: "What is The Hideout?",
        a: "The Hideout is a small, private wellness space in Crosby, Liverpool. We combine traditional sauna, cold plunge, breathwork and immersive sound in experiences you book privately — for yourself, as a couple, or with a few friends."
      },
      {
        q: "Where is The Hideout?",
        a: "We're in Crosby, on the Liverpool coastline, close to Crosby Beach and Antony Gormley's Another Place. The full address is shared when you book."
      },
      {
        q: "Is it a commercial spa?",
        a: "No — and that's the point. The Hideout is a small, homely, private space. There are no crowds, no busy changing rooms and no strangers sharing your experience."
      },
      {
        q: "Is the experience private?",
        a: "All Hideout experiences — sound, breathwork and the signature journeys — are booked privately. We also run Open Sauna Sessions (£15 per person, per hour), which are shared with a few other guests with numbers capped. They're clearly labelled when you book, so you always know which you're choosing."
      },
      {
        q: "What's the difference between an Open Sauna Session and Private Sauna Hire?",
        a: "An Open Sauna Session is £15 per person for an hour, shared with a small number of other guests, with full use of the cold plunge. Private Sauna Hire is £60 per hour for the whole sauna, just your group, up to six people — £10 each when you fill it."
      },
      {
        q: "Can I come alone?",
        a: "Absolutely. Many guests come solo. It's your space and your pace."
      },
      {
        q: "Can couples book?",
        a: "Yes — The Hideout is a favourite for couples, dates, anniversaries and weekend breaks."
      },
      {
        q: "How many people can attend?",
        a: "Up to four guests for the 90-minute experiences, up to six for Private Sauna Hire, up to four for Group Sound Baths, two for the Couples Sound Journey, and the Immersive Sound Journey is 1-to-1. For anything larger, get in touch and we'll see what we can arrange."
      }
    ]
  },
  {
    title: "The experiences",
    faqs: [
      {
        q: "Do I have to use the cold plunge?",
        a: "No. The cold is always optional. Plenty of guests build up to it over a few visits — or skip it entirely."
      },
      {
        q: "I've never tried breathwork before — is that okay?",
        a: "Completely. Every breathwork session starts with a proper introduction, and everything is guided. No experience is needed."
      },
      {
        q: "What is vibroacoustic sound?",
        a: "It's sound you can physically feel. Alongside traditional instruments and immersive audio, a specialist vibration mat lets selected sound, music and low frequencies be experienced through the body — like stepping inside sound rather than just listening to it."
      },
      {
        q: "How long is the experience?",
        a: "Sound immersions — the 1-to-1 journey, the couples journey and group sound baths — are 60 minutes. Anything that includes the sauna runs 90 minutes, with time to relax with refreshments afterwards. Sauna sessions and hire are by the hour."
      },
      {
        q: "What should I bring?",
        a: "Swimwear for the sauna and cold plunge, and anything you like to relax in afterwards. Everything else is taken care of."
      },
      {
        q: "Are towels provided?",
        a: "Yes — towels are provided."
      },
      {
        q: "Are refreshments included?",
        a: "Yes. Every experience finishes with time to relax and enjoy refreshments."
      },
      {
        q: "Can I bring my phone?",
        a: "You can — but we'd encourage you not to need it. Take a photo before or after if you like, then put it away. Some experiences don't need to be posted to be remembered."
      }
    ]
  },
  {
    title: "Collection for Liverpool visitors",
    faqs: [
      {
        q: "How does collection work?",
        a: "Choose your experience, tell us where you're staying, and we'll collect you, bring you to The Hideout, and return you afterwards. Concierge bookings include one pickup point and one return drop-off point."
      },
      {
        q: "Where can you collect me from?",
        a: "Anywhere within 8 miles of The Hideout — which covers Liverpool city centre, the waterfront, Crosby, Waterloo, Formby and the surrounding areas."
      },
      {
        q: "Can you collect from my hotel?",
        a: "Yes, as long as it's within our 8-mile collection area."
      },
      {
        q: "Can you collect from an Airbnb?",
        a: "Yes — Airbnbs, serviced apartments and holiday lets are all fine, within the 8-mile collection area."
      },
      {
        q: "Can you collect four people?",
        a: "Yes. Concierge bookings cover up to four guests, collected from one agreed pickup point."
      },
      {
        q: "Can you collect us from different hotels?",
        a: "Concierge bookings include one pickup point and one return drop-off point, so everyone in the booking should meet at the same collection point."
      },
      {
        q: "What happens if we're more than 8 miles away?",
        a: "Collection outside the 8-mile area may be available by prior arrangement and may incur an additional charge. Contact us before booking and we'll see what we can arrange — we can't automatically confirm transport outside the service area."
      }
    ]
  },
  {
    title: "Gifts and partners",
    faqs: [
      {
        q: "Can I buy a gift voucher?",
        a: "Yes — any Hideout experience can be given as a gift. See Gift The Hideout for details."
      },
      {
        q: "Can hotels partner with The Hideout?",
        a: "Yes. We work with hotels, Airbnb hosts, serviced apartments and holiday-let managers. You recommend, your guests book, we collect and deliver the experience. See the Visiting Liverpool page to become a partner."
      }
    ]
  },
  {
    title: "Health and safety",
    faqs: [
      {
        q: "Is there anything I should know before booking?",
        a: "Sauna, cold exposure and breathwork are not suitable for everyone. If you are pregnant, have a heart or circulatory condition, low or high blood pressure, epilepsy, respiratory issues, or any other health condition or concern, please seek appropriate professional medical advice before booking. Our experiences are designed for relaxation and wellbeing — they are not medical treatments and don't replace medical care. If anything doesn't feel right on the day, you're always free to skip any part of the experience."
      }
    ]
  }
];
