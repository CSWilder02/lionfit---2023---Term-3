import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from './logo.png';
import cart from '../Pages/Images/shopping-cart.png';
import profile from '../Pages/Images/user (11).png';


function BasicNavbar() {
  const [navbarBackground, setNavbarBackground] = useState('transparent');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const navbarHeight = 100;
      const breakpoint = 100;

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

  const handleLogout = () => {
    // Handle the logout action here (e.g., clear user session)
    // Then navigate to the login page
    navigate('/login'); // Use navigate instead of history.push
  };

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
        <Navbar.Brand as={Link} to="/">
          <img style={{ width: '80px', marginLeft: '20px' }} src={logo} alt="Logo" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" style={{ color: 'white', marginLeft: '430px', paddingTop: '20px', textDecoration: 'none' }}>
            HOME
          </Nav.Link>
          <Nav.Link as={Link} to="/product" style={{ color: 'white', marginLeft: '90px', paddingTop: '20px', textDecoration: 'none' }}>
            PRODUCT
          </Nav.Link>
          <Nav.Link as={Link} to="/information" style={{ color: 'white', marginLeft: '90px', paddingTop: '20px', textDecoration: 'none' }}>
            ABOUT
          </Nav.Link>
          <Nav.Link as={Link} to="/form" style={{ color: 'white', marginLeft: '90px', paddingTop: '20px', textDecoration: 'none' }}>
            ADMIN
          </Nav.Link>
          <Nav.Link as={Link} to="/usercart" style={{ color: 'white', marginLeft: '60px', paddingTop: '0px', textDecoration: 'none' }}>
            <img
              src={cart}
              alt="Time"
              style={{ width: '25px', height: '25px', marginRight: '5px', marginTop: '22px' }}
            />
          </Nav.Link>
          <Nav.Link style={{ color: 'white', marginLeft: '-20px', paddingTop: '0px', textDecoration: 'none' }}>
            <Dropdown>
              <Dropdown.Toggle variant="link" style={{ color: 'white', marginLeft: '40px', paddingTop: '20px', textDecoration: 'none', backgroundColor: 'transparent', border: 'none' }}>
                <img
                  src={profile}
                  alt="Time"
                  style={{ width: '25px', height: '25px', marginRight: '5px' }}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ marginLeft: '-60px', marginTop: '10px', textAlign: 'center' }}>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                {/* Add more Dropdown items as needed */}
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;

