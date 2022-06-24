import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home  from './pages/Home';
import Navigation from './components/Navigation';


const App = () => {

  const [changeTheme, setChangeTheme] = React.useState(true);

  const darkTheme = createTheme({
    palette: {
      mode: changeTheme ? 'dark' : 'light',
    },
  });



  return (
      <React.Fragment>
              
          <CssBaseline />
   
          <ThemeProvider theme={darkTheme} >


             <Navigation setTheme={() => setChangeTheme(!changeTheme)} state={changeTheme} />

              
              <BrowserRouter>
                 <Routes>
                     <Route path='/' element={<Home />} />
                 </Routes>     
              </BrowserRouter>
                   

          </ThemeProvider>

      </React.Fragment>
  );
}

export default App;
