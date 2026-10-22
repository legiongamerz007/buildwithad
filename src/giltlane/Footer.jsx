import { Link } from "react-router-dom";
import { BRAND } from "./brand";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--uk-line)] mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <p className="uk-display text-xl">{BRAND.name}</p>
          <p className="text-sm text-[var(--uk-muted)] mt-2 max-w-md">
            {BRAND.tagline} Instagram, leads, full social, sales desk — one studio. 50% deposit to start.
          </p>
        </div>
        <div className="text-sm text-[var(--uk-muted)] space-y-1">
          <a className="uk-link block" href={`mailto:${BRAND.email}`}>
            {BRAND.email}
          </a>
          <Link className="uk-link block" to="/giltlane/deck">
            Results presentation
          </Link>
          <p className="pt-2 text-xs">USD · GBP · PKR · illustrative examples labelled on site</p>
        </div>
      </div>
    </footer>
  );
}
