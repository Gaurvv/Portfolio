import React, { useRef } from 'react';
import NavBar from './components/NavBra/NavBar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'; //

function App() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50 min-h-screen text-black">
      <NavBar
        scrollToHome={() => scrollToRef(homeRef)}
        scrollToSkills={() => scrollToRef(skillsRef)}
        scrollToProjects={() => scrollToRef(projectsRef)}
        scrollToContact={() => scrollToRef(contactRef)}
      />

      <div ref={homeRef} id="home" className="animate-fade-in-up delay-200">
        <Home
          scrollToProjects={() => scrollToRef(projectsRef)}
          scrollToContact={() => scrollToRef(contactRef)}
        />
      </div>

      <div ref={skillsRef} id="skills" className="animate-fade-in-up delay-400">
        <Skills />
      </div>

      <div ref={projectsRef} id="projects" className="animate-fade-in-up delay-600">
        <Projects />
      </div>

      <div ref={contactRef} id="contact" className="animate-fade-in-up delay-1000">
        <Contact />
      </div>
    </div>
  );
}

export default App;
