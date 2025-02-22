import React from 'react'
import Button from '@mui/material/Button';


function ProjectCard({ id, title, pic, desc, source, demo }) {
    return (
        <div className='flex flex-col justify-start items-center gap-4 w-full rounded-3xl  bg-[#1a1a1a] p-6 md:p-8 shadow-lg hover:scale-105 transition-all duration-300'>
            <img className='w-full h-auto rounded-xl object-cover' src={pic} alt={title} />
            <h2 className="text-left w-full text-2xl font-semibold">{title}</h2>
            <p className="text-start text-sm font-normal text-gray-400">{desc}</p>
            <div className='flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 py-12 w-full'>
                <a target='blank' href={source}><Button className='w-full px-6 py-3 border-[#BB86FC] text-[#BB86FC] text-lg md:text-xl font-normal rounded-lg shadow-md transition-all hover:scale-105 duration-300' variant="outlined">Source Code</Button></a>
                <a target='blank' href={demo}><Button className='w-full px-6 py-3 bg-[#BB86FC] text-[#121212] text-lg md:text-xl font-normal rounded-lg shadow-md hover:bg-[#9B6FEF] transition-all hover:scale-105 duration-300' variant="contained">Demo</Button></a>
            </div>
        </div>
    )
}

export default ProjectCard;