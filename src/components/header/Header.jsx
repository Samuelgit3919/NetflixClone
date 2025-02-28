// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Header.css';
import Netflix_Logo from '../../assets/images/netflixLogo.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Start with menu closed

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="NavigationBar_Container">
      <div className="Header-Container">
        {/* Left Side Menu */}
        <div className="leftSide-Container">
          <ul className={`menu ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}>
            <li className="logo">
              <img className="logoimage" src={Netflix_Logo} alt="Netflix Logo" />
            </li>
            <li>Home</li>
            <li>Tvshow</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse By Language</li>
          </ul>
        </div>
        <div className="logo-menu">
          <img className="logoimage" src={Netflix_Logo} alt="Netflix Logo" />
        </div>
        {/* Right Side Icons */}
        <div className="RightSide-Container">
          <ul className={`rightSide-Container ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}>
            <li className='hover:cursor-pointer'><SearchIcon /></li>
            <li className='hover:cursor-pointer'><NotificationsNoneIcon /></li>
            <li className='hover:cursor-pointer'><AccountBoxIcon /></li>
            <li className='hover:cursor-pointer'><ArrowDropDownIcon /></li>
          </ul>
        </div>

        {/* Menu Toggle Button */}
        <button className="menu-toggle-btn" onClick={toggleMenu}>
          <MenuIcon />
        </button>
      </div>
    </nav>
  );
}

export default Header;