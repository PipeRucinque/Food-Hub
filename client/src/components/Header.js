import React, {useState, useEffect, useContext} from 'react'
import LoggedContext from '../context/LoggedContext';
import useIsLogged from '../hooks/useIsLogged';
import {Container, Form, Nav, Navbar, NavDropdown, Button, Offcanvas} from 'react-bootstrap/';
import { NavLink } from "react-router-dom";
import OffMenuLogIn from './OffMenuLogIn';

const styles = {
  color: "white",
}

const Header = () => {
  const [isLogged, setIsLogged] = useContext(LoggedContext)

  //const [terms, setTerms] = useState(false) ESTADO DE BOTON LOGIN/LOGOUT QUE NO ESTOY USANDO
  const [show, setShow] = useState(false);

  const storeLogged = localStorage.getItem('storeLogged')

  useEffect(() => {
    if (storeLogged === 'isLogged') {
    setIsLogged(true)
    } else {
      setIsLogged(false)
    }
  }, [])

  const handleShow = () => {
    if (show) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  return (
    <>
        <Navbar key="md" bg="dark" expand="md" className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/" style={styles}>Logo Food_Hub</Navbar.Brand>
            {/* BOTON DE LOGIN / LOGOUT, YA NO ESTOY USANDO
            <Form.Check
              type="checkbox"
              label="< lonIn/logOut > Changer"
              value={terms}
              onChange={(e) => setTerms(e.target.checked)}
              style={{color: 'white'}}
            /> */} 
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink className="nav-link" to="/map" style={styles}>Map</NavLink>
              <NavLink className="nav-link" to="/categories" style={styles}>Categories</NavLink>
              {!isLogged 
                ? <NavLink className="nav-link" to="/register" style={styles}>Register</NavLink>
                : <NavLink className="nav-link" to="/favorites" style={styles}>Favorites</NavLink>
              }
              {!isLogged 
                ? <NavLink className="nav-link" onClick={handleShow} style={styles}>Log In</NavLink>
                : <NavLink className="nav-link" to="#" style={styles}>Log Out</NavLink>
              }
              {show ? <OffMenuLogIn handleShow={handleShow} show={show}/> : null}

            </Nav>
          </Container>
        </Navbar>
    </>
  )
}

export default Header
