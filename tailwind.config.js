/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D32F2F', // Deep Red
          hover: '#B71C1C',
        },
        secondary: {
          DEFAULT: '#1A1A1A', // Stark Black
          light: '#333333', // Dark Grey
        },
        background: {
          DEFAULT: '#FFFFFF',
          subtle: '#F9FAFB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
