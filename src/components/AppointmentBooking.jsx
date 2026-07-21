import { useMemo, useState } from "react";
import { waMeLink } from "../lib/waMeLink";

function nextSevenDays() {
  const days = [];
  const fmt = new Intl.DateTimeFormat("en-PK", { weekday: "short", month: "short", day: "numeric" });
  for (let i = 1; i <= 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    days.push({ iso: d.toISOString().slice(0, 10), label: fmt.format(d) });
  }
  return days;
}

export default function AppointmentBooking({ businessName, phoneE164, services, timeSlots }) {
  const [step, setStep] = useState(1);
  const [serviceId, setServiceId] = useState(services[0]?.id ?? "");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const days = useMemo(() => nextSevenDays(), []);
  const service = services.find((s) => s.id === serviceId);

  const message = useMemo(() => {
    return [
      `Assalam-o-Alaikum! I'd like to book an appointment at ${businessName}.`,
      "",
      `Service: ${service?.label ?? "—"}`,
      `Date: ${date || "—"}`,
      `Time: ${time || "—"}`,
      `Name: ${name || "—"}`,
      `Phone: ${phone || "—"}`,
    ].join("\n");
  }, [businessName, service, date, time, name, phone]);

  const waHref = waMeLink(phoneE164, message);

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8" id="book">
      <p className="text-xs font-bold uppercase tracking-widest text-brand-pink">Online booking</p>
      <h3 className="text-2xl font-heading font-bold mt-2 text-white">Reserve your slot</h3>
      <p className="text-sm mt-2 text-gray-400">
        Pick a service and time — confirms via WhatsApp to {businessName}.
      </p>

      <div className="flex gap-2 mt-6 mb-6">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`h-1 flex-1 rounded-full transition-colors ${step >= s ? "bg-brand-pink" : "bg-white/10"}`}
          />
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-3">
          <p className="text-sm font-semibold text-white">Select service</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {services.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setServiceId(s.id)}
                className={`text-left p-4 rounded-xl border text-sm transition-all ${
                  serviceId === s.id
                    ? "border-brand-pink ring-2 ring-brand-pink/30 bg-brand-pink/5"
                    : "border-white/10 hover:border-white/25"
                }`}
              >
                <span className="font-semibold block text-white">{s.label}</span>
                <span className="text-xs text-gray-500">{s.duration}</span>
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setStep(2)}
            className="mt-4 w-full rounded-xl bg-gradient-to-r from-brand-pink to-brand-purple text-white font-bold py-3 hover:scale-[1.01] transition-transform"
          >
            Continue
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold mb-2 text-white">Preferred date</p>
            <div className="flex flex-wrap gap-2">
              {days.map((d) => (
                <button
                  key={d.iso}
                  type="button"
                  onClick={() => setDate(d.label)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium border ${
                    date === d.label ? "border-brand-pink bg-brand-pink/10 text-white" : "border-white/10 text-gray-400"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold mb-2 text-white">Preferred time</p>
            <div className="flex flex-wrap gap-2">
              {timeSlots.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTime(t)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium border ${
                    time === t ? "border-brand-pink bg-brand-pink/10 text-white" : "border-white/10 text-gray-400"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => setStep(1)} className="flex-1 py-3 rounded-xl border border-white/10 font-semibold text-sm text-gray-300">
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              disabled={!date || !time}
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-pink to-brand-purple disabled:opacity-40 text-white font-bold text-sm"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <label className="block text-sm text-white">
            <span className="font-semibold">Your name</span>
            <input
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-gray-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ahmed Khan"
            />
          </label>
          <label className="block text-sm text-white">
            <span className="font-semibold">Your WhatsApp number</span>
            <input
              className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-gray-600"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="03xx xxxxxxx"
            />
          </label>
          <div className="rounded-lg p-3 text-xs font-mono whitespace-pre-wrap bg-black/40 text-gray-400 border border-white/5">
            {message}
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => setStep(2)} className="flex-1 py-3 rounded-xl border border-white/10 font-semibold text-sm text-gray-300">
              Back
            </button>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm text-center"
            >
              Confirm on WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
