// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        show: {
          '100': '#x',
          '200': '#x',
          '300': '#B8C2EF',
          '400': '#60649B',
          '500': '#494D7A',
          '600': '#2B2F54',
          '700': '#1E1F3A',
          '800': '#18192F',
          '900': '#131325',
        },
        overlay: {
          '900': 'rgba(19,19,37,.8)'
        }
      },
      borderRadius: {
        'big': '2rem'
      },
      spacing: {
        '60': '15rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      fontFamily: {
        'sans': ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  purge: [],
  variants: {},
  plugins: [],
}
