import React from 'react'
import styles from './Hero.module.css'
import heroImg from '../assets/hero-img.png'
import themeIcon from '../assets/sun.svg'
import linkedinIcon from '../assets/linkedin-light.svg'
import githubIcon from '../assets/github-light.svg'
import CV from '../assets/cv.pdf'

function Hero() {
  return (
    <section className='styles.container' id='hero'>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Prof Pic" />
        <img className={styles.colorMode} src={themeIcon} alt="Mode Icon" />
      </div>
      <div className='styles.info'>
        <h1>
          Aboubakr <br/>
          El Habti
        </h1>
        <h2>Computational linguistics Student</h2>
        <span>
          <a href="https://linkedin.com" target='_blank'>
            <img src={linkedinIcon} alt="LinkedIn icon" />  
          </a>
        </span>
        <span>
          <a href="https://github.com/vazimax" target='_blank'>
            <img src={githubIcon} alt="Github icon" />  
          </a>
        </span>
        <p>Desc should be here</p>
        <a href={CV} download>
          <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
    
  )
}

export default Hero;
