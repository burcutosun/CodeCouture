/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'contact-mobile': "url('./assets/contact/background-mobile.png')",
        'contact-desktop': "url('./assets/contact/background-desktop.png')"
      },
      colors: {        
        'danger': '#E74040',
        'default': '#252B42',
        'muted': '#BDBDBD',
        'primary': '#23A6F0',
        'secondary-1':'#23856D',
        'second': '#737373',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        h1: ['58px', '80px'],
        h2: ['40px', '57px'],
        h3: ['24px', '32px'],
        h4: ['20px', '30px'],
        h5: ['16px', '24px'],
        h6: ['14px', '24px'],
        small: ['12px', '26px'],
        btnText: ['14px', '28px'],
        mobileMenu: ['30px', '45px'],
        paragraph: ['14px', '20px'],
        list: ['20px', '30px'],
        link: ['14px', '24px'],
      }
    },
  },
  plugins: [],
};
