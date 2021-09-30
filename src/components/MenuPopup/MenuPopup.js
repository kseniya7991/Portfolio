import './MenuPopup.scss';
import React from 'react';

function MenuPopup({ isOpened }) {
  return (
    <div className={`MenuPopup ${isOpened ? 'MenuPopup_opened' : ''}`} />
  );
}

export default MenuPopup;
