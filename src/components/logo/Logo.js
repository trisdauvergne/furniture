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
      <h1 className="nav__logo">Brand name</h1>
      <button  className="btn nav__btn" onClick={changeDropdown}>Menu</button>
      <ModalDropdown open={dropdownOpen} onClose={() => setDropdownOpen(false)}>
        <div className="nav__menu">
          <Link to="/about">
            <button className="btn" onClick={changeDropdown}>About</button>
          </Link>
          <Link to="/catalog">
            <button className="btn" onClick={changeDropdown}>Catalog</button>
          </Link>
          <Link to="/commissions">
            <button className="btn" onClick={changeDropdown}>Commissions</button>
          </Link>
          <Link to="/contact">
            <button className="btn" onClick={changeDropdown}>Contact</button>
          </Link>
        </div>
      </ModalDropdown>
    </nav>
  )
}

export default Logo;
