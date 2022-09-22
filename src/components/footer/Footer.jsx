import { FaWhatsapp, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
    return (
        <div className="portfolio__footer">
            <div className='portfolio__footer--social'>
                <a href="https://www.github.com/apella1" target='_blank' rel='noopener noreferrer' className='github'>
                    <FaGithub />
                </a>

                <a href='https://www.linkedin.com/in/johnapella' target='_blank' rel='noopener noreferrer' className='linkedin'>
                    <FaLinkedin />
                </a>

                <a href='https://www.instagram.com/apellajohn' target='_blank' rel='noopener noreferrer' className='instagram'>
                    <FaInstagram /> 
                </a>

                <a href='https://www.twitter.com/apella_john' target='_blank' rel='noopener noreferrer' className='twitter'>
                    <FaTwitter />
                </a>

                <a href="https://wa.me/254796528249" target='_blank' rel='noopener noreferrer' className='whatsapp'>
                    <FaWhatsapp />
                </a>  
            </div>

            <div className='portfolio__footer--copyright'>
                <p>&copy; 2022. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer