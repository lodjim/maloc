/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  
  theme: {
    extend: {
    fontFamily: {
      montserrat: ['Montserrat','sans-serif'],
    },
      colors: {
        brand: {
          button: '#EDEEEE',
          buttonHover:"#D4D4D4",
          text:"#090909",
          border:"#B1B1B1"
        },
    },
  },
  plugins: [],
  }
}
