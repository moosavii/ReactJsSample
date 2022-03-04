import * as React from 'react';
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
import AccountCircle from '@mui/icons-material/AccountCircle';
import ContextA from './Util/Context';
import Home from './Pages/Home'
import MoreVert from '@mui/icons-material/MoreVert';
import SimpleDialog from './Components/SimpleDialog';
import Header from './Components/Header';
import SideBar from './Components/SideBar';


export default function AppIn() {

  const driver = React.useContext(ContextA);
  const [sideBarOpen, setSideBarOpen] = React.useState(true);

  const handleLogout = () => {
    driver.setIsAuthAndLocalStorege(false);
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
          marginTop : "65px",
          height: 'calc(100vh - 65px)',
          width: '100%',

        }}
      >
        {/* <Container  sx={{maxWidth : "100% !important" , marginTop : "50px" }}> */}
          <Home />
        {/* </Container> */}
      </Box>
    </Box>








  );
}
