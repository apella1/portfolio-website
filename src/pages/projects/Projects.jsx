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
              website='https://zima-three.vercel.app'
            />
          </div>
      </div>   
    )
}

export default Projects