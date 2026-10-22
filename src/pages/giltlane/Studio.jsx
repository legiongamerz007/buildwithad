import { Link } from "react-router-dom";
import { useEffect } from "react";
import Nav from "../../giltlane/Nav";
import Footer from "../../giltlane/Footer";
import IntentPicker from "../../giltlane/IntentPicker";
import { BRAND, PACKAGES } from "../../giltlane/brand";
import { CASE_RESULTS, PLATFORMS, PROCESS, PROOF_LINE, STUDIO_STATS } from "../../giltlane/content";
import "../../giltlane/giltlane.css";

export default function GiltlaneStudio() {
  useEffect(() => {
    document.title = `${BRAND.name} — ${BRAND.studio}`;
    document.body.classList.add("giltlane-body");
    return () => document.body.classList.remove("giltlane-body");
  }, []);

  return (
    <div className="uk-root">
      <Nav active="home" />

      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 pb-16">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <p className="uk-kicker">{BRAND.name}</p>
              <h1 className="uk-display text-[2.65rem] sm:text-[3.75rem] leading-[1.02] mt-3 tracking-tight">
                Your Instagram.
                <span className="block">Your leads.</span>
                <span className="text-[var(--uk-copper)]">Your sales.</span>
                <span className="block text-[var(--uk-muted)] text-[0.72em] mt-2 font-sans font-normal tracking-normal">
                  Handled.
                </span>
              </h1>
              <p className="text-lg text-[var(--uk-muted)] mt-6 max-w-xl leading-relaxed">
                {BRAND.tagline} One studio plans the content, runs the channels, and builds the path
                from scroll to enquiry — wherever your customers are.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link to="/giltlane/deck" className="uk-btn uk-btn-primary">
                  See results deck
                </Link>
                <a href="#results" className="uk-btn uk-btn-ghost">
                  Example outcomes
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/giltlane/giltlane-results-desk.jpg"
                alt=""
                className="w-full aspect-[4/5] sm:aspect-[16/14] object-cover"
              />
              <div className="uk-hero-stat">
                <p className="uk-display text-4xl text-[var(--uk-copper)]">+340%</p>
                <p className="text-xs uppercase tracking-wider mt-1 opacity-80">reach lift · illustrative model</p>
              </div>
            </div>
          </div>
        </div>
        <div className="uk-marquee-wrap border-y border-[var(--uk-line)] py-3">
          <div className="uk-marquee">
            {[...PLATFORMS, ...PLATFORMS].map((p, i) => (
              <span key={`${p}-${i}`} className="uk-marquee-item">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STUDIO_STATS.map((s) => (
          <div key={s.label} className="uk-stat-card">
            <p className="uk-display text-3xl sm:text-4xl">{s.value}</p>
            <p className="font-semibold mt-2 text-sm">{s.label}</p>
            <p className="text-xs text-[var(--uk-muted)] mt-1 leading-relaxed">{s.sub}</p>
          </div>
        ))}
      </section>

      <IntentPicker />

      <section id="results" className="bg-[var(--uk-deep)] text-[var(--uk-paper)] py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="uk-kicker !text-[#e8b89a]">Results</p>
          <h2 className="uk-display text-3xl sm:text-4xl mt-3 max-w-2xl">
            Numbers people ask for in the first meeting.
          </h2>
          <p className="text-[var(--uk-paper)]/65 mt-4 max-w-2xl text-sm leading-relaxed">{PROOF_LINE}</p>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {CASE_RESULTS.map((c) => (
              <article key={c.vertical} className="uk-case-card">
                <img src={c.image} alt="" className="w-full aspect-[16/9] object-cover" />
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="uk-display text-2xl">{c.vertical}</h3>
                    <span className="text-[0.65rem] tracking-[0.14em] uppercase opacity-50">{c.region}</span>
                  </div>
                  <p className="text-sm text-[var(--uk-paper)]/70 mt-2">{c.problem}</p>
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    {c.metrics.map((m) => (
                      <div key={m.k} className="uk-metric-cell">
                        <p className="text-[0.6rem] uppercase tracking-wider opacity-50">{m.k}</p>
                        <p className="text-xs line-through opacity-40 mt-1">{m.from}</p>
                        <p className="text-sm font-semibold text-[#e8b89a] mt-0.5">{m.to}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs mt-5 leading-relaxed opacity-75">{c.did}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/giltlane/work/education-crm"
              className="uk-btn uk-btn-ghost !text-[var(--uk-paper)] !border-[var(--uk-paper)]/25"
            >
              Real system: education CRM + WhatsApp
            </Link>
            <Link to="/giltlane/deck" className="uk-btn uk-btn-primary !bg-[var(--uk-paper)] !text-[var(--uk-ink)]">
              Full results presentation
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <p className="uk-kicker">How we work</p>
        <h2 className="uk-display text-3xl sm:text-4xl mt-3">Four weeks to visible movement.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {PROCESS.map((p) => (
            <div key={p.step} className="border-t-2 border-[var(--uk-copper)] pt-5">
              <p className="text-xs tracking-[0.2em] text-[var(--uk-copper)]">{p.step}</p>
              <h3 className="uk-display text-xl mt-2">{p.title}</h3>
              <p className="text-sm text-[var(--uk-muted)] mt-3 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="packages" className="bg-[var(--uk-cream)] border-y border-[var(--uk-line)] py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="uk-kicker">Investment</p>
          <h2 className="uk-display text-3xl sm:text-4xl mt-3">Three ways in. Priced for global clients.</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {PACKAGES.map((p, idx) => (
              <article key={p.name} className={`uk-package ${idx === 1 ? "uk-package-featured" : ""}`}>
                {idx === 1 && (
                  <p className="text-[0.65rem] tracking-[0.16em] uppercase text-[var(--uk-copper)] mb-3">
                    Most chosen
                  </p>
                )}
                <h3 className="uk-display text-2xl">{p.name}</h3>
                <p className="text-xl font-semibold mt-3">{p.price}</p>
                <p className="text-xs text-[var(--uk-muted)] mt-1 uppercase tracking-wider">{p.cadence}</p>
                <p className="text-sm mt-4 text-[var(--uk-muted)]">{p.best}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {p.items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-[var(--uk-copper)]">—</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="text-sm text-[var(--uk-muted)] mt-8 max-w-2xl">
            50% deposit before work starts. Balance on delivery. Retainers billed monthly in advance.
            USD · GBP · PKR invoicing on request.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <img src="/giltlane/giltlane-instagram-hand.jpg" alt="" className="w-full aspect-[16/10] object-cover" />
        <div>
          <h2 className="uk-display text-3xl sm:text-4xl">Ready when you are.</h2>
          <p className="text-[var(--uk-muted)] mt-4 leading-relaxed">
            Send your Instagram handle or site. We reply with a one-page audit and which lane fits —
            Instagram-only, leads, full social, or sales desk.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href={`mailto:${BRAND.email}?subject=Giltlane%20enquiry`} className="uk-btn uk-btn-primary">
              Email the studio
            </a>
            <Link to="/giltlane/sizzle" className="uk-btn uk-btn-ghost">
              60-second walkthrough
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
