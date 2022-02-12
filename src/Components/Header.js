import MuiAppBar from '@mui/material/AppBar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { MoreVert, ExitToApp, PersonOutline } from '@mui/icons-material';


export default function Header({ sideBarOpen, toggleDrawer, handleLogout }) {

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

