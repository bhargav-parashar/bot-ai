import { Typography, Box } from "@mui/material";
import styles from './Home.module.css';
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <Box className={styles.wrapper}>
      <Navbar/>
      <Typography>Hello</Typography>
    </Box>
  )
  
};
export default Home;
