/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    
    extend: {
      screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'min': '901px','max': '1500px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '900px'},
      // => @media (max-width: 639px) { ... }
    }},
  },
  plugins: [],
}
