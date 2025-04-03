/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ['Poppins', 'sans-serif'],
        titleFont: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primaryColor: '#ff014f', // primary text color
        lightColor: '#c4cfde', // secondery text color
        bodyBg: '#212428', // body bg
      },
      backgroundImage: {
        boxBg: 'linear-gradient(145deg, #1e2024, #23272b)', // box bg
      },
      boxShadow: {
        shadowOne: '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e',
      },
    },
  },
  plugins: [],
}