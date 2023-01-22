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

    const handleLogOut = async (e) => {
        if (window.confirm('Te vas?.. que no te gusto?') === true) {
            localStorage.removeItem('userLogged')
            localStorage.removeItem('token')
            window.location.href = '/'
        } else {
            handleShowLogOut(false)
        }
    }

    const handleDeleteAccount = async (e) => {

        if (window.confirm('NOOO.. nos abandonas?') === false) {
            return handleShowLogOut(false)
        } else {
            const deleteUser = await fetch('http://localhost:5000/deleteuser', {
                method: 'POST',
                headers: { 
                    "Content-Type": "application/json",
                    "x-auth-token": localStorage.getItem('token')
                },
                mode: 'cors',
                body: JSON.stringify({
                    email: userLogged.email, 
                })
            })
            
            if (deleteUser.status === 200) {
                localStorage.removeItem('token')
                localStorage.removeItem('userLogged')
                alert('A la final que ni te queriamos!!!')
                handleShowLogOut(false)
                window.location.href = '/'
            } else {
                alert('Algo raro paso..')
            }
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