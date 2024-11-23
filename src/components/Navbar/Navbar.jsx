import { Box, Typography } from "@mui/material";
import styles from "./Navbar.module.css";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import { useOutletContext } from "react-router-dom";

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useOutletContext();
  return (
    <Box className={styles.wrapper}>
      <Box>
        <Typography
          variant={"heading"}
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            fontSize: { xs: "5vw", sm: "2.4vw" },
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
              fontSize: { xs: "2vw", sm: "1.5vw" },
              color: "primary.bgAlt",
            }}
          >
            Light
          </Typography>
          <IconButton onClick={() => setIsDarkMode(!isDarkMode)} sx={{transform:"rotate(130deg)", transition:"300ms ease"}}>
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
              fontSize: { xs: "2vw", sm: "1.5vw" },
              color: "primary.bgAlt",
            }}
          >
            Dark
          </Typography>
          <IconButton onClick={() => setIsDarkMode(!isDarkMode)} sx={{transform:"rotate(180deg)", transition:"300ms ease"}}>
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
