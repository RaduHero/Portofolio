import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton  from '@mui/material/IconButton';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import Box  from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Tooltip  from '@mui/material/Tooltip';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import Typography  from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Backdrop  from '@mui/material/Backdrop';
import TextField  from '@mui/material/TextField';
import Paper  from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



const BoxEqualSpace = () => {
    return(
       <React.Fragment>
            
            <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' }  }}></Box>

       </React.Fragment>
    );
}

const Logo = () => {
    return(
       <React.Fragment>

             <IconButton size='small'>
                <ArchitectureIcon sx={{fontSize: 40}} />
             </IconButton>

       </React.Fragment>
    );
}

const TabsLinkArea = () => {

    const [value, setValue] = useState(0);
  
    const changeState = (event, newValue) => {
           setValue(newValue);
    }

    return(
       <React.Fragment>
             <Tabs aria-label="basic tabs example" value={value} onChange={changeState} 
                  sx={{ height: '100%', width: '440px', ml: 3, display: { xs: 'none', md: 'flex' } }}
                  
                  >

                <Tab label="Home" value={0} sx={{ fontSize: 14 }} />
              


            </Tabs>


       </React.Fragment>
    );
}

const SecuredSearch = (props) => {
    return(
       <React.Fragment>

                   <Box 
                    sx={{ml: 3, 
                        
                    display: { xs: 'none', xl: 'flex' },
                    cursor: {xs: 'default', xl: 'pointer'}, 
                    
                    userSelect: 'none',
                    ":hover": {
                      bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'rgba(65,65,65,1)' : 'whitesmoke')} 
                
                    }}

                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    border={1}
                    borderColor={'primary.main'}
                    borderRadius={'9px'}
                    height={'32px'}
                    width={'180px'}
                    onClick={props.onClick}
                   >
                      

                      <SearchOutlinedIcon color='primary' sx={{mr: 0.5}}/>
                      <Typography color='primary'>Secured Search</Typography>   
                      <ShieldOutlinedIcon color='primary' sx={{ml: 0.5}}/>

                      
                      
                </Box>

       </React.Fragment>
    );
}

const IconTab = (props) => {
    return(
        <React.Fragment>

            <a target='_blank' href={props.link} >
             <Tooltip title={props.tooltip}>

                      <Box
                       sx={
                      {display: props.boolDissapearOnSm ? { sm: 'none', xs: 'flex' } : {xs: 'flex'},  
                      cursor: {xs: 'default', lg: 'pointer'},  
                      ":hover": {
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'rgba(65,65,65,1)' : 'whitesmoke')
                        }
                        
                        }}

                       border={1}
                       borderRadius={'9px'}
                       borderColor={'primary.main'}
                       width={'32px'}
                       height={'32px'}
                       display={'flex'}
                       alignItems={'center'}
                       justifyContent={'center'}
                       ml={1}
                       onClick={props.onClick}               

                      >
 
                        {props.icon}

                       

                      </Box>
                      
                      </Tooltip>

                      </a>
                

        </React.Fragment>
    );
}

