/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "HeroBG":"url('./assets/images/webp/HeroBG.webp')",
        "FaultBG":"url('./assets/images/webp/FaultBG.webp')",
        "TargetBG":"url('./assets/images/webp/GroupTargetBG.webp')",
        "FindoutBG":"url('./assets/images/webp/FindoutBG.webp')",
        "FooterBG":"url('./assets/images/webp/FooterBG.webp')",
        "StrategyBG":"url('./assets/images/webp/StrategyBG.webp')"
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
