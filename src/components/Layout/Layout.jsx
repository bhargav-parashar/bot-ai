import React from "react";
import Grid from "@mui/material/Grid2";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children, isMenuOpen, setIsMenuOpen, isDarkMode, setChat }) => {
  return (
    <Grid
      container
      sx={{
        // border: "2px solid blue",
        height: "100vh",
        background: isDarkMode
          ? "linear-gradient(rgba(215, 199, 244, 0.2), rgba(151, 133, 186, 0.2))"
          : "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)"
      }}
    >
      <Grid
        sx={{
          "@media (max-width:800px)": {
            width: "70%",
            transform: isMenuOpen ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 400ms ease",
          },
        }}
        position={{ xs: "fixed", md: "relative" }}
        height={"100vh"}
        zIndex={{ xs: 9999, md: 1 }}
        boxShadow={{ xs: isMenuOpen ? 10 : 0, md: 0 }}
        size={{ xs: 12, md: 2 }}
      >
        <Sidebar setIsMenuOpen={setIsMenuOpen} setChat={setChat} />
      </Grid>
      <Grid size={{ xs: 12, md: 10 }}>{children}</Grid>
    </Grid>
  );
};

export default Layout;
