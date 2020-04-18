import React from "react"
import './Landing.css'

export default function Landing() {
  return (
    <header role="banner" className="landing">
      <div className="headers-div">
        <h1>Hello, World!</h1> 

        <h2>
          My name is  
          <span className="red-span"> Blade</span>.
        </h2>

        <h3>
          I develop software and live in the Denver area.  I excel at seeing the big picture, and play very well with 
          <span> full stack JavaScript</span>.
        </h3>
      </div>

      <div className="header-buttons">
        <a href="/#projects">
        <button className="projects-button landing-button">
          View My Creations
        </button>
        </a>
        
        
      </div>

    </header>
  )
}
