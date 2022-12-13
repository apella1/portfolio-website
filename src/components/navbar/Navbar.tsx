import './navbar.css';
import React from 'react';
import { FaLaptop } from 'react-icons/fa';

const Navbar = () => {
    return (
		<nav className='navbar'>
			<p className='text-blue-500'><FaLaptop size='1.5rem'/></p>
			<div className='navbar-links'>
				<a href='/'>Home</a>
				<a href='#technologies'>Technologies</a>
				<a href='#projects'>Projects</a>
				<a href='#contact'>Contact</a>
				<a href='resume'>Resume</a>
			</div>
		</nav>
    )
}

export default Navbar;

