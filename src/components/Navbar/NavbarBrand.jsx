import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { useReduceLogin } from '../../stores';
import { useEffect, useState } from 'react';
import Login from '../../pages/Login/Login';
import { ButtonType } from '../Button';
import { Logout } from '../Logout';

export const NavbarBrand = () => {
  const [showComponent, setShowComponent] = useState(false)
  const [user, setUser] = useState(null)
  const { isLogin } = useReduceLogin()

  const handleClick = () => {
    setShowComponent(!showComponent)
  }

  useEffect(() => {
    const userFromStorage = localStorage.getItem('user');
    if (userFromStorage) {
      setUser(JSON.parse(userFromStorage))
    }
  },[isLogin])

  return (
    <>
      <Navbar 
        expand="lg" 
        sticky="top"
        className="bg-dark bg-gradient bg-opacity-85" 
      >
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
          <Navbar.Brand className='text-white me-4'>
            {
              isLogin
                ? 'Bienvenido, ' + user?.name
                : ''
            }
          </Navbar.Brand>
          {
            isLogin
              ? <Logout />
              : <ButtonType 
                  types='primary' 
                  handleClick={handleClick} 
                  className="btn btn-primary"
                >
                  Login
                </ButtonType>
          }
        </Container>
      </Navbar>

      {
        showComponent && (
          <Login />
        )
      }
    </>
  )
}