export function waMeLink(phoneE164, text) {
  const digits = phoneE164.replace(/\D/g, "");
  const base = `https://wa.me/${digits}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
