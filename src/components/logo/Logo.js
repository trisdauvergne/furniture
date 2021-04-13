import React, { useState } from 'react';
import ModalDropdown from '../modalDropdown/ModalDropdown.js';
import { Link } from 'react-router-dom';

const Logo = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <h1>Brand</h1>
      <p>Testing if netlify updates</p>
      <button onClick={changeDropdown}>Dropdown</button>
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
    </div>
  )
}

export default Logo;
