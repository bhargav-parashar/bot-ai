const getTheme = (isDarkMode) => {
  if (isDarkMode) {
    return ({
      palette: {
        mode: "dark",
        primary: {
          main: "#9785BA",
          light:"#AF9FCD",
          bgDark:"#34303D",
          bgLight:"#3D3B41",
          bgAlt:"#FFFFFF"    
        },
        secondary:{
          main:"#D7C7F4",
          light:"#FFFFFF"
        },
        text: {
            primary: "#ffffff",
            secondary: "rgba(255,255,255,0.7)",
        },
      },
      typography:{
        heading: {
          fontFamily: "Ubuntu, sans-serif",
        }
      }
    });
  } else {
    return ({
      palette: {
        mode: "light",
        primary: {
          main: "#9785BA",
          light:"#AF9FCD",
          bgDark:"#D7C7F4",
          bgLight:"#FFFFFF",
          bgAlt:"#3D3B41"
        },
        secondary:{
          main:"#D7C7F4",
          light:"#FFFFFF"
        },
        text: {
            primary: "#000000",
            secondary: "rgba(0,0,0,0.5)",
          },
      },
      typography:{
        heading: {
          fontFamily: "Ubuntu, sans-serif",
        },
        body1: {
          fontFamily: "Ubuntu, sans-serif",
        }
      }
    });
  }
};
export { getTheme };
