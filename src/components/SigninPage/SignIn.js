import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, TextField, Button, Typography, Link } from '@mui/material';
import './SignIn.css'; // Import the CSS file

const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    // If login is successful, navigate to the home page
    navigate('/');
  };

  return (
    <Grid container component="main" className="root">
      <Grid
        item
        xs={12}
        sm={6}
        md={7}
        className="image"
        style={{ backgroundImage: `url(lms/src/assets/StudentLogin.jpg)` }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100"
          color="white"
          p={5}
          flexDirection="column"
          marginTop={40}
        >
          <Typography variant="h3" className="welcome-text">Welcome to</Typography>
          <Typography variant="h4" className="portal-text">TutorQuest</Typography>
          <Typography variant="subtitle1" className="login-text">Login to access your account</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={5} className="login-container">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography component="h1" variant="h5" className="title">Login</Typography>
          <Typography component="h6" variant="subtitle1" className="subtitle">Enter your account details</Typography>
          <form className="form" noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              className="input"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              className="input"
            />
            <Link href="#" variant="body2" className="link">Forgot Password?</Link>
            <Button type="submit" fullWidth variant="contained" color="primary" className="button">Login</Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2" className="link">{"Don't have an account? Register"}</Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignIn;