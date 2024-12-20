import { Box, useMediaQuery } from "@mui/material";
import SuggestionCard from "./SuggestionCard";
import suggestions from "../../data/suggestionCards.json";
import Grid from "@mui/material/Grid2";

const SuggestionGrid = ({ generateResponse }) => {
  const isPhone = useMediaQuery("(max-width:800px)");
  const data = isPhone ? suggestions.slice(0, 3) : suggestions;
  return (
    <Box sx={{ height: { xs: "40%", md: "30%", lg: "40%" } }}>
      <Grid
        container
        sx={{
          // border: "2px solid blue",
          height: "100%",
        }}
        rowSpacing={{ xs: 1, md: 2 }}
        columnSpacing={{ xs: 0, md: 2 }}
      >
        {data.map((item) => (
          <Grid key={item.id} size={{ xs: 12, md: 6 }}>
            <SuggestionCard
              key={item.id}
              question={item.question}
              generateResponse={generateResponse}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default SuggestionGrid;
