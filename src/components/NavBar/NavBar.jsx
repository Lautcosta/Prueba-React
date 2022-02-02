import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import './NavBar.css';


const NavBar = () => {

  const {iconCart, cartList} =useCartContext()

  console.log(iconCart + ' esto es el cartList')

  return (

  <Navbar bg="dark" variant="dark">

    <Container>
      <Link to='/'>
        <Navbar.Brand className='linksNav'>Coder Hardware</Navbar.Brand>
      </Link>
       <Link to='/'className='linksNav'>Home</Link>
    


     <Nav className="me-auto">
      
      <Link to='/categoria/mouse' className='linksNav'>Mouses</Link>
      
      <Link to='/categoria/teclado'className='linksNav'>Teclados</Link>
     </Nav>

     <Link  className="link" exact to={'/cart' }>
        <div className="text-center">
        
        {cartList.length === 0 ?
            <><CartWidget /></>
          :
          <div>
            <span className=" text-red  iconCart ">
            {iconCart()}
            
            </span>
            <CartWidget />

          </div>
        }

        </div>

    </Link>

    </Container>

    

  </Navbar>

    )
}

export default NavBar
