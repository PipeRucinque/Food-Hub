import React from 'react'
import { Button, Offcanvas} from 'react-bootstrap/';

const styles = {
    height: 'fit-content', 
    borderRadius: '0 0 0 20px', 
    top: '56px'
}

const OffMenuLogOut = ({handleShowLogOut, showLogOut}) => {
    const handleLogOut = async (e) => {
        localStorage.setItem('storeLogged', 'isNotLogged')
        window.location.href = '/'
    }
    const handleDeleteAccount = async (e) => {
        alert('Aun no hace nada, pero lo hará!!!')
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