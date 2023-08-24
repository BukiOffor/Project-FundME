tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        grayed: '#212529'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      backgroundImage:{
        heroimg1: "url('./images/hero2.png')",
        heroimg1mobile: "url('./images/hero2mobile.png')",
        aboutusimg: "url('./images/aboutus.png')"
      },
      screens: {
        portrait: {
          'raw': '(orientation: portrait)'
        },
        landscape: {
          'raw': '(orientation: landscape)'
        },
        wide: {
          'raw': '(min-aspect-ratio: 3/2)'
        },
        tall: {
          'raw': '(max-aspect-ratio: 13/20)'
        }
      }
    }
  }
}