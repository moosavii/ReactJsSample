import { useState, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';

import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

import NotFound from './Pages/NotFound';
import Home from './Pages/Home';
import Login from './Pages/Login';

import './App.css';
import ContextA from './Asset/Context';


function AppIn() {

  const driver = useContext(ContextA);


  return (
    <>
      <Header />
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        border: 1,
        borderColor: 'red',
        height: '100%'
      }}>
        {driver.sideBarOpen &&
          <Box sx={{ flexGrow: '0', height: '100%', border: 1, borderColor: 'green' }}>
            <Sidebar />
          </Box>
        }
        <Box sx={{ flexGrow: '100', border: 1, borderColor: 'blue' }}>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </Box>
    </>
  );
}

export default AppIn;
