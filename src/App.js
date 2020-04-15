import React from 'react';
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Landing from './Components/Landing/Landing'
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects/Projects'

function App() {
  return (
    <main className='App'>
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Contact />
            
    </main>
  );
}

export default App;
