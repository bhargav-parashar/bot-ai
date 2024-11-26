import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./components/Themes/DarkTheme.jsx";
import { lightTheme } from "./components/Themes/LightTheme.jsx";
import { Outlet } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem("isDarkMode")) || false
  );
  const [chat,setChat] = useState([]);

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);
  const theme = React.useMemo(
    () => (isDarkMode ? createTheme(darkTheme()) : createTheme(lightTheme())),
    [isDarkMode]
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isDarkMode={isDarkMode} setChat={setChat}>
        <Outlet
          context={{
            setIsMenuOpen: setIsMenuOpen,
            isDarkMode: isDarkMode,
            setIsDarkMode: setIsDarkMode,
            chat: chat,
            setChat : setChat
          }}
        />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
