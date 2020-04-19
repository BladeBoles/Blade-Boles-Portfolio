import React from 'react'
import './Projects.css'

export default function Project3() {
  return (
    <section className="app3">
      <div className="blue-div"></div>

      <h5 className="app1-header">Weebify</h5>

      <div className="project-div">
        <a href="https://weebify.bladeboles.now.sh/" target="_blank">
          <img width="350" src="/assets/WeebifyScreenshot.png" className="indecisio-image"  alt="A screenshot of my bookmarks app" />
        </a>
        <ul className="app2-list">
          
          <li>
            <span className="keyword">Description:</span>
            A simple app that helps the user learn romanized Japanese vocabulary words via 
            the spaced repetition learning technique.  Intended for anyone interested in Japanese 
            culture or who wants to begin learning Japanese vocabulary.  
            Created by Blade Boles and Jaye Laguardia.
          </li>

          <li>
            <span className="keyword">Technologies:</span> 
            HTML5, CSS3, ReactJS, NodeJS, PostgreSQL
          </li>

          <li>
            <span className="keyword">Live App: </span>
            <a href="https://weebify.bladeboles.now.sh/" target="_blank" alt="link to live Indecisio app" className="repo-links">
              Check it out
            </a> 
          </li>

          <li>
            <span className="keyword">GitHub Client Repo: </span>
            <a href="https://github.com/thinkful-ei-jaguar/Cap-2-Client-Jaye-Blade" alt="link to app client repo" target="_blank" className="repo-links">
              Client
            </a>
          </li>

          <li>
            <span className="keyword">GitHub Server Repo: </span>
            <a href="https://github.com/thinkful-ei-jaguar/Cap-2-Server-Jaye-Blade" alt="link to app server repo" target="_blank" className="repo-links">
              Server
            </a>
          </li>

        </ul>
      </div>
    </section>
  )
}
