/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      fontFamily: {
        'IBMPlexSans': ['IBMPlexSans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

