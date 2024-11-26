import React, { useState } from "react";
import { Box, Stack, Typography, IconButton } from "@mui/material";
import humanAvatar from "../../assets/images/human-avatar.png";
import { format } from 'date-fns';

const ChatCard = ({ details }) => {
  return (
    <Stack
    //   sx={{ border: "2px solid green" }}
      p={{ xs: 1, md: 2 }}
      boxShadow={" rgba(0, 0, 0, 0.16) 0px 1px 4px;"}
      borderRadius={1}
      direction={"row"}
      spacing={{ xs: 1, md: 3 }}
      backgroundColor="primary.bgLight"
      mb={1}
    >
      <Box
        component="img"
        src={humanAvatar}
        alt="human-avatar"
        height={{ xs: 30, md: 68 }}
        width={{ xs: 30, md: 68 }}
      />
      <Box>
                <Typography
                    variant='heading'
                    fontWeight={700}
                    fontSize={{ xs: 14, md: 16 }}
                >
                    {details.type === "AI" ? 'Bot AI' : 'You'}
                </Typography>
                <Typography
                    fontSize={{ xs: 12, md: 16 }}
                >
                    {details.text}
                </Typography>
                <Stack
                    direction={'row'}
                    gap={2}
                    alignItems={'center'}
                    mt={1}
                >
                    <Typography
                        fontSize={{ xs: 8, md: 12 }}
                        color={'text.secondary'}
                    >
                        {format(details.time, 'hh:mm a')}
                    </Typography>

                    {/* {(details.type === "AI" && !readOnly) && (
                        <Stack
                            direction={'row'}
                            visibility={{ xs: 'visible', md: 'hidden' }}
                            sx={{ opacity: { xs: 1, md: 0 }, transition: 'opacity 400ms ease' }}
                            className='feedback-btns'
                        >
                            <IconButton
                                size='small'
                                onClick={() => setIsRating(prev => !prev)}
                            >
                                {!isRating && <ThumbUpOffAltIcon fontSize='inherit' />}
                                {isRating && <ThumbUpAltIcon fontSize='inherit' />}
                            </IconButton>
                            <IconButton
                                size='small'
                                onClick={() => {
                                    setSelectedChatId(details.id)
                                    showFeedbackModal()
                                }}
                            >
                                <ThumbDownOffAltIcon fontSize='inherit' />
                            </IconButton>
                        </Stack>
                    )} */}

                </Stack>
                </Box>
    </Stack>
  );
};
export default ChatCard;
