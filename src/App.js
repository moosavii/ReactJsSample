import { useEffect, useState } from 'react';
//import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import { Box, ThemeProvider } from '@mui/material';

import CustomTheme from './Util/CustomTheme';
import ContextA from './Util/Context';
import cacheRtl from './Util/CustomCache';
import AppIn from './AppIn';
import AppOut from './AppOut';
import { BrowserRouter } from 'react-router-dom';


function App() {
  const [isAuth, setIsAuth] = useState(false);
  console.log({ appisath: isAuth })

  //const [sideBarOpen, setSideBarOpen] = useState(false);


  /// init
  // let LocalIsAuth = localStorage.getItem("isAuth");
  // if (LocalIsAuth == "true" && isAuth == false)
  //   setIsAuth(true);
  // else if (LocalIsAuth == "false" && isAuth == true)
  //   setIsAuth(false);
  ///

 

  const driver = {
    isAuth,
    setIsAuth
  }


  return (
    <Box dir="rtl" >

      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={CustomTheme}>
          <ContextA.Provider value={driver}>
            <BrowserRouter>{/* در کل پروژه باید یکلی باشد*/}
              <Box>
                {isAuth ? <AppIn /> : <AppOut />}
              </Box>
            </BrowserRouter>
          </ContextA.Provider>
        </ThemeProvider>
      </CacheProvider>
    </Box>
  );
}

export default App;
