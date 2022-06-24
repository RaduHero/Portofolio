import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography  from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardHeader  from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import AppsIcon from '@mui/icons-material/Apps';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import Paper  from '@mui/material/Paper';
import Slider from '@mui/material/Slider';
import IconButton  from '@mui/material/IconButton';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import FastForwardRoundedIcon from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import {Lines, Switcher} from './CodeLine';
import Backdrop from '@mui/material/Backdrop';




const CardStack = (props) => {

  const [desktop, setDesktop] = useState(false);

  useEffect( () => {

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      
      setDesktop(false);

    }
    else
    {
        setDesktop(true);
    } 


  },[]);

  return(
     <React.Fragment>
         
         <Card sx={{width: {xs: '85%', md: '75%'}, ':hover': { cursor: desktop && 'pointer', 
         bgcolor: (theme) => theme.palette.mode === 'dark' ? (desktop && 'transparent') : (desktop && 'rgb(245,245,245)') }, 

         
         
         }} 
         
         elevation={3}
         
         >

                <CardHeader 
                
                 avatar={props.icon}
                 title={props.title}
                
                
                />


                <CardContent>
                
                        <Typography>{props.info}</Typography>
                        
                  



                </CardContent>

                <CardActions>
                   <Button size='small' onClick={props.onClickLearn}>Learn more</Button>
                </CardActions>

          </Card>

          {props.infoBackdrop}


     </React.Fragment>
  );
}


const StackOne = () => {

  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  


    return(
        <React.Fragment>

             <Stack sx={{ display: 'flex' , alignItems: {xs: 'center', xl: 'flex-end'} }} spacing={{xs: 2, xl: 0}} direction={'column'}>

                <Stack sx={{width: '100%', alignItems: {xs: 'center', xl: 'flex-end'} }} >
                    <Stack sx={{width: {xs: '85%', md: '75%'}, mt: 8 }} direction='column'>
                            <Typography textAlign={'center'} color='text.primary' sx={{fontWeight: 'bold'}} variant='h4' component='h5'>
                                A powerful software engineer 
                            </Typography>
                            <Typography textAlign={'center'} color='primary.main' sx={{fontWeight: 'bold'}} variant='h4' component='h5'>
                              that can take care of heavy projects
                            </Typography>
                      </Stack>

                      <Box flexGrow={{xs: 0, xl: 1}}></Box>

                      <Box width={{xs: '85%', md: '75%'}} >
                        <Typography textAlign={'center'} sx={{mt: 1}} color='text.secondary' 
                              fontSize={'small'} variant='p' component='p'>
                                My main goal is to make sure that the projects are delivered on time and that they meet the required standards according to the client. The quality of services has always been high, even when the complexity of the projects involved a great deal of work.
                        </Typography>
                      </Box>
                      <Box height='18px'></Box>
                    </Stack>

                    <Box flexGrow={{xs: 0, xl: 1}}></Box>
 
             
               <CardStack icon={<AppsIcon color='primary' />} 
               title={<Typography color='primary' >QUALITY SERVICES</Typography>}
               info='The technologies used offer a wide variety of high quality services built with one of the most powerful frameworks existing .NET CORE for the back-end logic, and React on the front-end side.'
                
               
               onClickLearn={() => {setOpen1(!open1);}}
               infoBackdrop={<LearnMore open={open1} handleClose={ () => {setOpen1(!open1)} } title='Quality services' 
               description='In the field of computer networking and other packet-switched telecommunication networks, quality of service refers to traffic prioritization and resource reservation control mechanisms rather than the achieved service quality. Quality of service is the ability to provide different priorities to different applications, users, or data flows, or to guarantee a certain level of performance to a data flow.' />}

                 />

              <Box flexGrow={{xs: 0, xl: 1}}></Box>

               <CardStack icon={<DashboardIcon color='primary'/>}
                title={<Typography color='primary' >PREMIUM USER INTERFACE</Typography>}
                info="Using Material UI architected customization system library and intuitive React UI tools my goal is to differentiate and highlight all my clients' business in the marketplace."

                onClickLearn={() => {setOpen2(!open2);}}
                infoBackdrop={<LearnMore open={open2} handleClose={ () => {setOpen2(!open2);} } title='Premium UI' 
                description='Premium Services means value added services targeted toward users of the Service requiring payment of fees therefor. Fees may be monthly service fees, packaged bundled fees, or direct fees for service used.' />}

               />

               <Box flexGrow={{xs: 0, xl: 1}}></Box>

               <CardStack icon={<SecurityIcon color='primary' />}
               title={<Typography color='primary' >ADVANCED SECURITY</Typography>}
               info="Cybersecurity can be a growing concern for many large or small companies and businesses. You do not have to worry, with the solutions offered here you are in good hands!"

               onClickLearn={() => {setOpen3(!open3);}}
                infoBackdrop={<LearnMore open={open3} handleClose={ () => {setOpen3(!open3);} } title='Cybersecurity' 
                description='Cybersecurity is the practice of protecting critical systems and sensitive information from digital attacks. Also known as information technology (IT) security, cybersecurity measures are designed to combat threats against networked systems and applications, whether those threats originate from inside or outside of an organization.' />}


               />

                <Box flexGrow={{xs: 0, xl: 1}}></Box>

               <CardStack 
               icon={<SpeedIcon color='primary'/>}
               title={<Typography color='primary' >HIGH SPEED</Typography>}
               info="When it comes to user experience, speed matters. Performance plays a major role in the success of any online business. High-performing sites engage and retain users better than low-performing ones."

               onClickLearn={() => {setOpen4(!open4);}}
                infoBackdrop={<LearnMore open={open4} handleClose={ () => {setOpen4(!open4);} } title='Speed' 
                description='In general, speed is the overall time something takes to complete. For example, if a computer is fast it opens program in less than a few seconds depending on the size of the program. Often many fast computers can open smaller programs in less than a second. However, if a computer is slow it can take several seconds or maybe even a minute or more to open a big program.' />}
               
               />

               <Box flexGrow={{xs: 0, xl: 1}}></Box>
               <Box height={'14px'} ></Box>


             </Stack>

        </React.Fragment>
    );
}

