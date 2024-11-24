import { Box, Button, TextField } from "@mui/material";
import styles from "./InputBox.module.css";

const InputBox = ({ question = "Hello" }) => {
  return (
    <Box className={styles.wrapper}>
      <Box sx={{ 
        width:{xs:"62%", sm:"80%", lg:"88%"}, 
        // border:"2px solid red"  
        }}>
        <TextField
          size="small"
          variant="outlined"
          fullWidth
          sx={{ bgcolor: "primary.bgLight" }}
        />
      </Box>
     
      <Button
        sx={{
          bgcolor: "primary.bgButton",
          color: "text.primary",
          textTransform: "none",
          height:"40px",
          fontSize: { xs: "3vw", sm: "1.8vw", md:"2vw", lg: "1.3vw" },
          width:"fit-content"
        }}
        type="contained"
      >
        Ask
      </Button>
      <Button
        sx={{
        
          bgcolor: "primary.bgButton",
          color: "text.primary",
          textTransform: "none",
          height:"40px",
          fontSize: { xs: "3vw", sm: "1.8vw", md:"2vw", lg: "1.3vw" },
          width:"fit-content"
        }}
        type="contained"
      >
        Save
      </Button>
 
    </Box>
  );
};
export default InputBox;
