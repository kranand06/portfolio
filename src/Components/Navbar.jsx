import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";



function Navbar() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <>

            <header className="shadow sticky top-0 w-full z-10">
                <div className='flex flex-row items-center justify-between p-8 bg-[#121212] mx-auto px-auto'>
                    <Link to="/" className='text-white text-4xl md:text-5xl lg:text-6xl font-bold '>Portfolio</Link>
                    <div className=" hidden  w-full lg:flex lg:w-auto space-x-16  text-2xl font-normal">

                        <a href="#home" className='text-white hover:text-[#BB86FC] cursor-pointer'>Home</a>
                        <a href="#about" className='text-white hover:text-[#BB86FC] cursor-pointer'>About</a>
                        <a href="#project" className='text-white hover:text-[#BB86FC] cursor-pointer'>Project</a>
                        <a href="#skills" className='text-white hover:text-[#BB86FC] cursor-pointer'>Skills</a>
                        <a href="#contact" className='text-white hover:text-[#BB86FC] cursor-pointer'>Contact</a>

                    </div>
                    <div className='flex lg:hidden space-x-5'>
                        {/* (anchorEl == open)? <div>Menu</div> : <div>Close</div> */}
                        <div
                            id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            className="text-white text-2xl font-normal cursor-pointer"
                        >
                            {(anchorEl == null)? <IoMenu /> : <IoClose />}
                        </div>
                        <Menu className=''
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}><a href="#home" >Home</a></MenuItem>
                            <MenuItem onClick={handleClose}><a href="#about" >About</a></MenuItem>
                            <MenuItem onClick={handleClose}><a href="#project" >Project</a></MenuItem>
                            <MenuItem onClick={handleClose}><a href="#skills" >Skills</a></MenuItem>
                            <MenuItem onClick={handleClose}><a href="#contact" >Contact</a></MenuItem>
                        </Menu>

                    </div>

                </div >
            </header>
        </>
    )
}

export default Navbar