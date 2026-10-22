import { useState } from "react";
import { INTENTS } from "./content";

export default function IntentPicker() {
  const [active, setActive] = useState("instagram");
  const current = INTENTS.find((i) => i.id === active);

  return (
    <section id="services" className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
      <p className="uk-kicker">Start here</p>
      <h2 className="uk-display text-3xl sm:text-[2.75rem] leading-[1.08] mt-3 max-w-3xl">
        Tell us what you need. We built a lane for each.
      </h2>
      <p className="text-[var(--uk-muted)] mt-4 max-w-2xl leading-relaxed">
        Clinics, salons, coaches, e-commerce, consultancies, education — if the problem is Instagram,
        leads, or running every handle properly, this is the menu. Pick one to see what ships and what
        moves.
      </p>

      <div className="flex flex-wrap gap-2 mt-10">
        {INTENTS.map((intent) => (
          <button
            key={intent.id}
            type="button"
            onClick={() => setActive(intent.id)}
            className={`uk-pill ${active === intent.id ? "uk-pill-active" : ""}`}
          >
            {intent.title}
          </button>
        ))}
      </div>

      <div className="uk-intent-panel mt-8 grid lg:grid-cols-[1fr_1.05fr] gap-0 border border-[var(--uk-line)] bg-[var(--uk-cream)]">
        <div className="p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-[var(--uk-line)]">
          <p className="uk-display text-2xl sm:text-3xl">{current.title}</p>
          <p className="mt-4 text-[1.05rem] leading-relaxed">{current.hook}</p>
          <ul className="mt-8 space-y-2.5 text-sm">
            {current.includes.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-[var(--uk-copper)] shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative min-h-[280px]">
          <img src={current.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--uk-deep)]/92 via-[var(--uk-deep)]/35 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-[var(--uk-paper)]">
            <p className="text-[0.65rem] tracking-[0.18em] uppercase text-[#e8b89a]">{current.result.label}</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4 text-sm">
              <div>
                <p className="opacity-60 text-xs uppercase tracking-wider mb-1">Before</p>
                <p className="leading-snug">{current.result.before}</p>
              </div>
              <div>
                <p className="opacity-60 text-xs uppercase tracking-wider mb-1">After</p>
                <p className="leading-snug font-medium">{current.result.after}</p>
              </div>
            </div>
            <p className="text-xs opacity-55 mt-4 italic">{current.result.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
