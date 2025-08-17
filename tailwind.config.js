/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#5ee1b3",
        brand2: "#83c6ff",
        bg: "#0b1220",
        card: "#101a2e",
        muted: "#8aa0c8",
        text: "#e9efff",
      },
      boxShadow: {
        glow: "0 0 0 4px rgba(94,225,179,0.35)",
      },
    },
  },
  plugins: [],
};
