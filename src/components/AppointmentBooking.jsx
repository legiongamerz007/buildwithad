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

export default function AppointmentBooking({
  businessName,
  phoneE164,
  services,
  timeSlots,
  accent = "#0f766e",
  accentLight = "#ccfbf1",
  dark = false,
  ink = "#1c1917",
  paper = "#ffffff",
  border = "#e7e5e4",
  displayFont,
}) {
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
  const cardBg = dark ? "#0c0a09" : paper;
  const inputBg = dark ? "#1c1917" : "#fafaf9";

  return (
    <div
      id="book"
      className="rounded-3xl p-6 sm:p-8 border shadow-xl"
      style={{ backgroundColor: cardBg, borderColor: border, color: ink }}
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
        Online booking
      </p>
      <h3 className="text-2xl font-bold mt-2" style={{ fontFamily: displayFont }}>
        Reserve your slot
      </h3>
      <p className="text-sm mt-2 opacity-65">
        Pick a service and time — confirms via WhatsApp to {businessName}.
      </p>

      <div className="flex gap-2 mt-6 mb-6">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className="h-1.5 flex-1 rounded-full transition-colors"
            style={{ backgroundColor: step >= s ? accent : dark ? "#292524" : "#e7e5e4" }}
          />
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-3">
          <p className="text-sm font-semibold">Select service</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {services.map((s) => {
              const active = serviceId === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setServiceId(s.id)}
                  className="text-left p-4 rounded-xl border text-sm transition-all"
                  style={{
                    borderColor: active ? accent : border,
                    backgroundColor: active ? accentLight : "transparent",
                    boxShadow: active ? `0 0 0 2px ${accent}33` : "none",
                  }}
                >
                  <span className="font-semibold block">{s.label}</span>
                  <span className="text-xs opacity-50">{s.duration}</span>
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => setStep(2)}
            className="mt-4 w-full rounded-xl text-white font-bold py-3.5 transition-transform hover:scale-[1.01]"
            style={{ backgroundColor: accent }}
          >
            Continue
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold mb-2">Preferred date</p>
            <div className="flex flex-wrap gap-2">
              {days.map((d) => {
                const active = date === d.label;
                return (
                  <button
                    key={d.iso}
                    type="button"
                    onClick={() => setDate(d.label)}
                    className="px-3 py-2 rounded-lg text-xs font-medium border"
                    style={{
                      borderColor: active ? accent : border,
                      backgroundColor: active ? accentLight : "transparent",
                      color: active ? accent : undefined,
                    }}
                  >
                    {d.label}
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold mb-2">Preferred time</p>
            <div className="flex flex-wrap gap-2">
              {timeSlots.map((t) => {
                const active = time === t;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTime(t)}
                    className="px-3 py-2 rounded-lg text-xs font-medium border"
                    style={{
                      borderColor: active ? accent : border,
                      backgroundColor: active ? accentLight : "transparent",
                      color: active ? accent : undefined,
                    }}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex-1 py-3 rounded-xl border font-semibold text-sm"
              style={{ borderColor: border }}
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              disabled={!date || !time}
              className="flex-1 py-3 rounded-xl text-white font-bold text-sm disabled:opacity-40"
              style={{ backgroundColor: accent }}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <label className="block text-sm">
            <span className="font-semibold">Your name</span>
            <input
              className="mt-1 w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-2"
              style={{ borderColor: border, backgroundColor: inputBg, color: ink }}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ahmed Khan"
            />
          </label>
          <label className="block text-sm">
            <span className="font-semibold">Your WhatsApp number</span>
            <input
              className="mt-1 w-full rounded-lg border px-3 py-2.5 text-sm outline-none"
              style={{ borderColor: border, backgroundColor: inputBg, color: ink }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="03xx xxxxxxx"
            />
          </label>
          <div
            className="rounded-lg p-3 text-xs font-mono whitespace-pre-wrap opacity-70 border"
            style={{ backgroundColor: inputBg, borderColor: border }}
          >
            {message}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="flex-1 py-3 rounded-xl border font-semibold text-sm"
              style={{ borderColor: border }}
            >
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
