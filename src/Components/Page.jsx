import React from 'react'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Footer from './Footer'
import Contact from './Contact'

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