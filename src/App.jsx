import { useState } from 'react'
import NavBar from './components/NavBra/NavBar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white">
      <NavBar />
      <Home />
      <Skills />
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
