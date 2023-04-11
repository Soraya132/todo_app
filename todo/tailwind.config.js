/** @type {import('tailwindcss').Config} */
    module.exports = {
      darkMode:"class",
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      // screens:{
      //   "sm":"370px"
      // },
      colors:{
         "BrightBlue": "hsl(220, 98%, 61%)",
          "CheckBackground": "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
          "CheckFirst":" hsl(192, 100%, 67%)",
          "CheckSecond":" hsl(280, 87%, 65%)",
          "VeryLightGray": "hsl(0, 0%, 98%)",
          "VeryLightGrayishBlue": "hsl(236, 33%, 92%)",
          "LightGrayishBluel": "hsl(233, 11%, 84%)",
          "DarkGrayishBlue1":"hsl(236, 9%, 61%)",
          "VeryDarkGrayishBlue1": "hsl(235, 19%, 35%)",
          "VeryDarkBlue": "hsl(235, 21%, 11%)",
          "VeryDarkDesaturatedBlue": "hsl(235, 24%, 19%)",
          "LightGrayishBlued": "hsl(234, 39%, 85%)",
          "LightGrayishBluehover": "hsl(236, 33%, 92%)",
          "DarkGrayishBlue2":" hsl(234, 11%, 52%)",
          "VeryDarkGrayishBlue2": "hsl(233, 14%, 35%)",
          "VeryDarkGrayishBlue3": "hsl(237, 14%, 26%)",
          "white":"#fff"

      },
      extend: {
        fontFamily:{
          burtons:"burtons",
        },
        backgroundImage:{
          "mobileDark":"url('./images/bg-mobile-dark.jpg')",
          "desktopDark":"url('./images/bg-desktop-dark.jpg')",
          "mobileLight":"url('./images/bg-mobile-light.jpg')",
          "desktopLight":"url('./images/bg-desktop-light.jpg')",
        }
        
      },
    },
    plugins: [],
}