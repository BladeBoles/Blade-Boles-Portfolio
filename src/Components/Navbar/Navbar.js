import React, {useState} from 'react'
import './Navbar.css'
import { NavHashLink as NavLink } from 'react-router-hash-link';

export default function Navbar() {
  
  return (
    
    <nav className="navbar">
      
      <ul className="nav-ul">
        <li className="nav-li">
          <NavLink exact to="/" className="nav-anchor" activeClassName="selected" >
            Home
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink exact to="/#about" activeClassName="selected" className="nav-anchor">
            Bio
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink exact to="/#projects" activeClassName="selected" className="nav-anchor">
            Projects
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink exact to="/#contact" activeClassName="selected" className="nav-anchor">
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
