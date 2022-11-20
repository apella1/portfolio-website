import './header.css'
import React from 'react'
import Navbar from '../navbar/Navbar'
import { About } from '../../pages'

const Header = () => {
    return (
        <div className="portfolio__header">
            <Navbar />
            <About />
        </div>
    )
}

export default Header
