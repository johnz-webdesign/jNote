export default {
  theme: {
    extend: {
      colors: {
        bg: "#09192f",
        h: "#D9E1F2",
        p: "#A7AEC3",
        yellow: "#f0ff66",
        blue: "#87EFFF",
        "blue-dark": "#0a1a30",
        card: "#112340",
      },
      fontFamily: {
        heading: ["Domine", "serif"], // For headings
        body: ["Signika", "sans-serif"], // For body text
      },
    },
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
};