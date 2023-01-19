import React, { useState, useContext } from 'react'
import LoggedContext from '../context/LoggedContext'
import userContext from '../context/userContext'
import { Form, Button } from 'react-bootstrap'
import '../styles/Register.css'

const Register = () => {
    const [isLogged, setIsLogged] = useContext(LoggedContext)
    const [userLogged, setUserLogged] = useContext(userContext)
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [terms, setTerms] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!userName || !email || !password) {
            alert('All stages required')
        }

        const fetchForm = await fetch('http://localhost:5000/registerform', {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json",
            },
            mode: 'cors',
            body: JSON.stringify({ 
                userName: userName,
                email: email,
                password: password,
            })
        })

        const registerForm = await fetchForm.json()
        console.log(fetchForm);
        console.log(registerForm);
        if (fetchForm.status === 200) {
            alert(`Welcome ${registerForm.userName}`)
            localStorage.setItem('token', fetchForm.headers.get('x-auth-token'))
            // el setUserLogged de abajo sera mejor meterlo en el localstorage, como un objeto o cada propiedad como una clave???? 
            setUserLogged({userName: registerForm.userName, email: registerForm.email})
            window.location.href = '/'
        } else {
            localStorage.removeItem('token')
            alert('Ya te habias registrado.. LOSER!!!')
        }
        setUserName("")
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
                        name='userName' 
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)}
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
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                        type="checkbox" 
                        label="Acepto terminos y condiciones"
                        value={terms} 
                        onChange={(e) => setTerms(e.target.checked)}
                    />
                </Form.Group> */}
                {(!userName || !email || !password) 
                    ? <Button variant="outline-primary" type="submit" disabled>Log In</Button>
                    : <Button variant="primary" type="submit">Log In</Button>
                }  
            </Form>
        </div>
        );
}

export default Register