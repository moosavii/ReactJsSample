import { useContext, useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ContextA from '../Util/Context';
import { useNavigate } from 'react-router-dom';
import { FormControlLabel, Switch } from '@mui/material';
import { PinDropSharp } from '@mui/icons-material';




function User(props) {

  const driver = useContext(ContextA)
  const navigate = useNavigate();
  const [isEnable, setIsEnable] = useState(true);


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('username'),
      password: data.get('password'),
    });
    
    props.closeDialog();

    navigate("/users")
  };

  useEffect(() => {

    console.log(props.closeDialog)
  }, []);

  return (
    <Container maxWidth="xs">


      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          size="small"

          required
          fullWidth
          id="firsname"
          label="نام "
          name="username"
          autoFocus
        />
        <TextField
          margin="normal"
          size="small"
          required
          fullWidth
          id="lastname"
          label="نام خانوادگی "
          name="lastname"
        />

        <TextField
          margin="normal"
          size="small"

          required
          fullWidth
          id="personelId"
          label="شناسه سازمانی"
          name="personelId"
        />

        <TextField
          margin="normal"
          size="small"

          required
          fullWidth
          id="userName"
          label="نام کاربری"
          name="userName"
        />

        <TextField
          margin="normal"
          size="small"

          required
          fullWidth
          name="lastname"
          label="رمز"
          type="password"
          id="password"
        />
        <TextField
          margin="normal"
          size="small"

          required
          fullWidth
          name="passwordReview"
          label="تکرار رمز"
          type="passwordReview"
          id="passwordReview"
        />
        <FormControlLabel label={isEnable ? "فعال"
          : "غیرفعال"}
          control={<Switch checked={isEnable} onChange={(event) => setIsEnable(event.target.checked)} />}
        />
        <Button
          size="small"
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, fontSize: 18 }}
        >
          ذخیره
        </Button>


      </Box>
    </Container>
  );
}

export default User;