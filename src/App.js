import './App.scss';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Card from "./components/card/Card"

function App() {
  return (
  <Router>
  <div className='app'>
    <Navbar/>
    <div className='sections'>
      
      <Home/>
      <Works/>
      <Contact/>  
    </div>
  </div>
   
    
  </Router>
  );
}

export default App;
