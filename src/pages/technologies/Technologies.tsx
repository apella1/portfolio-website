import './technologies.css';
import React from 'react';
import { FaCss3, FaGit, FaGithub, FaGitlab, FaHtml5, FaReact} from 'react-icons/fa';
import { DiJavascript, DiLinux, DiVim, DiVisualstudio} from 'react-icons/di';

const Technologies = () => { 
    return (
      <section className="technologies grid grid-cols-2 gap-2" id='technologies'>
          <div className="technologies-item container">
            <h3 className='text-blue-500'>Skills and Technologies</h3>
            <p className='mb-4'>Working on the interactivity of the website and handling all the logic that is necessary for the functioning of the applications.</p>
            <div className="languages">
              <h4 className='text-blue-300'>Languages and Technologies Used</h4>
              <div className="languages-items flex flex-wrap">
                <p><FaHtml5 /> Html</p>
                <p><FaCss3 /> CSS</p>
                <p><DiJavascript /> JavaScript</p>
                <p><FaReact /> React</p>
                <p>TailwindCSS</p>
                <p>TypeScript</p>
              </div>
            </div>
          </div>

          <div className="technologies-item container">
            <h3 className='text-blue-500'>General Tools</h3>
            <p className='mb-4'>These are the general tools that I use for everyday development</p>
            <div className="languages">
              <h4 className='text-blue-300'>Technologies Used</h4>
              <div className="languages-items flex flex-wrap">
                <p><DiLinux /> Linux</p>
                <p><FaGit /> Git</p>
                <p><FaGithub /> GitHub</p>
                <p><FaGitlab /> GitLab</p>
                <p><DiVisualstudio /> Visual Studio Code</p>
                <p><DiVim /> Neovim</p>
              </div>
            </div>
          </div>
      </section>
    );
}

export default Technologies;