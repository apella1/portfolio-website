import { FaWhatsapp, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
    return (
        <div className="portfolio__footer">
            <div className='portfolio__footer--copyright'>
                <p>&copy; John Apella 2022</p>
            </div>

            <div className='portfolio__footer--social'>
                <a href='https://www.instagram.com/apellajohn' target='_blank' rel='noopener noreferrer'>
                    <FaInstagram color='pink'/> 
                </a>

                <a href='https://www.linkedin.com/in/johnapella' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin color='blue'/>
                </a>

                <a href='https://www.twitter.com/apella_john' target='_blank' rel='noopener noreferrer'>
                    <FaTwitter color='blue' />
                </a>

                <a href="https://www.whatsapp.com/apella" target='_blank' rel='noopener noreferrer'>
                    <FaWhatsapp color='mediumspringgreen'/>
                </a>
                <a href="https://www.github.com/apella1" target='_blank' rel='noopener noreferrer'>
                    <FaGithub />
                </a>
            </div>
        </div>
    )
}

export default Footer