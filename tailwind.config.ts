import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector", // Enable class-based dark mode (v4)
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "patrick-hand": ["var(--font-patrick-hand)"],
      },
    },
  },
  plugins: [],
};
export default config;
