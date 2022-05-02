import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Input, Paper, TextField } from '@mui/material';
import { AddComment, AddCommentOutlined, AttachEmail, AttachFile, DownloadDone, Fingerprint, Image, NearMeOutlined, PendingActions, RocketLaunchOutlined, Save, SaveAlt, SaveAltOutlined, SaveAs, SendOutlined, Telegram } from '@mui/icons-material';
import axios from "axios";
import { getHeader, getUrl } from '../Util/Constants';
import ContextA from '../Util/Context';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';



export default function Ticket(props) {
  const [note1, setNote1] = React.useState("")
  const driver = React.useContext(ContextA);
  const navigate = useNavigate();
  const handleNoteChange = (e) => {
    setNote1(e.target.value)
  }

  //console.log("props.data.timecreated")

  //console.log(props.data.timecreated)

  const save = () => {
    console.log(note1)
    console.log(getUrl())
    console.log(getHeader(driver.accessToken))
    const body = {
      note: note1
    }

    axios.post(getUrl() + '/ticket/', body, getHeader(driver.accessToken))
      .then(function (response) {
        // handle success
        props.closeDialog();

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  return (
    <Card sx={{ maxWidth: 290, minWidth: 290, margin: 1 }}>
      {props.action == "new" ?
        <>
          <TextField
            label="یادداشت"
            multiline
            rows={10}
            sx={{ width: "97%" , margin : "5px"}}
            value={note1}
            onChange={handleNoteChange}
          />
        </>
        :
        <>

          <CardHeader
            avatar={
           
              <Paper elevation={1} sx={{ bgcolor: "#f0f7ff",color : "#3097ff",opacity:0.5 }}>
              {props.data.id} 
              </Paper>
            }
         
            title={props.data.firstname + " " + props.data.lastname}
            subheader={props.data.datecreated + "  " + props.data.timecreated.hours.toString().padStart(2, "0") + ":" + props.data.timecreated.minutes.toString().padStart(2, "0")}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
          />
          <CardContent >
            <Typography variant="body2" color="text.secondary">
              {props.data.note}
            </Typography>
          </CardContent>
        </>
      }
      <CardActions >
        <IconButton sx={{ background: "#fbfafa" }} onClick={props.closeDialog}>
          <NearMeOutlined />
        </IconButton>
        <IconButton sx={{ background: "#fbfafa" }}>
          <AttachFile />
        </IconButton>
        <IconButton sx={{ background: "#fbfafa" }} onClick={save}>
          <SaveAs />
        </IconButton>
        <IconButton sx={{ background: "#fbfafa" }}>
          <PendingActions />
        </IconButton>
        <IconButton sx={{ background: "#fbfafa" }}>
          <AddCommentOutlined />
        </IconButton>
        <IconButton sx={{ background: "#fbfafa" }}>
          <DownloadDone />
        </IconButton>

      </CardActions>
    </Card>

  );
}
