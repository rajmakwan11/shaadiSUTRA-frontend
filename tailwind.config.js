/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        trunk: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        trunkReverse: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(12px)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        floatUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-120vh)" },
        },
      },
      animation: {
        trunk: "trunk 2s ease-in-out infinite",
        "trunk-reverse": "trunkReverse 2s ease-in-out infinite",
        "fade-in": "fadeIn 1.5s ease-in-out forwards",
        floatUp: "floatUp 20s linear infinite",
      },
    },
  },
  plugins: [],
};
