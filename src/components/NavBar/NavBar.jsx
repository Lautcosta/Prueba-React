import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (

  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Coder Crypto</Navbar.Brand>
    <Link to='/'>Home</Link>
    <Link to='/cart'><CartWidget/></Link>  
    <Nav className="me-auto">
      
      <Link to='/categoria/mouse'>Mouses</Link>
      
      <Link to='/categoria/teclado'>Teclados</Link>
    </Nav>
    </Container>
  </Navbar>

    )
}

export default NavBar
