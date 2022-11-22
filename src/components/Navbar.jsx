import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.svg';
import CartWidget from './CartWidget';
import '../css/Navbar.css';
import {Link} from 'react-router-dom';


function Nabvar() {

  
  return (
    <Navbar style={{backgroundImage: "linear-gradient(to right, rgb(27, 136, 41), rgb(52, 192, 71))"}} expand="lg">
      <Container>
      <Link className="click-logo" to="/">
        <img style={{width:'12rem' }} className="nabvar__logo" src={logo} alt="logonavbar"/>
      </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link style={{ color:'#000',fontWeight:'bold'}} className='link-inicio' to="/">Inicio</Link>
            <NavDropdown className='link-productos'  title="Productos" id="basic-nav-dropdown">
              <Link className='link-categoria' to="/category/fertilizantes">Fertilizantes</Link>
              <Link className='link-categoria' to="/category/herbicidas">Herbicidas</Link>
              <Link className='link-categoria' to="/category/insecticidas">Insecticidas</Link>
            </NavDropdown>
            <Link style={{ color:'#000',fontWeight:'bold'}} className='link-checkout' to="/checkout">Checkout</Link>
            <Link style={{ color:'#000',fontWeight:'bold'}} className='link-contacto' to="/contacto">Contacto</Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="outline-dark" style={{marginRight:"3rem"}}>Login</Button> 
        <CartWidget/>
        
      </Container>
    </Navbar>
  );
}

export default Nabvar;