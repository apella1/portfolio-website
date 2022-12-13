import './project.css';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Project = (
  {webLink, ghLink, projectTitle, projectDescription, aboutLink}:
  {webLink:string, ghLink:string, projectTitle:string, projectDescription:string, aboutLink:string}
) => {
  return (
		<div className="project flex flex-col p-4 m-4 rounded-lg">
      <div className="project-links flex justify-between items-center">
        <a className='btn' href={webLink}>Demo</a>
        <a href={ghLink}><FaGithub size='1.5em'/></a>
      </div>
      <div className="project-body flex flex-col p-2 m-2">
        <h2 className='text-center'>{projectTitle}</h2>
        <p className='my-4'>{projectDescription}</p>
        <div className="project-tools flex flex-col items-center justify-center font-thin">
          <h3>Technologies Used.</h3>
          <div className="flex flex-col items-center justify-center">
            <p>Tool</p>
            <p>Tool</p>
            <p>Tool</p>
            <p>Tool</p>
            <div className='text-blue-900 border-2 w-full'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;