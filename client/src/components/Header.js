import React, {useState, useEffect, useContext} from 'react'
import LoggedContext from '../context/LoggedContext';
import {Container, Form, Nav, Navbar, NavDropdown, Button, Offcanvas} from 'react-bootstrap/';
import { NavLink } from "react-router-dom";
import OffMenuLogIn from './OffMenuLogIn';
import OffMenuLogOut from './OffMenuLogOut';

const styles = {
  color: "white",
}

const Header = () => {
  const storeLogged = localStorage.getItem('storeLogged')
  
  const [isLogged, setIsLogged] = useContext(LoggedContext)

  const [showLogIn, setShowLogIn] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false);

  useEffect(() => {
    if (storeLogged === 'isLogged') {
    setIsLogged(true)
    } else {
      setIsLogged(false)
    }
  }, [])

  const handleShowLogIn = () => {
    if (showLogIn) {
      setShowLogIn(false)
    } else {
      setShowLogIn(true)
    }
  }
  const handleShowLogOut = () => {
    if (showLogOut) {
      setShowLogOut(false)
    } else {
      setShowLogOut(true)
    }
  }

  return (
    <>
        <Navbar key="md" bg="dark" expand="md" className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/" style={styles}>Logo Food_Hub</Navbar.Brand>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink className="nav-link" to="/map" style={styles}>Map</NavLink>
              <NavLink className="nav-link" to="/categories" style={styles}>Categories</NavLink>
              {!isLogged 
                ? <NavLink className="nav-link" to="/register" style={styles}>Register</NavLink>
                : <NavLink className="nav-link" to="/favorites" style={styles}>Favorites</NavLink>
              }
              {!isLogged 
                ? <NavLink className="nav-link" onClick={handleShowLogIn} style={styles}>Log In</NavLink>
                : <NavLink className="nav-link" onClick={handleShowLogOut} style={styles}>Log Out</NavLink>
              }
              {showLogIn ? <OffMenuLogIn handleShowLogIn={handleShowLogIn} showLogIn={showLogIn}/> : null}
              {showLogOut ? <OffMenuLogOut handleShowLogOut={handleShowLogOut} showLogOut={showLogOut}/> : null}

            </Nav>
          </Container>
        </Navbar>
    </>
  )
}

export default Header
