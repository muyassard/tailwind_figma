/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
 },
  content: ["./public/**/*.{html,ts}", "./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        spring: "#efed40"
      }
    }
  },
  plugins: []
};
