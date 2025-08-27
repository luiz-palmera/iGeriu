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
        headerContent: '#61646c',
        headerContentHover: '#9c9eaa',
        tableHeader:'#f5f5f5',
        text: '#9699ac',
        darkText: '#343f4f',
        surface: '#ffffff',
        error: '#ff4d4f',
        success: '#47be7d',
        button: '#eef6ff',
        buttonText: '#469bff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    }
  },
  plugins: [],
}

