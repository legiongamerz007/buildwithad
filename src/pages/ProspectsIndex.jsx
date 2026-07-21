import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, MapPin, Star } from "lucide-react";
import prospectsData from "../data/prospects.json";

const NICHE_LABELS = {
  dental: "Dental",
  clinic: "Clinic",
  salon: "Salon",
  restaurant: "Restaurant",
};

const NICHE_COLORS = {
  dental: "text-brand-cyan border-brand-cyan/20",
  clinic: "text-brand-cyan border-brand-cyan/20",
  salon: "text-brand-pink border-brand-pink/20",
  restaurant: "text-brand-amber border-brand-amber/20",
};

export default function ProspectsIndex() {
  const [filter, setFilter] = useState("all");
  const [cityFilter, setCityFilter] = useState("all");

  const cities = useMemo(
    () => [...new Set(prospectsData.prospects.map((p) => p.city))].sort(),
    []
  );

  const filtered = useMemo(() => {
    return prospectsData.prospects.filter((p) => {
      if (filter !== "all" && p.niche !== filter) return false;
      if (cityFilter !== "all" && p.city !== cityFilter) return false;
      return true;
    });
  }, [filter, cityFilter]);

  return (
    <div className="min-h-screen flex flex-col bg-[#090514] text-gray-100 selection:bg-brand-pink selection:text-white">
      <div className="glow-bg top-[-50px] left-[-50px] opacity-75" />
      <div className="glow-bg-cyan bottom-[20%] right-[-100px] opacity-60" />

      <header className="glass-nav sticky top-0 z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-pink to-brand-purple flex items-center justify-center font-bold text-white shadow-neon-pink">
              AD
            </div>
            <span className="font-heading font-bold text-xl tracking-tight">
              BuildWith<span className="text-brand-pink">AD</span>
            </span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            Back to site
          </Link>
        </div>
      </header>

      <main className="relative z-10 flex-1 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-pink">Door 1 outreach</span>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight text-white">
            Prospect demo gallery
          </h1>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            {prospectsData.count} personalized preview sites for local clinics, salons, and restaurants — built before outreach, hosted on buildwithad.dev.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {["all", "clinic", "dental", "salon", "restaurant"].map((key) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === key
                  ? "bg-brand-pink text-white shadow-neon-pink"
                  : "text-gray-400 bg-white/5 hover:bg-white/10 hover:text-white"
              }`}
            >
              {key === "all" ? "All niches" : NICHE_LABELS[key]}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10 border-b border-white/5 pb-6">
          <button
            onClick={() => setCityFilter("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
              cityFilter === "all" ? "bg-white/10 text-white" : "text-gray-500 hover:text-gray-300"
            }`}
          >
            All cities
          </button>
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setCityFilter(city)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                cityFilter === city ? "bg-white/10 text-white" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => {
            const accent = p.premium?.theme?.accent ?? "#ff4ecd";
            return (
            <Link
              key={p.slug}
              to={`/prospects/${p.slug}`}
              className="glass-card rounded-3xl p-6 flex flex-col justify-between group overflow-hidden relative"
            >
              <div className="absolute top-0 inset-x-0 h-1" style={{ backgroundColor: accent }} />
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${NICHE_COLORS[p.niche]}`}>
                    {NICHE_LABELS[p.niche]}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-brand-amber">
                    <Star size={12} className="fill-current" />
                    {p.rating} · {p.reviewCount}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-bold text-white transition-colors" style={{ ["--hover"]: accent }}>
                  {p.businessName}
                </h3>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <MapPin size={14} />
                  {p.city}
                </p>
                <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">{p.tagline}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-gray-600 font-mono">P{p.outreachPriority}</span>
                <span className="text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: accent }}>
                  View demo <ArrowRight size={14} />
                </span>
              </div>
            </Link>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-12">No demos match this filter.</p>
        )}
      </main>
    </div>
  );
}
