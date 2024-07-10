import React from 'react'

function ProjectCard({src, link, title, p}) {
  return (
    <div>
        <a href={link} target='_blank'>
            <img className='hover' src={src } alt={title} />
            <h3>{title}</h3>
            <p>{p}</p>
        </a>
    </div>
  )
}

export default ProjectCard
