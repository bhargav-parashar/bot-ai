
export const lightTheme = () => ({
    palette: {
      mode: 'light',
      primary: {
        main: "#9785BA",
        light:"#AF9FCD",
        bgDark:"#D7C7F4",
        bgLight:"#FFFFFF",
        bgAlt:"#3D3B41",
        bgButton:"#9785BA",
        cardHover:"#fafafa",
       
      },
      secondary:{
        main:"#D7C7F4",
        light:"#FFFFFF"
      },
      text: {
          primary: "#000000",
          secondary: "rgba(0,0,0,0.5)",
          subtext:"#3D3B41"
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