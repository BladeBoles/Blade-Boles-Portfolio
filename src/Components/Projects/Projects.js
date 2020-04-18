import React from 'react'
import './Projects.css'
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'

export default function Project() {
  return (
    <div id="projects" className="projects-div">
      <div className="blue-div"></div>
      <h4 id="projects-header">Completed Projects:</h4>
      <Project1 />
      <Project2 />
      <Project3 />
    </div>
  )
}
