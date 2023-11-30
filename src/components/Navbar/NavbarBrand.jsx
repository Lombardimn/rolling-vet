import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

export const NavbarBrand = () => {
  return (
    <Navbar expand="lg" className="bg-dark bg-gradient bg-opacity-85">
      <LinkContainer to="/">
        <Navbar.Brand href="#home" className='text-white'>
          <img
            alt=""
            src="/src/assets/react.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          RollingVet
        </Navbar.Brand>
      </LinkContainer>
      <Navbar id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/">
            <Nav.Link className='text-white'>Inicio</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/turns">
            <Nav.Link className='text-white'>Turnos</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/products">
            <Nav.Link className='text-white'>Productos</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link className='text-white'>Contacto</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
      <Container className='justify-content-end'>
        <Navbar.Brand className='text-white me-4'>USERNAME@GMAIL.COM</Navbar.Brand>
        <Button>Login</Button>
      </Container>
    </Navbar>
  )
}