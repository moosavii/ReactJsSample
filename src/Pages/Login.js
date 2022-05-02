import { useContext, useEffect } from 'react';
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
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';




function Login() {

  const driver = useContext(ContextA)
  const navigate = useNavigate();
  let pathParams = useParams();


  const handleSubmit = (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let loginData = {
      company: pathParams.company,
      username: data.get('username'),
      password: data.get('password')
    }
    console.log(loginData);

    axios.post('https://localhost:44382/api/login', loginData)
      .then(function (response) {
        console.log({ response: response })
        driver.setAccessToken(response.data.accessToken)
        console.log({ accessToken: driver.accessToken })
        
        driver.setFullName(response.data.fullName)
        console.log({ fullName: driver.fullName })
        

        sessionStorage.setItem("accessToken", response.data.accessToken);
        sessionStorage.setItem("fullName", response.data.fullname);

        console.log(sessionStorage)

        


      })
      .catch(function (error) {
        console.log(error);
        navigate("/error")
      })
      .then(
        function () {
          navigate("/")
        }
      )
    console.log("log after axios")


  };

  useEffect(() => {
    console.log("login use effect")
    driver.setAccessToken("")
    driver.setFullName("")
    sessionStorage.clear()
    
  }, []);//olny one time



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          ردیف
        </Typography>
        <Typography component="h1" variant="h5">
          {pathParams.company}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="نام کاربری"
            name="username"
            autoComplete="username"
            autoFocus
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="رمز"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, fontSize: 18 }}
          >
            ورود
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                <Typography component="h1" variant="caption">
                  رمز را فراموش کرده ام

                </Typography>

              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;