const StackTwo = () => {
    return(
        <React.Fragment>

             <Stack sx={{width: '100%', mb: 5}} direction={'column'}>

                <Box display={'flex'} 
                sx={{mt: {xs: 0, xl: 8.5}, 
                justifyContent: {xs: 'center'} ,
                mr: {xs: 0, xl: 0}
                
                
                }} 
                alignItems={'center'} >

                  <Stack sx={{width: {xs: '85%', md: '75%', xl: '65%'}}} direction='column'>
                      
                       <ComponentShowCase /> 

                       <Paper width='100%' sx={{borderRadius: '0 0 4px 4px', minHeight: {xs: '300px', xl: '679px'}, height: '100%', minWidth: {xs: '150px', lg: '405px'}}} elevation={3}>
                           <Typography textAlign={'flex-start'} sx={{ml: 3, mb: 3, mt: 1.5}} color='primary'>REACT CODE SAMPLE</Typography>

                            <Lines />

                       </Paper>



                       

                  </Stack>
                        

                </Box>


             </Stack>

        </React.Fragment>
    );
}


const ComponentShowCase = () => {

  const marks = [ {value: 0, label: '0%'},{ value: 100, label: '100%'}];

  const [play, setPlay] = useState(true);

  return(
      <React.Fragment>
         
         <Box 
          
          width={'100%'}
          minHeight={'410px'}
          mt={0}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          sx={{backgroundImage: 'linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)', borderRadius: '4px 4px 0 0'}}
         
         
         >

          <Paper
          
          sx={{
            width: {xs: '90%', sm: '80%'},
            maxHeight: '250px',
            height: '240px',
            maxWidth: '420px',
            bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(25,25,25,0.55)' : 'rgba(215,215,215,0.4)',
            backdropFilter:'blur(20px)',
            borderRadius: '14px'

          }} 

          >

            <Stack direction={'row'}>
            <img height={'80px'} style={{borderRadius: '8px', marginTop: '20px', marginLeft: '20px', opacity: 1}} src={require('./imgs/OIP.jpg')} alt='Ed Sheeran' />
            <Box height={'80px'} ml={{xs: 2, sm: 2.5}} display={'flex'} justifyContent={'center'} alignItems={'center'}>
           
              <Stack sx={{mt: 4}}>
              <Typography color='text.secondary' fontSize={{xs: '14px', sm: '16px'}}>Ed Sheeran</Typography>
              <Typography color='text.primary' fontSize={{xs: '14px', sm: '16px'}}>Castle on the Hill</Typography>
              </Stack>

            </Box>
            </Stack>
           
            <Box width={'100%'} display='flex' justifyContent={'center'} alignItems={'center'}>
               <Box width={'85%'} mt={1.5}>
               <Slider size='small' marks={marks } defaultValue={40}></Slider>
               </Box>
            </Box>

            <Box wisth={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>

            <Stack direction={'row'}>

              <IconButton>
                 <FastRewindRounded fontSize='large' />
              </IconButton>

               { 
               
               play ?

                <IconButton onClick={() => {setPlay(!play)}}>
                   <PauseRoundedIcon fontSize='large' />
                </IconButton>

                :

                <IconButton onClick={() => {setPlay(!play)}}>
                   <PlayArrowRoundedIcon fontSize='large' />
                </IconButton>

               }

               <IconButton>
                 < FastForwardRoundedIcon fontSize='large'/>
               </IconButton>
            </Stack>

            </Box>

           <Box
            width={'100%'}
            display='flex'
            justifyContent='center'
            alignItems='center'
            mt={2}
           >

           <Switcher />                      

           </Box>

          </Paper>

         </Box>

         
       


      </React.Fragment>
  );
}

const Description = () => {
  return (
    <React.Fragment>
        
       <Box
       width={'100%'}
       >

       <Stack direction={ {xs: 'column', xl: 'row'} }>

            <StackOne />
            <StackTwo />


       </Stack>
       </Box>
          

    </React.Fragment>
  )
}


const LearnMore = (props) => {

  

  return(
     <React.Fragment>
          <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={props.open}
        onClick={props.handleClose}
      >

        <Paper elevation={3} sx={{maxWidth: '35%', minWidth: '300px'}}>
          
          <Stack spacing={3} sx={{m: 4}}>
            <Typography textAlign={'center'} color='primary' >{props.title}</Typography>
             <Typography textAlign={'center'} >{props.description}</Typography>
          </Stack>

        </Paper>


      </Backdrop>

     </React.Fragment>
  );
}

export default Description;