/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // allows theme switching using the .dark class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background colors
        bgDark: "#0f172a",   // darker slate/navy
        cardDark: "#1e293b", // slate card background

        // Accent color palette (blue — widely used & eye-calming)
        accent: {
          DEFAULT: "#3b82f6", // blue-500
          hover: "#2563eb",   // blue-600
          light: "#60a5fa",   // blue-400
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
