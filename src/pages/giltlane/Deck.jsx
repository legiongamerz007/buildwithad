import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BRAND } from "../../giltlane/brand";
import { CASE_RESULTS, INTENTS, PROOF_LINE } from "../../giltlane/content";
import "../../giltlane/giltlane.css";

const SLIDES = [
  {
    cover: true,
    dark: true,
    image: "/assets/giltlane/giltlane-results-desk.jpg",
    kicker: BRAND.name,
    title: "We don't post.\nWe move numbers.",
    body: "Instagram handled. Leads in the inbox. Every social channel run properly. For clinics, brands, coaches, and consultancies — anywhere.",
    stats: [
      { value: "+340%", label: "reach · illustrative model" },
      { value: "31", label: "WhatsApp enquiries/mo · clinic example" },
      { value: "48h", label: "first draft · launch packages" },
    ],
  },
  {
    kicker: "Pick your lane",
    title: "Four reasons people hire us.",
    packs: INTENTS.map((i) => ({
      name: i.title,
      price: i.hook.split(".")[0] + ".",
      note: i.includes[0],
    })),
    aside: "Same studio. You choose Instagram-only, leads, full social, or sales desk.",
  },
  {
    kicker: "Instagram",
    title: "Run my Instagram — what ships in 30 days.",
    bullets: [
      "Content calendar · feed + Reels + Stories",
      "Captions, hashtags, design — your voice, our production",
      "DM scripts + link hub that actually converts",
      "Report: reach, saves, profile visits — not vanity alone",
    ],
    stats: [
      { value: "2.1k → 6.8k", label: "followers · beauty brand model" },
      { value: "400 → 2.4k", label: "avg reach/post" },
    ],
    image: "/assets/giltlane/giltlane-instagram-hand.jpg",
  },
  {
    kicker: "Leads",
    title: "Get me business leads — what we measure.",
    bullets: [
      "LinkedIn + Instagram aimed at enquiry",
      "Landing sections, WhatsApp CTAs, Google alignment",
      "Weekly lead log: source, message, qualified Y/N",
      "Reply SLA under 4 hours on retainer",
    ],
    stats: [
      { value: "3 → 11", label: "qualified intros/mo · consultant model" },
      { value: "48h → 2h", label: "avg first reply" },
    ],
    image: "/assets/giltlane/giltlane-results-desk.jpg",
  },
  {
    kicker: "Full social",
    title: "Handle all my social — one voice, one desk.",
    bullets: [
      "Instagram · LinkedIn · Facebook · WhatsApp together",
      "Community management in business hours",
      "Brand kit + escalation path for complaints",
      "Monthly strategy call — next month planned, not guessed",
    ],
    image: "/assets/giltlane/giltlane-reels-set.jpg",
  },
  {
    dark: true,
    kicker: "Case · aesthetic clinic",
    title: "Gulf clinic · illustrative 90-day model",
    metrics: CASE_RESULTS[0].metrics,
    body: CASE_RESULTS[0].did,
    image: "/assets/giltlane/giltlane-clinic-alt.jpg",
    aside: PROOF_LINE,
  },
  {
    kicker: "Case · D2C skincare",
    title: "Online brand · illustrative growth model",
    metrics: CASE_RESULTS[1].metrics,
    body: CASE_RESULTS[1].did,
    image: "/assets/giltlane/giltlane-audience-alt.jpg",
  },
  {
    kicker: "Case · professional services",
    title: "Remote consultant · illustrative retainer",
    metrics: CASE_RESULTS[2].metrics,
    body: CASE_RESULTS[2].did,
    image: "/assets/giltlane/giltlane-london-consultant.jpg",
  },
  {
    dark: true,
    kicker: "Real build",
    title: "Education CRM + WhatsApp AI — in production.",
    body: "Multi-city consultancy. Campaign ingest. City broadcasts. Counsellor desk. Document checks. Not a mockup — a system we shipped.",
    bullets: [
      "Meta WhatsApp Business + template sends",
      "Pipeline with roles, campuses, student portal",
      "AI first line + human takeover",
    ],
    image: "/assets/giltlane/giltlane-education-ops.jpg",
  },
  {
    kicker: "Process",
    title: "Audit → Plan → Ship → Measure.",
    bullets: [
      "Week 1: gap list + signed-off calendar",
      "Week 2–3: content live, hub live, scripts live",
      "Week 4+: report against the number you hired us for",
      "Kill what does not move enquiries or sales",
    ],
  },
  {
    kicker: "Investment",
    title: "Launch · Growth · Scale",
    packs: [
      { name: "Launch", price: "From $1,500 · £1,250 · ₨420k", note: "10–14 days · one channel focus" },
      { name: "Growth", price: "From $1,850/mo · £1,450/mo", note: "12–16 posts · community · report" },
      { name: "Scale", price: "$5,500 + $2,350/mo", note: "Full social + WhatsApp desk + CRM" },
    ],
    aside: "50% deposit. Balance on delivery. Retainers in advance.",
  },
  {
    cover: true,
    dark: true,
    image: "/assets/giltlane/giltlane-story-light.jpg",
    kicker: "Next",
    title: "Send your handle.\nWe send the audit.",
    body: `${BRAND.email} · buildwithad.dev/giltlane · 50% to start`,
  },
];

