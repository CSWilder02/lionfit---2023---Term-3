import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
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
        setNavbarBackground('#0F0F0F');
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
          <Nav.Link style={{ color: 'white', marginLeft: '430px', paddingTop: '20px', textDecoration: 'none' }} href="/">
            HOME
          </Nav.Link>
          <Nav.Link style={{ color: 'white', marginLeft: '90px', paddingTop: '20px', textDecoration: 'none' }} href="/product">
            PRODUCT
          </Nav.Link>
          <Nav.Link style={{ color: 'white', marginLeft: '90px', paddingTop: '20px', textDecoration: 'none' }} href="/information">
            ABOUT
          </Nav.Link>
          <Nav.Link style={{ color: 'white', marginLeft: '90px', paddingTop: '20px', textDecoration: 'none' }} href="/form">
            ADMIN
          </Nav.Link>
          <Nav.Link style={{ color: 'white', marginLeft: '90px', paddingTop: '20px', textDecoration: 'none' }} href="/">
          <img
              src={insta}
              alt="Time"
              style={{ width: '25px', height: '25px', marginRight: '5px' }}
            />
          </Nav.Link>
          <Nav.Link style={{ color: 'white', marginLeft: '-20px', paddingTop: '0px', textDecoration: 'none' }} href="/">
          <Dropdown>
        <Dropdown.Toggle variant="link" style={{ color: 'white', marginLeft: '20px', paddingTop: '20px', textDecoration: 'none', backgroundColor: 'transparent', border: 'none' }}>
          <img
            src={profile}
            alt="Time"
            style={{ width: '25px', height: '25px', marginRight: '5px' }}
          />
        </Dropdown.Toggle>

        <Dropdown.Menu style={{marginLeft: '-80px', marginTop: '10px', textAlign: 'center'}}>
          <Dropdown.Item onClick={() => handleOptionSelect('Option 1')}>Logout</Dropdown.Item>
          <Dropdown.Item onClick={() => handleOptionSelect('Option 2')}>SignIn</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;
