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
        paper: "rgb(var(--paper) / <alpha-value>)",
        mist: "rgb(var(--mist) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        "ink-soft": "rgb(var(--ink-soft) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
      },
      borderRadius: {
        card: "var(--radius-card)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
      },
      fontFamily: {
        headline: ["var(--font-gowun-batang)", "serif"],
        body: ["var(--font-pretendard)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
