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
            open: ['Open Sans', 'sans-serif'],
            roboto: ['Roboto', 'sans-serif'],
            lato: ['Lato', 'sans-serif'],
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
                stakeCard: "#2F2F8A99",
                inputDark: "#60608d"

            },
            screens: {
                xs: { max: '480px' }, // Applies to screens BELOW 480px
                'xTs': { min: '480px', max:'640px' }, // Applies to screens BELOW 480px
                // 'xs-sm': { max: '640px' },
                // 'sm-md': { max: '900px' },
                // 'md-lg': '1000px',
                // 'lg-xl': '1200px',
                '2xl':'1800px',
                '3xl':'2300px',
                '4xl': '2800px'
            },
           
            spacing: {
                'xl-mx': 300, // ✅ Correct
                'lg-mx': 150, // ✅ Correct
                'md-mx': 100, // ✅ Correct
                'sm-mx': 50, // ✅ Correct
                'xs-mx': 10,
                //px
                'xl-px': 180, // red
                'lg-xl-px': 160, //green
                'lg-px': 100, // orange
                'md-lg-px': 80,//blue
                'md-px': 50, // purple
                'sm-md-px':30,//pink
                'sm-px': 20, // slate
                'xs-sm-px':20,//yellow
                'xs-px': 20,//white
                //py
                'xl-py':100,
                'lg-xl-py':80,
                'lg-py': 70,
                'md-lg-py':60,
                'md-py': 60,
                'sm-md-py':40,
                'sm-py': 20,
                'xs-sm-py': 20,
                'xs-py': 20,
                //
                'xl-h-px': 250,
                'xl-pt':150,
                'lg-xl-pt':150,
                'lg-pt': 150
            },
            // screens: {
            //     xs: { max: "480px" }, // xs applies below 480px
            //     "xs-sm": { min: "481px", max: "640px" }, // xs-sm applies between 481px and 640px
            //     sm: { min: "641px", max: "768px" }, // sm applies between 641px and 768px
            //     "sm-md": { min: "769px", max: "900px" }, // sm-md applies between 769px and 900px
            //     md: { min: "901px", max: "1024px" }, // md applies between 901px and 1024px
            //     "md-lg": { min: "1025px", max: "1200px" }, // md-lg applies between 1025px and 1200px
            //     lg: { min: "1201px", max: "1400px" }, // lg applies between 1201px and 1400px
            //     "lg-xl": { min: "1401px", max: "1600px" }, // lg-xl applies between 1401px and 1600px
            //     xl: { min: "1601px" }, // xl applies above 1601px
            //   },
        },
    },
    plugins: [],
};
