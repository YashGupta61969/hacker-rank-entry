import React from 'react'
import './navbar.css'
import {useNavigate} from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    const handleLogout=()=>{
     localStorage.clear()
     navigate('/login')
    }

  return (
    <nav className='navbar'>
        <strong>Products App</strong>
        <button onClick={handleLogout}>Log Out</button>
    </nav>
  )
}

export default Navbar
