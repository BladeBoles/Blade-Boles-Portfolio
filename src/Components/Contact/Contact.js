import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <footer className="footer" id="contact">
      <div className="blue-div"></div>
      <h4 className="footer-header">Like what you see?</h4>
      <h4 className="contact-header">Contact me:</h4>    

      <p className="email-paragraph">
        <span className="keyword2">Email:</span> 
        <a href="mailto:bladerboles@gmail.com" className="email">bladerboles@gmail.com</a>
      </p>

      <ul className="footer-contact">  
        <li>
          <a className="footer-items" target="_blank" href="https://github.com/BladeBoles">
            <img className="social-logo" width="64" src="/assets/GitHub.png" alt="GitHub Logo" />
          </a>
        </li>

        <li>
          <a className="footer-items" target="_blank" href="https://www.linkedin.com/in/blade-boles">
            <img className="social-logo" width="64" src="/assets/LinkedIn.png" alt="LinkedIn Logo" />
          </a>
        </li>
      </ul>

    </footer>
  )
}
