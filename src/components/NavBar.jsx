import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
    return (

  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Coder Crypto</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">White List</Nav.Link>
      <Nav.Link href="#pricing">Social</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

    )
}

export default NavBar
