/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#3760F9",
          "blue-hover": "#2A50E5",
          "blue-light": "#EEF2FF",
          dark: "#17161B",
          "dark-subtle": "#27252D",
          lime: "#D2FC59",
          "lime-dark": "#B5E434",
          soft: "#DAD9FB",
          "soft-light": "#F0EFFF",
          bg: "#F8FAFC",
          card: "#FFFFFF",
          text: "#17161B",
          muted: "#667085",
          border: "#E5E7EB",
        },
      },
      borderRadius: {
        card: "28px",
        button: "18px",
        input: "16px",
      },
      boxShadow: {
        floating: "0 20px 60px rgba(0, 0, 0, 0.08)",
        "floating-hover": "0 30px 70px rgba(0, 0, 0, 0.12)",
        glow: "0 8px 30px rgba(55, 96, 249, 0.25)",
        "lime-glow": "0 8px 25px rgba(210, 252, 89, 0.4)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
