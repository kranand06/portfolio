import React from 'react'
import AboutCard from './AboutCard'
import AboutJs from './About'

function About() {
  return (
    <div id='about' className='w-full p-3 lg:p-10 bg-[#121212] text-[#ffffff] my-12 mt-16'>
        <div className=' bg-[#1a1a1a] rounded-lg shadow-lg p-3 lg:p-10'>
            <h1 className='text-2xl md:text-4xl text-center md:text-left mt-3 mx-3 font-medium'>About Me</h1>
            <div className='flex flex-col justify-center lg:flex-row lg:justify-between items-center my-3 lg:my-10'>
                <div className='w-full lg:w-[60%] '>
                {AboutJs.map((item) => (
                    <AboutCard title={item.title} img={item.img} description={item.description} />
                ))}
                </div>

                <img className='hidden w-[70%] h-auto md:w-[40%]  lg:flex justify-center mt-10 md:mt-0 rounded-2xl' src="image/IMG_1292.jpg" alt="My Pic Full" />
            </div>
        </div>
    </div>
  )
}

export default About