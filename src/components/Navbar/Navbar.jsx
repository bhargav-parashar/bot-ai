import { Box, Typography, useMediaQuery } from "@mui/material";
import styles from "./Navbar.module.css";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useOutletContext } from "react-router-dom";

const Navbar = () => {
  const { setIsMenuOpen, isDarkMode, setIsDarkMode } = useOutletContext();
  const isPhone = useMediaQuery("(max-width:800px)");
  
  return (
    <Box className={styles.wrapper}>
      <Box className={styles.menu}>
        {isPhone && (
          <IconButton onClick={() => setIsMenuOpen(true)}>
            <MenuIcon
              sx={{
                fontSize: "clamp(12px, 4vw, 48px)",
                color: "primary.main",
              }}
            />
          </IconButton>
        )}

        <Typography
          variant={"heading"}
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            fontSize: { xs: "4vw", md: "2vw" },
          }}
        >
          Bot AI
        </Typography>
      </Box>

      {isDarkMode ? (
        <Box className={styles.toggle}>
          <Typography
            variant={"body1"}
            sx={{
              fontSize: { xs: "2vw", md: "1.5vw" },
              color: "primary.bgAlt",
            }}
          >
            Light
          </Typography>
          <IconButton
            onClick={() => setIsDarkMode(!isDarkMode)}
            sx={{ transform: "rotate(130deg)", transition: "300ms ease" }}
          >
            <Brightness7Icon
              sx={{
                fontSize: "clamp(12px, 2vw, 48px)",
                color: "primary.bgAlt",
              }}
            />
          </IconButton>
        </Box>
      ) : (
        <Box className={styles.toggle}>
          <Typography
            variant={"body1"}
            sx={{
              fontSize: { xs: "2vw", md: "1.5vw" },
              color: "primary.bgAlt",
            }}
          >
            Dark
          </Typography>
          <IconButton
            onClick={() => setIsDarkMode(!isDarkMode)}
            sx={{ transform: "rotate(180deg)", transition: "300ms ease" }}
          >
            <Brightness4Icon
              sx={{
                fontSize: "clamp(12px, 2vw, 48px)",
                color: "primary.bgAlt",
              }}
            />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};
export default Navbar;
