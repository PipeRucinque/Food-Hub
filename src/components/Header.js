import React, {useState} from 'react'
import {Container, Form, Nav, Navbar, NavDropdown, Button, Offcanvas} from 'react-bootstrap/';
import { NavLink } from "react-router-dom";

const styles = {
  color: "white",
}

 const Header = () => {

  const [terms, setTerms] = useState(false)
  const [show, setShow] = useState(false);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
        alert('Lack of data')
    }
    setEmail("")
    setPassword("")
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
                ? <NavLink className="nav-link" onClick={() => setShow(true)} style={styles}>Log In</NavLink>
                : <NavLink className="nav-link" to="#" style={styles}>Log Out</NavLink> 
              } 
            </Nav>
            <Offcanvas 
              show={show} 
              placement="end" 
              onHide={() => setShow(false)}
              style={{height: 'fit-content', borderRadius: '0 0 0 20px', top: '56px'}}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Log In</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Your email" 
                        name='email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        name='password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="outline-success" type="submit">Log In</Button>
                </Form>
              </Offcanvas.Body>
            </Offcanvas>
          </Container>
        </Navbar>
    </>
  )
}

export default Header
