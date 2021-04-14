import React, { useState } from 'react';
import ModalDropdown from '../modalDropdown/ModalDropdown';
import { Link } from 'react-router-dom';
import './logo.css';

const Logo = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="nav">
      <h1 className="nav-logo">Brand name</h1>
      <button  className="btn nav-btn" onClick={changeDropdown}>More</button>
      <ModalDropdown open={dropdownOpen} onClose={() => setDropdownOpen(false)}>
        <ul>
          <Link to="/about">
            <li onClick={changeDropdown}>About</li>
          </Link>
          <Link to="/catalog">
            <li onClick={changeDropdown}>Catalog</li>
          </Link>
          <Link to="/commissions">
            <li onClick={changeDropdown}>Commissions</li>
          </Link>
          <Link to="/contact">
            <li onClick={changeDropdown}>Contact</li>
          </Link>
        </ul>
      </ModalDropdown>
    </nav>
  )
}

export default Logo;
