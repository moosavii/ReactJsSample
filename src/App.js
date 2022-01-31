import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material';

import CustomTheme from './Asset/CustomTheme';
import ContextA from './Asset/Context';
import cacheRtl from './Asset/CustomCache';
import Header from './component/Header';
import NotFound from './component/NotFound';
import Home from './component/Home';
import Login from './component/Login';

import './App.css';









function App() {
  const [isAuth, setIsAuth] = useState(true);

  const driver = {isAuth , setIsAuth}

  return (
    <div dir="rtl">
      <center>
        only god helps
      </center>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={CustomTheme}>
          <ContextA.Provider value={driver}>
            {isAuth && <Header />}

            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={isAuth ? <Home /> : <Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={isAuth ? <Home /> : <Navigate to="/login" />} />
                <Route path="*" element={isAuth ? <NotFound /> : <Navigate to="/login" />} />
              </Routes>
            </BrowserRouter>
          </ContextA.Provider>
        </ThemeProvider>
      </CacheProvider>
    </div>
  );
}

export default App;
