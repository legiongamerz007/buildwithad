import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Baby,
  CalendarCheck2,
  CheckCircle2,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
} from "lucide-react";
import AppointmentBooking from "../components/AppointmentBooking";
import { waMeLink } from "../lib/waMeLink";
import { useProspectFonts } from "../lib/useProspectFonts";
import "../styles/prospect-landing.css";
import "../styles/dental-central.css";

const ASSET = "/prospects/dental-central";

const THEME = {
  displayFont: "playfair",
  bodyFont: "source-sans",
  accent: "#0e7490",
  accentLight: "#ecfeff",
  paper: "#f7fafc",
  ink: "#0f172a",
  navy: "#0b1f3a",
  gold: "#c4a35a",
};

const SERVICES = [
  { name: "General & Preventive Dentistry", note: "Check-ups, scaling, early detection", price: "Free consult*" },
  { name: "Orthodontics — Braces & Aligners", note: "Straighten with a clear plan", price: "Assessment" },
  { name: "Cosmetic Dentistry & Smile Makeovers", note: "Artistry-led aesthetic results", price: "Custom plan" },
  { name: "Root Canal Treatment", note: "Comfort-first endodontics", price: "After exam" },
  { name: "Periodontal (Gum) Care", note: "Incl. pregnancy gingivitis guidance", price: "After exam" },
  { name: "Crowns, Bridges & Restorations", note: "Zirconia & precision impressions", price: "Quote" },
  { name: "Tooth Extraction & Oral Surgery", note: "Gentle, explained step-by-step", price: "After exam" },
  { name: "Family & Pediatric Dentistry", note: "Children, teens & adults", price: "Family pkg" },
];

const BOOKING = [
  { id: "new", label: "Free new-patient consultation", duration: "30 min" },
  { id: "cleaning", label: "Cleaning & scaling", duration: "45 min" },
  { id: "ortho", label: "Braces / aligners assessment", duration: "45 min" },
  { id: "smile", label: "Smile makeover consult", duration: "60 min" },
  { id: "whitening", label: "Whitening (promo enquiry)", duration: "45 min" },
  { id: "gum", label: "Gum / periodontal review", duration: "40 min" },
  { id: "rct", label: "Root canal assessment", duration: "45 min" },
];

const SLOTS = ["2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"];

const GALLERY = [
  { src: `${ASSET}/doctor-hero.jpg`, alt: "Dr. Ghanwa R. Khursand" },
  { src: `${ASSET}/clinic-ambiance.jpg`, alt: "Premium dental clinic ambiance" },
  { src: `${ASSET}/smile-makeover.jpg`, alt: "Confident smile after cosmetic care" },
  { src: `${ASSET}/ortho-aligners.jpg`, alt: "Aligners and orthodontic care" },
  { src: `${ASSET}/review-graphic.jpg`, alt: "Patient review graphic from Instagram" },
  { src: `${ASSET}/brochure-panel.jpg`, alt: "Dental Central services brochure" },
];

