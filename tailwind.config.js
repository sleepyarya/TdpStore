/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'racing-red': '#ff0000',
        'racing-black': '#111111',
        'neon-blue': '#00ffff',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'drive': 'drive 2s linear infinite',
      },
      fontFamily: {
        'racing': ['Orbitron', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
