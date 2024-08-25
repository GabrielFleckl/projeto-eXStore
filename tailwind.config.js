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
    themes: [], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
