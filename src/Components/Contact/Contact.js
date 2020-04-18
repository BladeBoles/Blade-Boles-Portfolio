import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <footer className="footer" id="contact">
      <div className="blue-div"></div>
      <h4>Like what you see?</h4>
      <h4 className="contact-header">Contact me:</h4>    

      <p className="email-paragraph">
        <span className="keyword">Email:</span> 
        bladerboles@gmail.com
      </p>

      <ul className="footer-contact">  
        <li>
          <a className="footer-items" href="https://github.com/BladeBoles">
            <img width="100" src="/assets/github-mark.png" alt="GitHub Logo" />
          </a>
        </li>

        <li>
          <a className="footer-items" href="https://www.linkedin.com/in/blade-boles">
            <img width="100" src="/assets/linkedin.png" alt="LinkedIn Logo" />
          </a>
        </li>
      </ul>

    </footer>
  )
}
