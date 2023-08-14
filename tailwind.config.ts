import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#070707',
        grey: '#444F55',
        'soft-white': '#C8C6CB',
        brown: '#B8623F',
        'tinted-blue': '#407C9A',
      },
    },
  },
  plugins: [],
};
export default config;