export default function GiltlaneDeck() {
  const [i, setI] = useState(0);
  const last = SLIDES.length - 1;
  const slide = SLIDES[i];

  const go = useCallback((n) => setI(Math.max(0, Math.min(last, n))), [last]);

  useEffect(() => {
    document.title = `Presentation — ${BRAND.name}`;
    document.body.classList.add("giltlane-body");
    return () => document.body.classList.remove("giltlane-body");
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(i + 1);
      }
      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(i - 1);
      }
      if (e.key === "Home") go(0);
      if (e.key === "End") go(last);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, i, last]);

  const dark = Boolean(slide.dark);
  const hasImage = Boolean(slide.image);

  return (
    <div className="uk-root">
      <div
        className={`relative min-h-screen flex flex-col ${dark ? "bg-[var(--uk-deep)] text-[var(--uk-paper)]" : "bg-[var(--uk-paper)] text-[var(--uk-ink)]"}`}
      >
        {slide.cover && slide.image && (
          <div className="pointer-events-none absolute inset-0">
            <img src={slide.image} alt="" className="w-full h-full object-cover opacity-45" />
            <div className="absolute inset-0 bg-[var(--uk-deep)]/62" />
            <div className="uk-grain" />
          </div>
        )}

        <div className="uk-no-print relative z-10 flex items-center justify-between px-5 sm:px-8 h-12 text-xs">
          <Link to="/giltlane" className={dark ? "opacity-70 hover:opacity-100" : "text-[var(--uk-muted)] hover:text-[var(--uk-ink)]"}>
            ← Studio
          </Link>
          <p className={dark ? "opacity-60" : "text-[var(--uk-muted)]"}>
            {i + 1} / {SLIDES.length} · arrows or click
          </p>
          <span className={dark ? "opacity-60" : "text-[var(--uk-muted)]"}>{BRAND.name}</span>
        </div>

        <main
          className={`relative z-10 flex-1 grid cursor-pointer ${hasImage && !slide.cover ? "md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]" : ""}`}
          onClick={(e) => {
            const mid = window.innerWidth / 2;
            go(e.clientX > mid ? i + 1 : i - 1);
          }}
        >
          <div className="flex flex-col justify-center px-8 sm:px-14 py-8 max-w-3xl min-h-[70vh]">
            {slide.kicker && (
              <p className={`uk-kicker ${dark ? "!text-[#e8b89a]" : ""}`}>{slide.kicker}</p>
            )}
            <h1 className="uk-display text-3xl sm:text-[2.85rem] leading-[1.08] mt-4 whitespace-pre-line">
              {slide.title}
            </h1>
            {slide.body && (
              <p className={`mt-6 text-lg leading-relaxed ${dark ? "text-[var(--uk-paper)]/75" : "text-[var(--uk-muted)]"}`}>
                {slide.body}
              </p>
            )}
            {slide.stats && (
              <div className="grid grid-cols-3 gap-3 mt-8">
                {slide.stats.map((s) => (
                  <div key={s.label} className={`uk-deck-stat ${dark ? "uk-deck-stat-dark" : ""}`}>
                    <p className="uk-display text-2xl sm:text-3xl text-[var(--uk-copper)]">{s.value}</p>
                    <p className={`text-xs mt-1 ${dark ? "opacity-65" : "text-[var(--uk-muted)]"}`}>{s.label}</p>
                  </div>
                ))}
              </div>
            )}
            {slide.metrics && (
              <div className="grid grid-cols-3 gap-3 mt-8">
                {slide.metrics.map((m) => (
                  <div key={m.k} className={`uk-deck-stat text-center ${dark ? "uk-deck-stat-dark" : ""}`}>
                    <p className="text-[0.6rem] uppercase tracking-wider opacity-55">{m.k}</p>
                    <p className="text-xs line-through opacity-40 mt-1">{m.from}</p>
                    <p className="text-base font-semibold text-[var(--uk-copper)] mt-0.5">{m.to}</p>
                  </div>
                ))}
              </div>
            )}
            {slide.bullets && (
              <ul className="mt-8 space-y-3">
                {slide.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-[1.02rem] leading-snug">
                    <span className="text-[var(--uk-copper)] mt-1">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {slide.packs && (
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {slide.packs.map((p) => (
                  <div key={p.name} className={`p-4 border ${dark ? "border-white/15" : "border-[var(--uk-line)]"}`}>
                    <p className="uk-display text-xl">{p.name}</p>
                    <p className="mt-2 font-semibold text-sm">{p.price}</p>
                    <p className={`text-sm mt-1 ${dark ? "opacity-70" : "text-[var(--uk-muted)]"}`}>{p.note}</p>
                  </div>
                ))}
              </div>
            )}
            {slide.aside && (
              <p className={`mt-8 text-sm italic ${dark ? "opacity-70" : "text-[var(--uk-muted)]"}`}>
                {slide.aside}
              </p>
            )}
          </div>

          {hasImage && !slide.cover && (
            <div className="relative min-h-[36vh] md:min-h-[60vh]">
              <img src={slide.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          )}
        </main>

        <div className="uk-no-print relative z-10 px-5 sm:px-8 pb-5 flex items-center gap-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Slide ${idx + 1}`}
              onClick={(e) => {
                e.stopPropagation();
                go(idx);
              }}
              className={`h-1 flex-1 max-w-10 ${idx === i ? "bg-[var(--uk-copper)]" : dark ? "bg-white/20" : "bg-[var(--uk-line)]"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
