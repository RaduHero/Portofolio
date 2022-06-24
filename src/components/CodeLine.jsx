import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography  from '@mui/material/Typography';
import FormGroup  from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

  

const Lines = () => {
    return(
        <React.Fragment>

           <Box mt={3} ml={3.5}>


               <Typography color='orange' sx={{fontSize: {xs: '8px', sm: '14px'} }} >
                  {'<Paper'}
               </Typography>


               <Typography color='yellowgreen'  sx={{ml: 3,fontSize: {xs: '8px', sm: '14px'} }}>
                  {'sx={{'}
               </Typography>

               <Typography color='#e57373'  sx={{ml: 4, fontSize: {xs: '8px', sm: '14px'}}}>
                  {'width={"100%"},'}
               </Typography>
               <Typography color='#e57373'  sx={{ml: 4, fontSize: {xs: '8px', sm: '14px'}}}>
                  {'height={"400px"},'}
               </Typography>
               <Typography color='#e57373'  sx={{ml: 4, fontSize: {xs: '8px', sm: '14px'}}}>
                  {'maxWidth: "400px",'}
               </Typography>
               <Typography color='#e57373'  sx={{ml: 4, fontSize: {xs: '8px', sm: '14px'}}} >
                  {'bgcolor: (theme) => theme.palette.mode === "dark" ? "rgba(25,25,25,0.55)" : "rgba(215,215,215,0.4)",'}
               </Typography>
               <Typography color='#e57373'  sx={{ml: 4, fontSize: {xs: '8px', sm: '14px'}}}>
                  {'backdropFilter: "blur(20px)",'}
               </Typography>
               <Typography color='#e57373'  sx={{ml: 4, fontSize: {xs: '8px', sm: '14px'}}}>
                  {'borderRadius: "14px"'}
               </Typography>




               <Typography color='yellowgreen'  sx={{ml: 3, fontSize: {xs: '8px', sm: '14px'}}}>
                  {'}}'}
               </Typography>


               <Typography color='orange' sx={{fontSize: {xs: '8px', sm: '14px'}}} >
                  {'>'}
               </Typography>

               <Typography color='orange' sx={{ml: 2, fontSize: {xs: '8px', sm: '14px'}}} >
                  {'<Stack>'}
               </Typography>
                           
                            <Typography color='orange'  sx={{ml: 3, fontSize: {xs: '8px', sm: '14px'} }}>
                              {'<Img />'}
                            </Typography>

                            <Typography color='orange'   sx={{ml: 3, fontSize: {xs: '8px', sm: '14px'}}} >
                              {'<Box>'}
                            </Typography>
                                    <Typography color='orange'  sx={{ml: 4, fontSize: {xs: '8px', sm: '14px'}}} >
                                    {'<Stack>'}
                                    </Typography>

                                    <Stack direction='row' sx={{ml: 5}}>
                                        <Typography color='orange' sx={{fontSize: {xs: '8px', sm: '14px'}}}>
                                        {'<Typography>'}
                                        </Typography>

                                        <Typography color='text.primary' sx={{fontSize: {xs: '8px', sm: '14px'}}}>
                                        {' Ed Sheeran '}
                                        </Typography>

                                        <Typography color='orange' sx={{fontSize: {xs: '8px', sm: '14px'}}}>
                                        {'</Typography>'}
                                        </Typography>
                                    </Stack>

                                    <Stack direction='row' sx={{ml: 5}}>
                                        <Typography color='orange' sx={{fontSize: {xs: '8px', sm: '14px'}}}>
                                            {'<Typography>'}
                                            </Typography>

                                            <Typography color='text.primary'  sx={{fontSize: {xs: '8px', sm: '14px'}}}>
                                            {'Castle on the Hill'}
                                            </Typography>

                                            <Typography color='orange' sx={{fontSize: {xs: '8px', sm: '14px'}}}>
                                            {'</Typography>'}
                                            </Typography>
                                    </Stack>

                                    <Typography color='orange' sx={{ml: 4, fontSize: {xs: '8px', sm: '14px'}}} >
                                    {'</Stack>'}
                                    </Typography>


                            <Typography color='orange'  sx={{ml: 3, fontSize: {xs: '8px', sm: '14px'}}}>
                              {'</Box>'}
                            </Typography>
                             


                    <Typography color='orange' sx={{ml: 3, fontSize: {xs: '8px', sm: '14px'}}}>
                        {'<Stack>'}
                    </Typography>

                    <Typography color='orange' sx={{ml: 5, fontSize: {xs: '8px', sm: '14px'}}}>
                         {'<Slider />'}
                    </Typography>

                    <Typography color='orange' sx={{ml: 3, fontSize: {xs: '8px', sm: '14px'}}}>
                         {'</Stack>'}
                    </Typography>

                            <Typography color='orange' sx={{ml: 3, fontSize: {xs: '8px', sm: '14px'}}}>
                                {'<IconButton />'}
                            </Typography>

                             <Stack direction='row' spacing={{xs: 0.5, sm: 2}} sx={{ml: 3}}>

                             <Typography color='primary' sx={{fontSize: {xs: '8px', sm: '14px'}}}>
                                    {'{'}
                                </Typography>

                                <Typography color='primary' sx={{fontSize: {xs: '8px', sm: '14px'}}}>
                                    
                                </Typography>

                                <Typography color='primary' sx={{fontSize: {xs: '8px', sm: '14px'}}}>
                                    {'play'}
                                </Typography>

                                <Typography color='yellowgreen' sx={{fontSize: {xs: '8px', sm: '14px'}}}>
                                    {'?'}
                                </Typography>

                                <Typography color='orange' sx={{fontSize: {xs: '8px', sm: '14px'}}}>
                                    {'<IconButton />'}
                                </Typography>

                                <Typography color='yellowgreen' sx={{fontSize: {xs: '8px', sm: '14px'}}}>
                                    {':'}
                                </Typography>

                                <Typography color='orange' sx={{fontSize: {xs: '8px', sm: '14px'}}}>
                                    {'<IconButton />'}
                                </Typography>


                                <Typography color='primary' sx={{fontSize: {xs: '8px', sm: '14px'}}}>
                                    {'}'}
                                </Typography>

                             </Stack>

                          
                            <Typography color='orange' sx={{ml: 3, fontSize: {xs: '8px', sm: '14px'}}} >
                                {'<IconButton />'}
                            </Typography>

                <Typography color='orange'  sx={{ml: 2, fontSize: {xs: '8px', sm: '14px'}}}>
                  {'</Stack>'}
               </Typography>

               <Typography color='orange' sx={{fontSize: {xs: '8px', sm: '14px'}}}>
                  {'</Paper>'}
               </Typography>



              <Box height={{xs: '28px', xl: '7px'}} ></Box>

           </Box>


        </React.Fragment>
    );
}


const Switcher = () => {
    return(
        <React.Fragment>

            <FormGroup sx={{mt: 5, mb: 1, display: {xs: 'none', md: 'flex' } }}>
                <FormControlLabel  control={<Switch defaultChecked={false} size='small' />} label={<Typography 
                fontSize={'15px'} color='text.secondary' >activate hover functionality</Typography>} />

            </FormGroup>


        </React.Fragment>
    )
}

export {Lines, Switcher};