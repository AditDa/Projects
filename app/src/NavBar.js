import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Genres from './grid.js';

function NavBar() {
  const navigate = useNavigate();
  return (
    <><Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Home" id="basic-nav-dropdown" className="me-4">
              <NavDropdown.Item href="#action/3.01">Pop</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.02">Hip-Hop</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.03">Rock</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.04">Blues</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.05">Soul</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.06">Reggae</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.07">Country</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.08">Funk</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.09">Folk</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.10">Jazz</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.11">Disco</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.12">Electronic</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://youthincmag.com/hidden-gems-exploring-emerging-music-genres-in-2023">
                Upcoming Genres 2024
              </NavDropdown.Item>
              <NavDropdown.Item href="https://consequence.net/upcoming-releases/">
                Upcoming Albums 2024
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="me-4" onClick={() => navigate('Search')}>Search</Nav.Link>
            <Nav.Link href="#shazam" className="me-4">Shazam</Nav.Link>
            <Nav.Link href="#history" className="me-4">History</Nav.Link>
            <Nav.Link href="#contact-us" className="me-4">Contact Us</Nav.Link>
            <Nav.Link href="#help" className="me-4">Help</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              title={<img
                alt=""
                src="https://i.pinimg.com/originals/b6/4f/8f/b64f8fcf0e0aed9537c800eb5e9ca1ed.png"
                width="50"
                height="50"
                className="d-inline-block align-top" />}
              id="logo-dropdown"
              className="me-4"
            >
              <NavDropdown.Item href="#action/4.1">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.2">Switch Account</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.3">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/4.4">
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar><Genres /></>

  );
}

export default NavBar;