import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

function ContactForm() {


    const [name, setName] = useState('');
    const [mail, setMail] = useState('');

    const handleSubmit = () => {
        console.log(name, mail);
        saveData();
        setName('');
        setMail('');
    };

    const saveData = async () => {
        try {
            const docId = Date.now().toString();
            await setDoc(doc(db, "contact", docId), {
                id: docId,
                userMail: mail,
                userName: name,
            });
            console.log("Data saved successfully!");
        } catch (error) {
            console.error("Error saving data:", error);
        }
    };

    return (
        <div className='w-80 md:w-96 lg:w-[35vw] h-auto rounded-3xl  bg-[#1a1a1a] p-6 md:p-8 shadow-lg'>
            <h1 className="text-lg sm:text-xl font-medium">To Get a follow up </h1>
            <div>
                <h2 className="text-md sm:text-lg my-4 text-gray-200">
                    Please Enter your Name :
                </h2>

                <input required type="text" name="name" id="name" placeholder="your name here...." value={name} onChange={(e) => { setName(e.target.value) }}
                    className="block w-full rounded-md bg-[#272727] px-4 py-2 text-base text-gray-300 outline outline-1 outline-gray-300 placeholder-gray-400 focus:outline-2 focus:outline-[#bb86fc] transition-all sm:text-lg"
                />
            </div>
            <div>
                <h2 className="text-md sm:text-lg my-4 text-gray-200">
                    Please Enter your mail-id :
                </h2>

                <input required type="email" name="mail" id="mail" placeholder="example@mail.com" value={mail}
                    onChange={(e) => { setMail(e.target.value) }}
                    className="block w-full rounded-md bg-[#272727] px-4 py-2 text-base text-gray-300 outline outline-1 outline-gray-300 placeholder-gray-400 focus:outline-2 focus:outline-[#bb86fc] transition-all sm:text-lg"
                />
            </div>
            <Button
                onClick={handleSubmit} size='large' className="w-full mt-5 bg-black px-6 py-3 text-lg sm:text-xl transition-all hover:bg-[#BB86FC] hover:text-black duration-300"
                variant="contained" >SEND </Button>


        </div>
    )
}

export default ContactForm