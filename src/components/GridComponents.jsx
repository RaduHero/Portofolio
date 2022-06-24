import React from 'react'; 
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Alert  from '@mui/material/Alert';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import { StepperOne, StepperThree, StepperTwo, DescriptiveComponents } from './Steppers';


import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';




const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon  color='error' />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon  color='error' />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon  color='warning' />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon  color='success'/>,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color='success'/>,
    label: 'Very Satisfied',
  },
};


function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}


const RadioGroupRating = () => {
  return (
    <StyledRating
      name="highlight-selected-only"
      defaultValue={0}
      IconContainerComponent={IconContainer}
      getLabelText={(value) => customIcons[value].label}
      highlightSelectedOnly
    />
  );
}


const RatingSystem = ({precisionValue}) => {

  const [value, setValue] = React.useState(4);

  return(
    <React.Fragment>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}

        precision={precisionValue}
        size='large'
      />

    </React.Fragment>
  )
}


const TabPanel = ({value, index, children}) => {
  return(
      <React.Fragment>


       {value === index && children}

      </React.Fragment>
  );
}



const GridItem = (props) => {


  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return(
      <React.Fragment>

          <Grid item xs={props.xs} sm={props.sm} md={props.md} lg={props.lg} xl={props.xl} 
          sx={{position: 'relative' }}
          >
            <Paper elevation={3} sx={{ m: 1, display: {xs: props.xs_showed, md: 'grid'}}} >
            <Box
            height={'260px'}
            display='flex'
            justifyContent={'center'}
            alignItems={'center'}
            
            >
             <Stack direction='row' sx={{position: 'absolute', top: '10px', left: '12px'}}>
                <Tabs value={value} onChange={handleChange}  aria-label="basic tabs example">
                    <Tab label={props.modifierOne} sx={{minWidth: '14px', fontSize: '12px', padding: '8px'}} value={0} />
                    <Tab label={props.modifierTwo} sx={{minWidth: '14px', fontSize: '12px', padding: '8px'}} value={1}/>
                    <Tab label={props.modifierThree} sx={{minWidth: '14px', fontSize: '12px', padding: '8px'}} value={2}/>
                </Tabs>
             </Stack>

             <TabPanel value={value} index={0}>
             {props.elementOne}
            </TabPanel>
            <TabPanel value={value} index={1}>
             {props.elementTwo}
            </TabPanel><TabPanel value={value} index={2}>
             {props.elementThree}
            </TabPanel>

             <Stack direction='row' sx={{position: 'absolute', top: '85%', left: '30px'}}>
                 <Typography sx={{fontWeight: 'bold'}}>{props.description}</Typography>
             </Stack>
            </Box>
            </Paper>
          </Grid>


      </React.Fragment>
    );
}



const GridComponents = () => {
  return (
    <React.Fragment>

    <Paper 
     sx={{width: '100%', borderRadius: 0}}
     elevation={1} 
     
     >


        <Stack direction='row'>
            <Box width={{xs: '5%', sm: '12%'}} ></Box>

             <Box width={{xs: '90%', sm: '76%'}} bgcolor='transparent'>

               <DescriptiveComponents />

                <Grid container sx={{ my: 10, display: 'flex', justifyContent: 'center'}}>

                    <GridItem lg={4} xs={12}
                    elementOne={<Button size='large' variant='contained'>Click Me</Button>}
                    elementTwo={<Button size='large' variant='outlined'>Click Me</Button>}
                    elementThree={<Button size='large' variant='text'>Click me</Button>}

                    modifierOne={'contained'}
                    modifierTwo={'outlined'}
                    modifierThree={'text'}
                    description={'Button'}
                    />

                    <GridItem lg={4} xs={12}
                    elementOne={<Alert severity='success'>This is an alert!</Alert>}
                    elementTwo={<Alert severity='error'>This is an alert!</Alert>}
                    elementThree={<Alert severity='info'>This is an alert!</Alert>}

                    modifierOne={'success'}
                    modifierTwo={'error'}
                    modifierThree={'info'}
                    description={'Alert'}
                    />

                    <GridItem lg={4} xs={12}
                    elementOne={<RatingSystem precisionValue={1}/>}
                    elementTwo={<RatingSystem precisionValue={0.5}/>}
                    elementThree={<RadioGroupRating />}

                    modifierOne={'Standard'}
                    modifierTwo={'Precised'}
                    modifierThree={'Custom'}
                    description={'Rating system'}
                    />

                    <GridItem lg={4} xs={12}
                    elementOne={<Pagination color="primary"  size='small' count={10} />}
                    elementTwo={<Pagination size='small' count={10} variant="outlined" color="primary" />}
                    elementThree={<Pagination count={10} size='small' variant="outlined" shape="rounded" />}

                    modifierOne={'Standard'}
                    modifierTwo={'Outlined'}
                    modifierThree={'Rounded'}
                    description={'Pagination system'}
                    />

                     <GridItem lg={8} xs={12} xs_showed={'none'}
                    elementOne={<StepperOne />}
                    elementTwo={<StepperTwo />}
                    elementThree={<StepperThree />}

                    modifierOne={'Standard'}
                    modifierTwo={'Progress'}
                    modifierThree={'Dots'}
                    description={'Stepper'}
                    />

                     
                  


                </Grid>

              
             </Box>

            <Box width={{xs: '5%', sm: '12%'}} bgcolor='transparent' ></Box>
        </Stack>


        </Paper>

         

    </React.Fragment>
  )
}

export default GridComponents;