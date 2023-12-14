/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backdrop: "#121212",
        primary: "#1ed760",
        active: "#282828",
        link: "#b3b3b3",
        footer: "#181818",
        searchInput: "#242424",
      },
      fontSize: {
        s: "0.813rem",
      },
      boxShadow: {
        spotify: "0 2px 4px 0 rgba(0,0,0,.2)",
      },
    },
  },
  plugins: [],
};
