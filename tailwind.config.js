/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#17191e',
        background: '#f9f9f9',
        surface: '#ffffff',
        error: '#ff4d4f',
        success: '#47be7d'
      },
    }
  },
  plugins: [],
}

