import React, {useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import LoggedContext from '../context/LoggedContext'
import userContext from '../context/userContext'

function Layouts() {
  const [isLogged, setIsLogged] = useState(false)
  const [userLogged, setUserLogged] = useState({})
  console.log('USER: ', userLogged, 'LOG STATE: ', isLogged);
  
  const storeToken = localStorage.getItem('token')
  const userLSLogged = JSON.parse(localStorage.getItem('userLogged'))

  useEffect(() => {
    setUserLogged(userLSLogged)
    if (!storeToken) {
    setIsLogged(false)
    } else {
      setIsLogged(true)
    }
  }, [])

  return (
    <LoggedContext.Provider value={[isLogged, setIsLogged]}>
      <userContext.Provider value={[userLogged, setUserLogged]}>
        <Header/>
        <Outlet/>
        {/* <Footer /> */}
      </userContext.Provider>
    </LoggedContext.Provider>
  )
}

export default Layouts