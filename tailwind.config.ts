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
        "aqua-mist": "var(--aqua-mist)",
        "ocean-teal": "var(--ocean-teal)",
        "sky-cloud-blue": "var(--sky-cloud-blue)",
        "soft-sand": "var(--soft-sand)",
        "foam-white": "var(--foam-white)",
        "cloud-gray": "var(--cloud-gray)",
        "deep-ocean": "var(--deep-ocean)",
        "misty-gray": "var(--misty-gray)",
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
        accent: ["var(--font-gaegu)", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
