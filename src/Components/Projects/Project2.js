import React from 'react'
import './Projects.css'

export default function Project2() {
  return (
    <section className="app2">
      <div className="blue-div"></div>

      <h5 className="app1-header">Indecisio</h5>

      <div className="project-div">

        <a href="https://indecisio.now.sh/" target="_blank" rel="noopener noreferrer">
          <img width="350" src="/assets/IndecisioScreenshot.png" className="indecisio-image"  alt="A screenshot of my bookmarks app" />
        </a>
        <ul className="app2-list">
          
          <li>
            <span className="keyword2">Description:</span>
            An app that helps people find things to do for fun when they’re too 
            bored to decide.  Created during the COVID-19 outbreak and intended 
            for use by bored people around the world.  This app was created because
            everyone on the development team had experienced ennui during quarantine
            and wanted a way to help themselves and others survive lockdown boredom.
            Created by Blade Boles, Taylor Bradshaw, and William MacNeil.
          </li>

          <li>
            <span className="keyword2">Technologies:</span> 
            HTML5, CSS3, ReactJS, NodeJS, PostgreSQL
          </li>

          <li>
            <span className="keyword2">Live App: </span>
            <a href="https://indecisio.now.sh/" target="_blank" rel="noopener noreferrer" alt="link to live Indecisio app" className="repo-links2">
              Check it out
            </a> 
          </li>

          <li>
            <span className="keyword2">GitHub Client Repo: </span>
            <a href="https://github.com/thinkful-ei-jaguar/indecisio-client" alt="link to app client repo" target="_blank" rel="noopener noreferrer" className="repo-links2">
              Client
            </a>
          </li>

          <li>
            <span className="keyword2">GitHub Server Repo: </span>
            <a href="https://github.com/stronghearth/indecisio-server" alt="link to app server repo" target="_blank" rel="noopener noreferrer" className="repo-links2">
              Server
            </a>
          </li>

        </ul>
      </div>
    </section>
  )
}
