/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class", // Enables dark mode via a CSS class
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            gilroy: ["Gilroy", "sans-serif"], // Add custom font
          },
      extend: {
        colors: {
            themeBlue: "#01D3FF",
            themeRed: "#FF2222",
            themeWhite: "#FFFFFF",
            themeBlack: "#000000",
            cardDark: "#1C1C65",
            cardLight: "#EAEAEA99",
            activeCardBg: "#0095FF66",
            tradeGreen: "#22C478",
            tradeRed: "#F23645",
            tradeGray: "#DBDBDB",
            titleGray: "#C7C7C7",
            tradeCardBg: "#00CDF933"
        }        
      },
    },
    plugins: [],
  };
  