import React from 'react'
import ProjectJs from './Project'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <div id='skills' className='min-h-screen w-full p-3 px-5 lg:p-10 bg-[#121212] text-[#ffffff] '>
        <h1 className='text-2xl md:text-4xl text-center md:text-left mx-3 my-10 font-medium'>My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ProjectJs.map((item) => (
                    <ProjectCard id={item.id} title={item.title} pic={item.pic} desc={item.desc} source={item.source} demo={item.demo} />
                ))}
    </div>
    </div>
  )
}

export default Projects