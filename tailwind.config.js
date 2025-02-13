/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      fontFamily: {
        'IBMPlexSans': ['IBMPlexSans', 'sans-serif'],
        'Azora': ['Azora', 'sans-serif'],
        'Lato' : ['Lato', 'sans-serif']
      },
    },
  },
  plugins: [],
}

