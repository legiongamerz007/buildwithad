import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";
import prospectsData from "../data/prospects.json";
import AppointmentBooking from "../components/AppointmentBooking";
import { waMeLink } from "../lib/waMeLink";

const NICHE_LABELS = {
  dental: "Dental",
  clinic: "Clinic",
  salon: "Salon",
  restaurant: "Restaurant",
};

const NICHE_ACCENTS = {
  dental: "text-brand-cyan",
  clinic: "text-brand-cyan",
  salon: "text-brand-pink",
  restaurant: "text-brand-amber",
};

function findProspect(slug) {
  return prospectsData.prospects.find((p) => p.slug === slug);
}

export default function ProspectLanding({ slug }) {
  const prospect = findProspect(slug);

  if (!prospect) {
    return (
      <div className="min-h-screen bg-[#090514] text-gray-100 flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl font-heading font-bold">Demo not found</h1>
        <Link to="/prospects" className="mt-4 text-brand-pink hover:underline">
          ← Back to all demos
        </Link>
      </div>
    );
  }

  const { premium } = prospect;
  const accent = NICHE_ACCENTS[prospect.niche] ?? "text-brand-pink";
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
    <div className="min-h-screen flex flex-col bg-[#090514] text-gray-100 selection:bg-brand-pink selection:text-white">
      <div className="glow-bg top-[-50px] left-[-50px] opacity-75" />
      <div className="glow-bg-cyan bottom-[20%] right-[-100px] opacity-60" />

      {/* Preview ribbon */}
      <div className="relative z-50 text-center text-[10px] sm:text-xs py-2 px-3 border-b border-brand-pink/30 bg-gradient-to-r from-brand-pink/20 via-brand-purple/20 to-brand-pink/20 font-medium">
        ✨ Complimentary premium preview for <strong>{prospect.businessName}</strong> ·{" "}
        <Link to="/" className="underline font-bold text-brand-pink">
          BuildWithAD
        </Link>
      </div>

      {/* Marquee */}
      <div className="relative z-40 overflow-hidden border-b border-white/5 py-2.5 bg-black/30">
        <div className="flex gap-8 animate-[marquee_30s_linear_infinite] whitespace-nowrap w-max">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={`${item}-${i}`} className="text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="glass-nav sticky top-0 z-50 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <Link to="/prospects" className="shrink-0 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
              <ArrowLeft size={18} />
            </Link>
            <div className="min-w-0">
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-500">{prospect.city}</p>
              <h1 className="text-base sm:text-xl font-heading font-bold leading-tight truncate text-white">
                {prospect.businessName}
              </h1>
            </div>
          </div>
          <a
            href={waQuick}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-xl px-4 py-2 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] flex items-center gap-1.5"
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
        </div>
      </header>

      <main className="relative z-10 flex-1">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              {premium.heroBadge && (
                <p className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-1.5 rounded-full mb-5 border border-brand-pink/30 bg-brand-pink/10 ${accent}`}>
                  <Star size={14} className="fill-current" /> {premium.heroBadge}
                </p>
              )}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-[1.05] tracking-tight text-white">
                {premium.heroHeadline}
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-400 max-w-xl">{premium.heroSubhead}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#book"
                  className="rounded-xl px-8 py-4 text-center text-sm font-bold text-white bg-gradient-to-r from-brand-pink to-brand-purple shadow-neon-pink hover:scale-[1.02] active:scale-[0.98] transition-transform"
                >
                  Book now — free on WhatsApp
                </a>
                <a
                  href={telHref}
                  className="rounded-xl px-8 py-4 text-center text-sm font-bold border border-white/15 text-gray-300 hover:border-brand-pink/40 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={16} />
                  Call {prospect.phone}
                </a>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {premium.roiStats.map((s) => (
                  <div key={s.label} className="glass-card rounded-2xl p-3 sm:p-4">
                    <p className={`text-xl sm:text-2xl font-heading font-bold ${accent}`}>{s.value}</p>
                    <p className="text-[9px] font-bold uppercase tracking-wide text-gray-500 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-glass ring-1 ring-white/10">
                <img
                  src={premium.gallery[0].src}
                  alt={premium.gallery[0].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-3xl font-heading font-bold">{prospect.rating}★</p>
                  <p className="text-sm text-gray-300">{prospect.reviewCount} happy customers on Google</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="py-16 sm:py-20 border-t border-white/5 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-purple">Why this matters</span>
            <h3 className="text-2xl sm:text-4xl font-heading font-extrabold max-w-xl mt-2 text-white">
              More bookings. Less phone tag.
            </h3>
            <p className="mt-3 text-gray-400 max-w-2xl text-sm sm:text-base">{premium.competitorGap}</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {premium.painPoints.map((p, i) => (
                <article key={p.pain} className="glass-card rounded-2xl p-5 sm:p-6">
                  <span className="text-3xl">{p.icon}</span>
                  <p className="text-[10px] font-bold uppercase tracking-widest mt-4 text-gray-600">Challenge 0{i + 1}</p>
                  <p className="mt-2 font-semibold text-sm sm:text-base leading-relaxed text-gray-200">{p.pain}</p>
                  <p className="mt-4 text-sm font-bold text-brand-pink flex items-start gap-1">
                    <ArrowRight size={16} className="shrink-0 mt-0.5" />
                    {p.solution}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Welcome to {prospect.businessName}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
            {premium.gallery.map((g, i) => (
              <div
                key={g.src}
                className={`relative rounded-2xl overflow-hidden ring-1 ring-white/10 ${
                  i === 0 ? "col-span-2 sm:col-span-1 sm:row-span-2 aspect-[4/5]" : "aspect-square"
                }`}
              >
                <img src={g.src} alt={g.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
          <p className="text-[10px] text-gray-600 mt-3">Preview imagery — replaced with your photos on launch.</p>
        </section>

        {/* Services */}
        <section id="services" className="py-16 border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">Services & pricing</h3>
            <p className="text-sm text-gray-500 mt-2">{prospect.hours}</p>
            <div className="grid gap-3 mt-8">
              {prospect.services.map((s, i) => (
                <div
                  key={s.name}
                  className="glass-card rounded-2xl flex items-center justify-between gap-4 p-4 sm:p-5"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center text-sm font-black text-white bg-gradient-to-tr from-brand-pink to-brand-purple">
                      {i + 1}
                    </span>
                    <p className="font-semibold text-sm sm:text-base truncate text-white">{s.name}</p>
                  </div>
                  {s.price && <p className={`font-bold text-sm shrink-0 ${accent}`}>{s.price}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 bg-white/[0.02] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h3 className="text-2xl font-heading font-bold mb-8 text-white">Loved locally</h3>
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 sm:grid sm:grid-cols-3 sm:overflow-visible">
              {premium.testimonials.map((t) => (
                <blockquote key={t.quote} className="min-w-[280px] sm:min-w-0 snap-center glass-card rounded-2xl p-6 shrink-0">
                  <p className="text-lg font-heading leading-relaxed text-gray-200">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-4 text-xs text-gray-500">— {t.author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Booking */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 pb-28 sm:pb-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-3xl font-heading font-bold text-white">Book in 3 taps</h3>
              <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
                Pick service → choose time → confirm on WhatsApp. Message goes directly to{" "}
                <strong className="text-white">{prospect.businessName}</strong> at {prospect.phone}.
              </p>
              <p className="mt-6 text-sm text-gray-400 flex items-start gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5 text-brand-pink" />
                {prospect.address}
              </p>
              {prospect.mapsUrl && (
                <a
                  href={prospect.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-sm font-bold text-brand-cyan hover:text-white transition-colors"
                >
                  Google Maps <ExternalLink size={14} />
                </a>
              )}
              <div className="mt-8 space-y-2">
                {prospect.demoFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle2 size={16} className="text-brand-green shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <AppointmentBooking
              businessName={prospect.businessName}
              phoneE164={prospect.phoneE164}
              services={premium.bookingServices}
              timeSlots={premium.timeSlots}
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 border-t border-white/5 max-w-2xl mx-auto px-4 sm:px-6">
          <h3 className="text-xl font-heading font-bold mb-6 text-white">FAQ</h3>
          <dl className="space-y-5 text-sm">
            {premium.faqs.map((f) => (
              <div key={f.q}>
                <dt className="font-bold text-white">{f.q}</dt>
                <dd className="mt-1 text-gray-400">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <footer className="relative z-10 py-12 px-4 text-center border-t border-white/5 pb-32 sm:pb-12">
        <p className="text-xs uppercase tracking-widest text-gray-600">Preview by BuildWithAD</p>
        <p className="text-[10px] text-gray-700 mt-4 max-w-md mx-auto">{prospect.demoUrl}</p>
        <Link to="/prospects" className="inline-block mt-4 text-xs text-brand-pink hover:underline">
          View all {prospectsData.count} prospect demos →
        </Link>
      </footer>

      {/* Mobile sticky bar */}
      <div className="fixed bottom-0 inset-x-0 z-50 p-3 sm:hidden glass-nav border-t border-white/10 flex gap-2">
        <a href={telHref} className="flex-1 py-3.5 rounded-xl text-center text-sm font-bold border border-white/15 text-gray-300">
          Call
        </a>
        <a href="#book" className="flex-1 py-3.5 rounded-xl text-center text-sm font-bold text-white bg-gradient-to-r from-brand-pink to-brand-purple">
          Book
        </a>
        <a href={waQuick} target="_blank" rel="noopener noreferrer" className="flex-1 py-3.5 rounded-xl text-center text-sm font-bold text-white bg-[#25D366]">
          WhatsApp
        </a>
      </div>
    </div>
  );
}
