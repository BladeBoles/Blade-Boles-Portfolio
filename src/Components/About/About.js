import React from 'react'
import './About.css'
export default function About() {
  return (
    
    <section className="about-me">
      <h4 className="about-header">About Me</h4>

      <img src="../../assets/headshot.jpg" alt="A black and white outdoor headshot of me" />

      <div className="about-paragraphs">
        <p className="about-me-paragraph">
          I am currently leveling up my development skills full time in Thinkful’s Engneering Immersion program.  Learning new things never ceases to excite me and I can't wait to see what my peers at my first development job will have to teach me.  I am drawn to development because I see it as the ultimate marriage of logic and creativity.
        </p>

        <p className="about-me-paragraph">
          When I’m not writing code I’m gaming, reading, adventuring, or struggling to ride a snowboard.  I believe that a sense of humor and a sense of purpose are two of the most important things a person can have.  I left a career in chemistry because the roadblocks to achieving the latter were too arbitrary.
        </p>
      </div>

    </section>
    
  )
}
