/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'src/**/*.svg'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        charcoal: '#101010',
        'gray-light': '#F1F1F1',
        'gray-light-200': '#cfcfcf',
        'orange-dark': '#D87D4A',
        'orange-light': '#FBAF85',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      screens: {
        lg: '1100px',
        md: '768px',
        'md-custom': '440px',
      },
    },
  },
}
