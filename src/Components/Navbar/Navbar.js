import React, { useState } from 'react'
import './Navbar.css'
// import { NavLink } from 'react-router-dom'
import { HashLink as NavLink } from 'react-router-hash-link';

export default function Navbar() {
  const [underlined, setUnderlined] = useState("Home")
  return (
    
    <nav className="navbar">
      
      <ul className="nav-ul">
        <li className="nav-li">
          <NavLink 
            
            smooth 
            to="/#home" 
            onClick={() => setUnderlined("Home")}
            className={`nav-anchor ${underlined === "Home" ? "active" : ""}`}>
            Home
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink 
            
            smooth 
            to="/#about" 
            onClick={() => {setUnderlined("About")}}
            className={`nav-anchor ${underlined === "About" ? "active" : ""}`}>
            Bio
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink 
            
            smooth 
            to="/#projects" 
            onClick={() => {setUnderlined("Projects")}}
            className={`nav-anchor ${underlined === "Projects" ? "active" : ""}`}>
            Projects
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink 
            
            smooth 
            to="/#contact" 
            onClick={() => {setUnderlined("Contact")}}
            className={`nav-anchor ${underlined === "Contact" ? "active" : ""}`}>
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
