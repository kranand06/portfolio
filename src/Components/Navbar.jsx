import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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
                <div className='flex flex-row items-center justify-between p-8 bg-[#121212]'>
                    <Link to="/" className='text-white text-5xl font-bold'>Portfolio</Link>
                    <div className=" hidden  w-full lg:flex lg:w-auto space-x-16  text-2xl font-normal">

                        <NavLink to="/" className={({ isActive }) => ` ${(isActive == true) ? "text-[#BB86FC]" : "text-white"} hover:text-[#BB86FC]`}>Home</NavLink>
                        <NavLink to="/project" className={({ isActive }) => ` ${(isActive == true) ? "text-[#BB86FC]" : "text-white"} hover:text-[#BB86FC]`}>Projects</NavLink>
                        <NavLink to="/about" className={({ isActive }) => ` ${(isActive == true) ? "text-[#BB86FC]" : "text-white"} hover:text-[#BB86FC]`}>About</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => ` ${(isActive == true) ? "text-[#BB86FC]" : "text-white"} hover:text-[#BB86FC]`}>Contact</NavLink>
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
                            {(anchorEl == null)? <div>Menu</div> : <div>Close</div>}
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
                            <MenuItem className='background-[#121212]' onClick={handleClose}><Link to="/" >Home</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to="/project" >Project</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to="/about" >About</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to="/contact" >Contact</Link></MenuItem>
                        </Menu>

                    </div>

                </div >
            </header>
        </>
    )
}

export default Navbar