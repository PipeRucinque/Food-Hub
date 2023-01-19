import React, { useContext } from 'react'
import { Button, Offcanvas} from 'react-bootstrap/';
import LoggedContext from '../context/LoggedContext';
import userContext from '../context/userContext'

const styles = {
    height: 'fit-content', 
    borderRadius: '0 0 0 20px', 
    top: '56px'
}

const OffMenuLogOut = ({handleShowLogOut, showLogOut}) => {
    const [isLogged, setIsLogged] = useContext(LoggedContext)
    const [userLogged, setUserLogged] = useContext(userContext)
    console.log('USER: ', userLogged, 'LOG STATE: ', isLogged);

    const handleLogOut = async (e) => {
        window.confirm('Te vas?.. que no te gusto?')
        localStorage.removeItem('token')
        window.location.href = '/'
    }

    const handleDeleteAccount = async (e) => {
        e.preventDefault()

        const deleteUser = await fetch('http://localhost:5000/deleteuser', {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json",
                "x-auth-token": localStorage.getItem('token')
            },
            mode: 'cors',
        })
        
        if (deleteUser.status === 200) {
            window.confirm('NOOO.. nos abandonas?')
            localStorage.removeItem('token')
            alert('A la final que ni te queriamos!!!')
            handleShowLogOut(false)
            window.location.href = '/'
        } else {
            alert('Algo raro paso..')
        }        
    }

    return (
        <Offcanvas 
            show={showLogOut} 
            placement="end" 
            onHide={handleShowLogOut}
            style={styles}
        >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Log Out</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{display:'flex', flexDirection:'column', rowGap:'10px'}}>
                    <Button variant="outline-warning" onClick={handleLogOut}>Log Out</Button>
                    <Button variant="outline-danger" onClick={handleDeleteAccount}>Delete my Account</Button>
            </Offcanvas.Body>
        </Offcanvas>
    )
    
}

export default OffMenuLogOut