/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx"
    ],
  theme: {
    extend: {
      colors: {
        'softblue' : '#FFFDE4',
        'hardblue' : '#005AA7'
      }
    },
  },
  plugins: [],
}