const Navigation = ({setTheme, state}) => {

  
    const [userAgentTheme, setUserAgentTheme] = useState(false);

    const VerifyBrowser = () => {
      if(navigator.userAgent.indexOf("Firefox") != -1){
          setUserAgentTheme(true);
      }
    }

    useEffect( () => {
      VerifyBrowser();
    },[]);


    const [open, setOpen] = React.useState(false);

   
       
    return (

      <React.Fragment>

           <AppBar color={userAgentTheme ? 'inherit' : 'transparent'} sx={{backdropFilter:'blur(18px)'}} >
             <Toolbar >


                 

                  <BoxEqualSpace />
                  <Logo />

                  <Stack direction='row'>
                    <Typography variant='h6' component={'p'} sx={{userSelect: 'none'}} color='text.primary'>Radu</Typography>
                    <Typography variant='h6' component={'p'} sx={{userSelect: 'none', display: {xs: 'none', sm: 'flex'}, ml: 0.75 }} color='text.primary'>Mocanu</Typography>

                  </Stack>

                  <Box sx={{flexGrow: 1}}></Box>

                  <SecuredSearch onClick={() => {setOpen(!open)} }/>
                 
                  <IconTab tooltip='Github repository' link='https://github.com/RaduHero' boolDissapearOnSm={false} 
                  icon={<GitHubIcon fontSize='medium' color='primary'/>} />
 


                  {

                  state ?

                  <IconTab tooltip='Theme switch' boolDissapearOnSm={false} 
                  icon={<DarkModeOutlinedIcon color='primary' fontSize='medium'/>} 
                  onClick={setTheme}
                  />

                  :      

                <IconTab tooltip='Theme switch' boolDissapearOnSm={false} 
                icon={<LightModeOutlinedIcon color='primary' fontSize='medium'/>} 
                onClick={setTheme} 
                      />

                     
                }

                <IconTab link='https://www.linkedin.com/in/radu-mocanu-ba8776234' tooltip='LinkedIn' boolDissapearOnSm={false} icon={<LinkedInIcon fontSize='medium' color='primary'/> } />

                    
           
                 <BoxEqualSpace />

      

             </Toolbar>
         </AppBar>


         <BackdropSearch 
         open={open} 
         injectionExit={<IconButton sx={{position: 'relative', left: '94%', my: 1}} onClick={() => {setOpen(!open)}} > <CloseIcon /> </IconButton>}
         />

    
      </React.Fragment>
  )
}


const array = [ 'get start with us', 'example of components', 'about our way of working', 'reviews from our clients', 'code sample', 'social media' ];
const nums = [ 0, 2200, 500, 1700, 500, 2800 ];


const BackdropSearch = (props) => {

  const [newValue, setNewvalue] = React.useState('');
  const [val, setVal] = React.useState('get start with us');

  useEffect( () => {


    if(val === array[0])
    { 
      window.scrollTo({top: nums[0],left: 0,behavior: 'smooth'}); 
    }

    else if(val === array[1])
    {
      window.scrollTo({top: nums[1],left: 0,behavior: 'smooth'});
    }

    else if(val === array[2])
    {
      window.scrollTo({top: nums[2],left: 0,behavior: 'smooth'});
    }

    else if(val === array[3])
    {
      window.scrollTo({top: nums[3],left: 0,behavior: 'smooth'});
    }

    else if(val === array[4])
    {
      window.scrollTo({top: nums[4],left: 0,behavior: 'smooth'});
    }

    else if(val === array[5])
    {
      window.scrollTo({top: nums[5],left: 0,behavior: 'smooth'});
    }


  }, [val])


   return(
      <React.Fragment>
          
          <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
          open={props.open}
         
          >

            <Paper sx={{width: {xs: '100%', md: '55%'}, minHeight: {xs: '100%', md: '65%'}}} elevation={3} >
                    
            {props.injectionExit}


                 <Stack sx={{display: 'flex', alignItems: 'center'}}>
                   <TextField 
                   sx={{width: '98%', my: 1}} 
                   onChange={ (event) => { setNewvalue(event.target.value) } } value={newValue} 
                   label="Search" 
                   variant="standard" 
                   
                   />

                   <Box width={'100%'}>
                   
                    {
                    
                    array.filter((value) => {
                      
                       return value.includes(newValue) 

                    }).map( (value, _ix) => {
                         
                        return(

                                <Box width={'100%'}  minHeight={'55px'} key={_ix}
                                sx={{':hover': {bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'rgba(65,65,65,1)' : 'whitesmoke')}, cursor: {xs: 'default', xl: 'pointer'} }} 
                                display='flex' 
                                alignItems={'center'}
                                onClick={  () => {  setVal(value) }  }
                                
                                >
                                   <Typography  sx={{fontSize: '21px', ml: 1.25}}>{value}</Typography>

                                </Box>

                          
                        );

                    })
                    
                  
                    }

                  </Box>
                  
                  </Stack>         


            </Paper>


          </Backdrop>


      </React.Fragment>
   );
}

export default Navigation;