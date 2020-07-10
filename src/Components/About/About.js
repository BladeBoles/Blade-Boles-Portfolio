import React from 'react'
import './About.css'
export default function About() {
  return (
    
    <section className="about-me" id="about">
      <div className="blue-div"></div>
      <h4 className="about-header">About Me</h4>

      <div className="about-section">
        <img className="my-picture" width="250" src="/assets/headshot.jpg" alt="A black and white outdoor headshot of me" />

        <div className="about-paragraphs">
          <p className="about-me-paragraph">
            I recently graduated from Thinkful’s Engineering Immersion program.
            Learning new things always excites me and I can't wait to see 
            what I will learn while working with my next professional
            development team.  I am drawn to development because I see it 
            as the ultimate marriage of logic and creativity.
          </p>

          <p className="about-me-paragraph">
            When I’m not writing code I’m gaming, reading, 
            adventuring, thinking about big ideas, 
            or struggling to ride a snowboard.  
            I believe that a sense of humor and a sense of purpose 
            are two of the most important things a person can have in life.  
            A bit of an idealist, I spend a lot of time learning
            about how the STEM fields can make our world a better place.
          </p>
        </div>
      </div>

    </section>
    
  )
}
