import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.svg';
import CartWidget from './CartWidget';
import './Navbar.css';

function Nabvar() {
  return (
    <Navbar style={{backgroundImage: "linear-gradient(to right, rgb(9, 99, 39), rgb(52, 187, 59))"}} expand="lg">
      <Container>
      <a className="click-logo" href="./index.html">
        <img style={{width:'12rem' }} className="nabvar__logo" src={logo} alt="logonavbar"/>
      </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='link-inicio' href="https://www.google.com/">Inicio</Nav.Link>
            <NavDropdown className='link-productos'  title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Fertilizantes</NavDropdown.Item>
              <NavDropdown.Item href="#">Herbicidas</NavDropdown.Item>
              <NavDropdown.Item href="#">Insecticidas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='link-contacto' href="https://www.google.com/">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="outline-dark" style={{marginRight:"3rem"}}>Login</Button> 
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default Nabvar;