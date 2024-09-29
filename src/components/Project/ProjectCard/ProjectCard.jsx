import React from 'react'
import "./ProjectCard.css"
import { BrowserRouter, Link } from 'react-router-dom'
const ProjectCard = ({details}) => {
  return (
    <div className='project-card'>
      <div className='project-header'>
        <h6>{details.title}</h6>
          <BrowserRouter>
            <Link className='linking' to={details.url}>Link</Link>
          </BrowserRouter>
      </div>
        <div className='project-duration'>{details.date}</div>
        <p>
            {details.description}
        </p>  
    </div>
  )
}

export default ProjectCard