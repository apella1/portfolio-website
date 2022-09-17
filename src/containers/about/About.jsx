import headshot from '../../assets/headshot.png';
import './about.css'
import {FaGithub, FaTwitter, FaLinkedin, FaWhatsapp} from 'react-icons/fa';

const About = () => {
    return (
            <div className="portfolio__about" name='home'>
                <div className="portfolio__about--image">
                    <img src={headshot} alt="John's headshot" />
                </div>

                <div className="portfolio__about--text">
                    <h1>Hello, I am John</h1>
                    <h2 className='portfolio__about--text-introduction'>
                        I build scalable applications using React.
                    </h2>
                    <p>
                        Currently learning French as an avenue of grit. <span>Comment vas tu?</span>
                    </p>
                    <p className='about__resume'>
                        Here is a link to my <a href="resume" className='about__links--resume'>resume</a>
                    </p>
                </div>

                <div className="portfolio__about--social">
                    <a href="https://www.github.com/apella1" target='_blank' rel='noreferrer'><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/johnapella" target='_blank' rel='noreferrer'><FaLinkedin color='blue'/></a>
                    <a href="https://www.twitter.com/apella_john" target='_blank' rel='noreferrer'><FaTwitter color='blue'/></a>
                    <a href="https://www.whatsapp.com/apella" target='_blank' rel='noreferrer'><FaWhatsapp color='mediumspringgreen'/></a>  
                </div>
            </div>
    )
}

export default About

// todo How to link whatsapp contact information 
// ? writing hover styles inline 
// * the size and color of the react-icons can be manipulated 
// IconContext can be utilized to perform uniform styling for all the icons 