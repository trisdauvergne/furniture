import React from 'react';
import './modaldropdown.css';
import ReactDom from 'react-dom';

const ModalDropdown = ({ onClose, open, children }) => {

  if (!open) return null;

  return ReactDom.createPortal(
    <>
    <div className="dropdown-overlay" />
      <div className="dropdown-modal">
        {children}
        <button onClick={onClose}>Close from the dropdown</button>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default ModalDropdown;
