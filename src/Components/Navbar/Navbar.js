import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <div>
      <FontAwesomeIcon icon={faBars} />
      <ul className="nav-ul">
        <li className="nav-li">
          <a className="nav-anchor" href="#Home">
            Home
          </a>
        </li>
        <li className="nav-li">
          <a className="nav-anchor" href="#About">
            Bio
          </a>
        </li>
        <li className="nav-li">
          <a className="nav-anchor" href="#Projects">
            Projects
          </a>
        </li>
        <li className="nav-li">
          <a className="nav-anchor" href="#Contact">
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  )
}
