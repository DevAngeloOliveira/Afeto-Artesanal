import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          beige: '#E5DDD3',
          dark: '#2D2D2D',
          light: '#FFFFFF',
          accent: '#8B7355',
          muted: '#A49B8F',
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        handwriting: ['var(--font-handwriting)', 'cursive'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
