import { Box, Typography, Button } from "@mui/material";
import styles from "./Sidebar.module.css";
import Image from "../../assets/images/ai-profile.png";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box className={styles.wrapper} sx={{backgroundColor:'primary.bgLight'}}>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Box
          className={styles.header}
          sx={{ backgroundColor: "primary.bgDark" }}
        >
          <Box
            className={styles.profileImage}
            component="Img"
            src={Image}
            alt="ai profile picture"
          />
          <Typography
            variant={"heading"}
            sx={{ lineHeight: 1, fontSize: "1.6VW", color: "text.primary" }}
          >
            New Chat
          </Typography>

          <AddBoxIcon
            sx={{ fontSize: "clamp(12px, 2vw, 48px)", color: "text.primary" }}
          />
        </Box>
      </Link>
      <Link to={"/history"} style={{ textDecoration: "none" }}>
        <Box className={styles.buttonContainer}>
          <Button
            sx={{
              textTransform: "none",
              backgroundColor: "primary.bgDark",
              width: "fit-content",
              height: "3vw",
            }}
          >
            <Typography
              variant={"heading"}
              sx={{
                lineHeight: 1,
                fontSize: "1VW",
                color: "text.primary",
                fontWeight: "bold",
              }}
            >
              Past Conversations
            </Typography>
          </Button>
        </Box>
      </Link>
    </Box>
  );
};
export default Sidebar;
