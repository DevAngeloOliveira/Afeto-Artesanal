import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
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
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-display)', 'ui-serif', 'Georgia'],
        handwriting: ['var(--font-handwriting)', 'cursive'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
