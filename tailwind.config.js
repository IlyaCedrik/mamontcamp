/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {    
    container: {
      padding: '30px',
      center: true,
    },
    colors: {
      'primary': '#1E1E1E',
      'secondary': '#A18A66',
      'black': '#000',
      'white': '#fff'
    },
    fontFamily: {
      sans: ['Gilroy', 'serif'],
      serif: ['Myriad Pro', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'promo-banner-bg': "url('/promo-banner/promo-banner-bg@2x.png')",
      }
    }
  },
  plugins: [],
}