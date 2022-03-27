import { useEffect, useState } from 'react';
//import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import { Box, ThemeProvider } from '@mui/material';

import CustomTheme from './Util/CustomTheme';
import ContextA from './Util/Context';
import cacheRtl from './Util/CustomCache';
import AppIn from './AppIn';
import AppOut from './AppOut';


function App() {
  const [isAuth, setIsAuth] = useState(false);
  //const [sideBarOpen, setSideBarOpen] = useState(false);


  /// init
    console.log("init")
    let LocalIsAuth = localStorage.getItem("isAuth");
    if (LocalIsAuth == "true" && isAuth == false)
      setIsAuth(true);
    else if (LocalIsAuth == "false" && isAuth == true)
      setIsAuth(false);
  ///

  const setIsAuthAndLocalStorege = (value) => {
    setIsAuth(value);
    localStorage.setItem("isAuth", value);
  }

  const driver = {
    isAuth,
    setIsAuthAndLocalStorege,
  }

  return (
    <Box dir="rtl" >

      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={CustomTheme}>
          <ContextA.Provider value={driver}>
            <Box>
              {isAuth ? <AppIn /> : <AppOut />}
            </Box>
          </ContextA.Provider>
        </ThemeProvider>
      </CacheProvider>
    </Box>
  );
}

export default App;
