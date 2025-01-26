import React from 'react'
import "./rawan2.css"
import logo from "../../../public/img/logo.png"


function Navbar() {
  return (
    
    <nav className="navbar">
        <div className="logo-container">
        <img src={logo} alt="Shining Stars Logo" className="logo" />
        </div>
        <h2>
            <span className='span1' style={{fontFamily: "Nunito"}}>Shining</span>
            <span className='span2' style={{fontFamily: "Nunito"}}>Stars</span>
            <span className='span3' style={{fontFamily: "Nunito"}}>Academy</span>
        </h2>
        <ul className='nav-links' style={{fontFamily: "Nunito"}}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Activity</a></li>
            <li><a href="#">Contact</a></li>
         </ul>   
    </nav>    
    )
}

export default Navbar