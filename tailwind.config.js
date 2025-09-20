/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/v1/**/*.{js,ts,jsx,tsx}",
    "./src/v2/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // v3 / latest
        bgDark: "#0f172a",
        cardDark: "#1e293b",
        accent: {
          DEFAULT: "#3b82f6",
          hover: "#2563eb",
          light: "#60a5fa",
        },
        // v2 colors (can match old latest)
        v2BgDark: "#0f172a",
        v2CardDark: "#1e293b",
        // v1 colors
        v1BgDark: "#1A1F2B",
        v1CardDark: "#1e1e1e",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        v1Sans: ["Inter", "sans-serif"],
        v2Sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
    },
  },
  plugins: [],
};

