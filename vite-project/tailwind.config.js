/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Remova o asterisco (*)
    "./src/**/*.{js,ts,jsx,tsx}", // Remova o asterisco (*)
  ],
  theme: {
    extend: {
      primaryColor: "#0067FF",
      yellowColor: "#FEB60D",
      purpleColor: "#9771FF",
      irisBlueColor: "#01B5C5",
      headingColor: "#181A1E",
      textColor: "#4E545F",
    },
  },
  plugins: [],
}
