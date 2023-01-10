import React, {useState} from 'react'
import {Container, Form, Nav, Navbar, NavDropdown, Button, Offcanvas} from 'react-bootstrap/';
import { NavLink } from "react-router-dom";
import OffMenuLogIn from './OffMenuLogIn';

const styles = {
  color: "white",
}

const Header = () => {

  const [terms, setTerms] = useState(false)
  const [show, setShow] = useState(false);

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
            <Form.Check 
                        type="checkbox" 
                        label="True/False"
                        value={terms} 
                        onChange={(e) => setTerms(e.target.checked)}
                        style={{color: 'white'}}
                    />
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink className="nav-link" to="/map" style={styles}>Map</NavLink>
              <NavLink className="nav-link" to="/categories" style={styles}>Categories</NavLink>
              {!terms 
                ? <NavLink className="nav-link" to="/register" style={styles}>Register</NavLink>
                : <NavLink className="nav-link" to="#" style={styles}>Favorites</NavLink>
              }
              {!terms 
                ? <NavLink className="nav-link" onClick={handleShow} style={styles}>Log In</NavLink>
                : <NavLink className="nav-link" to="#" style={styles}>Log Out</NavLink> 
              }
              {show ? <OffMenuLogIn handleShow={handleShow}/> : null}
              
            </Nav>
          </Container>
        </Navbar>
    </>
  )
}

export default Header
