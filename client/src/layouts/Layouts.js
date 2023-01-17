import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import LoggedContext from '../context/LoggedContext'

function Layouts() {
  const [isLogged, setIsLogged] = useState(false)
  return (
    <LoggedContext.Provider value={[isLogged, setIsLogged]}>
      <Header/>
      <Outlet/>
      {/* <Footer /> */}
    </LoggedContext.Provider>
  )
}

export default Layouts