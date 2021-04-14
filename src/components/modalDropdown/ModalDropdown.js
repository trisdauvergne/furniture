import React from 'react';
import './modaldropdown.css';
import ReactDom from 'react-dom';

const ModalDropdown = ({ onClose, open, children }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
    <div className="dropdown-overlay" />
    <div className="dropdown-modal__btn-div">
      <button className="btn dropdown-modal__btn" onClick={onClose}>X</button>
    </div>
    <div className="dropdown-modal">
      {children}
    </div>
    </>,
    document.getElementById('portal'),
  )
}

export default ModalDropdown;
