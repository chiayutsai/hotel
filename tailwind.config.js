module.exports = {
  purge: {
    enabled: true,
    content: ['./app/**/*.html', './app/**/*.ejs', './app/**/*.scss', './app/**/*.js'],

  },
  darkMode: false, // or 'media' or 'class'
  theme: {

    screens: {
      sm: '576px',
      md: '768px',
      lg: '991px',
      xl: '1280px',
      '2xl': '1440px',
    },
    zIndex: {
      '0': 0,
      '1': 10,
      '2': 20,
      '3': 30,
      '4': 40,
      '5': 50,
      'auto': 'auto',
    },
    fontFamily: {
      'Raleway': ['"Raleway"', 'sans-serif'],
      'sans': ['"Open Sans"', 'sans-serif'],

    },
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.primary'),
      'primary': '#6C51E2',
      'secondary': '#F1F0F8',

    }),
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)',
      none: 'none !important',
    },
    filter: { // defaults to {}
      'none': 'none',
      'grayscale': 'grayscale(1)',
      'invert': 'invert(1)',
      'brightness': 'brightness(0.6)',
    },
    extend: {
      backgroundImage: theme => ({
        'logo': "url('../images/logo-aloha.svg')",
        'login': "url('../images/login.jpg')",
      }),
      colors: {
        primary: '#6C51E2',
        secondary: '#F1F0F8',
        dark: '#00000099',
        light: '#00000061',
        gray: {
          900: '#000000DE',

        }
      },
      fontSize: {

        '3xl': ['2rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.2' }]
      },
      width: {
        37: '150px',
        58: '232px',
        'p-screen': 'calc(100% - 30px)'
      },
      height: {
        37: '150px',
        'p-screen': 'calc(100vh - 56px)',
        'banner': '320px'
      },
      minWidth: {
        'bg': '64vw',
        'xl': '60vw'
      },
      minHeight: {
        'sm': 'calc(100vh - 105px)',
        'md': 'calc(100vh - 69px)',

      },
      spacing: {
        13: '3.25rem',
        17: '4.5rem',
        23: '5.75rem',
        34: '8.5rem',
        39: '9.5rem',
        col: '30px',
        3.8: '10px',
      },
    },
  },
  variants: {
    filter: ['responsive'],
    borderWidth: ['responsive', 'hover', 'group-hover', 'focus'],
    extend: {},
  }, corePlugins: {
    // ...
    container: false,
  },
  plugins: [
    require('tailwindcss-filters'),
    require('@tailwindcss/custom-forms'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          margin: 'auto',
          padding: '0 12px',
          '@screen md': {
            maxWidth: '720px',
            padding: '0 15px',
          },
          '@screen lg': {
            maxWidth: '1024px',

          },
          '@screen xl': {
            maxWidth: '1140px',

          },
          '@screen 2xl': {
            maxWidth: '1320px',

          },
        }
      })
    }
  ],
}
