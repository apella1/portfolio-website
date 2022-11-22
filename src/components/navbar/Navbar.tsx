import './navbar.css';
import React from 'react'

const Navbar = () => {
    return (
		<nav className='navbar'>
			<p>Logo</p>
			<div className='navbar-links'>
				<a href='/'>Home</a>
				<a href='#technologies'>Technologies</a>
				<a href='#projects'>Projects</a>
				<a href='#contact'>Contact</a>
				<a href="blog">Blog</a>
				<a href='resume'>Resume</a>
			</div>
		</nav>
    )
}

export default Navbar;

