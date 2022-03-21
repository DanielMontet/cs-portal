module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        48: "repeat(48, minmax(0, 1fr))",
        43: "repeat(48, minmax(0, 1fr))",
      },
      gridRow: {
        "span-42": "span 42 / span 42",
        "span-43": "span 43 / span 43",
        "span-44": "span 44 / span 44",
        "span-46": "span 46 / span 46",
        "span-47": "span 47 / span 47",
        "span-48": "span 48 / span 48",
      },
      gridTemplateColumns: {
        48: "repeat(48, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-41": "span 41 / span 41",
        "span-48": "span 48 / span 48",
        "span-45": "span 45 / span 45",
      },
      colors: {
        primary: "rgb(94, 53, 177)",
        secondary: "rgb(30, 136, 229)",
        warning: "rgb(216, 67, 21)",
        dark: "rgb(41, 49, 79)",
      },
      minWidth: {
        1000: "1000px",
      },
    },
  },
  plugins: [],
};
