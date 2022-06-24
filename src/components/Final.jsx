import React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import Typography  from '@mui/material/Typography';
import Divider  from '@mui/material/Divider';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WordType = ({word, onClick}) => {
  return(
    <React.Fragment>

            <Typography textAlign={'center'}
            onClick={onClick} 
            color='gray'
            sx={{userSelect: 'none', 
            cursor: {xs: 'default', lg: 'pointer'},
            ':hover': {color: 'text.secondary'}
          
            }} 
            fontWeight={'bold'}
            
            >
                      {word}
            </Typography>

    </React.Fragment>
  );
}



const Final = () => {
  return (
    <React.Fragment>
      
      
       <Paper 
     sx={{width: '100%'}}
     elevation={0} 
     square
     >


        <Stack direction='row'>
            <Box width='12%' ></Box>
             <Box width='76%' bgcolor='transparent'>


                   <Box sx={{mt: 5, mb: 5}}>
                     <Stack direction={{xs: 'column', lg: 'row'}} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

                               <Box width={{xs: '150px', sm: '50%'}} mb={{xs: 4, lg: 0}} display='flex' justifyContent={{xs: 'center', xl: 'flex-start'}} alignItems='center'>

                                  <ArchitectureIcon sx={{fontSize: {xs: '28px', md: '44px'} }}/>
                                  <Typography variant='h6' color='primary' component='p' sx={{fontSize: {xs: '18px', md: '21px'} }} fontWeight={'bold'}>
                                           Full stack dev
                                      </Typography>

                               </Box>

                               <Box width={'50%'} display={{xs: 'none', xl: 'flex'}} justifyContent={{xs: 'center', lg: 'flex-end'}} alignItems='center'>    
                                   <Stack spacing={3} direction={{xs: 'column', sm: 'row'}}>

                                       <WordType onClick={() => { window.scrollTo({top: 0,left: 0,behavior: 'smooth'}); } } word='Contact' />
                                       <WordType onClick={() =>  { window.scrollTo({top: 1700,left: 0,behavior: 'smooth'});  }  } word='Reviews' />
                                       <WordType onClick={() => { window.scrollTo({top: 500,left: 0,behavior: 'smooth'}); } } word='Information' />
                                       <WordType onClick={() => { window.scrollTo({top: 2200,left: 0,behavior: 'smooth'}); } } word='Examples' />

                                   </Stack>
                               </Box>
                                                          

                     </Stack>

                          <Divider sx={{mt: 2, mb: 2}}/>

                          <Box width={'100%'} display='flex' justifyContent={'flex-end'} alignItems='center'>
                                     <a target='_blank' href='https://github.com/RaduHero/RaduHero'> <IconButton size='small' > <GitHubIcon fontSize='small' /> </IconButton> </a>
                                     <a target='_blank' href='https://www.linkedin.com/in/radu-mocanu-ba8776234'>  <IconButton size='small'> <LinkedInIcon fontSize='small' /> </IconButton> </a>
                                     <a target='_blank' href='https://github.com/RaduHero/RaduHero' > <IconButton size='small'> <WhatsAppIcon fontSize='small' /> </IconButton> </a>

                          </Box>



                      
                   </Box>
                           




             </Box>
              <Box width='12%' bgcolor='transparent' ></Box>
          </Stack>




        </Paper>
     
    </React.Fragment>
  )
}

export { Final };