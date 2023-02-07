import React from 'react'
import "./NavBar.css"
import pickboxLogo from "../../Assets/images/pickbox-logo.png"

const NavBar = () => {
  return (
    <div className='navbar-container'>
        <div className='pickbox-logo'>
            <img src={pickboxLogo} alt="Pickbox Logo" />
        </div>
    </div>
  )
}

export default NavBar