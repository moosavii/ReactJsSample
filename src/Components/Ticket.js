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
import { Box, TextField } from '@mui/material';
import { AddComment, AddCommentOutlined, AttachEmail, AttachFile, DownloadDone, NearMeOutlined, PendingActions, RocketLaunchOutlined, Save, SaveAlt, SaveAltOutlined, SaveAs, SendOutlined, Telegram } from '@mui/icons-material';



export default function Ticket({ owner, dateCreated, imgpath, note, action , closeDialog }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 290, minWidth: 290, margin: 1 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={owner}
        subheader={dateCreated}
      />
      {imgpath &&   // image path
        <CardMedia
          component="img"
          height="194"
          image={imgpath}
          alt={imgpath}
        />}
      <CardContent >
        {action == "new" ?
          <TextField
            label="یادداشت"
            multiline
            rows={10}
            sx ={{ width : "100%"}}
          />
          :
          <Typography variant="body2" color="text.secondary">
            {note}
          </Typography>}
      </CardContent>

      <CardActions >
        <IconButton  sx={{ background: "#fbfafa" }} onClick={closeDialog}>
          <NearMeOutlined />
        </IconButton>
        <IconButton  sx={{ background: "#fbfafa" }}>
          <AttachFile />
        </IconButton>
        <IconButton  sx={{ background: "#fbfafa" }}>
          <SaveAs />
        </IconButton>
        <IconButton  sx={{ background: "#fbfafa" }}>
          <PendingActions />
        </IconButton>
        <IconButton  sx={{ background: "#fbfafa" }}>
          <AddCommentOutlined />
        </IconButton>
        <IconButton  sx={{ background: "#fbfafa" }}>
          <DownloadDone />
        </IconButton>
  
      </CardActions>
    </Card>

  );
}
