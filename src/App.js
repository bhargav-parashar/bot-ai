import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getTheme } from "./components/Themes/Themes.jsx";
import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Layout from "./components/Layout/Layout.jsx";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") || false
  );
  const theme = React.useMemo(
    () => createTheme(getTheme(isDarkMode)),
    [isDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Outlet
          context={{ isDarkMode: isDarkMode, setIsDarkMode: setIsDarkMode }}
        />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
