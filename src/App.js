import './App.scss';
import React, { useRef } from 'react';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';

function App() {
  const contactSectionRef = useRef(null);
  const worksSectionRef = useRef(null);
  const homeSectionRef = useRef(null);
  const scrollToHome = () => {
    const offsetTop = contactSectionRef.current.offsetTop;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  }; 
  const scrollToContact = () => {
    const offsetTop = contactSectionRef.current.offsetTop;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  };
  const scrollToWork = () => {
    const offsetTop = worksSectionRef.current.offsetTop;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  };


  return (
    <div className='app'>
      <Navbar handleContactClick = {scrollToContact} handleWorkClick ={scrollToWork} handleHomeClick = {scrollToHome} />
      <div className='sections'>
      <div ref={homeSectionRef}>
          <Home />
        </div>
        <div ref={worksSectionRef}>
          <Works />
        </div>
        <div ref={contactSectionRef}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
