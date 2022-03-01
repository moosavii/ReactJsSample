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
import SimpleDialogDemo from './SimpleDialog'
import { Box, TextField } from '@mui/material';



export default function Ticket({ owner, dateCreated, imgpath, note, action }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 290, minWidth: 290, margin: 1 , display :"flex"  ,flexDirection: 'column',}}>
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
      <CardContent sx ={{flexGrow :"100"}}>
        {action == "new" ?
          <TextField
            // id="outlined-multiline-static"
            disabled
            label="یادداشت"
            multiline
            rows={10}
            value={note}
          // defaultValue="Default Value"
          />
          :
          <Typography variant="body2" color="text.secondary">
            {note}
          </Typography>}
      </CardContent>

      <CardActions >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            aaaa
          </Typography>

          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>

    </Card>

  );
}
