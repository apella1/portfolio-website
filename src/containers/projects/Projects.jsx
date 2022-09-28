import './projects.css';
import './imports.js';
import { Expense } from './imports.js';
import { Project } from '../../components';

const Projects = () => {
    return (
      <div name="projects" className="projects">
          <h2 className='projects__title'>
            My Projects
          </h2>

          <div className="project__items">
            <Project 
              title='Mental Health Awareness Website'
              imageUrl={Expense}
              description='A website that makes resources related to mental health accessible at your fingertips. The chat functionality allows talking to peers to share anything that troubles one. In case of any professional guidance needed, there is access to professional therapists.'
              tech='React, Bootstrap'
              website='https://www.zima-three.vercel.app'
              repo='https://github.com/apella/zima'
            />
          </div>
      </div>   
    )
}

export default Projects