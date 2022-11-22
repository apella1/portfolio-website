import './technologies.css';
import React from 'react';
import { FaBootstrap, FaCss3, FaGithub, FaGitlab, FaHtml5, FaNodeJs, FaReact} from 'react-icons/fa';
import { DiIntellij, DiJavascript, DiMongodb, DiNodejs, DiVim, DiVisualstudio} from 'react-icons/di';

const Technologies = () => { 
    return (
      <section className="technologies" id='technologies'>
        <div className="technologies-stacks">
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
                <p>TailwindCSS</p>
                <p><FaBootstrap /> Bootstrap</p>
                <p><DiJavascript /> JavaScript</p>
                <p>TypeScript</p>
                <p><FaReact /> React</p>
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
              </div>
            </div>
          </div>

          <div className="technologies-item container">
            <h3>General Tools</h3>
            <p>These are the general tools that I use for everyday development</p>
            <div className="languages">
              <h4>Technologies Used</h4>
              <div className="languages-items">
                <p><FaGithub /> GitHub</p>
                <p><FaGitlab /> GitLab</p>
                <p><DiVisualstudio /> Visual Studio Code</p>
                <p><DiVim /> Neovim</p>
                <p><DiIntellij /> IntelliJ IDEA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Technologies;
