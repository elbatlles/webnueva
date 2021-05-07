const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        titleHome: '40rem',
      },
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
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      keyframes: {
        jello: {
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
        typewriter: {
          from: {
            width: '0',
          },
          '1%': {
            opacity: '1',
          },
          to: {
            width: '100%',
          },
          '100%': {
            opacity: '1',
            overflow: 'visible',
          },
        },
        typewriter2: {
          '0%': {
            width: '0',
          },
          '1%': {
            opacity: '1',
          },

          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        jello: 'jello 0.8s linear normal',
        typewriter: 'typewriter 4s steps(44) 1s 1 normal both',
        typewriter2: 'typewriter2 4s steps(10, end)',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['first'],
      animation: ['hover', 'focus'],
    },
  },

  plugins: [require('@tailwindcss/forms')],
};
