import './MenuPopup.scss';
import React from 'react';

function MenuPopup({ isOpened, isMobile, children }) {
  return (
    <div className={`MenuPopup ${isOpened && isMobile ? 'MenuPopup_opened' : ''}`}>
      {children}
    </div>
  );
}

export default MenuPopup;
