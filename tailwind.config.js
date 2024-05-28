import lineClamp from '@tailwindcss/line-clamp';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '577px',
      md: '767px',
      lg: '1160px',
      xl: '1560px',
      '2xl': '1660px',
    },
    extend: {
      colors: {
        dark: '#1f1f1f',
      },
    },
    fontFamily: {
      notosans: ['Noto Sans TC'],
    },
  },
  plugins: [lineClamp, aspectRatio],
};
