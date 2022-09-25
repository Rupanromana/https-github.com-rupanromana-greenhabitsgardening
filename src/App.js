import './App.scss';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import ErrorPage from './components/ErrorPage';

function App() {
  return (
  <Router>
    
    <Routes>  
      <Route path='/' element={<Home/>} />
      <Route path='*' element={<ErrorPage/>} />
    </Routes>

      <div className='app'>
        <Navbar/>
        <Home/>
        <div className='sections'>
          <Contact/>  
        </div>
      </div>
   
    
  </Router>
  );
}

export default App;
