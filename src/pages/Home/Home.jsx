import { Box } from "@mui/material";
import styles from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero.jsx";
import SuggestionGrid from "../../components/SuggestionGrid/SuggestionGrid.jsx";
import InputBox from "../../components/InputBox/InputBox.jsx";

const Home = () => {
  return (
    <Box className={styles.wrapper}>
      <Navbar/>
      <Box className={styles.chatSection}>
        <Hero/>
        <SuggestionGrid />
        <InputBox/>
      </Box>
      
    </Box>
  );
};
export default Home;
