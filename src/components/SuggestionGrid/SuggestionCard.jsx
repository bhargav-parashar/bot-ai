import { Box, Typography } from "@mui/material";
import styles from "./SuggestionCard.module.css";
import IconButton from "@mui/material/IconButton";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const SuggestionCard = ({ question = "Hello" }) => {
  return (
    <Box
      className={styles.wrapper}
      sx={{
        bgcolor: "primary.bgLight",
        "&:hover": { backgroundColor: "primary.cardHover" },
        '&:hover .MuiIconButton-root': {opacity: 1},
        transition:"background 200ms ease"
      }}
    >
      <Box className={styles.text}>
        <Typography
          variant="h6"
          sx={{ fontSize: { xs: "3vw", sm: "1.8vw", md: "2vw", lg: "1.3vw" } }}
        >
          {question}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "2.7vw", sm: "1.5vw", md: "1.7vw", lg: "1vw" },
            color: "text.subtext",
          }}
        >
          Get immediate AI generated response
        </Typography>
      </Box>
      <Box className={styles.icon}>
        <IconButton sx={{opacity:0}}>
          <ArrowCircleUpIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
export default SuggestionCard;
