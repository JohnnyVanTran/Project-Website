import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import About from './components/About'
import Skills from './components/Skills'
import Bottom from './components/Bottom'

function App() {

  return (
    <div className='App'>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Bottom />
    </div>
  )
}

export default App
