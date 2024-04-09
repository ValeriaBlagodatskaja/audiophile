/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'src/**/*.svg'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        charcoal: '#101010',
        'gray-light': '#F1F1F1',
        'orange-dark': '#D87D4A',
        'orange-light': '#FBAF85',
        smokewhite: '#FAFAFA',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      screens: {
        lg: '1100px',
        md: '768px',
      },
    },
  },
}
