/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        MISSIONblack: '#181a1a',
      },
    },
    screens: {
      md: '640px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
}
