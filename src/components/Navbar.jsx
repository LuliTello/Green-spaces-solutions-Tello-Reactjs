import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.svg';
import CartWidget from './CartWidget';
import './Navbar.css';
import {Link} from 'react-router-dom';


function Nabvar() {

  
  return (
    <Navbar style={{backgroundImage: "linear-gradient(to right, rgb(9, 99, 39), rgb(52, 187, 59))"}} expand="lg">
      <Container>
      <a className="click-logo" href="/">
        <img style={{width:'12rem' }} className="nabvar__logo" src={logo} alt="logonavbar"/>
      </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='link-inicio' to="/">Inicio</Link>
            <NavDropdown className='link-productos'  title="Productos" id="basic-nav-dropdown">
              <Link to="/category/fertilizantes">Fertilizantes</Link>
              <Link to="/category/herbicidas">Herbicidas</Link>
              <Link to="/category/Insecticidas">Insecticidas</Link>
            </NavDropdown>
            <Link className='link-contacto' to="/contacto">Contacto</Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="outline-dark" style={{marginRight:"3rem"}}>Login</Button> 
        <CartWidget/>
        
      </Container>
    </Navbar>
  );
}

export default Nabvar;