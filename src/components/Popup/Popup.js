import './Popup.scss';
import React from 'react';

function Popup({
  isOpened, isMobile, children, handlePopup, isActivePreloader,
}) {
  const handlePopupClick = (e) => {
    handlePopup(e);
  };

  return (
    <div
      className={`Popup ${isOpened && isMobile ? 'Popup_opened' : ''} ${isActivePreloader ? 'Popup_opened Popup_preloader' : ''}`}
      onClick={handlePopupClick}
      onKeyDown={() => {}}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
}

export default Popup;
