/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        header: ['var(--font-ibm)'],
      },
    },
  },
  plugins: [],
};

export default config;
