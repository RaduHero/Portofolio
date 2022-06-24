import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { SiReact, SiRedux, SiMaterialui} from 'react-icons/si';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AddchartIcon from '@mui/icons-material/Addchart';
import Grid  from '@mui/material/Grid';
import Description from '../components/Description';
import Reviews from '../components/Reviews';
import GridComponents from '../components/GridComponents';
import { Final } from '../components/Final';


const IntroQuote = () => {
       

    return(
         <React.Fragment>

            <Box 
              width={'100%'}
              display={'flex'}
              justifyContent={'center'}

            >
                                

                <Stack spacing={2} sx={{mt: {xs: 14, md: 18}}}>


                    <Stack>
                        <Typography textAlign={'center'} 
                        variant='h2'
                        color='primary' 
                        fontWeight={'bold'}
                        sx={{
                            fontSize: {xs: 36, sm: 48, md: 54, lg: 64, xl: 72}
                        }}

                        >
                                    Choose a full stack web developer
                        </Typography>

                        <Typography 
                        textAlign={'center'} 
                        variant='h2' component={'h3'} 
                        color='primary.text' fontWeight={'bold'}
                        sx={{
                            fontSize: {xs: 36, sm: 48, md: 54, lg: 64, xl: 72}
                        }}
                        
                        >
                                    for your next project
                        </Typography>

                    </Stack>

                    
                    <Box sx={{width: {xs: '80%', md: '65%'}}} display='flex' justifyContent='center' alignItems='center' alignSelf='center'>
                        <Typography 
                        textAlign={'center'} 
                        variant='p' 
                        color={ (theme) => theme.palette.mode === 'dark' ? '#bdbdbd' : '#424242' }
                        sx={{
                            fontSize: {sm: 16, md: 18, lg: 21, xl: 24}
                        }}
                        
                        >
                            Hi, my name is Radu Mocanu and I'm a fullstack dev. My main job is to create APIs because I usually like to work on the back end. I can also create extremely beautiful web interfaces with React, but only if I have to. If you want to collaborate, contact me!
                        </Typography>                    
                    </Box>

                    <GetStarted />

                </Stack>

            </Box>

         </React.Fragment>    
    );
}

const GetStarted = () => {
    return(
        <React.Fragment>
             
             <Box width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
 
                 <Stack direction={{xs: 'column', sm: 'row'}} spacing={1} sx={{mt: 3}}>
                    <Button target='_blank' href='https://github.com/RaduHero/RaduHero' endIcon={<KeyboardArrowRightIcon />} variant='contained' >Get Started</Button>
                    <Button target='_blank' href='https://www.linkedin.com/in/radu-mocanu-ba8776234' endIcon={<AddchartIcon />} variant='outlined' color='primary'>More information</Button>
                </Stack>
                 
             </Box>


        </React.Fragment>
    );
}

const Technologies = () => {
    return(
       <React.Fragment>
           
           <Box 
            
            width={'100%'}
            mt={10}
            minHeight={'175px'}
          
            
           
           >
                <Grid width={'100%'}   display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                container 
                spacing={{xs: 3,sm: 8, md: 12, lg: 18, xl: 21}}
                
                >

                      <Grid item>
                        <SiReact  fontSize={'40px'} />
                      </Grid>
                      <Grid item>
                      <SiRedux  fontSize={'40px'} />
                      </Grid>

                      <Grid item>
                      <SiMaterialui fontSize={'40px'} />
                      </Grid>

                      <Grid item>
                      <Typography sx={{ userSelect: 'none' }} 
                      fontSize={'26px'} >MS SQL</Typography>
                      </Grid>

                      <Grid item>
                      <Typography sx={{userSelect: 'none' }} 
                      fontSize={'26px'}>.NET CORE</Typography>
                      </Grid>



                </Grid>
           </Box>
            


       </React.Fragment>
    );
}


const Home = () => {
  return (
    <React.Fragment>


          <Box width={'100%'} position={'absolute'}>
                <Paper sx={{width: '100%'}} elevation={1}  square>

                    <IntroQuote />
                    <Technologies />

                </Paper>  

                <Paper sx={{width: '100%'}} elevation={1} square>

                 <Description />

                </Paper>  

                <Reviews />

                <GridComponents />

                <Final />

            </Box>

    </React.Fragment>
  )
}

export default Home;