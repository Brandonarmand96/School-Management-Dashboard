/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-primary': '#4A90E2',
        'blue-dark': '#2E5BBA',
      }
    },
  },
  plugins: [],
}
