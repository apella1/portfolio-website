import './navbar.css';
import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import {useState} from 'react';

import {Link} from 'react-scroll';

const Menu = () => (
        <>
            <a href="#home">
                <Link to='home' smooth={true} duration={500} >Home</Link>
            </a>

            <a href="#technologies">
                <Link to='technologies' smooth={true} duration={500}>Technologies</Link>
            </a>

            <a href="#projects">
                <Link to='projects' smooth={true} duration={500}>Projects</Link>
            </a>

            <a href="#contact">
                <Link to='contact' smooth={true} duration={500}>Contact Me</Link>
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

export default Navbar