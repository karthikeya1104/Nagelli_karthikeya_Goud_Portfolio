import React, { useState } from "react";
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CodingProfiles from './components/CodingProfiles';


function App() {

  return (
    <div className="v1-theme">
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
