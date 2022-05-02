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
  //const [isAuth, setIsAuth] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [fullName, setFullName] = useState("");


  console.log({ accessToken: accessToken })
  console.log({ fullName: fullName })




  /// init

  // if (ssAccessToken && !accessToken) {
  //   console.log("update from session storage")
  //   setAccessToken(ssAccessToken );
  //   setFullName(ssFullName)
  // }

  useEffect(() => {
    const ssAccessToken = sessionStorage.getItem("accessToken");
    const ssFullName = sessionStorage.getItem("fullName");
    /*
        فقط در این حالت باید بروزرسانی می شود 
    مقادیر فالسی و مقادیر ترویی در نظر گرفته می شوند
    */
    if (ssAccessToken && !accessToken) {
      console.log("update from session storage")
      setAccessToken(ssAccessToken);
      setFullName(ssFullName)
    }
  }, [])


  const driver = {
    accessToken,
    setAccessToken,
    fullName,
    setFullName
  }


  return (
    <Box dir="rtl" >
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={CustomTheme}>
          <ContextA.Provider value={driver}>
            <BrowserRouter>{/* در کل پروژه باید یکلی باشد*/}
              <Box>
                {accessToken ? <AppIn /> : <AppOut />}
              </Box>
            </BrowserRouter>
          </ContextA.Provider>
        </ThemeProvider>
      </CacheProvider>
    </Box>
  );
}

export default App;
