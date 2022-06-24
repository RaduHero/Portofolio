import React, { useState } from 'react';
import Stack  from '@mui/material/Stack';
import Box  from '@mui/material/Box';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Typography  from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useEffect } from 'react';




const Dot = (props) => {
    return(
        <React.Fragment>

                   <Box
                    width={'20px'}
                    height={'20px'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    color={'primary.main'}
                    sx={{
                        ':hover': {
                           cursor: {xs: 'default', lg: 'pointer'},
                           
                        },

                     opacity: props.isActive ? 0.85 : 0.45
                    }}
                    >

                    {props.dotItem}
                   
                   
                   

                   </Box>


        </React.Fragment>
    );
}


const Controller = (props) => {
 

    const [firstDot, setFirstDot] = useState(true);
    const [secondDot, setSecondDot] = useState(false);
    const [thirdDot, setThirdDot] = useState(false);


    const referece = React.useRef();
    const container = React.useRef();


    window.addEventListener( 'resize', () => {
          if(!firstDot){
            setFirstDot(true);
            setSecondDot(false);
            setThirdDot(false);
          }
    });



    useEffect( () => {

       if(firstDot === true)
       {
        referece.current.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
       }
       else if(secondDot === true)
       {
        referece.current.scrollTo({
            top: 0,
            left: container.current.clientWidth / 3,
            behavior: 'smooth'
          });
       }
       else 
       {
        referece.current.scrollTo({
            top: 0,
            left: container.current.clientWidth - container.current.clientWidth / 3,
            behavior: 'smooth'
          });
       }


    },[firstDot,secondDot,thirdDot])



    const eventHandlerPlus = () => {

        if(firstDot === true)
        {
            setFirstDot(false);
            setSecondDot(true);
        }
        else if(secondDot === true)
        {
            setSecondDot(false);
            setThirdDot(true);
        }

    }

    const eventHandlerMinus = () => {

        if(thirdDot === true)
        {
            setSecondDot(true);
            setThirdDot(false);
        }
        else if(secondDot === true)
        {
            setSecondDot(false);
            setFirstDot(true);
        }
      

    }



    return(
        <React.Fragment>
            
              <Stack direction={'row'} >
                
                    <Stack direction="row" spacing={2}>
                        <Button variant='outlined' disabled={firstDot} sx={{border: 0.5, borderRadius: '50%', width: '32px', height: '32px', minWidth: '10px'}} onClick={eventHandlerMinus} size='small' >
                           <NavigateBeforeRoundedIcon color='text.primary' sx={{fontSize: '21px', opacity: 0.65}}/>
                        </Button>
                        

                        <Button variant='outlined' disabled={thirdDot} sx={{border: 0.5, borderRadius: '50%', width: '32px', height: '32px', minWidth: '10px'}} size='small'  onClick={eventHandlerPlus} >
                           <NavigateNextRoundedIcon  sx={{fontSize: '21px', opacity: 0.65}}  />
                        </Button>


                    </Stack>

                <Box flexGrow={1} ></Box>

                <Stack direction='row' spacing={0.3} sx={{display: 'flex', alignItems: 'flex-start' }}>
                    
                  <Dot isActive={firstDot}
                      
                      dotItem={

                            <FiberManualRecordIcon 
                            sx={{fontSize: '14px'}} 
                            onClick={() => {setFirstDot(true); setSecondDot(false); setThirdDot(false); } } 
                            color={firstDot ? 'primary' : 'default'}
                        
                        
                        />

                      }
                  
                  />
                 

                  <Dot isActive={secondDot}

                  dotItem={
                    <FiberManualRecordIcon sx={{fontSize: '14px'}}  
                    color={secondDot ? 'primary' : 'default'}
                    onClick={() => {setFirstDot(false); setSecondDot(true); setThirdDot(false); } }  />

                  }
                  
                  
                  />
                
                  <Dot isActive={thirdDot}

                   dotItem={
                    <FiberManualRecordIcon sx={{fontSize: '14px'}}  
                    color={thirdDot ? 'primary' : 'default'} 
                    onClick={() => {setFirstDot(false); setSecondDot(false); setThirdDot(true); } }
                    />
                   }

                  />

                
                </Stack>

              </Stack>


            <Box ref={referece} sx={{maxWidth: {xs: '300px', sm: '400px', md: '500px'}, overflow: 'hidden', display: 'flex', alignItems: 'flex-start'}}>
                   
                <Stack ref={container} sx={{minWidth: {xs: '900px', sm: '1200px', md: '1500px'} , display: 'flex', alignItems: 'flex-start'}} direction='row' spacing={0}>

                        {props.firstReview}
                        {props.secondReview}
                        {props.thirdReview}

                </Stack>

             </Box>


        </React.Fragment>
    );
}

const TextReview = (props) => {
    return(
        <React.Fragment>


          <Box sx={{minWidth: {xs: '300px', sm: '400px', md: '500px'} }}
          
          >
        <Stack spacing={2.2} sx={{width: '80%'}}>
                  <Typography>
                    {props.text}
                    </Typography>
                    <Stack direction='row' sx={{display: 'flex',  alignItems: 'center' }} >
                        <Tooltip title='anonim user' >
                        <Avatar  />
                        </Tooltip>
                        <Typography sx={{ml: 1.15}}>{props.userName}</Typography>
                    </Stack>

            </Stack>
          </Box>

        </React.Fragment>
    )
}


const GridItem = (props) => {
    return(
        <React.Fragment>
                   <Grid item xs={6}>
                      
                      <Box
                      width={'100%'}
                      height={'55%'}
                      display={'flex'}
                      justifyContent={'flex-start'}
                      alignItems={'center'}
                      borderLeft={2}
                      borderColor={'rgba(29, 141, 227, 0.15)'}
                      borderRadius={'1px'}
                      maxWidth={'220px'}
        
                      
                      
                      >
                        <Stack sx={{ml: 2.5}}>
                        <Typography color={'primary.main'} >{props.text}</Typography>
                        <Typography  fontSize='small' color={'text.secondary'}>{props.textSecondary}</Typography>
                        </Stack>
                      </Box>

                    </Grid>
        </React.Fragment>
    );
}

const SliderReviews = () => {
  return (
    <React.Fragment>

        <Stack direction='row'>
           
           <Box 
           width={{
            xs: '100%', 
            lg: '50%', 
            display: 'flex',
            justifyContent: {xs: 'center', lg: 'flex-start'},
            alignItems: 'center',
            minHeight: '450px'

           }} 
           
       
           >
                <Stack spacing={4} sx={{width: '100%'}}>
                    <Controller 
                    
                    firstReview={

                        <TextReview 
                        text= 'Working with an Eastern European developer was a good choice. The communication between us was pretty good I could say. The project was delivered on time and everything went smoothly.'
                        userName='Chris Woodfield'

                        
                        /> 
                    }


                    secondReview={

                        <TextReview 
                         text='As a beginner photographer, I realized that a presentation website that reflects my work is a must. I had the opportunity to collaborate with Radu who helped me with everything. Even though I had a smaller budget, it was not a problem. I recommend him with confidence.'
                         userName='Stefan Trepadus'

                        
                        /> 
                    }

                    thirdReview={

                        <TextReview 
                        text='The fact that I chose the services here was a good decision in general, I had the promised quality and I was glad that everything went well in terms of meeting the design requirements.'
                        userName='Adrian Gafencu'

                        
                        /> 
                      
                    }
                    
                    />
                </Stack>
           </Box>

           <Box width={'50%'} display={{xs: 'none', lg: 'flex'}} justifyContent='flex-end' alignItems='center'>


             <Box width={'100%'} height={'250px'} >

                    <Grid container sx={{width: '100%', height: '250px', ml: 10}} spacing={0}>

                         <GridItem text='Privacy' textSecondary="Our mission is to put the client first, this is why we take privacy seriously" />
                         <GridItem text='Anonymity'  textSecondary='Client confidentiality is one of the principles that guide us'/>
                         <GridItem text='Transparency'  textSecondary='Every business interaction is based on honesty and transparency'/>
                         <GridItem text='Free speech'  textSecondary='The recognition of truthfulness and the openness of freedom of speech are important for us'/>


                                            
                    </Grid>


                </Box>



           </Box>


        </Stack>
         
     


    </React.Fragment>
  )
}

export {SliderReviews};