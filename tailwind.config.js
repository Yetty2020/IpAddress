/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-pattern': "url('/src/assets/pattern-bg-mobile.png')",
        'desktop-pattern': "url('/src/assets/pattern-bg-desktop.png')",
      },
      colors: {
        'dark-gray': 'hsl(0, 0%, 59%)',
        'very-dark-gray': 'hsl(0, 0%, 17%)',
      }
    },
  },
  plugins: [],
}