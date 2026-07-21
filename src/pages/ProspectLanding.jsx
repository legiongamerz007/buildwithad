import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import prospectsData from "../data/prospects.json";
import AppointmentBooking from "../components/AppointmentBooking";
import { waMeLink } from "../lib/waMeLink";
import { useProspectFonts } from "../lib/useProspectFonts";
import "../styles/prospect-landing.css";

function findProspect(slug) {
  return prospectsData.prospects.find((p) => p.slug === slug);
}

function isDarkPaper(paper) {
  return paper === "#0c0a09" || (typeof paper === "string" && paper.startsWith("#1c"));
}

export default function ProspectLanding({ slug }) {
  const prospect = findProspect(slug);
  const theme = prospect?.premium?.theme;
  const fonts = useProspectFonts(theme);

  if (!prospect) {
    return (
      <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl font-bold">Demo not found</h1>
        <Link to="/prospects" className="mt-4 text-teal-700 hover:underline">
          ← Back to all demos
        </Link>
      </div>
    );
  }

  const { premium } = prospect;
  const dark = isDarkPaper(premium.theme.paper);
  const accent = premium.theme.accent;
  const accentLight = premium.theme.accentLight;
  const paper = premium.theme.paper;
  const ink = premium.theme.ink;
  const border = dark ? "#292524" : "#e7e5e4";
  const mutedBg = dark ? "#1c1917" : accentLight;

  const waQuick = waMeLink(
    prospect.phoneE164,
    `Assalam-o-Alaikum! I'd like to book at ${prospect.businessName}.`
  );
  const telHref = `tel:${prospect.phone.replace(/\s/g, "")}`;

  const marqueeItems = [
    `${prospect.rating}★ Google Rating`,
    `${prospect.reviewCount}+ Reviews`,
    "WhatsApp Booking",
    "Mobile First",
    prospect.city,
    "Free Preview by BuildWithAD",
  ];

  return (
    <div
      className="min-h-screen overflow-x-hidden antialiased"
      style={{
        backgroundColor: paper,
        color: ink,
        fontFamily: fonts.body,
      }}
    >
      {/* Preview ribbon */}
      <div className="relative z-50 text-center text-[10px] sm:text-xs py-2.5 px-3 font-medium text-white" style={{ backgroundColor: accent }}>
        Complimentary premium preview for <strong>{prospect.businessName}</strong>
        {" · "}
        <Link to="/" className="underline font-bold">
          BuildWithAD
        </Link>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden border-b py-2.5" style={{ borderColor: border, backgroundColor: dark ? "#0c0a09" : "#fff" }}>
        <div className="prospect-marquee-track gap-8 px-4">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={`${item}-${i}`} className="text-[11px] font-bold uppercase tracking-[0.18em] opacity-60 whitespace-nowrap flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ backgroundColor: `${paper}f2`, borderColor: border }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <Link
              to="/prospects"
              className="shrink-0 p-2 rounded-xl opacity-50 hover:opacity-100 transition-opacity"
              aria-label="All demos"
            >
              <ArrowLeft size={18} />
            </Link>
            <div className="min-w-0">
              <p className="text-[9px] font-black uppercase tracking-[0.28em] opacity-45">{prospect.city}</p>
              <h1 className="text-base sm:text-xl font-bold leading-tight truncate" style={{ fontFamily: fonts.display }}>
                {prospect.businessName}
              </h1>
            </div>
          </div>
          <a
            href={waQuick}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full px-4 py-2.5 text-xs font-bold text-white shadow-lg flex items-center gap-1.5"
            style={{ backgroundColor: "#25D366" }}
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative">
          <div className="prospect-hero-mesh">
            <div className="prospect-blob w-80 h-80 -top-24 -right-16" style={{ backgroundColor: accent, opacity: 0.22 }} />
            <div className="prospect-blob w-[28rem] h-[28rem] bottom-0 -left-40" style={{ backgroundColor: accentLight, opacity: 0.9 }} />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-14 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center relative">
            <div className="lg:col-span-6 prospect-animate-fade-up">
              {premium.heroBadge && (
                <p
                  className="inline-flex items-center gap-2 text-xs font-bold px-4 py-1.5 rounded-full mb-6 border"
                  style={{ borderColor: accent, color: accent, backgroundColor: accentLight }}
                >
                  <Star size={13} className="fill-current" /> {premium.heroBadge}
                </p>
              )}
              <h2
                className="text-[2rem] sm:text-4xl lg:text-[3.15rem] font-bold leading-[1.08] tracking-tight"
                style={{ fontFamily: fonts.display }}
              >
                {premium.heroHeadline}
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-relaxed opacity-80 max-w-xl">{premium.heroSubhead}</p>

              <div className="mt-9 flex flex-col sm:flex-row gap-3 prospect-animate-fade-up-delay-1">
                <a
                  href="#book"
                  className="rounded-2xl px-8 py-4 text-center text-sm font-bold text-white shadow-xl transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  style={{ backgroundColor: accent, boxShadow: `0 18px 40px -12px ${accent}99` }}
                >
                  Book now — free on WhatsApp
                </a>
                <a
                  href={telHref}
                  className="rounded-2xl px-8 py-4 text-center text-sm font-bold border-2 transition-colors flex items-center justify-center gap-2"
                  style={{ borderColor: accent, color: accent }}
                >
                  <Phone size={15} />
                  Call {prospect.phone}
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 prospect-animate-fade-up-delay-2">
                {premium.roiStats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl p-3.5 sm:p-4 border backdrop-blur-sm prospect-card-lift"
                    style={{
                      borderColor: border,
                      backgroundColor: dark ? "#1c1917cc" : "#ffffffcc",
                    }}
                  >
                    <p className="text-xl sm:text-2xl font-bold" style={{ fontFamily: fonts.display, color: accent }}>
                      {s.value}
                    </p>
                    <p className="text-[9px] font-bold uppercase tracking-wide opacity-45 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative prospect-animate-scale-in">
              <div className="prospect-animate-float relative">
                <div
                  className="absolute -inset-3 rounded-[2rem] opacity-40 blur-2xl"
                  style={{ background: `linear-gradient(135deg, ${accent}55, transparent)` }}
                />
                <div className="relative aspect-[4/5] rounded-[1.75rem] overflow-hidden shadow-2xl ring-1 ring-black/5">
                  <img
                    src={premium.gallery[0].src}
                    alt={premium.gallery[0].alt}
                    className="w-full h-full object-cover prospect-img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-4xl font-bold" style={{ fontFamily: fonts.display }}>
                      {prospect.rating}★
                    </p>
                    <p className="text-sm opacity-90 mt-0.5">{prospect.reviewCount} happy customers on Google</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="py-16 sm:py-24" style={{ backgroundColor: mutedBg }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-50">Why this matters</p>
            <h3 className="text-2xl sm:text-4xl font-bold max-w-xl mt-2" style={{ fontFamily: fonts.display }}>
              More bookings. Less phone tag.
            </h3>
            <p className="mt-4 opacity-75 max-w-2xl text-sm sm:text-base leading-relaxed">{premium.competitorGap}</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-12">
              {premium.painPoints.map((p, i) => (
                <article
                  key={p.pain}
                  className="rounded-2xl p-6 sm:p-7 border prospect-card-lift"
                  style={{
                    backgroundColor: dark ? "#0c0a09" : "#fff",
                    borderColor: dark ? border : "transparent",
                    boxShadow: dark ? "none" : "0 1px 2px rgba(0,0,0,0.04)",
                  }}
                >
                  <span className="text-3xl">{p.icon}</span>
                  <p className="text-[10px] font-black uppercase tracking-widest mt-5 opacity-40">Challenge 0{i + 1}</p>
                  <p className="mt-2 font-semibold text-sm sm:text-[15px] leading-relaxed">{p.pain}</p>
                  <p className="mt-4 text-sm font-bold leading-snug" style={{ color: accent }}>
                    → {p.solution}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: fonts.display }}>
            Welcome to {prospect.businessName}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
            {premium.gallery.map((g, i) => (
              <div
                key={g.src}
                className={`relative rounded-2xl overflow-hidden ${
                  i === 0 ? "col-span-2 sm:col-span-1 sm:row-span-2 aspect-[4/5]" : "aspect-square"
                }`}
              >
                <img src={g.src} alt={g.alt} className="w-full h-full object-cover prospect-img-zoom" />
              </div>
            ))}
          </div>
          <p className="text-[10px] opacity-45 mt-3">Preview imagery — replaced with your photos on launch.</p>
        </section>

        {/* Services */}
        <section id="services" className="py-16 sm:py-20 border-t" style={{ borderColor: border }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h3 className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: fonts.display }}>
              Services & pricing
            </h3>
            <p className="text-sm opacity-55 mt-2">{prospect.hours}</p>
            <div className="grid gap-3 mt-8">
              {prospect.services.map((s, i) => (
                <div
                  key={s.name}
                  className="flex items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl border prospect-card-lift"
                  style={{ borderColor: border, backgroundColor: dark ? "#1c1917" : "#fff" }}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span
                      className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center text-sm font-black text-white"
                      style={{ backgroundColor: accent }}
                    >
                      {i + 1}
                    </span>
                    <p className="font-semibold text-sm sm:text-base truncate">{s.name}</p>
                  </div>
                  {s.price && (
                    <p className="font-bold text-sm shrink-0" style={{ color: accent }}>
                      {s.price}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 sm:py-20" style={{ backgroundColor: mutedBg }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8" style={{ fontFamily: fonts.display }}>
              Loved locally
            </h3>
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
              {premium.testimonials.map((t) => (
                <blockquote
                  key={t.quote}
                  className="min-w-[280px] sm:min-w-0 snap-center rounded-2xl p-6 border shrink-0 prospect-card-lift"
                  style={{
                    backgroundColor: dark ? "#0c0a09" : "#fff",
                    borderColor: dark ? border : "transparent",
                  }}
                >
                  <p className="text-lg leading-relaxed" style={{ fontFamily: fonts.display }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-4 text-xs opacity-55">— {t.author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Booking */}
        <section className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 pb-28 sm:pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: fonts.display }}>
                Book in 3 taps
              </h3>
              <p className="mt-4 opacity-75 text-sm sm:text-base leading-relaxed">
                Pick service → choose time → confirm on WhatsApp. Message goes directly to{" "}
                <strong>{prospect.businessName}</strong> at {prospect.phone}.
              </p>
              <p className="mt-6 text-sm flex items-start gap-2 opacity-80">
                <MapPin size={16} className="shrink-0 mt-0.5" style={{ color: accent }} />
                {prospect.address}
              </p>
              {prospect.mapsUrl && (
                <a
                  href={prospect.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-sm font-bold"
                  style={{ color: accent }}
                >
                  Google Maps <ExternalLink size={14} />
                </a>
              )}
              <ul className="mt-8 space-y-2.5">
                {prospect.demoFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm opacity-80">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ backgroundColor: accent }}>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <AppointmentBooking
              businessName={prospect.businessName}
              phoneE164={prospect.phoneE164}
              services={premium.bookingServices}
              timeSlots={premium.timeSlots}
              accent={accent}
              accentLight={accentLight}
              dark={dark}
              ink={ink}
              paper={paper}
              border={border}
              displayFont={fonts.display}
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 border-t max-w-2xl mx-auto px-4 sm:px-6" style={{ borderColor: border }}>
          <h3 className="text-xl font-bold mb-6" style={{ fontFamily: fonts.display }}>
            FAQ
          </h3>
          <dl className="space-y-5 text-sm">
            {premium.faqs.map((f) => (
              <div key={f.q}>
                <dt className="font-bold">{f.q}</dt>
                <dd className="mt-1.5 opacity-70 leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <footer className="py-12 px-4 text-center border-t pb-32 sm:pb-12" style={{ borderColor: border }}>
        <p className="text-xs uppercase tracking-[0.2em] opacity-45">Preview by BuildWithAD</p>
        <p className="text-[10px] opacity-35 mt-4 max-w-md mx-auto break-all">{prospect.demoUrl}</p>
        <Link to="/prospects" className="inline-block mt-4 text-xs font-bold" style={{ color: accent }}>
          View all {prospectsData.count} prospect demos →
        </Link>
      </footer>

      {/* Mobile sticky */}
      <div
        className="fixed bottom-0 inset-x-0 z-50 p-3 sm:hidden border-t backdrop-blur-xl flex gap-2"
        style={{ backgroundColor: `${paper}f5`, borderColor: border }}
      >
        <a
          href={telHref}
          className="flex-1 py-3.5 rounded-xl text-center text-sm font-bold border-2"
          style={{ borderColor: accent, color: accent }}
        >
          Call
        </a>
        <a href="#book" className="flex-1 py-3.5 rounded-xl text-center text-sm font-bold text-white" style={{ backgroundColor: accent }}>
          Book
        </a>
        <a
          href={waQuick}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3.5 rounded-xl text-center text-sm font-bold text-white bg-[#25D366]"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
