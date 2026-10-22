import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copyFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const SPA_ROUTES = [
  "giltlane",
  "giltlane/deck",
  "giltlane/sizzle",
  "giltlane/one-pager",
  "giltlane/work/education-crm",
  "prospects",
];

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "gh-pages-spa-fallback",
      closeBundle() {
        const dist = resolve("dist");
        const index = resolve(dist, "index.html");
        copyFileSync(index, resolve(dist, "404.html"));
        for (const route of SPA_ROUTES) {
          const dir = resolve(dist, route);
          mkdirSync(dir, { recursive: true });
          copyFileSync(index, resolve(dir, "index.html"));
        }
      },
    },
  ],
});
