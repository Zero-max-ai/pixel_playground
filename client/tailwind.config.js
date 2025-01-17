/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bowlby One'],
        mono: ['Overpass Mono', 'monospace'],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
      },
      colors: {
        textColor: "#1F2937",
        buttonColor: "#FBBF24",
        lightBg: "#FAFAF9",
        hamburgerBg: "#F1F1F1",
        formBg: "#F9F8F6",
      },
    },
  },
  plugins: [],
};
