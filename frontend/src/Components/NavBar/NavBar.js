import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const changeColor = (color) => {
    this.setState({ color });
  };

  useEffect(() => {
    // on refresh we don't want to see our button when we are in mobile size
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            HealthCare
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/Profile'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
