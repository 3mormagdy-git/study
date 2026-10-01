/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luna: {
          light: '#A7EBF2',
          cyan: '#54ACBF',
          medium: '#26658C',
          dark: '#023859',
          navy: '#011C40',
        },
      },
    },
  },
  plugins: [],
};