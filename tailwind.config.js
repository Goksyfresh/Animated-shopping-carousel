/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        negra: ["Negra", serif],
        garamond:["EB Garamond", serif]
      },
    },
  },
  plugins: [],
};
