import React from 'react'
import AboutCard from './AboutCard'

function About() {
  return (
    <div id='about' className='min-h-screen w-full p-10 bg-[#121212] text-[#E0E0E0]'>
        <div className=' bg-[#1a1a1a] rounded-lg shadow-lg p-10'>
            <h1 className='text-2xl md:4xl font-medium'>About Me</h1>
            <div className='flex flex-col justify-center lg:flex-row lg:justify-between items-center my-10'>
                <div className='w-full lg:w-[60%] '>
                    <AboutCard title='Web Developer' img='React.png' description='I am a web developer with 2 years of experience in building websites and web applications.' />
                    <AboutCard title='Web Developer' img='React.png' description='I am a web developer with 2 years of experience in building websites and web applications.' />
                    <AboutCard title='Web Developer' img='React.png' description='I am a web developer with 2 years of experience in building websites and web applications.' />
                </div>

                <img className='hidden w-full h-auto md:w-[40%]  lg:flex justify-center mt-10 md:mt-0' src="React.png" alt="My Pic Full" />
            </div>
        </div>
    </div>
  )
}

export default About