import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './navbar.scss'
import { GiHamburgerMenu } from 'react-icons/gi';
import {ImCross} from 'react-icons/im'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          L  
          </Link>
          <div>GREEN HABIT GARGENING</div>
          <div className='menu-icon' onClick={handleClick}>
            {click?<ImCross/>:<GiHamburgerMenu/>}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                WORKS
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar