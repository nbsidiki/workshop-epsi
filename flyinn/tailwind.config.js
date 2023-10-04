/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/index.html'],
  plugins: [],
  variants: {
    scrollbar: ['dark']
  },
  theme: {
    fontFamily: {
      sans: ['"Poppins"', 'sans-serif']
    },

    screens: {
      vsm: '350px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },

    extend: {
      fontSize: {
        xs: ['9px'],
        medium: ['12px'],
        sm: ['14px'],
        large: ['18px']
      },
      width: {
        '200': '60rem'
      },
      height: {
        '200': '60rem'
      },
      colors: {
        // primary colors
        primary: '#93070a',
        'grey-dark': '#e6e6e6',

      }
    }
  }
}

