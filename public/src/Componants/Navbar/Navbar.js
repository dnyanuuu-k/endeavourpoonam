import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import logoImage from './NEMLOGO1.png'; // Adjust the path based on the location of your image

function Navbar1() {
  return (
    <div>
      <Navbar bg="light" expand="lg" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logoImage} className='w-100 logo' alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/" className='nav-link1'>Home</Nav.Link>
              <Nav.Link href="/project" className='nav-link1'>Project</Nav.Link>
              <Nav.Link href="/plan" className='nav-link1'>Plans</Nav.Link>
              <Nav.Link href="./blog" className='nav-link1'>Blog</Nav.Link>
              <Nav.Link href="/contact" className='nav-link1'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar1;
