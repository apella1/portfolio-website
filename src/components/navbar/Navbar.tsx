import './navbar.css';
import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import {useState} from 'react';

const Menu = () => (
        <>
            <a href="#home">
				Home
            </a>

            <a href="#technologies">
				Technologies
            </a>

            <a href="#projects">
				Projects
            </a>

            <a href="#contact">
				Contact
            </a>
        </>
)

const Navbar = () => {
    const [navigation, setNavigation] = useState(false);
    const handleClick = () => setNavigation(!navigation);

    return (
        <nav className="navbar">
            <div className='navbar__links'>
                <Menu />
            </div> 

            <div onClick={handleClick} className='navbar__menu z-10'>
                {!navigation ? <FaBars size='1.5em' /> : <FaTimes size='1.5em' />}
            </div>

            {/* Mobile Menu */}
            <div className={!navigation ? 'hidden' : 'mobile-menu absolute top-0 left-0 w-full'}>
                <Menu />
            </div>
        </nav>
    )
}

export default Navbar;

