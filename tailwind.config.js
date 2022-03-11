module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        48: "repeat(48, minmax(0, 1fr))",
      },
      gridRow: {
        "span-44": "span 44 / span 44",
      },
      gridTemplateColumns: {
        48: "repeat(48, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-41": "span 41 / span 41",
      },
    },
  },
  plugins: [],
};
