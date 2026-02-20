// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // เพิ่ม breakpoint สำหรับจอเล็กพิเศษ (น้อยกว่า 400px)
        'xs': { 'max': '400px' }, 
      },
    },
  },
  plugins: [],
  fontFamily: {
    heading: ['"Hanken Grotesk"', 'sans-serif'],
  },
  borderWidth: {
    '0.5': '0.5px',
  }

}