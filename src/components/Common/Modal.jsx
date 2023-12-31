import React from 'react';

function Modal({ isOpen, onClose, children }) {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">{children}</div>
    </div>
  );
}

export default Modal;
