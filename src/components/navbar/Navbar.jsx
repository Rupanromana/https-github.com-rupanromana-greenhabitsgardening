import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './navbar.scss'
import { GiHamburgerMenu } from 'react-icons/gi';
import {ImCross} from 'react-icons/im'


function Navbar() {
  const [click, setclick] = useState(false)

  const handleOnClick = () => setclick(!click)

  return (
    <nav>
        <div className='navbar-container'>
          <Link to="/">GREEN HABITS GARDENING CO.</Link>
          
        <div className='menu-icon' onClick={handleOnClick}>
            {click?<ImCross/>:<GiHamburgerMenu/>}

        </div>
        </div>
    </nav>
  )
}

export default Navbar