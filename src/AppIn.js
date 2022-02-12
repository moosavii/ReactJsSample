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
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Home />
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                }}
              >
                {/* <Chart /> */}
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                }}
              >
                {/* <Deposits /> */}
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                {/* <Orders /> */}
              </Paper>
            </Grid>
          </Grid>

          {/* <SimpleDialogDemo  open = {false} /> */}
        </Container>
      </Box>
    </Box>








  );
}
