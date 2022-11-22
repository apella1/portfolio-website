import './projects.css';
import React from 'react'
import './imports.js';
import { Expense } from './imports.js';
import { Project } from '../../components';

const Projects = () => {
    return (
      <div className="projects container" id='projects'>
          <h2 className='projects-title'>
            My Projects
          </h2>

          <p>Here are some of the projects that I've worked on in the past.</p>

          <div className="projects-items">
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