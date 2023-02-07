import React from 'react'
import "./NavBar.css"
import pickboxLogo from "../../Assets/images/pickbox-logo.png"

const NavBar = () => {
  return (
    <div className='navbar-container'>
        <div className='pickbox-logo'>
            <img src={pickboxLogo} alt="Pickbox Logo" />
        </div>
        <div className='nav-list'>
            <ul>
                <li>Home</li>
                <li>Tracking</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>

        </div>
    </div>
  )
}

export default NavBar