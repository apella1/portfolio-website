import './project.css';
import React from 'react';

const Project = ({title, imageUrl, website}:{title: string, imageUrl: string, website: string}) => {
  return (
    <div className='project flex flex-col align-center'>
      <h3>{title}</h3>

      <div className='project-description flex flex-col'>
        <img src={imageUrl} alt={title.toLowerCase()} />
        <div className='project-description-text flex flex-col'>
          <div className='project-links flex align-center justify-center'>
            <a href={website} target='_blank' rel='noreferrer'>Website Link</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;

