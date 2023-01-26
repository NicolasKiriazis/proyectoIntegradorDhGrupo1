import React from 'react'
import '../../assets/css/app.css'
import usuarioDefault from '../../assets/images/default-profile.jpg'
import '../../assets/css/Navbar.css'
import logo from '../../assets/images/gamer-house-logo.png'

const NavBar = () => {
    return (
        <>
            {/*<!-- Topbar -->*/}
            <nav className="navbar navbar-expand topbar mb-4 static-top shadow" id='navbar'>

            <img src={logo} alt='gamer house logo'/>

            </nav>
            
        

        </>
    )
}

export default NavBar