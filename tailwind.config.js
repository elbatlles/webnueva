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
        tagsHtml: '#515152',
      },
      fontFamily: {
        belle: ['"La Belle Aurore"', 'cursive'],
        lora: ['"Lora"'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '22.2%': {
            transform: 'skewY(-12.5deg) skewY(-12.5deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out ',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['first'],
      animation: ['hover', 'focus'],
    },
  },

  plugins: [],
};
