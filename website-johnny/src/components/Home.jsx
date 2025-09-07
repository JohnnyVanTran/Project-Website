
import React from "react";
import About from './About';
import Skills from './Skills';
import Intro from './Intro';
import Bottom from './Bottom';

function Home() {

  return (
    <div className='Home'>
      <Intro />
      <About />
      <Skills />
      <Bottom />
    </div>
  )
}

export default Home