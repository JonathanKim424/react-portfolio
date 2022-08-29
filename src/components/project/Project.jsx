import React from 'react';
import './project.css';

const Project = ({ project }) => {
  return (
    <div className='portfolio__projects-container_project'>
      <div className='portfolio__projects-container_project-image'>
        <a href={project.website} target='_blank' rel='noopener noreferrer'>
          <img src={project.imgUrl} alt='blog' />
        </a> 
      </div>
      <div className='portfolio__projects-container_project-content'>
        <div>
          <p>{project.tags}</p>
          <h3>{project.title}</h3>
        </div>
        <p><a href={project.gitHubUrl} target='_blank' rel='noopener noreferrer'>GitHub Repository</a></p>
      </div>
    </div>
  )
}

export default Project