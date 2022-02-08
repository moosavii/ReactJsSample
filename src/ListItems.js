import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import AddBoxOutlined from '@mui/icons-material/AddBoxOutlined';

import StickyNote2Outlined from '@mui/icons-material/StickyNote2Outlined';
import Drafts from '@mui/icons-material/Drafts';
import Telegram from '@mui/icons-material/Telegram';
import { AccessibilityNew, Person } from '@mui/icons-material';

export const mainListItems = (
  <React.Fragment>

    <ListItem button key={"new"}>
      <ListItemIcon >
        <AddBoxOutlined  />
      </ListItemIcon>
      <ListItemText primary={"جدید"}/>
    </ListItem>

    <ListItem button key={"private"}>
      <ListItemIcon>
        <StickyNote2Outlined />
      </ListItemIcon>
      <ListItemText primary={"شخصی"} />
    </ListItem>

    <ListItem button key={"inbox"}>
      <ListItemIcon>
        <Drafts />
      </ListItemIcon>
      <ListItemText primary={"دریافتی"} />
    </ListItem>

    <ListItem button key={"sent"}>
      <ListItemIcon>
        <Telegram />
      </ListItemIcon>
      <ListItemText primary={"ارسالی"} />
    </ListItem>

    <ListItem>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="گزارشات" />
    </ListItem>



    <Divider sx={{ my: 1 }} />



    <ListItem button key={"users"}>
      <ListItemIcon>
        <Person />
      </ListItemIcon>
      <ListItemText primary={"کاربران"} />
    </ListItem>

    <ListItem button key={"groups"}>
      <ListItemIcon>
        <PeopleIcon  />
      </ListItemIcon>
      <ListItemText primary={"گروه ها"} />
    </ListItem>

    <ListItem button key={"access"}>
      <ListItemIcon>
        <AccessibilityNew />
      </ListItemIcon>
      <ListItemText primary={"دسترسی ها"} />
    </ListItem>

    <Divider sx={{ my: 1 }} />


    <ListItem button key={"users"}>
      <ListItemIcon>
        <Person />
      </ListItemIcon>
      <ListItemText primary={"کاربران"} />
    </ListItem>

    <ListItem button key={"groups"}>
      <ListItemIcon>
        <PeopleIcon  />
      </ListItemIcon>
      <ListItemText primary={"گروه ها"} />
    </ListItem>

    <ListItem button key={"access"}>
      <ListItemIcon>
        <AccessibilityNew />
      </ListItemIcon>
      <ListItemText primary={"دسترسی ها"} />
    </ListItem>

    <Divider sx={{ my: 1 }} />

  </React.Fragment>
);
