/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#090514",
          card: "rgba(17, 10, 31, 0.5)",
          border: "rgba(255, 255, 255, 0.08)",
          cardHover: "rgba(25, 15, 46, 0.65)",
        },
        brand: {
          pink: "#ff4ecd",
          purple: "#8b5cf6",
          cyan: "#38bdf8",
          amber: "#fbbf24",
          green: "#34d399",
        }
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        heading: ["'Sora'", "sans-serif"],
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 15s linear infinite',
      },
      boxShadow: {
        'neon-pink': '0 0 20px rgba(255, 78, 205, 0.2)',
        'neon-purple': '0 0 20px rgba(139, 92, 246, 0.2)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
