import React, {useState,useContext} from 'react';
import { Box } from "@mui/material";
import styles from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero.jsx";
import SuggestionGrid from "../../components/SuggestionGrid/SuggestionGrid.jsx";
import InputBox from "../../components/InputBox/InputBox.jsx";
import { useOutletContext } from "react-router-dom";
import response from "../../data/response.json";
import ChatCard from '../../components/ChatCard/ChatCard.jsx';

const Home = () => {
  const {chat,setChat} = useOutletContext();
  const [chatId, setChatId] = useState(1);

  //Generate Response
  const generateResponse = (input)=>{
    const res = response.find((item)=>item.question.toLowerCase()===input.toLowerCase());
    const answer = !res?"Sorry, did not understand your query!":res.response;
    setChat((prev)=>[...prev,
      {
        id : chatId,
        type :'Human',
        text : input,
        time : new Date()
      },
      {
        id : chatId+1,
        type :'AI',
        text : answer,
        time : new Date()
      }
    ]);
    setChatId((prev)=>prev+2);
  };
  return (
    <Box className={styles.wrapper} >
      <Navbar/>
      <Box className={styles.chatSection} sx={{overflowY: "auto",
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
      }}} >
        
        {chat.length === 0 &&<Hero/>}
        {chat.length === 0 && <SuggestionGrid generateResponse = {generateResponse}/>}
        {chat.length > 0 &&  chat.map((item)=><ChatCard details={item} />)}
        
        {/* <InputBox generateResponse={generateResponse} /> */}
      </Box>
      <InputBox generateResponse={generateResponse} />
    </Box>
  );
};
export default Home;
