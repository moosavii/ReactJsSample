import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
// import Ticket from './Ticket'


function SimpleDialog(props) {

//   const handleClose = () => {
//     onClose(selectedValue);
//   };

//   const[open , setOpen] = React.useState(false)

//   const handleListItemClick = (value) => {
//     onClose(value);
//   };

  return (
    <Dialog  open={props.open}>
      <DialogTitle>
         ثبت تیکت جدید
          </DialogTitle>
      {/* <Ticket /> */}
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default SimpleDialog;

