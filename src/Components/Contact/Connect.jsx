import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Connect() {
    return (
        <div className='flex flex-col lg:flex-row gap-6 mt-16 p-3 px-5 items-center lg:items-start'>
            <h1 className='text-2xl lg:text-3xl'>Connect with me : </h1>

            <div className="flex space-x-6 text-5xl mt-4 lg:mt-0 items-center lg:items-start">
                <a href="https://github.com/kranand06" target="_blank" rel="noopener noreferrer" className="hover:text-[#BB86FC] transition-all">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/kranand6/" target="_blank" rel="noopener noreferrer" className="hover:text-[#BB86FC] transition-all">
                    <FaLinkedin />
                </a>
                <a href="https://instagram.com/kranand6/" target="_blank" rel="noopener noreferrer" className="hover:text-[#BB86FC] transition-all">
                    <FaInstagram />
                </a>
            </div>
        </div>
    )
}

export default Connect