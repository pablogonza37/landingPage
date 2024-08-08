import { Container, Nav, Navbar } from 'react-bootstrap';

const Navegacion = () => {
    return (
        <Navbar expand="lg" data-bs-theme="light" className='border border-bottom shadow nav'>
          
        <Container>
          <Navbar.Brand href="#home">Landing Page</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='link'>Inicio</Nav.Link>
            <Nav.Link href="#features" className='link'>Productos</Nav.Link>
            <Nav.Link href="#pricing" className='link'>Contacto</Nav.Link>
            
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navegacion;