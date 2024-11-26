import { Box, Typography, Button } from "@mui/material";
import styles from "./Sidebar.module.css";
import Image from "../../assets/images/ai-profile.png";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

const Sidebar = ({ setIsMenuOpen,setChat }) => {

  return (
    <Box className={styles.wrapper} sx={{ bgcolor: "primary.bgLight" }}>
      <Box
        className={styles.closeMenu}
        sx={{ display: { xs: "", md: "none" } }}
      >
        <Typography
          variant={"body1"}
          sx={{
            fontSize: "2vw",
            color: "primary.bgAlt",
          }}
        >
          Close
        </Typography>
        <IconButton
          onClick={() => setIsMenuOpen(false)}
          sx={{ padding: "none" }}
        >
          <ClearIcon
            sx={{
              fontSize: "clamp(6px, 2vw, 48px)",
              color: "primary.bgAlt",
              cursor: "pointer",
            }}
          />
        </IconButton>
      </Box>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Box
        onClick={()=>{ setIsMenuOpen(false); setChat([]) }}
          className={styles.header}
          sx={{
            backgroundColor: "primary.bgDark",
            height: { xs: "10vw", md: "4.3vw" },
            justifyContent: {xs:"space-between",md:"space-evenly"},
            padding: {xs:"0vw 2vw", md:"0"}
          }}
        >
          <Box
            className={styles.newChat}
            sx={{ width: { xs: "40%", md: "65%" }, height: "fit-content" }}
          >
            <Box
              className={styles.profileImage}
              component="img"
              src={Image}
              alt="ai profile picture"
              width={{
                xs: "clamp(10px, 28%, 50px)",
                md: "clamp(10px, 25%, 50px)",
              }}
            />
            <Typography
              variant={"heading"}
              sx={{
                lineHeight: 1,
                fontSize: { xs: "4vw", md: "1.6VW" },
                color: "text.primary",
              }}
            >
              New Chat
            </Typography>
          </Box>
          <AddBoxIcon
            sx={{
              fontSize: {
                xs: "clamp(12px, 5vw, 50px)",
                md: "clamp(12px, 2vw, 48px)",
              },
              color: "text.primary",
            }}
          />
        </Box>
      </Link>
      <Link to={"/history"} style={{ textDecoration: "none" }}>
        <Box className={styles.buttonContainer}>
          <Button
          onClick={()=>setIsMenuOpen(false)}
            sx={{
              textTransform: "none",
              backgroundColor: "primary.bgDark",
              width: "fit-content",
              height: { xs: "6vw", md: "3vw" },
            }}
          >
            <Typography
              variant={"heading"}
              sx={{
                lineHeight: 1,
                fontSize: { xs: "2.5vw", sm: "1vw" },
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
