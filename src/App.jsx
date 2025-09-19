import React, { useState } from "react";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CodingProfiles from './components/CodingProfiles';


function App() {

  return (
    <div className="bg-bgDark text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <CodingProfiles />
      <Contact />
    </div>
  );
}

export default App;
