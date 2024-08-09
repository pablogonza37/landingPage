import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";
import Logo from '../../assets/logo.png'

const Navegacion = () => {
    return (
        <Navbar expand="lg" data-bs-theme="light" className='shadow nav py-4'>
          
        <Container>
          <Navbar.Brand as={Link} to="/"><img src={Logo} alt="" className="img-fluid" width={200}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler border-0"/>
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