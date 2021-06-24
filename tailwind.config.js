module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['SF']
      },
      colors: {
        primary: {
          bir: '#222020',
          iki: '#F0FFFF',
          uc: '#222F3E',
          dort: '#8c7ae6',
          bes:"#0fbcf9"
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      boxShadow: {
        asd: '0px 0px 150px 100px rgba(30,215,96,0.75)',
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}