/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pri-bg': '#080808',
        'sec-bg': '#111111',
        'dark-brown': '#2A1B14',
        'rust-brown': '#5B3A29',
        'dark-red': '#4B0F0F',
        'blood-red': '#7A1E1E',
        'paper-beige': '#D8C7A3',
        'soft-white': '#F2EEE6',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'serif'],
        sans: ['Inter', 'Manrope', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.25em',
        cinematic: '.15em',
      },
      animation: {
        'grain': 'grain 8s steps(10) infinite',
        'slow-zoom': 'slowZoom 20s ease-out infinite alternate',
      },
      keyframes: {
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '30%': { transform: 'translate(-15%, 5%)' },
          '50%': { transform: 'translate(-5%, 10%)' },
          '70%': { transform: 'translate(10%, -5%)' },
          '90%': { transform: 'translate(5%, 10%)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        }
      }
    },
  },
  plugins: [],
}