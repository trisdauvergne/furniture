import React, { useState } from 'react';
import ModalDropdown from '../modalDropdown/ModalDropdown.js';

const Logo = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div>
      <h1>Brand</h1>
      <button onClick={() => setDropdownOpen(true)}>Dropdown</button>
      <ModalDropdown open={dropdownOpen} onClose={() => setDropdownOpen(false)}>
        <ul>
          <li>About</li>
          <li>Catalog</li>
          <li>Commissions</li>
          <li>Contact</li>
        </ul>
      </ModalDropdown>
    </div>
  )
}

export default Logo;
