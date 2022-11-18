import './projects.css';
import React from 'react'
import './imports.js';
import { Expense } from './imports.js';
import { Project } from '../../components';

const Projects = () => {
    return (
      <div className="projects">
          <h2 className='projects__title'>
            My Projects
          </h2>

          <div className="project__items">
            <Project 
              title='Mental Health Awareness Website'
              imageUrl={Expense}
              website='https://zima-three.vercel.app'
            />

            <Project
              title='E-commerce Website'
              imageUrl={Expense}
              website='https://zima-three.vercel.app'
            />
          </div>
      </div>   
    )
}

export default Projects