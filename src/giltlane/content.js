const img = (name) => `/assets/giltlane/${name}`;

export const INTENTS = [
  {
    id: "instagram",
    title: "Run my Instagram",
    hook: "Grid, Reels, Stories, captions, hashtags, DMs — we plan it, shoot briefs, design, schedule, and report. You approve. We publish.",
    includes: [
      "Content calendar (4 weeks ahead)",
      "12–20 posts / month (feed + Reels + Stories)",
      "Caption + hashtag sets in your voice",
      "DM & comment first-response scripts",
      "Monthly reach, saves, profile visits report",
    ],
    result: {
      label: "Example · beauty brand",
      before: "2.1k followers · 400 avg reach/post · bio with no link",
      after: "6.8k followers · 2.4k avg reach/post · link-in-bio booking page",
      note: "Illustrative 90-day engagement model. Your niche and starting point change the curve.",
    },
    image: img("giltlane-instagram-hand.jpg"),
  },
  {
    id: "leads",
    title: "Get me business leads",
    hook: "Content that sends people somewhere real: a form, WhatsApp, calendar, or checkout. LinkedIn for B2B. Instagram + Google for local. We track enquiries, not vanity likes.",
    includes: [
      "Lead magnets: offers, landing sections, WhatsApp CTAs",
      "LinkedIn + Instagram aimed at enquiry, not applause",
      "Google Business profile alignment",
      "Weekly lead log: source, message, status",
      "Retargeting-ready creative (Meta / LinkedIn)",
    ],
    result: {
      label: "Example · B2B consultant",
      before: "3–4 inbound DMs/month · no CRM · 48h average reply",
      after: "11–14 qualified intros/month · pipeline sheet · under 2h reply SLA",
      note: "Illustrative retainer target. Qualified = fits budget + timeline, not every DM.",
    },
    image: img("giltlane-results-desk.jpg"),
  },
  {
    id: "social",
    title: "Handle all my social",
    hook: "One studio runs Instagram, LinkedIn, Facebook, and WhatsApp Business together — same voice, same offers, same reply desk. You stop juggling five apps at midnight.",
    includes: [
      "Cross-platform content adapted per channel",
      "Community management (comments + DMs, business hours)",
      "Brand kit: fonts, colours, tone, offer language",
      "Crisis / complaint escalation path to you",
      "Monthly strategy call + next-month plan",
    ],
    result: {
      label: "Example · multi-branch clinic",
      before: "4 part-time staff posting randomly · inconsistent prices in DMs",
      after: "One calendar · one voice · 22% more booked consults from social (model)",
      note: "Illustrative ops consolidation. We measure consults booked, not post count.",
    },
    image: img("giltlane-reels-set.jpg"),
  },
  {
    id: "sales",
    title: "Turn attention into sales",
    hook: "Site or shop link, prices on the page, WhatsApp that answers FAQs, and a pipeline you can see. For businesses tired of 'DM for price'.",
    includes: [
      "Conversion site or link-in-bio hub",
      "WhatsApp Business desk + AI first line",
      "Offer pages: packages, starting fees, availability",
      "Broadcast templates for promos & reminders",
      "Simple CRM: stage, owner, last touch",
    ],
    result: {
      label: "Example · education consultancy",
      before: "Leads in 6 WhatsApp groups · Excel at midnight · missed seminar RSVPs",
      after: "Single pipeline · city broadcasts · counsellor takeover in one click",
      note: "Based on a real production system we built. Client unnamed. Metrics are operational, not invented ROI %.",
    },
    image: img("giltlane-crm-ops.jpg"),
  },
];

export const STUDIO_STATS = [
  { value: "12+", label: "platforms we operate", sub: "Instagram · LinkedIn · Meta · WhatsApp · Google · TikTok" },
  { value: "48h", label: "first draft turnaround", sub: "Launch packages · not months of deck theatre" },
  { value: "50%", label: "deposit to start", sub: "Balance on delivery · retainers in advance" },
  { value: "1 desk", label: "for content + enquiries", sub: "Most agencies stop at the post button" },
];

export const CASE_RESULTS = [
  {
    vertical: "Aesthetic clinic",
    region: "Gulf · illustrative",
    image: img("giltlane-clinic-alt.jpg"),
    problem: "Beautiful feed. Empty Tuesday slots. Prices only in DMs.",
    metrics: [
      { k: "Profile visits", from: "820/mo", to: "2.9k/mo" },
      { k: "WhatsApp enquiries", from: "9/mo", to: "31/mo" },
      { k: "Booked consults", from: "14/mo", to: "26/mo" },
    ],
    did: "Link-in-bio with starting fees, Reels that show results not filters, Arabic/English captions, Ramadan promo broadcast.",
  },
  {
    vertical: "D2C skincare",
    region: "Online · illustrative",
    image: img("giltlane-audience-alt.jpg"),
    problem: "Inconsistent posting. No UGC. Ads burning budget on cold traffic.",
    metrics: [
      { k: "Followers", from: "4.2k", to: "11k" },
      { k: "Avg saves/post", from: "12", to: "89" },
      { k: "Shop clicks", from: "180/mo", to: "640/mo" },
    ],
    did: "UGC briefs for 8 creators, product education carousel series, shoppable Stories template, weekly offer slot.",
  },
  {
    vertical: "Professional services",
    region: "Remote · illustrative",
    image: img("giltlane-london-consultant.jpg"),
    problem: "LinkedIn ghost town. Website from 2019. Prospects choose whoever replied first.",
    metrics: [
      { k: "Inbound intros", from: "2/mo", to: "9/mo" },
      { k: "Post impressions", from: "1.1k avg", to: "8.4k avg" },
      { k: "Reply time", from: "2 days", to: "<4 hrs" },
    ],
    did: "One positioning line repeated for 90 days, case-style posts (no fake names), Calendly on every touchpoint.",
  },
  {
    vertical: "Education consultancy",
    region: "Multi-city · real system",
    image: img("giltlane-education-ops.jpg"),
    problem: "Seminar leads scattered across Facebook, personal phones, and spreadsheets.",
    metrics: [
      { k: "Lead capture", from: "Manual entry", to: "Campaign ingest + dedupe" },
      { k: "City broadcasts", from: "Ad-hoc groups", to: "Meta template sends" },
      { k: "Counsellor desk", from: "Personal WhatsApp", to: "Shared pipeline + AI line" },
    ],
    did: "Production CRM + WhatsApp Business AI: pipeline, roles, document checks, student portal. Shown on Work page.",
  },
];

export const PLATFORMS = [
  "Instagram",
  "LinkedIn",
  "Facebook",
  "WhatsApp Business",
  "Google Business",
  "TikTok",
  "YouTube Shorts",
  "Pinterest",
];

export const PROCESS = [
  { step: "01", title: "Audit", body: "We read your profiles, site, competitors, and last 30 days of DMs. You get a one-page gap list — not a 40-slide deck." },
  { step: "02", title: "Plan", body: "Offers, voice, calendar, and where leads should land. You sign off before we design a single post." },
  { step: "03", title: "Ship", body: "Content goes live. Site or bio hub goes live. WhatsApp scripts go live. Week one is visible, not 'strategy phase'." },
  { step: "04", title: "Measure", body: "Enquiries, bookings, reach, saves — whatever matches your intent. Monthly call. We kill what does not move the number." },
];

export const PROOF_LINE =
  "Example metrics are labelled illustrative unless marked as a real system build. We do not invent named clients or fake Google reviews.";
