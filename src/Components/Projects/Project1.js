import React from 'react'
import './Projects.css'


export default function Project1() {
  return (
    <section className="app1">
      <img width="350" src="/assets/LLScreenshot.png" className="bookmarks-image"  alt="A screenshot of my bookmarks app" />
      <ul className="app1-list">

        <li>
          <span className="keyword">Title:</span> 
          Lexical Library
        </li>
      
        <li>
          <span className="keyword">Description:</span> 
          An app for cataloging the user’s reading habits.  Created for anyone who wants a simple and unrestricted way to set and track reading goals.
        </li>

        <li>
          <span className="keyword">Technologies:</span> 
          HTML5, CSS3, ReactJS, NodeJS, PostgreSQL
        </li>

        <li>
          <span className="keyword">Live App: </span>
          <a href ="https://thinkful-ei-jaguar.github.io/Blade-bookmarks-app/dist/" alt="link to live app" className="repo-links">
            Check it out
          </a> 
        </li>

        <li>
          <span className="keyword">GitHub Repo: </span>
          <a href = "https://github.com/thinkful-ei-jaguar/Blade-bookmarks-app" alt="link to app repo" className="repo-links">
            See the code
          </a>
        </li>

      </ul>
    </section>
  )
}
