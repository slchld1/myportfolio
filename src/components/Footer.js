import React, {useState} from 'react';
import './Footer.css';
import { Button, ButtonEmail, ButtonLinkedIn } from './Button.js';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
function Footer() {
  const [button, setButton] = useState(true);
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener('resize', showButton);

    return (
      <div className='footer-container'>
            {button && <Button buttonStyle='btn--footer'><GitHubIcon></GitHubIcon></Button>}
          {button && <ButtonLinkedIn buttonStyle='btn--footer'><LinkedInIcon></LinkedInIcon></ButtonLinkedIn>}
          {button && <ButtonEmail buttonStyle='btn--footer'><EmailIcon></EmailIcon></ButtonEmail>}
        </div>
        )
    }
export default Footer;