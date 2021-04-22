const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.yellow[400],
        colorHover: colors.green[400],
        bgColor: '#1d1d1d',
        colorMenu: '#909096',
        bgMenu: '#181818',
        iconsbg: colors.yellow[500],
        tagsHtml: '#515152',
      },
      fontFamily: {
        belle: ['"La Belle Aurore"', 'cursive'],
        lora: ['"Lora"'],
      },
      keyframes: {
        wiggle: {
          '0%': {
            transform: 'scale3d(1, 1, 1)',
          },
          '30%': {
            transform: 'scale3d(1.25, 0.75, 1)',
          },
          '40%': {
            transform: 'scale3d(0.75, 1.25, 1)',
          },
          '50%': {
            transform: 'scale3d(1.15, 0.85, 1)',
          },
          '65%': {
            transform: 'scale3d(0.95, 1.05, 1)',
          },
          '75%': {
            transform: 'scale3d(1.05, 0.95, 1)',
          },
          '100%': {
            transform: 'scale3d(1, 1, 1)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 0.8s linear normal',
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
