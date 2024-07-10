import React from 'react'
import styles from './ProjectsStyle.module.css'
import Viberr from '../assets/viberr.png'
import Burger from '../assets/fresh-burger.png'
import Hipsster from '../assets/hipsster.png'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section className={styles.container} id='projects'>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectContainer}>
            <ProjectCard src={Viberr} link={'https://github.com'} title='React App' p='React to do app'/>
            <ProjectCard src={Burger} link={'https://github.com/burger'} title='Burger App'  p='Burger shop app'/>
            <ProjectCard src={Hipsster} link={'https://github.com/hipsster'} title='Hipsster app'  p='Hipsster app'/>

        </div>
    </section>
  )
}

export default Projects
