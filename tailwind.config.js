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
            walsheim: ["GT Walsheim Trial", "sans-serif"],
        },
        extend: {
            colors: {
                themeBlue: "#01D3FF",
                themeBlueT: "#66B1E5",
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
                tradeCardBg: "#00CDF933",
                headerBgDark1:"#242236",
                headerBgDark2:"#262c3e",
                evenTableBg:'#FFFFFF66',
                headerBgDark1: "#242236",
                headerBgDark2: "#262c3e",
                rootBgColor: "#06031c",
                cardBgDark: "#E6FFF80A",
                inputBg:'#FFFFFF33',

            },
            screens: {
                'xs': { max: '480px' }, // Applies to screens BELOW 480px
                'xss': { min: '480px' },
                'xs-sm': { max: '640px' },
                'sm-md': { max: '900px' },
                'md-lg': '1000px',
                'lg-xl': '1200px',
            },
            spacing: {
                'xl-mx': 200, // ✅ Correct
                'lg-mx': 150, // ✅ Correct
                'md-mx': 100, // ✅ Correct
                'sm-mx': 50, // ✅ Correct
                'xs-mx': 10,
                'xl-px': 300, // red
                'lg-xl-px': 250, //green
                'lg-px': 250, // ✅orange
                'md-lg-px': 100,//blue
                'md-px': 70, // ✅ Correct
                'sm-px': 50, // ✅ Correct
                'xs-px': 10,
                'lg-py': 20,
                'md-py': 15,
                'sm-py': 10,
                'xs-sm-py': 10,
                'xs-py': 5,
                'xl-h-px': 250,
            }

        },
    },
    plugins: [],
};
