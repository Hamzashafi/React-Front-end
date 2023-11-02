import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => 
 (
    <div className="gpt3__navbar">
    <div className="gpt3__navbar-links">
      <div className="gpt3__navbar-links_logo">
        <img src={logo} alt='logo' />
      </div>
      </div>
      <div className="gpt3__navbar-sign">
        <button type ='button'>LOGIN</button>
        &nbsp;&nbsp;&nbsp;
        <button type="button">SIGN UP</button>
        &nbsp;&nbsp;&nbsp;
      </div>
      </div>
  );


export default Navbar;