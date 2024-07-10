import { useState } from 'react'
import Hero from './components/Hero'
import './App.css'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
  <>
    <Hero/>
    <Projects/>
    <Contact/>
    <Footer/>
  </>
  )
};

export default App
