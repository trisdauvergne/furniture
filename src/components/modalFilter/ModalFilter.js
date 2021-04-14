import React from 'react';
import './modaldropdown.css';
import ReactDom from 'react-dom';

const ModalFilter = ({ onClose, open, children }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
    <div className="dropdown-overlay" />
      <div className="dropdown-modal">
        {children}
        <button onClick={onClose}>Close from the filter</button>
      </div>
    </>,
    document.getElementById('portal'),
  )
}

export default ModalFilter;
