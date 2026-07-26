import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import News from './components/News';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Experience from './components/Experience';
import Education from './components/Education';
import SelectedAwards from './components/SelectedAwards';
import More from './components/More';
import Footer from './components/Footer';
import './css/All.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-layout">
        <div className="left-hero">
          <Hero />
        </div>
        <div className="right-content">
          <div className="right-inner">
            <About />
            <News />
            <Skills />
            <Publications />
            <Experience />
            <Education />
            <SelectedAwards />
            <More />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
