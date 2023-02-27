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
      animation: {
        marquee: "marquee 35s linear infinite",
        marquee2: "marquee2 35s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
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
