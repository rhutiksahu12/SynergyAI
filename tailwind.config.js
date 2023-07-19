/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      bgdark: '#100606',
      bglight:'#393333',
      textdark: '#676060',
      textlight:'#999191',
      brightbutton: '#00ADAE',
      brightheading: '#CEC6C6'

    },
  },
    
  },
  plugins: [],
}