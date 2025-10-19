import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-space-grotesk)"],
      },
      colors: {
        background: '#F4F1EA', // Parchment/Off-white
        text: '#1a1a1a',      // Near-black
        accent: '#E53E3E',     // Bold Red
      },
    },
  },
  plugins: [],
};
export default config;