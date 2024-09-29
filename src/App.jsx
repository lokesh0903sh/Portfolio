import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/skills/skills'
import Project from './components/Project/Project'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'

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
