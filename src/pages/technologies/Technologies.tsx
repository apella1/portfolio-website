import './technologies.css';
import React from 'react';
import { FaBootstrap, FaCss3, FaGit, FaGithub, FaGitlab, FaHtml5, FaNodeJs, FaReact} from 'react-icons/fa';
import { DiDjango, DiJavascript, DiLinux, DiMongodb, DiNodejs, DiPostgresql, DiPython, DiVim, DiVisualstudio} from 'react-icons/di';

const Technologies = () => { 
    return (
      <section className="technologies" id='technologies'>
          <div className="technologies-item container">
            <h3>Frontend Development</h3>
            <p>
              Working on the interactivity of the website and handling all the logic that is necessary for the functioning of the applications.
            </p>
            <div className="languages">
              <h4>Languages and Technologies Used</h4>
              <div className="languages-items">
                <p><FaHtml5 /> Html</p>
                <p><FaCss3 /> CSS</p>
                <p><FaBootstrap /> Bootstrap</p>
                <p><DiJavascript /> JavaScript</p>
                <p><FaReact /> React</p>
                <p>TailwindCSS</p>
                <p>TypeScript</p>
              </div>
            </div>
          </div>

          <div className="technologies-item container">
            <h3>Backend Development</h3>
            <p>
              Handling everyday data to make the applications function seamlessly.
            </p>
            <div className="languages">
              <h4>Languages and Technologies Used</h4>
              <div className="languages-items">
                <p><FaNodeJs /> NodeJs</p>
                <p><DiMongodb />MongoDB</p>
                <p><DiNodejs /> Express</p>
                <p><DiPython/> Python</p>
                <p><DiDjango/> Django</p>
                <p><DiPostgresql/> PostgreSQL</p>
              </div>
            </div>
          </div>

          <div className="technologies-item container">
            <h3>General Tools</h3>
            <p>These are the general tools that I use for everyday development</p>
            <div className="languages">
              <h4>Technologies Used</h4>
              <div className="languages-items">
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

