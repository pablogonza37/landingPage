import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";

const Navegacion = () => {
    return (
        <Navbar expand="lg" data-bs-theme="light" className='border border-bottom shadow nav'>
          
        <Container>
          <Navbar.Brand as={Link} to="/">Landing Page</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <NavLink href="#home" className='link' to="/">Inicio</NavLink>
            <NavLink href="#features" className='link' to="/productos">Productos</NavLink>
            <NavLink href="#pricing" className='link' to="/contacto">Contacto</NavLink>
            
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navegacion;