export default function DentalCentralLanding({ prospect }) {
  const fonts = useProspectFonts(THEME);
  const { accent, accentLight, paper, ink, navy, gold } = THEME;
  const border = "#e2e8f0";

  const waQuick = waMeLink(
    prospect.phoneE164,
    `Assalam-o-Alaikum Dr. Ghanwa! I'd like to book at Dental Central (Model Town).`
  );
  const telHref = `tel:${prospect.phone.replace(/\s/g, "")}`;

  return (
    <div
      className="dc-root min-h-screen overflow-x-hidden antialiased"
      style={{ backgroundColor: paper, color: ink, fontFamily: fonts.body }}
    >
      {/* Pitch ribbon — for the clinic owner */}
      <div className="relative z-50 text-center text-[10px] sm:text-xs py-2.5 px-3 font-medium text-white" style={{ backgroundColor: navy }}>
        Complimentary website preview for <strong>Dental Central · Dr. Ghanwa</strong>
        {" · "}Built from your Instagram brand, offers & real patient voice
        {" · "}
        <Link to="/" className="underline font-bold">
          BuildWithAD
        </Link>
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ backgroundColor: `${paper}f5`, borderColor: border }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <Link to="/prospects" className="shrink-0 p-2 rounded-xl opacity-45 hover:opacity-100" aria-label="All demos">
              <ArrowLeft size={18} />
            </Link>
            <div className="min-w-0">
              <p className="text-[9px] font-black uppercase tracking-[0.28em]" style={{ color: accent }}>
                Model Town · Lahore
              </p>
              <h1 className="text-base sm:text-lg font-bold leading-tight truncate" style={{ fontFamily: fonts.display }}>
                Dental Central
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a href={telHref} className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-full border" style={{ borderColor: border }}>
              <Phone size={13} /> {prospect.phone}
            </a>
            <a
              href={waQuick}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-4 py-2.5 text-xs font-bold text-white shadow-lg flex items-center gap-1.5"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle size={14} /> Book
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO — doctor-forward */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 dc-hero-wash" style={{ background: `linear-gradient(135deg, ${navy} 0%, #123556 48%, ${accent} 140%)` }} />
          <div className="absolute inset-0 opacity-30 dc-hero-grain" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-14 grid lg:grid-cols-12 gap-10 items-center relative">
            <div className="lg:col-span-6 text-white prospect-animate-fade-up">
              <p className="inline-flex items-center gap-2 text-[11px] font-bold tracking-wide px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-5">
                <Sparkles size={13} style={{ color: gold }} />
                Where artistry meets dentistry
              </p>
              <h2 className="text-[2.15rem] sm:text-5xl font-bold leading-[1.08] tracking-tight" style={{ fontFamily: fonts.display }}>
                Meet Dr. Ghanwa — Model Town&apos;s family smile studio.
              </h2>
              <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
                8+ years in general dentistry &amp; orthodontics. Free new-patient consultation. Book whitening,
                braces, smile makeovers, or family care — in one tap on WhatsApp.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#book"
                  className="rounded-2xl px-7 py-4 text-center text-sm font-bold text-slate-900 shadow-xl transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: gold }}
                >
                  Book free consultation
                </a>
                <a
                  href="#doctor"
                  className="rounded-2xl px-7 py-4 text-center text-sm font-bold border border-white/35 text-white hover:bg-white/10"
                >
                  Meet the doctor
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { v: "8+", l: "Years clinical" },
                  { v: "5.0★", l: "Google rating" },
                  { v: "FREE", l: "New consult" },
                  { v: "30%", l: "Whitening off" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl p-3.5 bg-white/8 border border-white/15 backdrop-blur-sm">
                    <p className="text-xl sm:text-2xl font-bold" style={{ fontFamily: fonts.display, color: gold }}>
                      {s.v}
                    </p>
                    <p className="text-[10px] uppercase tracking-wide text-white/55 mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative prospect-animate-scale-in">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-4 rounded-[2rem] blur-2xl opacity-50" style={{ background: gold }} />
                <div className="relative rounded-[1.75rem] overflow-hidden shadow-2xl ring-1 ring-white/20 aspect-[4/5]">
                  <img src={`${ASSET}/doctor-hero.jpg`} alt="Dr. Ghanwa R. Khursand" className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/85 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/60">Lead clinician</p>
                    <p className="text-xl font-bold mt-1" style={{ fontFamily: fonts.display }}>
                      Dr. Ghanwa R. Khursand
                    </p>
                    <p className="text-sm text-white/75 mt-1">General dentistry · Orthodontics · Smile artistry</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-2 sm:left-0 rounded-2xl bg-white shadow-xl px-4 py-3 border" style={{ borderColor: border }}>
                  <p className="text-[10px] font-bold uppercase tracking-wider opacity-45">Patient voice</p>
                  <p className="text-xs font-semibold mt-1 max-w-[14rem] leading-snug">
                    “Makes you feel comfortable and heard.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Offers strip */}
        <section className="border-b" style={{ borderColor: border, backgroundColor: "#fff" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 grid sm:grid-cols-3 gap-4">
            {[
              { t: "FREE consultation", d: "For every new patient" },
              { t: "Up to 30% OFF whitening", d: "Limited special offer" },
              { t: "Family dental package", d: "Kids · teens · adults" },
            ].map((o) => (
              <div key={o.t} className="flex items-start gap-3">
                <span className="mt-0.5 w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0" style={{ backgroundColor: accent }}>
                  <CheckCircle2 size={16} />
                </span>
                <div>
                  <p className="font-bold text-sm">{o.t}</p>
                  <p className="text-xs opacity-55 mt-0.5">{o.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why this site — owner pitch */}
        <section className="py-16 sm:py-20" style={{ backgroundColor: accentLight }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
              Research · Lahore dental market 2026
            </p>
            <h3 className="text-2xl sm:text-4xl font-bold max-w-2xl mt-2" style={{ fontFamily: fonts.display }}>
              Patients search “dentist Model Town” on mobile — then book whoever looks most professional.
            </h3>
            <p className="mt-4 opacity-75 max-w-3xl text-sm sm:text-base leading-relaxed">
              Nearby clinics already run full websites. Your Instagram is strong (daily education, real reviews, clear
              offers) — but the bio still dumps people into raw WhatsApp. This preview is your homepage + booking desk:
              doctor trust, service menu, offers, and a structured WhatsApp appointment — so Maps + IG traffic convert
              before they message a competitor.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
              {[
                { icon: <Stethoscope size={20} />, t: "Doctor-first trust", d: "Female dentist + 8+ years front and center" },
                { icon: <CalendarCheck2 size={20} />, t: "WhatsApp booking", d: "Service + time pre-filled to your number" },
                { icon: <ShieldCheck size={20} />, t: "Offer clarity", d: "Free consult · whitening · family package" },
                { icon: <Baby size={20} />, t: "Niche edge", d: "Pregnancy gum care + family dentistry" },
              ].map((c) => (
                <article key={c.t} className="rounded-2xl p-5 bg-white border prospect-card-lift" style={{ borderColor: border }}>
                  <span style={{ color: accent }}>{c.icon}</span>
                  <p className="font-bold mt-3 text-sm">{c.t}</p>
                  <p className="text-xs opacity-60 mt-1.5 leading-relaxed">{c.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Meet doctor */}
        <section id="doctor" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-[1.75rem] overflow-hidden shadow-xl aspect-[4/5] max-w-md">
                <img src={`${ASSET}/doctor-hero.jpg`} alt="Dr. Ghanwa in clinic scrubs" className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-5 right-0 sm:right-8 rounded-2xl px-5 py-4 text-white shadow-xl" style={{ backgroundColor: navy }}>
                <p className="text-[10px] uppercase tracking-widest opacity-60">Tagline</p>
                <p className="font-semibold italic text-sm mt-1" style={{ fontFamily: fonts.display, color: gold }}>
                  Restoring Smiles. Restoring You.
                </p>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                About the doctor
              </p>
              <h3 className="text-3xl sm:text-4xl font-bold mt-2" style={{ fontFamily: fonts.display }}>
                Dr. Ghanwa R. Khursand
              </h3>
              <p className="mt-5 text-base leading-relaxed opacity-80">
                With <strong>8+ years</strong> of clinical experience in general dentistry and orthodontics, Dr. Ghanwa
                founded Dental Central to bring artistry-led care to Model Town families — from routine check-ups to
                full smile transformations.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Gentle, proactive communication — patients feel heard",
                  "Full-spectrum care: preventive → ortho → cosmetic → surgical",
                  "Education-first content (pregnancy gums, diagnostics, crowns)",
                  "Evening hours perfect for working parents (2–8 PM)",
                ].map((line) => (
                  <li key={line} className="flex gap-2.5 text-sm">
                    <CheckCircle2 size={18} className="shrink-0 mt-0.5" style={{ color: accent }} />
                    <span className="opacity-85">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 sm:py-20 border-y" style={{ borderColor: border, backgroundColor: "#fff" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                  Clinical menu
                </p>
                <h3 className="text-2xl sm:text-4xl font-bold mt-2" style={{ fontFamily: fonts.display }}>
                  Everything under one roof
                </h3>
              </div>
              <p className="text-sm opacity-55 max-w-sm">{prospect.hours} · *Free consult for new patients</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mt-10">
              {SERVICES.map((s, i) => (
                <div
                  key={s.name}
                  className="flex items-start justify-between gap-4 p-4 sm:p-5 rounded-2xl border prospect-card-lift"
                  style={{ borderColor: border }}
                >
                  <div className="flex gap-3 min-w-0">
                    <span
                      className="w-9 h-9 shrink-0 rounded-xl flex items-center justify-center text-xs font-black text-white"
                      style={{ backgroundColor: i % 2 === 0 ? navy : accent }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold text-sm sm:text-[15px]">{s.name}</p>
                      <p className="text-xs opacity-50 mt-1">{s.note}</p>
                    </div>
                  </div>
                  <p className="text-xs font-bold shrink-0" style={{ color: accent }}>
                    {s.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: fonts.display }}>
            Your brand, on the web
          </h3>
          <p className="text-sm opacity-60 mt-2 max-w-xl">
            Doctor portrait from your Instagram · clinic &amp; smile imagery styled to your navy/teal brand · swap in
            chair-side photos on launch.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8">
            {GALLERY.map((g, i) => (
              <div
                key={g.src}
                className={`relative rounded-2xl overflow-hidden bg-slate-100 ${
                  i === 0 ? "col-span-2 md:col-span-1 md:row-span-2 aspect-[4/5] md:aspect-auto md:min-h-full" : "aspect-square"
                }`}
              >
                <img src={g.src} alt={g.alt} className="w-full h-full object-cover prospect-img-zoom" />
              </div>
            ))}
          </div>
        </section>

        {/* Pregnancy niche */}
        <section className="py-14" style={{ backgroundColor: navy }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 items-center text-white">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: gold }}>
                Specialty insight
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold mt-2" style={{ fontFamily: fonts.display }}>
                Pregnancy changes hormones — and gums.
              </h3>
              <p className="mt-4 text-white/75 text-sm sm:text-base leading-relaxed">
                Your Instagram already educates mothers about pregnancy gingivitis and second-trimester scaling. This
                site surfaces that expertise so expecting mothers in Model Town book you — not a generic clinic.
              </p>
              <a
                href={waQuick}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-6 rounded-2xl px-6 py-3.5 text-sm font-bold text-slate-900"
                style={{ backgroundColor: gold }}
              >
                Ask about prenatal dental visit
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/15 aspect-[4/3] bg-white/5">
              <img src={`${ASSET}/smile-makeover.jpg`} alt="Healthy confident smile" className="w-full h-full object-cover opacity-95" />
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 sm:py-20" style={{ backgroundColor: accentLight }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h3 className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: fonts.display }}>
              Reviews that make the day
            </h3>
            <div className="grid lg:grid-cols-5 gap-6 mt-8">
              <blockquote className="lg:col-span-3 rounded-3xl p-7 sm:p-9 bg-white border shadow-sm" style={{ borderColor: border }}>
                <div className="flex gap-1 mb-4" style={{ color: gold }}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star key={n} size={16} className="fill-current" />
                  ))}
                </div>
                <p className="text-lg sm:text-xl leading-relaxed" style={{ fontFamily: fonts.display }}>
                  “Dr Ghanwa has been my family&apos;s and mine go to dentist for the longest of times! The way she
                  addresses each concern proactively and how she consistently makes you feel comfortable and heard is so
                  valuable. I have gotten multiple extractions, root canals and fillings and everything has been taken
                  care of so so well!! Truly an amazing dentist!!!”
                </p>
                <footer className="mt-5 text-xs opacity-50">— Shared on @dentalcentrallahore · Instagram</footer>
              </blockquote>
              <div className="lg:col-span-2 rounded-3xl overflow-hidden border bg-white" style={{ borderColor: border }}>
                <img src={`${ASSET}/review-graphic.jpg`} alt="Dental Central Instagram review post" className="w-full h-full object-cover min-h-[280px]" />
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              {[
                { q: "Transparent before treatment", c: "Clinical education style" },
                { q: "Family go-to dentist", c: "Multi-visit trust" },
                { q: "Comfortable & heard", c: "Top review theme" },
              ].map((t) => (
                <div key={t.q} className="rounded-2xl p-5 bg-white/80 border" style={{ borderColor: border }}>
                  <p className="font-semibold text-sm">“{t.q}”</p>
                  <p className="text-[11px] opacity-45 mt-2 uppercase tracking-wide">{t.c}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking */}
        <section className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 pb-28 sm:pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
                Appointments
              </p>
              <h3 className="text-3xl sm:text-4xl font-bold mt-2" style={{ fontFamily: fonts.display }}>
                Book in 3 taps — lands on your WhatsApp
              </h3>
              <p className="mt-4 opacity-75 text-sm sm:text-base leading-relaxed">
                Patient picks service + time + name. Message opens to <strong>{prospect.phone}</strong> already filled
                — no reception chaos, no lost DMs.
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
                  Open in Google Maps <ExternalLink size={14} />
                </a>
              )}
              <div className="mt-8 rounded-2xl p-5 border" style={{ borderColor: border, backgroundColor: accentLight }}>
                <p className="text-xs font-bold uppercase tracking-wider" style={{ color: accent }}>
                  ROI for Dr. Ghanwa
                </p>
                <p className="text-sm mt-2 leading-relaxed opacity-80">
                  One smile makeover or aligner case typically covers the full site investment. You already create the
                  content — this page turns it into booked chairs.
                </p>
              </div>
            </div>
            <AppointmentBooking
              businessName="Dental Central by Dr. Ghanwa"
              phoneE164={prospect.phoneE164}
              services={BOOKING}
              timeSlots={SLOTS}
              accent={accent}
              accentLight={accentLight}
              dark={false}
              ink={ink}
              paper="#ffffff"
              border={border}
              displayFont={fonts.display}
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 border-t max-w-2xl mx-auto px-4 sm:px-6" style={{ borderColor: border }}>
          <h3 className="text-xl font-bold mb-6" style={{ fontFamily: fonts.display }}>
            Patient FAQ
          </h3>
          <dl className="space-y-5 text-sm">
            {[
              {
                q: "Is the first consultation really free?",
                a: "Yes — Dental Central offers a free consultation for new patients. Book via WhatsApp to reserve your evening slot.",
              },
              {
                q: "Do you treat children and families?",
                a: "Yes. Family & pediatric dentistry is a core service, with a family dental package available.",
              },
              {
                q: "What about braces or aligners?",
                a: "Dr. Ghanwa offers orthodontics including braces and aligners. Start with an assessment appointment.",
              },
              {
                q: "Where are you located?",
                a: "01/33-M, Civic Center, behind International Market, Block M Model Town, Lahore. Open Mon–Sat 2:00–8:00 PM.",
              },
              {
                q: "Is this the live clinic website?",
                a: "This is a complimentary preview by BuildWithAD, built from Dental Central’s public brand. Approve it and we launch the full version in days.",
              },
            ].map((f) => (
              <div key={f.q}>
                <dt className="font-bold">{f.q}</dt>
                <dd className="mt-1.5 opacity-70 leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <footer className="py-12 px-4 text-center border-t pb-32 sm:pb-12" style={{ borderColor: border, backgroundColor: navy }}>
        <p className="text-white font-bold text-lg" style={{ fontFamily: fonts.display }}>
          Dental Central
        </p>
        <p className="text-white/50 text-xs mt-2 italic">Where artistry meets dentistry</p>
        <p className="text-white/35 text-[10px] mt-6 uppercase tracking-[0.2em]">Preview by BuildWithAD</p>
        <Link to="/prospects" className="inline-block mt-3 text-xs font-bold" style={{ color: gold }}>
          View all prospect demos →
        </Link>
      </footer>

      <div className="fixed bottom-0 inset-x-0 z-50 p-3 sm:hidden border-t backdrop-blur-xl flex gap-2" style={{ backgroundColor: `${paper}f5`, borderColor: border }}>
        <a href={telHref} className="flex-1 py-3.5 rounded-xl text-center text-sm font-bold border-2" style={{ borderColor: accent, color: accent }}>
          Call
        </a>
        <a href="#book" className="flex-1 py-3.5 rounded-xl text-center text-sm font-bold text-white" style={{ backgroundColor: accent }}>
          Book
        </a>
        <a href={waQuick} target="_blank" rel="noopener noreferrer" className="flex-1 py-3.5 rounded-xl text-center text-sm font-bold text-white bg-[#25D366]">
          WhatsApp
        </a>
      </div>
    </div>
  );
}
