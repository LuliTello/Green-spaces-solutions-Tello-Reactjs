import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from '../assets/logo.svg';
import CartWidget from './CartWidget';
import './Navbar.css';

function BasicExample() {
  return (
    <Navbar style={{backgroundImage: "linear-gradient(to right, rgb(9, 99, 39), rgb(64, 235, 73))"}} expand="lg">
      <Container>
      <a className="click-logo" href="./index.html">
            <img style={{width:'12rem' }} className="nabvar__logo" src={logo} alt="logonavbar"/>
            </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{color:"#000", fontWeight:"bold"}} href="#home">Inicio</Nav.Link>
            <NavDropdown style={{color:"#000", fontWeight:"bold"}} title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/4.1">Fertilizantes</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.2">
                Herbicidas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/4.3">Insecticidas</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.4">Semillas</NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link style={{color:"#000", fontWeight:"bold"}} href="#link">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <DropdownButton variant="dark" id="dropdown-item-button" title="Login" style={{marginRight:"3rem"}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Usuario" />
        <Form.Control type="password" placeholder="Contraseña" />
        <Button variant="success" type="submit" className='btn-login'>
        Submit
        </Button>
        </Form.Group>
        </DropdownButton>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default BasicExample;