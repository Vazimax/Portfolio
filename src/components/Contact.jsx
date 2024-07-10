import React from 'react'
import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section className={styles.container}>
      <h1 className='sectionTitle'>Contact</h1>
      <form action="">
        <div className='formGroup'>
            <label htmlFor="name" hidden>Name</label>
            <input type="text" name='name' id='name' placeholder='Name' required/>
        </div>
        <div className='formGroup'>
            <label htmlFor="email" hidden>Email</label>
            <input type="text" email='email' id='email' placeholder='Email' required/>
        </div>
        <div className='formGroup'>     
            <label htmlFor="contact" hidden>Contact</label>
            <textarea type="text" Contact='contact' id='contact' placeholder='Contact' required></textarea>
        </div>
        <input className='hover btn' value='Submit' type="submit" name="submit" id="submit" />
      </form>
    </section>
  )
}

export default Contact
