import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (

  <Navbar bg="dark" variant="dark">

    <Container>
      <Link to='/'>
        <Navbar.Brand className='linksNav'>Coder Crypto</Navbar.Brand>
      </Link>
    <Link to='/'className='linksNav'>Home</Link>
    <Link to='/cart'className='linksNav'><CartWidget/></Link>  

    <Nav className="me-auto">
      
      <Link to='/categoria/mouse' className='linksNav'>Mouses</Link>
      
      <Link to='/categoria/teclado'className='linksNav'>Teclados</Link>
    </Nav>

    </Container>

  </Navbar>

    )
}

export default NavBar
