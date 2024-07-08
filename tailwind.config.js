/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "HeroBG":"url('./assets/images/webp/HeroBG.png')",
        "FaultBG":"url('./assets/images/webp/FaultBG.png')",
        "TargetBG":"url('./assets/images/webp/GroupTargetBG.png')",
        "FindoutBG":"url('./assets/images/webp/FindoutBG.png')",
        "FooterBG":"url('./assets/images/webp/FooterBG.png')",
        "StrategyBG":"url('./assets/images/webp/StrategyBG.png')"
      },
      fontFamily:{
        'Helvetica':'Helvetica',
        'Poppins':'Poppins , sans-serif' ,
        'Inter':'Inter , sans-serif'
      },
      boxShadow: {
        "SliderShadow":" 0px 2px 48px 0px #00000014",
      },
    },
  },
  plugins: [],
}
