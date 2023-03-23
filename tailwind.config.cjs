/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
     extend: {
      height: {
        '3/10': '30%',
      }
     },
   },
   plugins: [],
 };