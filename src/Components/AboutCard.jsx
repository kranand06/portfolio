import React from 'react'

function AboutCard({ title, img, description }) {
    return (
        <div className='cursor-pointer flex gap-5 my-4 mx-auto w-full lg:w-[90%] xl:w-[80%] 2xl:w-[70%] rounded-xl bg-[#121212] hover:bg-[#292929] transition-all duration-300 p-4 md:p-6'>    
            <img className='w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain mx-auto md:mx-0' src={img} alt="" />
            <div className='text-center md:text-left flex flex-col justify-center w-full'>
               <h3 className='text-2xl md:text-3xl font-medium text-[#ffffff]'>{title}</h3>
               <p className='text-xs sm:text-base md:text-lg  text-gray-300'>{description}</p>
            </div>
        </div>
    )
}

export default AboutCard
