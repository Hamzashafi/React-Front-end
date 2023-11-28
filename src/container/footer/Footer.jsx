import React from 'react';
import { FooterLogo } from './import';
import { Facebook, Instagram, Twitter } from './import';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='sb__footer-links'>
        <div className='sb__footer-links_logo'>
        <img src={FooterLogo} alt='logo' />
        </div>
        <div className='sb__footer-links-dev'>
          <a href="About">
            <h5>About</h5>
          </a>
          <a href="Terms of Service">
            <h5>Terms of Service</h5>
          </a>
          <a href="Privacy Policy">
            <h5>Privacy Policy</h5>
          </a>
        </div>
        <hr></hr>
        <div className='sb__footer-links-div'>
          <div className='SocialMedia'>
            <p><img src={Facebook} alt="Facebook" /></p>
            <p><img src={Instagram} alt="Instagram" /></p>
            <p><img src={Twitter} alt="Twitter" /></p>
          </div>
        </div>
        <div className='sb__footer-below'>
          <div className='sb__footer-copyright'>
            <p>Powered by <b>META MORPH DIGITAL (PRIVATE) LIMITED</b></p>
          </div>
        </div>
          </div>
    </footer>
  )
}

export default Footer;