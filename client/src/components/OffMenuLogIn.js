import React, {useState} from 'react'
import { Form, Button, Offcanvas} from 'react-bootstrap/';

const styles = {
    height: 'fit-content', 
    borderRadius: '0 0 0 20px', 
    top: '56px'
}

const OffMenuLogIn = ({handleShow}) => {
    
    const [show, setShow] = useState(true);
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
        <Offcanvas 
            show={show} 
            placement="end" 
            onHide={handleShow}
            style={styles}
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
    )
}

export default OffMenuLogIn