import { Box, Button, TextField, Snackbar } from "@mui/material";
import styles from "./InputBox.module.css";
import React, { useState,useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const InputBox = ({ question = "Hello", generateResponse, chat, resetChat }) => {
  const [input, setInput] = useState();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const inputRef = useRef(null);
  
  useEffect(()=>{
    inputRef.current.focus();
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    generateResponse(input);
    setInput("");
  };
 
  

  const handleSave = () => {
    const chatHistory = JSON.parse(localStorage.getItem("chat")) || [];
    const date = new Date();
    localStorage.setItem(
      "chat",
      JSON.stringify([{ chat: chat, datetime: date }, ...chatHistory])
    );
    resetChat();
    setShowSnackbar(true);
  };
  return (
    <Box className={styles.wrapper} component={"form"} onSubmit={handleSubmit}>
      <Box
        sx={{
          width: { xs: "62%", sm: "80%", lg: "88%" },
          // border:"2px solid red"
        }}
      >
        <TextField
          size="small"
          variant="outlined"
          fullWidth
          sx={{ bgcolor: "primary.bgLight" }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          inputRef={inputRef}
        />
      </Box>

      <Button
        sx={{
          bgcolor: "primary.bgButton",
          color: "text.primary",
          textTransform: "none",
          height: "40px",
          fontSize: { xs: "3vw", sm: "1.8vw", md: "2vw", lg: "1.3vw" },
          width: "fit-content",
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
          height: "40px",
          fontSize: { xs: "3vw", sm: "1.8vw", md: "2vw", lg: "1.3vw" },
          width: "fit-content",
        }}
        type="button"
        onClick={handleSave}
      >
        Save
      </Button>
      <Snackbar
        open={showSnackbar}
        message={"Chat saved."}
        onClose={() => setShowSnackbar(false)}
        autoHideDuration={5000}
        action={
          <Link sx={{textTransform:'none'}} to="/history">
            <Button sx={{ textTransform: 'none' }}  type="contained" size="small">See past conversations</Button>
          </Link>
        }
      />
    </Box>
  );
};
export default InputBox;
