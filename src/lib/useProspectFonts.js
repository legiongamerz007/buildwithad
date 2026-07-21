import { useEffect } from "react";

const DISPLAY = {
  fraunces: "Fraunces:opsz,wght@9..144,500;600;700",
  playfair: "Playfair+Display:wght@500;600;700",
  "dm-serif": "DM+Serif+Display:wght@400",
  syne: "Syne:wght@600;700;800",
};

const BODY = {
  "source-sans": "Source+Sans+3:wght@400;500;600;700",
  "dm-sans": "DM+Sans:wght@400;500;600;700",
  outfit: "Outfit:wght@400;500;600;700",
};

const DISPLAY_CSS = {
  fraunces: '"Fraunces", Georgia, serif',
  playfair: '"Playfair Display", Georgia, serif',
  "dm-serif": '"DM Serif Display", Georgia, serif',
  syne: '"Syne", system-ui, sans-serif',
};

const BODY_CSS = {
  "source-sans": '"Source Sans 3", system-ui, sans-serif',
  "dm-sans": '"DM Sans", system-ui, sans-serif',
  outfit: '"Outfit", system-ui, sans-serif',
};

/**
 * Inject Google Fonts for a prospect theme and return CSS font-family strings.
 */
export function useProspectFonts(theme) {
  const displayKey = theme?.displayFont ?? "fraunces";
  const bodyKey = theme?.bodyFont ?? "source-sans";

  useEffect(() => {
    const id = "prospect-google-fonts";
    const href = `https://fonts.googleapis.com/css2?family=${DISPLAY[displayKey] ?? DISPLAY.fraunces}&family=${BODY[bodyKey] ?? BODY["source-sans"]}&display=swap`;
    let link = document.getElementById(id);
    if (!link) {
      link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
    link.href = href;
  }, [displayKey, bodyKey]);

  return {
    display: DISPLAY_CSS[displayKey] ?? DISPLAY_CSS.fraunces,
    body: BODY_CSS[bodyKey] ?? BODY_CSS["source-sans"],
  };
}
