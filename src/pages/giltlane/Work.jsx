import { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../../giltlane/Nav";
import Footer from "../../giltlane/Footer";
import { BRAND } from "../../giltlane/brand";
import "../../giltlane/giltlane.css";

const MODULES = [
  {
    title: "Student pipeline CRM",
    body: "Every enquiry in one board: stage, counsellor, campus, target country, documents, follow-ups. Not a spreadsheet passed on WhatsApp at midnight.",
  },
  {
    title: "WhatsApp AI agent",
    body: "Live chat desk, knowledge base, simulator, and Meta WhatsApp Business send path. The agent replies; a counsellor can take over. Chats attach to the lead.",
  },
  {
    title: "Broadcast studio",
    body: "Approved Meta templates for seminar reminders and thank-yous. Targeted by city so the right students get the right night.",
  },
  {
    title: "Campaign ingest",
    body: "Marketing campaigns drop leads into the pipeline with de-duplication. Counsellors stop re-entering the same number from three ads.",
  },
  {
    title: "Document checks",
    body: "Students upload; the desk verifies. Qualification score instead of a folder of blurry JPEGs in a group chat.",
  },
  {
    title: "Campuses, staff, roles",
    body: "Head office and branches. Role-based access so a counsellor sees their book, not the whole company. Student portal for the other side of the desk.",
  },
];

export default function GiltlaneWork() {
  useEffect(() => {
    document.title = `Education CRM & WhatsApp AI · ${BRAND.name}`;
    document.body.classList.add("giltlane-body");
    return () => document.body.classList.remove("giltlane-body");
  }, []);

  return (
    <div className="uk-root">
      <Nav active="work" />

      <article className="max-w-3xl mx-auto px-5 sm:px-8 py-14">
        <p className="uk-kicker">Flagship example · education</p>
        <h1 className="uk-display text-4xl sm:text-5xl leading-[1.08] mt-4">
          A consultancy that ran on WhatsApp groups now has a desk.
        </h1>
        <p className="text-[var(--uk-muted)] mt-6 text-lg leading-relaxed">
          Built for a multi-city education consultancy running study-abroad seminars. The brief was
          not “make an app”. It was: stop losing students between ads, Excel, and a counsellor’s
          personal phone. Client unnamed on this page.
        </p>
        <p className="text-xs uppercase tracking-[0.14em] text-[var(--uk-copper)] mt-4">
          Example engagement · real production system
        </p>
      </article>

      <img
        src="/assets/giltlane/giltlane-education-ops.jpg"
        alt=""
        className="w-full max-w-6xl mx-auto px-5 sm:px-8 aspect-[16/8] object-cover"
      />

      <section className="max-w-3xl mx-auto px-5 sm:px-8 py-14">
        <h2 className="uk-display text-2xl">What shipped</h2>
        <p className="text-[var(--uk-muted)] mt-3 leading-relaxed">
          A full operations system: React frontend, Prisma and Postgres, Meta WhatsApp Business API,
          a language model for the agent, campaign tools, document checks, analytics. This is
          production software — not a Figma file.
        </p>
        <div className="mt-10 space-y-8">
          {MODULES.map((m) => (
            <div key={m.title} className="border-t border-[var(--uk-line)] pt-5">
              <h3 className="font-semibold">{m.title}</h3>
              <p className="text-[var(--uk-muted)] mt-2 leading-relaxed">{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-4 grid sm:grid-cols-2 gap-4">
        <img src="/assets/giltlane/giltlane-crm-ops.jpg" alt="" className="w-full aspect-[16/10] object-cover" />
        <img src="/assets/giltlane/giltlane-enquiry-desk.jpg" alt="" className="w-full aspect-[16/10] object-cover" />
      </section>

      <section className="max-w-3xl mx-auto px-5 sm:px-8 py-14">
        <h2 className="uk-display text-2xl">Why this matters for any high-enquiry business</h2>
        <p className="text-[var(--uk-muted)] mt-4 leading-relaxed">
          Clinics, consultancies, education, local services — leads arrive on Instagram and WhatsApp,
          nobody owns follow-up, and the owner becomes the CRM. This build proves we can sit an AI
          agent on a real pipeline, not just schedule posts.
        </p>
        <div className="flex flex-wrap gap-3 mt-10">
          <Link to="/giltlane/deck" className="uk-btn uk-btn-primary">
            Back to the presentation
          </Link>
          <Link to="/giltlane" className="uk-btn uk-btn-ghost">
            Studio home
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
