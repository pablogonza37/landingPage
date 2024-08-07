import { Container, Nav, Navbar } from 'react-bootstrap';

const Navegacion = () => {
    return (
        <Navbar bg="light" data-bs-theme="light" className='py-4 border border-bottom-1'>
        <Container>
          <Navbar.Brand href="#home">Landing Page</Navbar.Brand>
          <Nav className="me-0">
            <Nav.Link href="#home" className='link'>Inicio</Nav.Link>
            <Nav.Link href="#features" className='link'>Productos</Nav.Link>
            <Nav.Link href="#pricing" className='link'>Contacto</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    );
};

export default Navegacion;