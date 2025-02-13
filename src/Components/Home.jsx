import React from 'react'
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import AnimatedText from './AnimatedText';

function Home() {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center lg:items-start h-screen w-full p-10 lg:p-20 bg-[#121212] text-[#E0E0E0]'>

      <div className='w-full lg:w-[50%] lg:pt-10 text-center lg:text-left flex flex-col justify-center gap-8'>

        <h1 className='text-4xl md:5xl lg:text-6xl font-bold'>Hey, This is Kumar <span className='text-[#bb86fc]'>Anand</span></h1>

        <div className='flex justify-center lg:justify-start'>
          <span className='text-2xl md:text-3xl lg:text-4xl font-medium '>I am a&nbsp;</span>
          <span className='text-2xl md:text-3xl lg:text-4xl font-medium '><AnimatedText /></span>
        </div>

        <div className='flex flex-col md:flex-row justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-4 py-12'>
          <Button className='px-6 py-3 bg-[#BB86FC] text-[#121212] text-lg md:text-xl font-normal rounded-lg shadow-md hover:bg-[#9B6FEF] transition-all hover:scale-105 duration-300' variant="contained">Contact Me!</Button>
          <Button className='px-6 py-3 border-[#BB86FC] text-[#BB86FC] text-lg md:text-xl font-normal rounded-lg shadow-md transition-all hover:scale-105 duration-300' variant="outlined" endIcon={<DownloadIcon />}>Download CV</Button>
        </div>

      </div>

      <div className='w-full h-auto lg:w-[50%] flex justify-center mt-10 lg:mt-0'>
        <img src="React.png" alt="image" className='w-[80%] md:w-[60%]' />
      </div>
    </div>
  )
}

export default Home