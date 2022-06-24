import React from 'react';
import Stack  from '@mui/material/Stack';
import Box  from '@mui/material/Box';
import Paper  from '@mui/material/Paper';
import { SliderReviews } from './SliderReviews';



const Reviews = () => {
  return (
    <React.Fragment>

     <Paper 
     sx={{width: '100%', borderRadius: 0, bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(25,25,25,1)' : 'rgba(245,245,245,1)' }} 
     elevation={0} 
     
     >


        <Stack direction='row'>
            <Box width='12%' ></Box>

             <Box width='76%' bgcolor='transparent'>

                <SliderReviews />
              
             </Box>

            <Box width='12%' bgcolor='transparent' ></Box>
        </Stack>


        </Paper>



    </React.Fragment>
  )
}

export default Reviews;