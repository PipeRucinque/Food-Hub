import React, {useState, useContext} from 'react'
import { Form, Button, Offcanvas} from 'react-bootstrap/';

const styles = {
    height: 'fit-content', 
    borderRadius: '0 0 0 20px', 
    top: '56px'
}

const OffMenuLogIn = ({handleShowLogIn, showLogIn}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email || !password) {
            alert('Rellena todos los campos')
        }

        const loginForm = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json",
            },
            mode: 'cors',
            body: JSON.stringify({
                email: email, 
                password: password
            })
        })
        const loginformJson = await loginForm.json()
        console.log(loginForm);
        console.log(loginformJson);
        
        if (loginForm.status === 200) {
            localStorage.setItem('token', loginForm.headers.get('x-auth-token'))
            const userLogged = {
                userName: loginformJson.userName, 
                email: loginformJson.email
            }
            localStorage.setItem('userLogged', JSON.stringify(userLogged))
            setEmail("")
            setPassword("")
            handleShowLogIn(false)
            window.location.href = '/'
        } else if (loginForm.status === 401) {
            alert('Email y/o password invalidos')   
            setEmail("")
            setPassword("")
        }else if (loginForm.status === 404)
            alert('Usuario no registrado')
            setEmail("")
            setPassword("")
                
    }

    return (
        <Offcanvas 
            show={showLogIn} 
            placement="end" 
            onHide={handleShowLogIn}
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