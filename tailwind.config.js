const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.yellow[400],
        colorHover: colors.green[400],
        bgMenu: '#181818',
        colorMenu: '#909096',
        iconsbg: colors.yellow[500],
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['first'],
    },
  },
  plugins: [],
};
