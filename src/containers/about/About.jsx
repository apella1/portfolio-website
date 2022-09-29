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
                    {/* <p>
                        I am currently a student studying Bachelor of Science in Mathematics and Computer Science.
                    </p> */}
                    <a href="resume" className='about__resume'>DOWNLOAD RESUME</a>
                </div>

                <div className="portfolio__about--social">
                    <a href="https://www.github.com/apella1" target='_blank' rel='noreferrer' className='github' ><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/johnapella" target='_blank' rel='noreferrer' className='linkedin' ><FaLinkedin /></a>
                    <a href="https://www.twitter.com/apella_john" target='_blank' rel='noreferrer' className='twitter' ><FaTwitter /></a>
                    <a href="https://wa.me/254796528249" target='_blank' rel='noreferrer' className='whatsapp' ><FaWhatsapp /></a>  
                </div>
            </div>
    )
}

export default About

// ? writing hover styles inline 
// IconContext can be utilized to perform uniform styling for all the icons