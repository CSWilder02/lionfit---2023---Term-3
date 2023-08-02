import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from './logo.png';

import insta from '../Pages/Images/instagram (8).png';
import profile from '../Pages/Images/user (11).png';



function BasicNavbar() {
  const [navbarBackground, setNavbarBackground] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const navbarHeight = 100; // Adjust this value according to your navbar's height
      const breakpoint = 100; // Adjust this value to set when the background color should change

      if (currentScrollY > breakpoint) {
        setNavbarBackground('#1E1E1E');
      } else {
        setNavbarBackground('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      style={{
        position: 'fixed',
        width: '100%',
        height: '120px',
        padding: '15px',
        backgroundColor: navbarBackground,
      }}
      variant={navbarBackground === 'transparent' ? 'light' : 'dark'}
    >
      <Container>
        <Navbar.Brand href="/">
          <img style={{ width: '80px', marginLeft: '20px' }} src={logo} alt="Logo" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link style={{ color: 'white', marginLeft: '450px', textDecoration: 'none' }} href="/">
            HOME
          </Nav.Link>
          <Nav.Link style={{ color: 'white', marginLeft: '90px', textDecoration: 'none' }} href="/information">
            ABOUT
          </Nav.Link>
          <Nav.Link style={{ color: 'white', marginLeft: '90px', textDecoration: 'none' }} href="/product">
            CHECKOUT
          </Nav.Link>
          <Nav.Link style={{ color: 'white', marginLeft: '90px', textDecoration: 'none' }} href="/">
          <img
              src={insta}
              alt="Time"
              style={{ width: '25px', height: '25px', marginRight: '5px' }}
            />
          </Nav.Link>
          <Nav.Link style={{ color: 'white', marginLeft: '20px', textDecoration: 'none' }} href="/">
          <img
              src={profile}
              alt="Time"
              style={{ width: '25px', height: '25px', marginRight: '5px' }}
            />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;
