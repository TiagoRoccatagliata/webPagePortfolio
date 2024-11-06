/** @type {import('tailwindcss').Config} */

import tailwindScrollBar from 'tailwind-scrollbar';


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Ubuntu', 'sans-serif'],
      }
    },
  },
  plugins: [tailwindScrollBar],
}