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
        md: { max: '1439px', min: '768px' },

        sm: { max: '767px', min: '375px' },

        xl: '1440px',
      },
    },
  },
}
