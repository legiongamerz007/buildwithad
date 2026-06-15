/** BuildWithAD — site content (services, products, ventures) */
export const SITE = {
  brand: "BuildWithAD",
  founder: "Adeel Ahmad",
  role: "Associate Engineering Manager · Full-stack engineer",
  location: "Pakistan",
  email: "i.am.adeelee@gmail.com",
  linkedin: "https://www.linkedin.com/in/adeelahmad",
  github: "https://github.com/legiongamerz007",
};

export const CLIENT_SERVICES = [
  {
    id: "shopify",
    icon: "ShoppingBag", // Lucide icon name
    title: "Shopify & E-commerce",
    summary: "Custom themes, store builds, migrations, and conversion-focused storefronts for DTC brands.",
    points: [
      "Theme design & Liquid development",
      "Speed, SEO, and mobile UX",
      "Catalog, checkout, and app integrations",
      "24+ stores shipped globally"
    ],
    accentColor: "from-[#ff4ecd] to-[#8b5cf6]",
  },
  {
    id: "web",
    icon: "Layers",
    title: "Web & Mobile Applications",
    summary: "Production apps with Next.js, React Native, and APIs — from landing pages to full SaaS.",
    points: [
      "Next.js / React dashboards & marketing sites",
      "React Native iOS & Android",
      "Auth, payments, databases at scale",
      "Deployed on Vercel, Fly.io, AWS"
    ],
    accentColor: "from-[#8b5cf6] to-[#38bdf8]",
  },
  {
    id: "ai",
    icon: "Sparkles",
    title: "AI & Intelligent Automation",
    summary: "Chatbots, document AI, agents, and workflow automation that integrate with your existing tools.",
    points: [
      "Custom GPT / Groq-powered assistants",
      "PDF & image analysis pipelines",
      "Lead outreach & CRM automation",
      "Agentic SDLC for product teams"
    ],
    accentColor: "from-[#38bdf8] to-[#34d399]",
  },
  {
    id: "games",
    icon: "Gamepad2",
    title: "Games & Interactive Experiences",
    summary: "HTML5 games, playable prototypes, and game-design tooling for studios and brands.",
    points: [
      "GDD → playable MVP pipelines",
      "WebGL / Unity / instant games",
      "AI-assisted game design docs",
      "Prototype in weeks, not months"
    ],
    accentColor: "from-[#34d399] to-[#fbbf24]",
  },
  {
    id: "cms",
    icon: "GraduationCap",
    title: "CMS & B2B Platforms",
    summary: "School management, academy portals, and industry-specific admin systems.",
    points: [
      "Admissions, fees, parent portals",
      "Role-based admin dashboards",
      "White-label for agencies",
      "PK market + export-ready"
    ],
    accentColor: "from-[#fbbf24] to-[#ff4ecd]",
  },
  {
    id: "consulting",
    icon: "Users2",
    title: "Engineering Leadership & Delivery",
    summary: "Hands-on AEM support — architecture reviews, team velocity, and shipping discipline.",
    points: [
      "Agentic / vibe-coded delivery models",
      "Technical due diligence",
      "MVP scoping & fixed-price quotes",
      "Direct access — no account managers"
    ],
    accentColor: "from-[#ff4ecd] to-[#38bdf8]",
  },
];

export const OWN_PRODUCTS = [
  {
    name: "GlycoRange",
    tag: "Live",
    tagClass: "bg-green-500/10 text-green-400 border-green-500/30",
    desc: "Diabetes tracker for Type 2 & prediabetes — glucose logging, AI lab reports, mobile app.",
    url: "https://www.glycorange.com",
    stack: "Next.js · Fly.io · Expo",
  },
  {
    name: "GDDforge",
    tag: "MVP",
    tagClass: "bg-brand-purple/10 text-[#a78bfa] border-[#a78bfa]/30",
    desc: "AI game design document generator — from idea to structured GDD in minutes.",
    url: null,
    stack: "Next.js · OpenAI · Lemon Squeezy",
  },
  {
    name: "Playforge",
    tag: "MVP",
    tagClass: "bg-brand-purple/10 text-[#a78bfa] border-[#a78bfa]/30",
    desc: "Turn GDDs into playable HTML5 game prototypes with AI iteration.",
    url: null,
    stack: "Next.js · Canvas / WebGL",
  },
  {
    name: "Life Hub",
    tag: "Building",
    tagClass: "bg-brand-cyan/10 text-[#38bdf8] border-[#38bdf8]/30",
    desc: "Personal & business command center — finance, ventures, leads, social, and goals in one place.",
    url: null,
    stack: "Next.js · SQLite",
  },
  {
    name: "Nexabelle / GlowGuard",
    tag: "Planning",
    tagClass: "bg-brand-pink/10 text-brand-pink border-brand-pink/30",
    desc: "Derma & beauty brand — sunblock and skincare, physical products with brother.",
    url: null,
    stack: "Shopify · PK market",
  },
  {
    name: "FileDesk",
    tag: "Planned",
    tagClass: "bg-gray-500/10 text-gray-400 border-gray-500/30",
    desc: "Privacy-first PDF & image tools — compress, convert, merge in the browser.",
    url: null,
    stack: "Next.js · WASM",
  },
];

export const TECH_STACK = [
  "Shopify", "Next.js", "React Native", "TypeScript", "Node.js",
  "PostgreSQL", "Fly.io", "Vercel", "Groq", "OpenAI", "Expo",
];
