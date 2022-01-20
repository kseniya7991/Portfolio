import './Popup.scss';
import React from 'react';

function Popup({
  isOpened, isMobile, children, handlePopup,
}) {
  const handlePopupClick = (e) => {
    handlePopup(e);
  };

  return (
    <div
      className={`Popup ${isOpened && isMobile ? 'Popup_opened' : ''}`}
      onClick={handlePopupClick}
      onKeyDown={handlePopupClick}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
}

export default Popup;
