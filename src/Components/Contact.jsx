import React from 'react'
import { SiMinutemailer } from "react-icons/si";
import { IoMdCall } from "react-icons/io";
import ContactForm from './ContactForm';


function Contact() {
    return (
        <div id='contact' className=' w-full p-3 px-5 lg:p-10 bg-[#121212] text-[#ffffff] '>
            <h1 className='text-2xl md:text-4xl text-center md:text-left mx-3 my-10 font-medium'>Contact Me</h1>
            <div className='flex flex-col lg:flex-row gap-10 justify-between  items-center m-5'>
            <div className='flex flex-col gap-6 items-center lg:items-start'>
                <h1 className='text-2xl lg:text-3xl'>Get in Touch :</h1>
                <p className='flex flex-row items-center text-xs sm:text-base md:text-lg lg:text-xl'>Mail at : &nbsp;<a className='flex flex-row items-center underline text-[#BB86FC] hover:scale-110 transition-all' href="mailto:kranand9430@gmail.com">kranand9430@gmail.com &nbsp;<SiMinutemailer />
                </a></p>
                <p className='flex flex-row items-center text-xs sm:text-base md:text-lg lg:text-xl'>Contact me : &nbsp;<a className='flex flex-row items-center underline text-[#BB86FC] hover:scale-110 transition-all' href="tel:+917520537469">+91 75205 37469 &nbsp;<IoMdCall />
                </a></p>
            </div>
            <h1 className='text-5xl m-8'>OR</h1>
            <ContactForm />
            </div>
        </div>
    )
}

export default Contact;