import React from 'react';
import './projects.css';
import { Project } from '../../components';
import { project1, project2, project3, project4, project5 } from './imports'

const projects = [
  {
    imgUrl: project1,
    tags: 'HTML',
    title: 'Maecenas Devs',
    gitHubUrl: 'https://github.com/JonathanKim424/Maecenas-Devs',
    website: 'https://gentle-citadel-11319.herokuapp.com/',
    description: 'Test'
  },
  {
    imgUrl: project2,
    tags: 'HTML',
    title: 'Books of Alexandria',
    gitHubUrl: 'https://github.com/JonathanKim424/books-of-alexandria',
    website: 'https://cryptic-taiga-66100.herokuapp.com/',
    description: 'Test'
  },
  {
    imgUrl: project3,
    tags: 'HTML',
    title: 'Book Search Engine',
    gitHubUrl: 'https://github.com/JonathanKim424/book-search-engine',
    website: 'https://stormy-dawn-52440.herokuapp.com/',
    description: 'Test'
  },
  {
    imgUrl: project4,
    tags: 'HTML',
    title: 'Budget Tracker',
    gitHubUrl: 'https://github.com/JonathanKim424/budget-tracker',
    website: 'https://shrouded-refuge-68137.herokuapp.com/',
    description: 'Test'
  },
  {
    imgUrl: project5,
    tags: 'HTML',
    title: 'Note Taker',
    gitHubUrl: 'https://github.com/JonathanKim424/note-taker',
    website: 'https://still-atoll-18408.herokuapp.com/index.html',
    description: 'Test'
  }
]

const Projects = () => {
  return (
    <div className='portfolio__projects section__padding' id='projects'>
      <div className='portfolio__projects-heading'>
        <h1 className='gradient__text'>Explore projects I've worked on.</h1>
      </div>
      <div className='portfolio__projects-container'>
        <div className='portfolio__projects-container_groupA'>
          <Project project={projects[0]}/>
        </div>
        <div className='portfolio__projects-container_groupB'>
          <Project project={projects[1]} />
          <Project project={projects[2]} />
          <Project project={projects[3]} />
          <Project project={projects[4]} />
        </div>
      </div>
    </div>
  )
}

export default Projects