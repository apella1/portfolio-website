import './projects.css';
import React from 'react';
import { Project } from '../../components';

const Projects = () => {
    return (
      <div className="projects bg-slate-200" id='projects'>
        <h2 className='text-center m-4 p-2 font-semibold'>Projects List</h2>
        <div className="projects-items grid grid-cols-3 gap-1">
			    <Project
            webLink='github'
            ghLink='github'
            projectTitle='Sorting Data'
            aboutLink='about'
            projectDescription='This project focuses on blah blah blah. This is just filler text'
          />
          
          <Project
            webLink='github'
            ghLink='github'
            projectTitle='Sorting Data'
            aboutLink='about'
            projectDescription='This project focuses on blah blah blah'
          />

          <Project
            webLink='github'
            ghLink='github'
            projectTitle='Sorting Data'
            aboutLink='about'
            projectDescription='This project focuses on blah blah blah'
          />

          <Project
            webLink='github'
            ghLink='github'
            projectTitle='Sorting Data'
            aboutLink='about'
            projectDescription='This project focuses on blah blah blah'
          />

          <Project
            webLink='github'
            ghLink='github'
            projectTitle='Sorting Data'
            aboutLink='about'
            projectDescription='This project focuses on blah blah blah'
          />

          <Project
            webLink='github'
            ghLink='github'
            projectTitle='Sorting Data'
            aboutLink='about'
            projectDescription='This project focuses on blah blah blah'
          />
         </div>
      </div>   
    )
}

export default Projects