/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/fonts/*.{ttf}",
    "public/*.{html,js}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivoBlack: ['Archivo Black'],
        linearBeam: ['Linear Beam'],
        pixelmix: ['Pixelmix']
      }
    },
  },
  darkMode: 'class',
  plugins: [
    // require('@tailwindcss/typography')
  ],
}
