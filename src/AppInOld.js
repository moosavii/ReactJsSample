import { useState, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Box, Container } from '@mui/material';

import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

import NotFound from './Pages/NotFound';
import Home from './Pages/Home';
import Login from './Pages/Login';

import './App.css';
import ContextA from './Util/Context';


function AppIn() {

  const driver = useContext(ContextA);


  return (
    <>
      <Header sx={{ zIndex: 90000 }} />

      <Sidebar sx={{ height : "calc(100% - 100px)" , top : "100px" }} />
      <Box sx={{ border: 1, borderColor: 'blue',  marginLeft: driver.sideBarOpen  ? "150px" : "0px" }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </>
  );
}

export default AppIn;
