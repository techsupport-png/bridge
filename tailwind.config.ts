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
        'heading': ['Battambang', 'sans-serif'],
        'body': ['ABeeZee', 'sans-serif'],
      },
      colors: {
        'orange': {
          DEFAULT: '#ff6b35',
          light: '#ff8c5a',
          dark: '#e85a2a',
        },
        'navy': {
          DEFAULT: '#1e293b',
          light: '#334155',
          dark: '#0f172a',
        },
        'cream': {
          DEFAULT: '#FFF8F0',
          light: '#FFFCF7',
          dark: '#FFF2E9',
        },
      },
      spacing: {
        '1/4': '25%',
        '3/4': '75%',
      },
      lineHeight: {
        'relaxed': '1.75',
        'loose': '2',
      },
      letterSpacing: {
        'wide': '0.02em',
        'wider': '0.03em',
      },
      transitionDuration: {
        '600': '600ms',
        '800': '800ms',
      },
      rotate: {
        '-315': '-315deg',
        '-225': '-225deg',
      },
    },
  },
  plugins: [],
};

export default config;
