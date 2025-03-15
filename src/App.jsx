// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Techstack from './components/TechStack';

const App = () => {
  return (
    <div className="container mx-auto p-5">
      <Header />
      <main>
        <Home />
        <AboutMe />
        <Techstack />
        <Experience /> 
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;