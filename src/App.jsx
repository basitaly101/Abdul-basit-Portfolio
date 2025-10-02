import React from 'react'
import Navbar from "./section/Navbar"
import Hero from './section/hero'
import About from './section/About'
import Project from './section/Projects'
import Experiences from './section/Experiences'
import Footer from './section/footer'

function App() {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Experiences/>
      <Footer/>
   

    </div>
  )
}

export default App
