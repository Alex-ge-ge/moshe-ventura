import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#e8f0f7",
          100: "#c5d5e8",
          500: "#2a5298",
          700: "#1b3a6b",
          900: "#0d1f3c",
        },
        gold: {
          400: "#e6c547",
          500: "#c9a227",
          600: "#a07d1a",
        },
      },
      fontFamily: {
        hebrew: ["Assistant", "Heebo", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
