import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BRAND } from "../../giltlane/brand";
import { CASE_RESULTS, INTENTS } from "../../giltlane/content";
import "../../giltlane/giltlane.css";

const SCENES = [
  {
    image: "/assets/giltlane/giltlane-results-desk.jpg",
    kicker: BRAND.name,
    line: "We don't post. We move numbers.",
    stat: "+340% reach · illustrative model",
  },
  {
    image: "/assets/giltlane/giltlane-instagram-hand.jpg",
    kicker: INTENTS[0].title,
    line: "Grid, Reels, Stories, captions, DMs — planned, designed, scheduled, reported.",
    stat: "2.1k → 6.8k followers · example",
  },
  {
    image: "/assets/giltlane/giltlane-results-desk.jpg",
    kicker: INTENTS[1].title,
    line: "Content that sends people to WhatsApp, a form, or a calendar — not into the void.",
    stat: "3 → 11 intros/mo · example",
  },
  {
    image: "/assets/giltlane/giltlane-reels-set.jpg",
    kicker: INTENTS[2].title,
    line: "Instagram, LinkedIn, Facebook, WhatsApp — one voice, one desk.",
    stat: "12–16 posts/mo · one calendar",
  },
  {
    image: "/assets/giltlane/giltlane-clinic-alt.jpg",
    kicker: CASE_RESULTS[0].vertical,
    line: "9 → 31 WhatsApp enquiries. Starting fees on the page, not in DMs.",
    stat: CASE_RESULTS[0].region,
  },
  {
    image: "/assets/giltlane/giltlane-audience-alt.jpg",
    kicker: CASE_RESULTS[1].vertical,
    line: "4.2k → 11k followers. UGC + education carousels + shoppable Stories.",
    stat: CASE_RESULTS[1].region,
  },
  {
    image: "/assets/giltlane/giltlane-education-ops.jpg",
    kicker: "Real system",
    line: "Education CRM + WhatsApp AI — pipeline, broadcasts, counsellor desk. Shipped.",
    stat: "Production · unnamed client",
  },
  {
    image: "/assets/giltlane/giltlane-story-light.jpg",
    kicker: "Start",
    line: "Send your handle. We send the audit. 50% to start.",
    stat: BRAND.email,
  },
];

export default function GiltlaneSizzle() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    document.title = `Walkthrough — ${BRAND.name}`;
    document.body.classList.add("giltlane-body");
    return () => document.body.classList.remove("giltlane-body");
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(() => setI((n) => (n + 1) % SCENES.length), 5200);
    return () => window.clearTimeout(t);
  }, [i, paused]);

  const scene = SCENES[i];

  return (
    <div className="uk-root">
      <div className="relative min-h-screen bg-[var(--uk-deep)] text-[var(--uk-paper)] overflow-hidden">
        <img
          key={scene.image}
          src={scene.image}
          alt=""
          className="uk-ken absolute inset-0 w-full h-full object-cover opacity-48"
        />
        <div className="absolute inset-0 bg-[var(--uk-deep)]/52" />
        <div className="uk-grain" />
        <div className="uk-letterbox pointer-events-none absolute inset-0" />

        <div className="relative z-10 min-h-screen flex flex-col">
          <div className="flex items-center justify-between px-6 h-14 text-xs">
            <Link to="/giltlane" className="opacity-80 hover:opacity-100">
              ← {BRAND.name}
            </Link>
            <button type="button" className="opacity-80 hover:opacity-100" onClick={() => setPaused((p) => !p)}>
              {paused ? "Play" : "Pause"}
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-end px-8 sm:px-16 pb-20 max-w-4xl">
            <p className="uk-kicker !text-[#e8b89a]">{scene.kicker}</p>
            <h1 className="uk-display text-3xl sm:text-5xl leading-[1.1] mt-4">{scene.line}</h1>
            <p className="text-sm mt-4 opacity-70 tracking-wide">{scene.stat}</p>
            {i === SCENES.length - 1 && (
              <Link to="/giltlane/deck" className="uk-btn uk-btn-primary mt-8 w-fit !bg-[var(--uk-paper)] !text-[var(--uk-ink)]">
                Open results deck
              </Link>
            )}
          </div>

          <div className="px-8 pb-6 flex gap-1.5">
            {SCENES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`h-0.5 flex-1 ${idx === i ? "bg-[var(--uk-copper)]" : "bg-white/25"}`}
                onClick={() => setI(idx)}
                aria-label={`Scene ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
