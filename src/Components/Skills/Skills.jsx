import React from 'react'
import SkillJs from './skill'
import SkillCard from './SkillCard'

function Skills() {
    return (
        <div id='skills' className='min-h-screen w-full p-3 px-5 lg:p-10 bg-[#121212] text-[#ffffff] '>
            <h1 className='text-2xl md:text-4xl text-center md:text-left mx-3 my-10 font-medium'>My Skills</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">

                {SkillJs.map((item) => (
                    <SkillCard id={item.id} title={item.title} icon={item.icon} />
                ))}
            </div>
        </div>
    )
}

export default Skills