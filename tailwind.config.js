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
        colors:{
            theme_light_blue: "#01D3FF",
            theme_red: "#FF2222",
            theme_white:"#FFFFFF",
            theme_black:"#000000",
            card_dtheme: "#1C1C65",
            card_ltheme: "#EAEAEA99",
            active_grid_card_bg: "#0095FF66",
            trade_text_green:"#22C478",
            trade_text_red:"#F23645",
            trade_text_gray:"#DBDBDB",
            trade_title_gray:"#C7C7C7",
            trade_card_color: "#00CDF933"
        }
      },
    },
    plugins: [],
  };
  