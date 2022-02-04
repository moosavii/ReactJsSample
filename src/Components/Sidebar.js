import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddBoxOutlined from '@mui/icons-material/AddBoxOutlined';

import StickyNote2Outlined from '@mui/icons-material/StickyNote2Outlined';
import Drafts from '@mui/icons-material/Drafts';
import Telegram from '@mui/icons-material/Telegram';

import ContextA from '../Asset/Context';

const drawerWidth = 240;

export default function SideBar() {

    const driver = React.useContext(ContextA);

    return (
        <Box sx={{ border: 1, borderColor: 'gray', height: '100%' }} >
            <List >
                <ListItem button key={"new"}>
                    <ListItemIcon sx={{flexGrow:"0"}}>
                        <AddBoxOutlined sx={{flexGrow:"0"}} />
                    </ListItemIcon>
                    <ListItemText primary={"جدید"} sx={{flexGrow:"100"}}/>
                </ListItem>
                <Divider />

                <ListItem button key={"private"}>
                    <ListItemIcon>
                        <StickyNote2Outlined />
                    </ListItemIcon>
                    <ListItemText primary={"شخصی"} />
                </ListItem>
                <Divider />

                <ListItem button key={"inbox"}>
                    <ListItemIcon>
                        <Drafts />
                    </ListItemIcon>
                    <ListItemText primary={"دریافتی"} />
                </ListItem>
                <Divider />

                <ListItem button key={"sent"}>
                    <ListItemIcon>
                        <Telegram />
                    </ListItemIcon>
                    <ListItemText primary={"ارسالی"} />
                </ListItem>
            </List>

        </Box>

    );
}
