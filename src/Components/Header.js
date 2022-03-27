import {useContext , useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import MuiAppBar from '@mui/material/AppBar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ContextA from '../Util/Context';

import { MoreVert, ExitToApp, PersonOutline } from '@mui/icons-material';


function Header({ sideBarOpen, toggleDrawer }) {
  const navigate = useNavigate();
    
    const driver = useContext(ContextA);
    const handleLogout = () => { 
        driver.setIsAuthAndLocalStorege(false)
        navigate("/companies")
    
    }

    return (

        <AppBar position="absolute"  >
            <Toolbar >{/* نمایش افقی المان های داخلی */}
                <IconButton
                    edge="start"
                    color="inherit"

                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    sx={{
                        marginRight: '36px',
                        background: sideBarOpen ? "#1d7ddd" : "#aaaaee"
                    }}
                >
                    {sideBarOpen ? <MenuIcon /> : <MoreVert />}
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                    فقط خدا
                </Typography>

                <IconButton color="inherit" sx={{ background: "#1d7ddd" }}>
                    <PersonOutline />
                </IconButton>

                <IconButton color="inherit" sx={{ background: "#1d7ddd" }} onClick={handleLogout} >
                    <ExitToApp />
                </IconButton>

            </Toolbar>
        </ AppBar>
    );
}

export default Header;

