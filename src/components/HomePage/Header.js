import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Header.css';
import Logo from '../../assets/Logo.png'; // Correct import path

const Header = () => {
  const offset = -84; // Adjust this value according to your header height

  return (
    <AppBar position="fixed" className="header">
      <Toolbar className="navbar">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <div className="nav-links">
          <Button color="inherit">
            <ScrollLink to="hero-section" smooth={true} duration={500} offset={offset}>Home</ScrollLink>
          </Button>
          <Button color="inherit">
            <ScrollLink to="about-section" smooth={true} duration={500} offset={offset}>About</ScrollLink>
          </Button>
          <Button color="inherit">
            <ScrollLink to="testimonials-section" smooth={true} duration={500} offset={offset}>Testimonials</ScrollLink>
          </Button>
          <Button color="inherit">
            <ScrollLink to="contact-section" smooth={true} duration={500} offset={offset}>Contact</ScrollLink>
          </Button>
          <Button color="inherit" component={RouterLink} to="/SignIn">Login</Button>
          <Button color="inherit" component={RouterLink} to="/Register">Register</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
