/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        'bg_pink': '#FEF7FF', 
        'olive': '#808000', 
        'orange': '#FFA500', 
      },
    },
  },
  plugins: [],
}

