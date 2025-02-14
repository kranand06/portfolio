import React from 'react'

function SkillCard({ id, title, icon }) {
    return (
        <div className='flex flex-col justify-center items-center gap-2 w-32 sm:w-48 rounded-3xl  bg-[#1a1a1a] p-4 sm:p-8 sm:my-5 hover:scale-105 transition-all duration-300'>
            <img className='w-24 h-24 sm:w-32 sm:h-32 rounded-xl' src={icon} alt="logo" />
            <h2 className="text-center sm:text-2xl font-normal text-gray-300">{title}</h2>
        </div>
    )
}

export default SkillCard;
