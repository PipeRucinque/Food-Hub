import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import '../styles/Register.css'

const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [terms, setTerms] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!username || !email || !password || terms == false) {
            alert('All stages required')
        }
        setUsername("")
        setEmail("")
        setPassword("")
        setTerms(false)
    }
    
    return (
        <div className='registerForm'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="User name" 
                        name='username' 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />
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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                        type="checkbox" 
                        label="Acepto terminos y condiciones"
                        value={terms} 
                        onChange={(e) => setTerms(e.target.checked)}
                    />
                </Form.Group>
                {(!username || !email || !password) 
                    ? <Button variant="outline-primary" type="submit" disabled>Log In</Button>
                    : <Button variant="primary" type="submit">Log In</Button>
                }

                
            </Form>
        </div>
        );
}

export default Register