module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        48: "repeat(48, minmax(0, 1fr))",
        43: "repeat(48, minmax(0, 1fr))",
      },
      gridRow: {
        "span-42": "span 42 / span 42",
        "span-44": "span 44 / span 44",
      },
      gridTemplateColumns: {
        48: "repeat(48, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-41": "span 41 / span 41",
      },
      colors: {
        primary: "rgb(94, 53, 177)",
        secondary: "rgb(30, 136, 229)",
        warning: "rgb(216, 67, 21)",
        dark: "rgb(41, 49, 79)",
      },
    },
  },
  plugins: [],
};
