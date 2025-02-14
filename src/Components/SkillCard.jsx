import React from 'react'

function SkillCard({ id, title, icon }) {
    console.log(id, title, icon)
    return (
        <div className='flex flex-col items-center gap-2 w-32 sm:w-48 rounded-3xl  bg-[#1a1a1a] p-4 sm:p-8 sm:my-5 hover:scale-105 transition-all duration-300'>
            <img className='w-24 h-24 sm:w-32 sm:h-32 rounded-xl' src={icon} alt="logo" />
            <h2 className="text-center sm:text-2xl font-normal">{title}</h2>
        </div>
    )
}

export default SkillCard;

{/* <div className='flex flex-col items-center gap-4 w-[80%] max-w-[200px] md:max-w-[250px] lg:max-w-[300px] rounded-3xl bg-[#1a1a1a] p-6 md:p-8 my-5 mx-auto'>
    <img className='w-24 h-24 md:w-32 md:h-32 rounded-xl object-contain' src={icon} alt="logo" />
    <h2 className="text-center text-lg md:text-xl lg:text-2xl font-normal">{title}</h2> */}
