import React from "react";
import Grid from "@mui/material/Grid2";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({children}) => {
  return (
    <Grid container sx={{ border: "2px solid blue", height: "100vh" }}>
        
      <Grid sx={{display:{xs:"none",sm:"block"}}} size={{ xs: 12, sm: 2 }}>
        <Sidebar />
      </Grid>
      <Grid size={{ xs: 12, sm: 10 }}>{children}</Grid>
    </Grid>
  );
}

export default Layout;
