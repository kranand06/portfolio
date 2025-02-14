import React from 'react'
import Home from './Hero Section/Home.jsx'
import About from './About/About.jsx'
import Skills from './Skills/Skills.jsx'
import Projects from './MyProjects/Projects.jsx'
import Footer from './Footer'
import Contact from './Contact/Contact.jsx'

function Page() {
  return (
    <div className='bg-[#121212]'>
    <Home />
    <About />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
    </div>
  )
}

export default Page