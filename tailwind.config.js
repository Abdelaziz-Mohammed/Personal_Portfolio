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
        arabicFont: ['Cairo', 'sans-serif'],
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
      // my screens for responsive
      screens: {
        xs: '320px', // xs
        sm: '375px', // sm
        md: '500px', // 
        lg: '667px', // md
        xl: '768px', // mdl
        '2xl': '960px', //
        '3xl': '1024px', // lg
        '4xl': '1280px', // lgl
      },
    },
  },
  plugins: [],
}