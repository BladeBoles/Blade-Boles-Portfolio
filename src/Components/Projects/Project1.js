import React from 'react'
import './Projects.css'


export default function Project1() {
  return (
    <section className="app1">

      <h5 className="app1-header">Lexical Library</h5>
      <div className="project-div">
        <a href="https://lexical-library.bladeboles.now.sh/" target="_blank" rel="noopener noreferrer">
          <img width="350" src="/assets/LLScreenshot.png" className="lexical-image" alt="A screenshot of my bookmarks app" />
        </a>
        <ul className="app1-list">
        
          <li>
            <span className="keyword">Description:</span> 
            An app for cataloging the user’s reading habits.  
            Created for anyone who wants a simple and unrestricted way to set 
            and track reading goals.  This app was created because similar apps
            that already exist are too restrictive in what media they allow to be
            cataloged and tend to sell the user's reading habits to advertisers.
          </li>

          <li>
            <span className="keyword">Technologies:</span> 
            HTML5, CSS3, ReactJS, NodeJS, PostgreSQL
          </li>

          <li>
            <span className="keyword">Live App: </span>
            <a href ="https://lexical-library.bladeboles.now.sh/" target="_blank" rel="noopener noreferrer" alt="link to live app" className="repo-links">
              Check it out
            </a> 
          </li>

          <li>
            <span className="keyword">GitHub Client Repo: </span>
            <a href = "https://github.com/BladeBoles/LL-client" target="_blank" rel="noopener noreferrer" alt="link to app client repo" className="repo-links">
              Client
            </a>
          </li>

          <li>
            <span className="keyword">GitHub Server Repo: </span>
            <a href = "https://github.com/BladeBoles/LL-server" target="_blank" rel="noopener noreferrer" alt="link to app server repo" className="repo-links">
              Server
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
