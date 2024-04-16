/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      jost: ["Jost", "sans-serif"],
      fira: ["Fira Sans", "sans-serif"],
      ntr: ["NTR", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
