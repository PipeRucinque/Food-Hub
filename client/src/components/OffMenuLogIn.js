import React, {useState} from 'react'
import { Form, Button, Offcanvas} from 'react-bootstrap/';

const styles = {
    height: 'fit-content', 
    borderRadius: '0 0 0 20px', 
    top: '56px'
}

const OffMenuLogIn = ({handleShow, show}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    console.log(email, password);

    const handleSubmit = async (e) => {
        e.preventDefault()
        // if (!email || !password) {
        //     alert('Lack of data')
        // }

        const loginForm = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({
                email: email, 
                password: password
            })
        })

        setEmail("")
        setPassword("")
        console.log('component Log In Submit button', email, password);

        console.log(await loginForm.json());

        
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
                <Form onSubmit={handleSubmit} method='post' action={`http://localhost:5000/ping`}>
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