import React from 'react'
import './Projects.css'

export default function Project2() {
  return (
    <section className="app2">

      <a href="https://github.com/thinkful-ei-jaguar/Blade-bookmarks-app" className="quiz-image-container">
        <img className="quiz-image" src="../../assets/quiz-app-portrait.png" alt="A screenshot of my bookmarks app" />
      </a>

      <ul className="app2-list">
        
        <li>
          <span className="keyword">Title:</span> 
          Jaguar Quiz App
        </li>

        <li>
          <span className="keyword">Description:</span>
          A simple multiple-choice quiz app that tests the user’s knowledge of jaguar trivia.  
          Written as JS practice and intended for anyone who wants to test their jaguar knowledge.
        </li>

        <li>
          <span className="keyword">Technologies:</span> 
          HTML5, CSS3, vanilla JavaScript
        </li>

        <li>
          <span className="keyword">Live App: </span>
          <a href="https://thinkful-ei-jaguar.github.io/quiz-app-project-BladeJT" alt="link to live app" className="repo-links2">
            Check it out
          </a> 
        </li>

        <li>
          <span className="keyword">GitHub Repo: </span>
          <a href="https://github.com/thinkful-ei-jaguar/quiz-app-project-BladeJT" alt="link to app repo" className="repo-links2">
            See the code
          </a>
        </li>

      </ul>
    </section>
  )
}
