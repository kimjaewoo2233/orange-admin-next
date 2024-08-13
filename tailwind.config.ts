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
        'plex-sans': ['"IBM Plex Sans"', 'sans-serif'],
      },
      boxShadow: {
        'orange': '0px 0px 4px rgba(255, 142, 41, 0.1)',
        'dropdown': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [require("tailwindcss-animate"),
    require('tailwindcss-debug-screens')
  ],
};
export default config;
