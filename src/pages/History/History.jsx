import React, { useState, useEffect } from "react";
import { Typography, Box, Stack } from "@mui/material";
import styles from "./History.module.css";
import Navbar from "../../components/Navbar/Navbar";
import ChatHistoryCard from "../../components/ChatHistoryCard/ChatHistoryCard";
import FilterChats from "../../components/FilterChats/FilterChats";

const History = () => {
  const [chat, setChat] = useState([]);
  const [filteredChat, setFilteredChat] = useState([]);

  useEffect(() => {
    const existingChat = localStorage.getItem("chat") || [];
    if (existingChat.length > 0) {
      setChat(JSON.parse(existingChat));
      setFilteredChat(JSON.parse(existingChat));
    }
  }, []);

  return (
    <Box className={styles.wrapper}>
      <Navbar />
      <Box
        className={styles.chatSection}
        sx={{
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "10px",
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 8px rgba(0,0,0,0.1)",
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(151, 133, 186,0.4)",
            borderRadius: "8px",
          },
        }}
      >
        <Typography variant="h6" textAlign={"center"} mb={3}>
          Conversation History
        </Typography>
        {chat.length > 0 && <FilterChats chat={chat} setFilteredChat = {setFilteredChat} />}
        {chat.length === 0 && (
          <Typography
            textAlign={"center"}
            bgcolor={"primary.bgLight"}
            borderRadius={2}
            padding={3}
          >
            No saved chats.
          </Typography>
        )}
        {chat.length > 0 && filteredChat.length > 0 && (
          <Stack>
            {filteredChat.map((item, idx) => (
              <ChatHistoryCard details={item} key={idx} />
            ))}
          </Stack>
        )}
        {chat.length > 0 && filteredChat.length === 0 && (
          <Typography
            textAlign={"center"}
            bgcolor={"primary.bgLight"}
            borderRadius={2}
            padding={3}
          >
            No such chats.
          </Typography>
        )}
      </Box>
    </Box>
  );
};
export default History;
