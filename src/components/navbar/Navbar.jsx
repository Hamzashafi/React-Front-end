import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

 return (
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
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
           {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
        <div className="gpt3__navbar-menu_container-links-sign">
            <button type ='button'>LOGIN</button>
            <button type="button">SIGN UP</button>
          </div>
        </div>
        )}
      </div>
      </div>
  );
}
export default Navbar;