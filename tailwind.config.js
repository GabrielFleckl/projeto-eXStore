/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    
    extend: {
      colors: {
        primaryBlue: "#3B44F6",
        primaryHover: "#4349CD",
        primaryBlack: "#181818",
        secondaryBlack: "#323232",
        tertiaryBlack: "#0E0E0E",
        primaryGray: "#D8DAFD"
      },
      width: {
        'iconSize': '5.8em',
      },
      keyframes: {
        slide: {
          'to': { transform: 'translateX(-100%)' },
          'from': { transform: 'translateX(0%)' },
        }
      },
      animation: {
        slide: 'slide 45s linear infinite',
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
