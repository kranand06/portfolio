import React from 'react'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'

function Page() {
  return (
    <div className='bg-[#121212]'>
    <Home />
    <About />
    <Skills />
    <Projects />
    </div>
  )
}

export default Page