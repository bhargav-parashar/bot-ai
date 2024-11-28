import React, { useState,useEffect } from "react";
import { Box, Stack, Typography, IconButton,Rating } from "@mui/material";
import humanAvatar from "../../assets/images/human-avatar.png";
import aiAvatar from "../../assets/images/ai-profile-large.png";
import { format } from 'date-fns';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

const ChatCard = ({ details, readOnly=false, setChat, setSelectedChatId, showModal }) => {
    const [isRating, setIsRating] = useState(false);
    const [rating, setRating] = useState(0);

    useEffect(() => {

        if (isRating) {
            setChat(prev => (
                prev.map(item => {
                    if (item.id == details.id) {
                        return { ...item, rating: rating || 0 }
                    }
                    else {
                        return { ...item }
                    }
                })
            ))
        }

    }, [rating])

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
      sx={{
        '&:hover .feedback-btns': {
            visibility: 'visible',
            opacity: 1
        }
    }}
    >
      <Box
        component="img"
        src={details.type === "AI" ? aiAvatar : humanAvatar}  
        alt="human-avatar"
        borderRadius="50%"
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

                    {(details.type === "AI" && !readOnly) && (
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
                                    showModal()
                                }}
                            >
                                <ThumbDownOffAltIcon fontSize='inherit' />
                            </IconButton>
                        </Stack>
                    )}
                 </Stack>
                    {((isRating || details.rating > 0) && details.type === "AI") && (
                    <Box pt={{ xs: 1, md: 2 }}>
                        <Typography
                            component={'legend'}
                            fontSize={{ xs: 10, md: 12 }}
                            mb={.5}
                        >
                            {readOnly ? 'Rating:' : 'Rate this reponse:'}
                        </Typography>
                        <Rating
                            name="simple-controlled"
                            value={details.rating > 0 ? details.rating : rating}
                            onChange={(event, newValue) => {
                                setRating(newValue)
                            }}
                            sx={{
                                width: 'auto'
                            }}
                            readOnly={readOnly}
                        />
                    </Box>
                )}

                {details.feedback && (
                    <Typography
                        pt={1}
                        fontSize={{ xs: 10, md: 16 }}
                    >
                        <Box component={'span'} fontWeight={600}>
                            Feedback:
                        </Box>
                        <Box component={'span'}>
                            {` ${details.feedback}`}
                        </Box>
                    </Typography>
                )}

               
                </Box>
    </Stack>
  );
};
export default ChatCard;
