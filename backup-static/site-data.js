/** BuildWithAD — site content (services, products, ventures) */
const SITE = {
  brand: "BuildWithAD",
  founder: "Adeel Ahmad",
  role: "Associate Engineering Manager · Full-stack engineer",
  location: "Pakistan",
  email: "i.am.adeelee@gmail.com",
  linkedin: "https://www.linkedin.com/in/adeelahmad",
  github: "https://github.com/legiongamerz007",
};

const CLIENT_SERVICES = [
  {
    id: "shopify",
    icon: "fa-shopify",
    iconBrand: true,
    title: "Shopify & E-commerce",
    summary: "Custom themes, store builds, migrations, and conversion-focused storefronts for DTC brands.",
    points: ["Theme design & Liquid development", "Speed, SEO, and mobile UX", "Catalog, checkout, and app integrations", "24+ stores shipped globally"],
    href: "services.html#shopify",
  },
  {
    id: "web",
    icon: "fa-layer-group",
    title: "Web & Mobile Applications",
    summary: "Production apps with Next.js, React Native, and APIs — from landing pages to full SaaS.",
    points: ["Next.js / React dashboards & marketing sites", "React Native iOS & Android", "Auth, payments, databases at scale", "Deployed on Vercel, Fly.io, AWS"],
    href: "services.html#web",
  },
  {
    id: "ai",
    icon: "fa-wand-magic-sparkles",
    title: "AI & Intelligent Automation",
    summary: "Chatbots, document AI, agents, and workflow automation that integrate with your existing tools.",
    points: ["Custom GPT / Groq-powered assistants", "PDF & image analysis pipelines", "Lead outreach & CRM automation", "Agentic SDLC for product teams"],
    href: "services.html#ai",
  },
  {
    id: "games",
    icon: "fa-gamepad",
    title: "Games & Interactive Experiences",
    summary: "HTML5 games, playable prototypes, and game-design tooling for studios and brands.",
    points: ["GDD → playable MVP pipelines", "WebGL / Unity / instant games", "AI-assisted game design docs", "Prototype in weeks, not months"],
    href: "services.html#games",
  },
  {
    id: "cms",
    icon: "fa-school",
    title: "CMS & B2B Platforms",
    summary: "School management, academy portals, and industry-specific admin systems.",
    points: ["Admissions, fees, parent portals", "Role-based admin dashboards", "White-label for agencies", "PK market + export-ready"],
    href: "services.html#cms",
  },
  {
    id: "consulting",
    icon: "fa-people-group",
    title: "Engineering Leadership & Delivery",
    summary: "Hands-on AEM support — architecture reviews, team velocity, and shipping discipline.",
    points: ["Agentic / vibe-coded delivery models", "Technical due diligence", "MVP scoping & fixed-price quotes", "Direct access — no account managers"],
    href: "services.html#consulting",
  },
];

const OWN_PRODUCTS = [
  {
    name: "GlycoRange",
    tag: "Live",
    tagClass: "live",
    desc: "Diabetes tracker for Type 2 & prediabetes — glucose logging, AI lab reports, mobile app.",
    url: "https://www.glycorange.com",
    stack: "Next.js · Fly.io · Expo",
  },
  {
    name: "GDDforge",
    tag: "MVP",
    tagClass: "mvp",
    desc: "AI game design document generator — from idea to structured GDD in minutes.",
    url: null,
    stack: "Next.js · OpenAI · Lemon Squeezy",
  },
  {
    name: "Playforge",
    tag: "MVP",
    tagClass: "mvp",
    desc: "Turn GDDs into playable HTML5 game prototypes with AI iteration.",
    url: null,
    stack: "Next.js · Canvas / WebGL",
  },
  {
    name: "Life Hub",
    tag: "Building",
    tagClass: "build",
    desc: "Personal & business command center — finance, ventures, leads, social, and goals in one place.",
    url: null,
    stack: "Next.js · SQLite",
  },
  {
    name: "Nexabelle / GlowGuard",
    tag: "Planning",
    tagClass: "plan",
    desc: "Derma & beauty brand — sunblock and skincare, physical products with brother.",
    url: null,
    stack: "Shopify · PK market",
  },
  {
    name: "FileDesk",
    tag: "Planned",
    tagClass: "plan",
    desc: "Privacy-first PDF & image tools — compress, convert, merge in the browser.",
    url: null,
    stack: "Next.js · WASM",
  },
];

const TECH_STACK = [
  "Shopify", "Next.js", "React Native", "TypeScript", "Node.js",
  "PostgreSQL", "Fly.io", "Vercel", "Groq", "OpenAI", "Expo",
];
