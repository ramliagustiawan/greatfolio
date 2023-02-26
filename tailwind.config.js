/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        ungu: "#8773EE",
        kuning: "#FCDA68",
        hitam: "#171513",
        soft: "#717694",
        mermud: "#EE73BD",
        ijo: "#75EE73",
      },
      screens: {
        "2xl": "1320px",
      },
    },
    fontFamily: {
      display: ["Poppins", "sans-serif"],
      body: ["Roboto", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
