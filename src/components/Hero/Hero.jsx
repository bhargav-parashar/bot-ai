import { Box, Typography } from "@mui/material";
import styles from "./Hero.module.css";
import aiProfile from "../../assets/images/ai-profile-large.png";

const Hero = ()=>{
    return(
        <Box className={styles.wrapper} sx={{height:{xs:"45%",md:"55%", lg:"45%"}}} >
            <Typography variant="h6">How Can I Help You Today?</Typography>
            <Box
                component="img"
                src={aiProfile}
                alt="ai-profile"
                width={{
                    xs: "clamp(10px, 28%, 50px)",
                    md: "clamp(10px, 25%, 50px)",
                  }}
                className={styles.aiProfile}
            />
        </Box>
    )
}
export default Hero;