import React, { useRef } from 'react';
import NavBar from './components/NavBra/NavBar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="bg-gray-950">
      <NavBar
        scrollToHome={() => homeRef.current.scrollIntoView({ behavior: 'smooth' })}
        scrollToSkills={() => skillsRef.current.scrollIntoView({ behavior: 'smooth' })}
        scrollToProjects={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}
        scrollToContact={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}
      />

      <div ref={homeRef} id="home"><Home scrollToProjects={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })} scrollToContact={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })} /></div>
      <div ref={skillsRef} id="skills"><Skills /></div>
      <div ref={projectsRef} id="projects"><Projects /></div>
      <div ref={contactRef} id="contact"><Contact /></div>
    </div>
  );
}

export default App;