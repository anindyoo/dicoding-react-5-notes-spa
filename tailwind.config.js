/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      '3xs': '320px',
      '2xs': '375px',
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        background: '#f8f7f7',
        primaryColor: '#481D24',
        secondaryColor: '#dac098',
        accentColor: '#b6ac87',

        textBody: '#1d0100',

        dangerColor: '#E43A48',
        dangerLighterColor: '#F3A5AC',
      },
    },
  },
  plugins: [],
};
