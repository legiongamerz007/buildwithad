import { useEffect } from "react";
import Nav from "../../giltlane/Nav";
import { BRAND, PACKAGES } from "../../giltlane/brand";
import { INTENTS, PROOF_LINE } from "../../giltlane/content";
import "../../giltlane/giltlane.css";

export default function GiltlaneOnePager() {
  useEffect(() => {
    document.title = `One-pager — ${BRAND.name}`;
    document.body.classList.add("giltlane-body");
    return () => document.body.classList.remove("giltlane-body");
  }, []);

  return (
    <div className="uk-root">
      <Nav active="one-pager" />
      <p className="uk-no-print text-center text-xs text-[var(--uk-muted)] pt-4">
        Print this page (Cmd+P) · A4 · hide headers in the print dialog
      </p>

      <div className="max-w-[210mm] mx-auto px-8 py-10 bg-[var(--uk-paper)] print:py-0">
        <header className="flex items-end justify-between border-b border-[var(--uk-ink)] pb-4">
          <div>
            <p className="uk-display text-3xl">{BRAND.name}</p>
            <p className="text-sm text-[var(--uk-muted)] mt-1">{BRAND.studio}</p>
          </div>
          <p className="text-xs tracking-[0.14em] uppercase text-[var(--uk-copper)]">Leave-behind</p>
        </header>

        <h1 className="uk-display text-[1.85rem] mt-8 leading-tight">
          Your Instagram. Your leads. Your sales. Handled.
        </h1>
        <p className="mt-4 text-[var(--uk-muted)] max-w-xl text-sm leading-relaxed">{BRAND.tagline}</p>

        <div className="grid grid-cols-2 gap-8 mt-10">
          <section>
            <h2 className="text-xs tracking-[0.16em] uppercase text-[var(--uk-copper)]">Lanes</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {INTENTS.map((i) => (
                <li key={i.id}>
                  <strong>{i.title}</strong> — {i.includes[0]}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-xs tracking-[0.16em] uppercase text-[var(--uk-copper)]">Investment</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {PACKAGES.map((p) => (
                <li key={p.name}>
                  <strong>{p.name}</strong> — {p.price}
                </li>
              ))}
              <li className="text-[var(--uk-muted)]">50% deposit · balance on delivery</li>
            </ul>
          </section>
        </div>

        <section className="mt-10 border-t border-[var(--uk-line)] pt-6">
          <h2 className="text-xs tracking-[0.16em] uppercase text-[var(--uk-copper)]">Proof</h2>
          <p className="mt-3 text-sm leading-relaxed">
            Example before/after metrics on the studio site — clinic, D2C, consultant — labelled
            illustrative. Flagship: production CRM + WhatsApp AI for education (unnamed). {PROOF_LINE}
          </p>
        </section>

        <section className="mt-8 grid grid-cols-3 gap-6 text-sm">
          <div>
            <p className="font-semibold">Next step</p>
            <p className="text-[var(--uk-muted)] mt-1">Send handle or site · one-page audit back</p>
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <p className="text-[var(--uk-muted)] mt-1">{BRAND.email}</p>
          </div>
          <div>
            <p className="font-semibold">Live</p>
            <p className="text-[var(--uk-muted)] mt-1">buildwithad.dev/giltlane</p>
          </div>
        </section>
      </div>
    </div>
  );
}
