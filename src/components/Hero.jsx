import React from 'react';
import styles from './Hero.module.css';
import heroImg from '../assets/hero-img.png';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import linkedinLight from '../assets/linkedin-light.svg';
import linkedinDark from '../assets/linkedin-dark.svg';
import githubLight from '../assets/github-light.svg';
import githubDark from '../assets/github-dark.svg';

import CV from '../assets/cv.pdf';

import { useTheme } from './ThemeContext';

function Hero() {
  const {theme, toggleTheme} = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;

  return (
    <section className={styles.container} id='hero'>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Prof Pic" />
        <img className={styles.colorMode} src={themeIcon} alt="Mode Icon" onClick={toggleTheme} />
      </div>
      <div className={styles.info}>
        <h1>
          Aboubakr <br/>
          El Habti
        </h1>
        <h2>Computational Linguistics Student</h2>
        <span>
          <a href="https://linkedin.com" target='_blank'>
            <img src={linkedinIcon} alt="LinkedIn icon" />  
          </a>
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
