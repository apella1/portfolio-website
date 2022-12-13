import './header.css'
import React from 'react'
import Navbar from '../navbar/Navbar'
import { About } from '../../pages'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Header = () => {
    return (
        <header className="portfolio-header">
            <Navbar />
            <About />
            <div className="featured-social">
                <a href="https://www.github.com/apella1" target='_blank' rel='noopener noreferrer' className='github'>
                    <FaGithub 
                        size='2em'
                    />
                </a>

                <a href='https://www.linkedin.com/in/johnapella' target='_blank' rel='noopener noreferrer' className='linkedin text-blue-500'>
                    <FaLinkedin 
                        size='2em'
                    />
                </a>

            </div>
        </header>
    )
}

export default Header
