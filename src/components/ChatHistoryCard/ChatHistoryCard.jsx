import { Box, Stack, Typography } from "@mui/material";
import { format, isEqual, startOfDay, add } from "date-fns";
import ChatCard from "../ChatCard/ChatCard";

const ChatHistoryCard = ({ details }) => {
  const formatDate = (date) => {
    const today = startOfDay(new Date());
    if (isEqual(date, today)) {
      return "Today's chats";
    } else if (isEqual(today, add(date, { days: 1 }))) {
      return "Yesterday's chats";
    } else {
      return format(date, "do LLL yyyy");
    }
  };
  return (
    <Box mb={3}>
      <Typography fontWeight={700} mb={2}>
        {formatDate(startOfDay(new Date(details.datetime)))}
      </Typography>
      <Stack spacing={2}>
        {details.chat.map((item, index) => (
          <ChatCard details={item} readOnly={true} key={index} />
        ))}
      </Stack>
    </Box>
  );
};
export default ChatHistoryCard;
