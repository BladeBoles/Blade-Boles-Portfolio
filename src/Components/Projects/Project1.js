import React from 'react'
import './Projects.css'


export default function Project1() {
  return (
    <section className="app1">

      <a href="https://thinkful-ei-jaguar.github.io/Blade-bookmarks-app/dist/" className="bookmarks-image-container">
        <img className="bookmarks-image"  alt="A screenshot of my bookmarks app" src="../../assets/bookmark-app-portrait.png" />
      </a>

      <ul className="app1-list">

        <li>
          <span className="keyword">Title:</span> 
          My Bookmarks
        </li>

        <li>
          <span className="keyword">Description:</span> 
          A humble app that allows a user to add and delete bookmarks.  Bookmarks can be filtered by rating. Built as JS and jQuery practice 
          and intended for anyone who wants a non-browser dependent way to store bookmarks.
        </li>

        <li>
          <span className="keyword">Technologies:</span> 
          HTML5, CSS3, JavaScript, jQuery
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
