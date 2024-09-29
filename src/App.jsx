import React from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Skills from './components/skills/Skills.jsx'
import Project from './components/Project/Project.jsx'
import ContactMe from './components/ContactMe/ContactMe.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {

  return (
    <>
      <Navbar/>
      <div className='container'>
        <Hero/>
        <Skills/>
        <Project/>
        <ContactMe/>
        <Footer/>
      </div>
    </>
  )
}

export default App
