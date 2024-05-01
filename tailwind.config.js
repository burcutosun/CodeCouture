/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue': '#23A6F0',
        'green': '#23856D',
        'orange': '#E77C40',
        'navy': '#252B42'
      },
    },
  },
  plugins: [],
};
