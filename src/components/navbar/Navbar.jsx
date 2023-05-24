import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

function Navbar({handleContactClick, handleWorkClick,handleHomeClick}) {
  
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            <img
              style={{ width: 100, height: 100, marginTop: 20 }}
              src={require("./gardenlogo.PNG")}
              alt="Logo"
             />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            {click ? <ImCross /> : <GiHamburgerMenu />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="nav-links"
                onClick={() => {
                  handleHomeClick();
                  closeMobileMenu();
                }}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="works"
                smooth={true}
                duration={500}
                className="nav-links"
                onClick={() => {
                  handleWorkClick();
                  closeMobileMenu();
                }}
              >
                WORKS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="nav-links"
                onClick={() => {
                  handleContactClick();
                  closeMobileMenu();
                }}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
