import React from 'react'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Footer from './Footer'

function Page() {
  return (
    <div className='bg-[#121212]'>
    <Home />
    <About />
    <Projects />
    <Skills />
    <Footer />
    </div>
  )
}

export default Page