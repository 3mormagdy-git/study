/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // تفعيل الوضع الداكن عبر إضافة class="dark" للجذر
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#242429',
        parchment: '#f9f5f2',
        gallery: '#ffffff',
        ink: '#000000',
        graphite: '#3e3e3e',
        ashGray: '#919191',
        charcoalDeep: '#070707',
      },
      fontFamily: {
        sans: ['"Gill Sans"', '"Avenir"', '"Proxima Nova"', 'sans-serif'],
        mono: ['"Fira Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}