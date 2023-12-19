import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DehazeIcon from '@mui/icons-material/Dehaze';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button, ButtonLinkedIn } from './Button.js';
//
function Navbar() {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click)

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Minjae Cho
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <IconButton onClick={handleClick}>
              {click ? <CloseIcon/> : <DehazeIcon/>}
            </IconButton>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/info' className='nav-links' onClick={closeMobileMenu}>
                  Information
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                  Projects
                </Link>
              </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'><GitHubIcon></GitHubIcon></Button>}
          {button && <ButtonLinkedIn buttonStyle='btn--outline'><LinkedInIcon></LinkedInIcon></ButtonLinkedIn>}

        </div>
      </nav>
    </>
  );
}

export default Navbar;
