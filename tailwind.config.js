/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Noto Sans TC'],
    },
    colors: {
      transparent: 'transparent',
      black: '#222222',
      white: '#fff',
    },
    extend: {
      colors: {
        black: '#222222',
        secondary: {
          50: '#fff9ed',
          100: '#fff1d4',
          200: '#ffdfa8',
          300: '#ffc770',
          400: '#ffa437',
          500: '#ff9122',
          600: '#f06c06',
          700: '#c75107',
          800: '#9e3f0e',
          900: '#7f360f',
          950: '#451905',
        },
        success: {
          DEFAULT: '#07B53B',
          50: '#7AFAA0',
          100: '#66F992',
          200: '#3FF876',
          300: '#18F65A',
          400: '#09DC48',
          500: '#07B53B',
          600: '#057F29',
          700: '#034918',
          800: '#011306',
          900: '#000000',
          950: '#000000',
        },
      },
    },
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      // padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        // sm: '600px',
        // md: '728px',
        // lg: '984px',
        // xl: '1240px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
}
