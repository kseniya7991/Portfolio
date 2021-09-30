import './Popup.scss';
import React from 'react';

function Popup({ isOpened }) {
  return (
    <div className={`Popup ${isOpened ? 'Popup_opened' : ''}`} />
  );
}

export default Popup;
