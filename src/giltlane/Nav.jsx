import { Link } from "react-router-dom";
import { BRAND } from "./brand";

export default function Nav({ active }) {
  const item = (to, id, label) => (
    <Link
      to={to}
      className={`text-sm ${active === id ? "text-[var(--uk-ink)] font-semibold" : "text-[var(--uk-muted)] hover:text-[var(--uk-ink)]"}`}
    >
      {label}
    </Link>
  );

  return (
    <header className="uk-nav">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between gap-4">
        <Link to="/giltlane" className="uk-display text-[1.05rem] tracking-tight text-[var(--uk-ink)]">
          {BRAND.name}
          <span className="text-[var(--uk-muted)] font-sans text-xs ml-2 tracking-[0.12em] uppercase hidden sm:inline">
            {BRAND.studio}
          </span>
        </Link>
        <nav className="flex items-center gap-3 sm:gap-5">
          {item("/giltlane#services", "home", "Services")}
          {item("/giltlane#results", "home", "Results")}
          {item("/giltlane/deck", "deck", "Deck")}
          {item("/giltlane/work/education-crm", "work", "Work")}
          <a href={`mailto:${BRAND.email}`} className="uk-btn uk-btn-primary !py-2 !px-3 text-xs">
            Enquire
          </a>
        </nav>
      </div>
    </header>
  );
}
