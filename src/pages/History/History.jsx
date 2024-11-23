import { Typography, Box } from "@mui/material";
import styles from "./History.module.css";
import Navbar from "../../components/Navbar/Navbar";

const History = () => {
  return (
    <Box className={styles.wrapper}>
      <Navbar/>
      <Typography>History</Typography>
    </Box>
  );
};
export default History;
