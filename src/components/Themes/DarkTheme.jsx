
export const darkTheme = () => ({
    palette: {
      mode: 'dark',
      primary: {
        main: "#9785BA",
        light:"#AF9FCD",
        bgDark:"#34303D",
        bgLight:"#3D3B41",
        bgAlt:"#FFFFFF",
        bgButton:"#3D3B41",
        cardHover:"#212025"
      },
      secondary:{
        main:"#D7C7F4",
        light:"#FFFFFF"
      },
      text: {
          primary: "#ffffff",
          secondary: "rgba(255,255,255,0.7)",
          subtext:"#D7C7F4"
      },
    },
    typography: {
      heading: {
        fontFamily: "Ubuntu, sans-serif",
      },
      body1: {
        fontFamily: "Ubuntu, sans-serif",
      },
      h6:{
        fontFamily: "Ubuntu, sans-serif",
         fontWeight:"bold"
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 800,
        lg: 1200,
        xl: 1536,
      },
    },
  });