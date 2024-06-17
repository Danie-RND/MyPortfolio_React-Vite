import React from 'react'

function ProjectCard({src, projectTitle, projectDesc}) {
  return (
    <a>
      <img className='hover' src={src} alt={`${projectTitle} Logo`}/>
      <h3>{projectTitle}</h3>
      <p>{projectDesc}</p>
    </a>
  )
}

export default ProjectCard