import { Box, Button, TextField } from "@mui/material";
import styles from "./InputBox.module.css";
import React, {useState} from 'react';

const InputBox = ({ question = "Hello", generateResponse }) => {
    const[input,setInput] = useState();
    const handleSubmit = (e) =>{
      e.preventDefault();
      generateResponse(input);
      setInput("");
    };
    return (
      <Box className={styles.wrapper} component={'form'} onSubmit={handleSubmit}>
        <Box sx={{ 
          width:{xs:"62%", sm:"80%", lg:"88%"}, 
          // border:"2px solid red"  
          }}>
          <TextField
            size="small"
            variant="outlined"
            fullWidth
            sx={{ bgcolor: "primary.bgLight" }}
            value={input}
            onChange={(e)=>setInput(e.target.value)}
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
          type="submit"
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
