import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { ToastContainer, toast } from 'react-toastify';


function ContactForm() {


    const [name, setName] = useState('');
    const [mail, setMail] = useState('');

    const handleSubmit = () => {
        if (!name || !mail ) {
            toast.error("Please fill all the fields! 🥲", { position: "bottom-right" });
            return;
        }
        saveData();
        setName('');
        setMail('');
    };

    const saveData = async () => {
        try {
            const docId = Date.now().toString();
            const currentDate = new Date();
            const time = (currentDate.toLocaleString());
            await setDoc(doc(db, "contact", docId), {
                time: time,
                id: docId,
                userMail: mail,
                userName: name,
            });
            toast.success("Submitted Successfully! 🚀", { position: "bottom-right" });
        } catch (error) {
            toast.error("Error in Submitting Data 🥲", { position: "bottom-right" });
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

            <ToastContainer />
        </div>
    )
}

export default ContactForm