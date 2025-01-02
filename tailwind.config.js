/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-nav': 'linear-gradient(109deg, rgba(201, 201, 201, 0.24) 1.57%, rgba(196, 196, 196, 0.03) 100%)',
        'gradient-btn-pl' : 'linear-gradient(109deg, #ED4F2D 1.57%, #ED4F2D 100%);', 
      },
      backdropFilter: {
        'blur-25': 'blur(25px)',
      },
    },
  },
  plugins: [],
}