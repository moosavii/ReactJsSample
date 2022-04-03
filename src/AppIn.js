import {useContext , useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import ContextA from './Util/Context';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Tickets from './Pages/Tickets';
import Users from './Pages/Users';

import Login from './Pages/Login';
import NotFound2 from './Pages/NotFound2';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';



export default function AppIn() {

  const driver = useContext(ContextA);
  const [sideBarOpen, setSideBarOpen] = useState(true);

  const handleLogout = () => {
    driver.setIsAth(false);
  };

  const toggleDrawer = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header sideBarOpen={sideBarOpen} toggleDrawer={toggleDrawer} handleLogout={handleLogout} />
        <SideBar sideBarOpen={sideBarOpen} />

        <Box
          component="main"
          sx={{
            // height: '100vh',
            overflow: 'auto',
            marginTop: "65px",
            height: 'calc(100vh - 65px)',
            width: '100%',

          }}
        >
          <Routes>
            {/* نام کمپانی قبل از لاگین مهم است 
          بعد از لاگین در توکن است
          */}
            <Route exact path="/" element={<Tickets />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<NotFound2 />} />
          </Routes >

        </Box>
      </Box >








  );
}
