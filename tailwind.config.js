module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0d2f3f',
      },
      transitionDuration: {
        5000: '5000ms',
      },
    },
  },
  plugins: [],
};
