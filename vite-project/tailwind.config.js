// tailwind.config.js

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primaryColor': 'var(--primaryColor)',
        'yellowColor': 'var(--yellowColor)',
        'purpleColor': 'var(--purpleColor)',
      },
      textColor: {
        'headingColor': 'var(--headingColor)',
        'textColor': 'var(--textColor)',
      },
      extend: {},
    },
  },
  plugins: [],
}
