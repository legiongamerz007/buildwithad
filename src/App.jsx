import React, { useState, useEffect } from "react";
import Mascot from "./components/Mascot";
import { SITE, CLIENT_SERVICES, OWN_PRODUCTS, TECH_STACK } from "./data/siteData";
import { LINKEDIN_PROFILE } from "./data/linkedinProfile";
import { PORTFOLIO_PROJECTS, CATEGORY_LABELS } from "./data/portfolioData";
import {
  ShoppingBag,
  Layers,
  Sparkles,
  Gamepad2,
  GraduationCap,
  Users2,
  ArrowRight,
  ExternalLink,
  Menu,
  X,
  Star,
  CheckCircle2,
  Mail,
  Linkedin,
  Github,
  MapPin,
  Clock,
  Send,
  Sliders,
  Sparkle,
  Monitor
} from "lucide-react";

// Map strings to Lucide components for dynamic services rendering
const IconMap = {
  ShoppingBag,
  Layers,
  Sparkles,
  Gamepad2,
  GraduationCap,
  Users2,
  Monitor
};

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portfolioFilter, setPortfolioFilter] = useState("all");
  
  // Mascot customization states (passed to Mascot control/playground)
  const [mascotColor, setMascotColor] = useState("#ff4ecd");
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [showMascotControls, setShowMascotControls] = useState(true);

  // Form states
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", projectType: "shopify", budget: "medium", message: "" });

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (["home", "services", "portfolio", "about", "demo", "contact"].includes(hash)) {
        setActiveTab(hash);
      } else {
        setActiveTab("home");
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (tab) => {
    window.location.hash = tab;
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // In production, this would trigger an email send or API request
    setFormSubmitted(true);
  };

  // Filtered portfolio logic
  const filteredProjects = portfolioFilter === "all" 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter(p => p.category === portfolioFilter);

  return (
    <div className="min-h-screen flex flex-col bg-[#090514] text-gray-100 selection:bg-brand-pink selection:text-white">
      {/* GLOW BACKGROUND EFFECT */}
      <div className="glow-bg top-[-50px] left-[-50px] opacity-75"></div>
      <div className="glow-bg-cyan bottom-[20%] right-[-100px] opacity-60"></div>
      <div className="glow-bg top-[40%] left-[50%] translate-x-[-50%] opacity-40"></div>

      {/* HEADER NAVIGATION */}
      <header className="glass-nav fixed top-0 left-0 w-full z-50 border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <button onClick={() => navigateTo("home")} className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-pink to-brand-purple flex items-center justify-center font-bold text-white shadow-neon-pink group-hover:scale-105 transition-transform duration-300">
              AD
            </div>
            <span className="font-heading font-bold text-xl tracking-tight">
              BuildWith<span className="text-brand-pink">AD</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {[
              { id: "home", label: "Home" },
              { id: "services", label: "Services" },
              { id: "portfolio", label: "Portfolio" },
              { id: "demo", label: "3D Mascot" },
              { id: "about", label: "About" },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => navigateTo(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-white/10 text-white border border-white/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
            <a
              href="/prospects"
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              Demos
            </a>
            <button
              onClick={() => navigateTo("contact")}
              className="ml-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-pink to-brand-purple hover:from-brand-purple hover:to-brand-pink text-white font-semibold text-sm shadow-neon-pink hover:shadow-neon-purple hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Start a project
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-white/5 bg-[#090514]/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-2">
            {[
              { id: "home", label: "Home" },
              { id: "services", label: "Services" },
              { id: "portfolio", label: "Portfolio" },
              { id: "demo", label: "3D Mascot" },
              { id: "about", label: "About" },
              { id: "contact", label: "Start a project" },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => navigateTo(tab.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-white/10 text-brand-pink border-l-4 border-brand-pink"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.id === "contact" ? "🚀 " + tab.label : tab.label}
              </button>
            ))}
            <a
              href="/prospects"
              className="block w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              Prospect demos
            </a>
          </div>
        )}
      </header>

      {/* MAIN CONTENT WRAPPER */}
      <main className="flex-grow pt-20">
        
        {/* ==================== HOME VIEW ==================== */}
        {activeTab === "home" && (
          <div>
            {/* HERO SECTION */}
            <section className="relative overflow-hidden py-16 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Hero Info */}
                <div className="lg:col-span-7 text-left space-y-6 z-10">
                  <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-pink/10 border border-brand-pink/20 text-brand-pink text-xs font-semibold animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    <span>{LINKEDIN_PROFILE.headline} · Lahore · Remote worldwide</span>
                  </div>
                  
                  <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                    Engineering leader who <em className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-purple to-brand-cyan not-italic">ships</em> stores, apps & EdTech
                  </h1>
                  
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
                    {SITE.founder} — {LINKEDIN_PROFILE.summaryShort} By night, BuildWithAD delivers 24+ Shopify stores,
                    custom SaaS, AI automation, and game prototypes for global clients.
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <button
                      onClick={() => navigateTo("contact")}
                      className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand-pink to-brand-purple text-white font-bold shadow-neon-pink hover:shadow-neon-purple hover:scale-[1.03] transition-all duration-300 flex items-center space-x-2"
                    >
                      <span>Discuss your project</span>
                      <ArrowRight size={18} />
                    </button>
                    <button
                      onClick={() => navigateTo("portfolio")}
                      className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      See client work
                    </button>
                    <button
                      onClick={() => navigateTo("demo")}
                      className="px-6 py-4 rounded-xl bg-[#1b0b38]/40 hover:bg-[#1b0b38]/70 text-[#a78bfa] border border-[#a78bfa]/20 hover:border-[#a78bfa]/40 transition-all duration-300 flex items-center space-x-2"
                    >
                      <span>Interactive Mascot</span>
                      <Sparkle size={16} className="text-brand-pink animate-pulse" />
                    </button>
                  </div>

                  {/* Proof Badges */}
                  <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5 max-w-md">
                    <div>
                      <div className="text-3xl font-extrabold text-white">{LINKEDIN_PROFILE.stats.yearsExperience}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-3xl font-extrabold text-white">{LINKEDIN_PROFILE.stats.shopifyProjects}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Shopify Builds</div>
                    </div>
                    <div>
                      <div className="text-3xl font-extrabold text-white">{LINKEDIN_PROFILE.stats.liveStores}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Live Stores</div>
                    </div>
                  </div>
                </div>

                {/* Hero Showcase (Interactive Canvas Mask) */}
                <div className="lg:col-span-5 h-[350px] sm:h-[450px] relative rounded-3xl overflow-hidden glass-card p-2 group shadow-glass">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-pink/10 to-brand-cyan/10 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  {/* Canvas Mascot */}
                  <Mascot />
                  {/* Overlay tags */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/50 backdrop-blur-md border border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-400 block">3D INTERACTIVE MASCOT</span>
                      <span className="text-sm font-semibold text-white">AD Orbit Mascot</span>
                    </div>
                    <button 
                      onClick={() => navigateTo("demo")}
                      className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-pink text-white flex items-center justify-center transition-colors duration-300"
                    >
                      <Sliders size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* TRUSTED STACK BAND */}
            <div className="border-y border-white/5 bg-black/20 py-6 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-xs font-semibold tracking-wider text-gray-400">
                <span>⚡ CORE COMPETENCIES:</span>
                <span className="text-white hover:text-brand-pink transition-colors cursor-default">SHOPIFY & LIQUID</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
                <span className="text-white hover:text-brand-cyan transition-colors cursor-default">NEXT.JS WEB APPS</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
                <span className="text-white hover:text-brand-pink transition-colors cursor-default">REACT NATIVE MOBILE</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
                <span className="text-white hover:text-brand-green transition-colors cursor-default">AI AGENTS & WORKFLOWS</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
                <span className="text-white hover:text-brand-amber transition-colors cursor-default">HTML5 INTERACTIVES</span>
              </div>
            </div>

            {/* FAST CASH OFFER */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="glass-card rounded-3xl p-8 md:p-10 border border-brand-green/20 bg-brand-green/5">
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-green">
                      Fast launch offer
                    </span>
                    <h2 className="font-heading text-3xl sm:text-4xl font-extrabold">
                      3-day website that turns visitors into WhatsApp leads
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      Built for clinics, salons, dentists, restaurants, real estate agents, and local businesses
                      that need a trustworthy mobile site, services page, Google Maps, and inquiry flow without a long agency process.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-300">
                      {[
                        "Mobile landing page",
                        "Services/pricing section",
                        "WhatsApp + Google Maps CTA",
                        "Inquiry/booking form",
                      ].map((item) => (
                        <div key={item} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-5 rounded-3xl border border-white/10 bg-black/30 p-6 space-y-4">
                    <div>
                      <div className="text-sm text-gray-400 uppercase tracking-widest">Starter package</div>
                      <div className="text-4xl font-heading font-extrabold text-white mt-1">₨75k</div>
                      <p className="text-sm text-gray-400 mt-2">50% advance. First version in 3-5 days.</p>
                    </div>
                    <div className="border-t border-white/10 pt-4">
                      <div className="text-sm text-gray-400 uppercase tracking-widest">Remote clients</div>
                      <div className="text-2xl font-heading font-bold text-brand-cyan mt-1">$500+</div>
                    </div>
                    <button
                      onClick={() => navigateTo("contact")}
                      className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-brand-green to-brand-cyan text-black font-bold hover:scale-[1.02] transition-all duration-300"
                    >
                      Book a 10-minute call
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* BENTO GRID SERVICES SECTION */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-pink">What we do for clients</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight">
                  Full-stack services. Directly engineered.
                </h2>
                <p className="text-gray-400 text-lg font-light leading-relaxed">
                  Skip the account managers and agency markups. Work directly with an Associate Engineering Manager to design, architect, and deploy custom storefronts and app ecosystems.
                </p>
              </div>

              {/* Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CLIENT_SERVICES.map((service) => {
                  const IconComponent = IconMap[service.icon] || Layers;
                  return (
                    <div
                      key={service.id}
                      className="glass-card rounded-3xl p-8 flex flex-col justify-between group cursor-pointer"
                      onClick={() => navigateTo("services")}
                    >
                      <div className="space-y-6">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${service.accentColor} flex items-center justify-center text-white shadow-lg`}>
                          <IconComponent size={28} />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold font-heading group-hover:text-brand-pink transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed font-light">
                            {service.summary}
                          </p>
                        </div>
                      </div>
                      
                      <ul className="mt-8 space-y-3 pt-6 border-t border-white/5 text-xs text-gray-300">
                        {service.points.slice(0, 3).map((pt, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <CheckCircle2 size={14} className="text-brand-purple mt-0.5 flex-shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
              
              <div className="text-center mt-12">
                <button
                  onClick={() => navigateTo("services")}
                  className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 hover:border-white/20 transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <span>Explore all services</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </section>

            {/* DYNAMIC STATISTICS BAND */}
            <section className="bg-gradient-to-r from-brand-purple/20 via-brand-pink/10 to-[#090514] border-y border-white/5 py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                  <div className="space-y-1">
                    <div className="text-4xl sm:text-5xl font-extrabold font-heading text-white">{LINKEDIN_PROFILE.stats.shopifyProjects}</div>
                    <div className="text-xs uppercase tracking-widest text-gray-400">Stores Shipped</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-4xl sm:text-5xl font-extrabold font-heading text-white">{LINKEDIN_PROFILE.stats.yearsExperience}</div>
                    <div className="text-xs uppercase tracking-widest text-gray-400">Years in Software</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-4xl sm:text-5xl font-extrabold font-heading text-white">{LINKEDIN_PROFILE.stats.teamSizeLed}</div>
                    <div className="text-xs uppercase tracking-widest text-gray-400">Engineers Led</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-4xl sm:text-5xl font-extrabold font-heading text-white">{LINKEDIN_PROFILE.stats.gamesIntegrated}</div>
                    <div className="text-xs uppercase tracking-widest text-gray-400">Games Integrated</div>
                  </div>
                </div>
              </div>
            </section>

            {/* PRODUCTS & VENTURES GRID */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Products & ventures</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight">
                  We build our own pipeline
                </h2>
                <p className="text-gray-400 text-lg font-light leading-relaxed">
                  We test our ideas in the wild. From diabetes loggers to AI-assisted game compilers, our product lab is dedicated to shipping high-performing software that solves actual problems.
                </p>
              </div>

              {/* Products Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {OWN_PRODUCTS.map((prod, i) => (
                  <div key={i} className="glass-card rounded-3xl p-8 flex flex-col justify-between hover:border-brand-cyan/20">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold font-heading text-white">{prod.name}</h3>
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${prod.tagClass}`}>
                          {prod.tag}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed font-light">{prod.desc}</p>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-mono">{prod.stack}</span>
                      {prod.url ? (
                        <a
                          href={prod.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-cyan hover:text-white flex items-center space-x-1 text-xs font-semibold transition-colors duration-200"
                        >
                          <span>Visit Live</span>
                          <ExternalLink size={12} />
                        </a>
                      ) : (
                        <span className="text-xs text-gray-500 italic">Proprietary</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* PROCESS TIMELINE */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-purple">Workflow</span>
                <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight">
                  Clear process. Fast shipping.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { num: "01", title: "Discovery Audit", desc: "A 30-minute scoping call to align on system features, timeline, and tech specs." },
                  { num: "02", title: "Fixed Proposal", desc: "Clear line-item milestones and project cost contracts before writing a line of code." },
                  { num: "03", title: "Staged Builds", desc: "Weekly live demos and continuous async feedback loops so you see active progress." },
                  { num: "04", title: "Handoff & Support", desc: "Product deployment, code handover, and 30-days post-launch bug support." }
                ].map((step, idx) => (
                  <div key={idx} className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="text-5xl font-black font-heading text-white/5 mb-4">{step.num}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">{step.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA CALLOUT */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-3xl p-8 md:p-16 bg-gradient-to-tr from-brand-purple/20 via-brand-pink/15 to-dark-bg border border-brand-pink/20 relative overflow-hidden shadow-glass text-center space-y-6">
                <div className="glow-bg top-0 left-1/2 -translate-x-1/2 opacity-30"></div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight max-w-3xl mx-auto">
                  Have a specific project in mind?
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                  Tell me what you are building — custom Shopify storefront, mobile application, custom CRM dashboards, or smart API workflows. I reply within 24 hours.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => navigateTo("contact")}
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand-pink to-brand-purple hover:from-brand-purple hover:to-brand-pink text-white font-bold shadow-neon-pink hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center space-x-2"
                  >
                    <span>Get in touch</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ==================== SERVICES VIEW ==================== */}
        {activeTab === "services" && (
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-pink">Our Capabilities</span>
              <h1 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight">
                Our Services & Expertise
              </h1>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Full-stack capabilities spanning theme configuration, SaaS development, and agentic workflows.
              </p>
            </div>

            <div className="space-y-10">
              {CLIENT_SERVICES.map((service, idx) => {
                const IconComponent = IconMap[service.icon] || Layers;
                return (
                  <div key={service.id} className="glass-card rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-4 space-y-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${service.accentColor} flex items-center justify-center text-white shadow-lg`}>
                        <IconComponent size={32} />
                      </div>
                      <h2 className="text-2xl font-bold font-heading text-white">{service.title}</h2>
                      <p className="text-gray-400 text-sm leading-relaxed font-light">{service.summary}</p>
                    </div>
                    
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.points.map((point, index) => (
                        <div key={index} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start space-x-3">
                          <CheckCircle2 size={18} className="text-brand-pink mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ==================== PORTFOLIO VIEW ==================== */}
        {activeTab === "portfolio" && (
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">Client Work</span>
              <h1 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight">
                Our Case Studies & Builds
              </h1>
              <p className="text-gray-400 text-lg font-light">
                Shopify Plus builds, custom templates, and web apps launched for global DTC clients.
              </p>
            </div>

            {/* Prospect demos callout */}
            <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-tr from-brand-pink/15 via-brand-purple/10 to-dark-bg border border-brand-pink/20 relative overflow-hidden">
              <div className="glow-bg top-0 right-0 opacity-30" />
              <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-pink">Door 1 outreach</span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                    36 local business preview sites
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Personalized clinic, salon & restaurant demos with WhatsApp booking — built before cold outreach to show value first.
                  </p>
                </div>
                <a
                  href="/prospects"
                  className="shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-pink to-brand-purple text-white font-bold text-sm shadow-neon-pink hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
                >
                  Browse demos <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 border-b border-white/5 pb-6">
              {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setPortfolioFilter(key)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    portfolioFilter === key
                      ? "bg-brand-cyan text-[#090514] font-bold"
                      : "text-gray-400 hover:text-white bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => (
                <div key={idx} className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group h-full">
                  <div className="space-y-4">
                    {/* Visual Card Header */}
                    <div className="h-56 bg-black/40 relative overflow-hidden flex items-center justify-center border-b border-white/5">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-tr from-[#1b0b38] to-brand-cyan/20 flex flex-col items-center justify-center p-6 text-center">
                          <Monitor size={48} className="text-brand-cyan mb-2" />
                          <span className="text-xs text-brand-cyan font-mono uppercase tracking-widest">SaaS MVP / APP</span>
                        </div>
                      )}
                      
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-black/75 backdrop-blur-md border border-white/10 text-white">
                          {project.region}
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#090514]/75 backdrop-blur-md border border-brand-cyan/20 text-brand-cyan">
                          {project.niche}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-brand-pink transition-colors duration-300">
                        {project.name}
                      </h3>
                      {project.externalNote && (
                        <p className="text-xs text-gray-400 italic font-mono">{project.externalNote}</p>
                      )}
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center justify-between bg-black/10">
                    <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                      {CATEGORY_LABELS[project.category] || project.category}
                    </span>
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-pink hover:text-white flex items-center space-x-1 text-xs font-bold transition-colors duration-200"
                      >
                        <span>Visit Site</span>
                        <ExternalLink size={12} />
                      </a>
                    ) : (
                      <span className="text-xs text-gray-500 italic">Theme Preview</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ==================== MASCOT DEMO VIEW ==================== */}
        {activeTab === "demo" && (
          <section className="relative h-[calc(100vh-80px)] min-h-[500px] flex flex-col md:flex-row overflow-hidden bg-black">
            
            {/* Left Hand: Mascot Canvas */}
            <div className="flex-grow h-2/3 md:h-full relative">
              <Mascot bodyColor={mascotColor} speedMultiplier={speedMultiplier} className="w-full h-full" />
              
              {/* Screen Badges */}
              <div className="absolute top-6 left-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/5 pointer-events-none">
                <span className="text-[10px] tracking-widest text-brand-pink uppercase block font-bold">mascot rendering engine</span>
                <span className="text-base font-extrabold text-white">Three.js Physical Material</span>
              </div>
            </div>

            {/* Right Hand: Settings panel */}
            <div className="w-full md:w-96 bg-[#090514]/90 backdrop-blur-md border-t md:border-t-0 md:border-l border-white/5 p-8 flex flex-col justify-between overflow-y-auto h-1/3 md:h-full z-10">
              <div className="space-y-6">
                <div className="space-y-1">
                  <h1 className="text-2xl font-bold font-heading text-white">Mascot Sandbox</h1>
                  <p className="text-gray-400 text-xs font-light">Interact with the mascot by moving your cursor on the canvas, or adjust parameters in real-time below.</p>
                </div>

                <div className="space-y-6 pt-4 border-t border-white/5">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold tracking-wider text-gray-300 block">MASCOT BODY COLOR</label>
                    <div className="flex gap-2">
                      {[
                        { hex: "#ff4ecd", name: "Candy Pink" },
                        { hex: "#8b5cf6", name: "Neon Violet" },
                        { hex: "#38bdf8", name: "Sky Cyan" },
                        { hex: "#fbbf24", name: "Amber Gold" },
                        { hex: "#34d399", name: "Lime Green" }
                      ].map((color) => (
                        <button
                          key={color.hex}
                          onClick={() => setMascotColor(color.hex)}
                          className={`w-8 h-8 rounded-full border-2 ${
                            mascotColor === color.hex ? "border-white scale-110 shadow-lg" : "border-transparent"
                          }`}
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold tracking-wider text-gray-300">
                      <span>ORBIT ROTATION SPEED</span>
                      <span className="text-brand-pink">{speedMultiplier}x</span>
                    </div>
                    <input
                      type="range"
                      min="0.2"
                      max="3.0"
                      step="0.1"
                      value={speedMultiplier}
                      onChange={(e) => setSpeedMultiplier(parseFloat(e.target.value))}
                      className="w-full accent-brand-pink"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 space-y-4">
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping"></span>
                  <span>Renderer running at 60 FPS</span>
                </div>
                <button
                  onClick={() => navigateTo("contact")}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-pink to-brand-purple hover:from-brand-purple hover:to-brand-pink text-white text-sm font-bold shadow-neon-pink transition-all duration-300"
                >
                  Order Custom Web mascot
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ==================== ABOUT VIEW ==================== */}
        {activeTab === "about" && (
          <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
            <div className="text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-pink">LinkedIn profile</span>
              <h1 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight">
                {LINKEDIN_PROFILE.fullName}
              </h1>
              <p className="text-brand-cyan text-lg font-medium">{LINKEDIN_PROFILE.headline}</p>
              <p className="text-gray-400 text-base font-light max-w-2xl mx-auto">
                {LINKEDIN_PROFILE.location} · {LINKEDIN_PROFILE.industry}
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8 md:p-12 space-y-6 font-light leading-relaxed text-gray-300 text-base">
              {LINKEDIN_PROFILE.summary.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-white/5">
                <div className="flex items-center space-x-3">
                  <MapPin size={20} className="text-brand-pink flex-shrink-0" />
                  <span>{LINKEDIN_PROFILE.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-brand-cyan flex-shrink-0" />
                  <a href={`mailto:${SITE.email}`} className="hover:text-brand-cyan">{SITE.email}</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin size={20} className="text-brand-purple flex-shrink-0" />
                  <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple">
                    linkedin.com/in/iadeelahmad
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock size={20} className="text-brand-green flex-shrink-0" />
                  <span>{LINKEDIN_PROFILE.stats.yearsExperience} years · BSc CS, GCU Lahore</span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-6">
              <h2 className="text-2xl font-heading font-bold text-white">Experience</h2>
              <div className="space-y-4">
                {LINKEDIN_PROFILE.experience.map((job, i) => (
                  <div key={i} className="glass-card rounded-2xl p-6 md:p-8 space-y-3">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-bold text-white">{job.role}</h3>
                        <p className="text-brand-pink text-sm font-medium">{job.company}</p>
                      </div>
                      <span className="text-xs text-gray-500 font-mono whitespace-nowrap">{job.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {job.highlights.map((h, j) => (
                        <li key={j} className="flex items-start space-x-2 text-sm text-gray-400">
                          <CheckCircle2 size={14} className="text-brand-purple mt-0.5 flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Key projects */}
            <div className="space-y-6">
              <h2 className="text-2xl font-heading font-bold text-white">Key projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {LINKEDIN_PROFILE.keyProjects.map((proj, i) => (
                  <div key={i} className="glass-card rounded-2xl p-6 space-y-3">
                    <div>
                      <h3 className="font-bold text-white">{proj.name}</h3>
                      <p className="text-xs text-brand-cyan">{proj.org}</p>
                    </div>
                    <p className="text-sm text-gray-400 font-light">{proj.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white/5 text-gray-400 border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-white">Education</h2>
                {LINKEDIN_PROFILE.education.map((edu, i) => (
                  <div key={i} className="glass-card rounded-2xl p-6">
                    <h3 className="font-bold text-white">{edu.degree}</h3>
                    <p className="text-brand-pink text-sm">{edu.school}</p>
                    <p className="text-xs text-gray-500 mt-1">{edu.period} · {edu.location}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-bold text-white">Skills</h2>
                {Object.entries(LINKEDIN_PROFILE.skills).map(([group, items]) => (
                  <div key={group} className="glass-card rounded-2xl p-6">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">{group}</h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span key={skill} className="px-2.5 py-1 rounded-lg text-xs bg-white/5 text-gray-300 border border-white/5">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center pt-4">
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold transition-all"
              >
                <Linkedin size={18} />
                <span>View full LinkedIn profile</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </section>
        )}

        {/* ==================== CONTACT VIEW ==================== */}
        {activeTab === "contact" && (
          <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-pink">Get in touch</span>
              <h1 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight">
                Let's start your project
              </h1>
              <p className="text-gray-400 text-lg font-light">
                Tell me about your scope, budget, and timeline. I typically reply within 24 hours.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 pt-2">
                <a href={`mailto:${SITE.email}`} className="hover:text-brand-pink">{SITE.email}</a>
                <span className="text-gray-600">·</span>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-brand-pink">{SITE.phone}</a>
                <span className="text-gray-600">·</span>
                <span>{LINKEDIN_PROFILE.location}</span>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8 md:p-12">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 flex items-center justify-center mx-auto text-3xl">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white">Message sent successfully!</h3>
                  <p className="text-gray-400 max-w-sm mx-auto text-sm font-light">
                    Thank you for reaching out. I've received your project brief and will follow up at the email provided shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: "", email: "", projectType: "shopify", budget: "medium", message: "" });
                      }}
                      className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-bold transition-all"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-wider text-gray-300 block">YOUR NAME</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/45 border border-white/10 focus:border-brand-pink focus:ring-1 focus:ring-brand-pink text-white outline-none transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-wider text-gray-300 block">EMAIL ADDRESS</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/45 border border-white/10 focus:border-brand-pink focus:ring-1 focus:ring-brand-pink text-white outline-none transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-wider text-gray-300 block">PROJECT TYPE</label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#090514] border border-white/10 focus:border-brand-pink focus:ring-1 focus:ring-brand-pink text-white outline-none transition-all duration-300"
                      >
                        <option value="shopify">Shopify / E-commerce</option>
                        <option value="webapp">Custom Web Application</option>
                        <option value="mobile">React Native Mobile App</option>
                        <option value="ai">AI Agent / Automation</option>
                        <option value="consulting">Engineering Consulting</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold tracking-wider text-gray-300 block">BUDGET RANGE (USD)</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#090514] border border-white/10 focus:border-brand-pink focus:ring-1 focus:ring-brand-pink text-white outline-none transition-all duration-300"
                      >
                        <option value="small">Under $3,000</option>
                        <option value="medium">$3,000 - $7,000</option>
                        <option value="large">$7,000 - $15,000</option>
                        <option value="enterprise">$15,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-wider text-gray-300 block">PROJECT DESCRIPTION</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/45 border border-white/10 focus:border-brand-pink focus:ring-1 focus:ring-brand-pink text-white outline-none transition-all duration-300 resize-none"
                      placeholder="Describe the scope, integrations, design needs, and timeline of your project..."
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-pink to-brand-purple hover:from-brand-purple hover:to-brand-pink text-white font-bold shadow-neon-pink hover:shadow-neon-purple transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Send size={16} />
                      <span>Send Project Brief</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </section>
        )}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-black/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4 md:col-span-2 text-left">
              <button onClick={() => navigateTo("home")} className="flex items-center space-x-3 group">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-pink to-brand-purple flex items-center justify-center font-bold text-white shadow-neon-pink group-hover:scale-105 transition-transform duration-300">
                  AD
                </div>
                <span className="font-heading font-bold text-lg tracking-tight">
                  BuildWith<span className="text-brand-pink">AD</span>
                </span>
              </button>
              <p className="text-gray-400 text-sm font-light max-w-sm leading-relaxed">
                {LINKEDIN_PROFILE.headline} — BuildWithAD is the client-facing studio for Shopify, apps, AI, and games. Based in Lahore, delivering worldwide.
              </p>
              
              <div className="flex space-x-4 pt-2">
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-brand-pink text-gray-300 hover:text-white flex items-center justify-center transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-brand-pink text-gray-300 hover:text-white flex items-center justify-center transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-brand-pink text-gray-300 hover:text-white flex items-center justify-center transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            <div className="text-left">
              <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-white mb-4">Navigate</h4>
              <ul className="space-y-2 text-sm">
                {[
                  { id: "home", label: "Home" },
                  { id: "services", label: "Services" },
                  { id: "portfolio", label: "Portfolio" },
                  { id: "demo", label: "3D Mascot" },
                  { id: "about", label: "About" },
                  { id: "contact", label: "Contact" }
                ].map(item => (
                  <li key={item.id}>
                    <button
                      onClick={() => navigateTo(item.id)}
                      className="text-gray-400 hover:text-brand-pink transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-left">
              <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-white mb-4">Core Tech</h4>
              <ul className="space-y-1.5 text-sm text-gray-400 font-mono">
                {TECH_STACK.slice(0, 6).map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light gap-4">
            <span>© {new Date().getFullYear()} BuildWithAD · {SITE.founder}</span>
            <span>{LINKEDIN_PROFILE.location} · Remote Worldwide</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
