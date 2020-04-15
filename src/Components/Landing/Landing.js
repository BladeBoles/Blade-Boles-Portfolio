import React from "react"
import './Landing.css'

export default function Landing() {
  return (
    <header role="banner" id="banner" className="landing">
      <div className="headers-div">
        <h1>Hello, World!</h1> 

        <h2>
          My name is  
          <span className="red-span"> Blade</span>.
        </h2>

        <h3>
          I develop software and live in the Denver area.  I'm a nice guy, but as 
          <span className="red-span"> sharp </span> 
          as my name implies.  I excel at seeing the big picture, and play very well with 
          <span className="red-span"> JavaScript</span>.
        </h3>
      </div>

      <div className="header-buttons">
        <button className="projects-button landing-button">
          View My Creations
        </button>
        
        <button className="contact-button landing-button">
          Contact Me
        </button>
      </div>

    </header>
  )
}
