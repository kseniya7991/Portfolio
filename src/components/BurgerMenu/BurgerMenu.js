import './BurgerMenu.scss';
import '../Navigation/Navigation.scss';
import React from 'react';

function BurgerMenu({ isMobile, handleMenu, isOpened }) {
  const handleMenuClick = () => {
    handleMenu();
  };

  if (isMobile === false) {
    return null;
  }
  return (
    <ul className={`BurgerMenu ${isOpened ? 'BurgerMenu_active' : ''}`} onClick={handleMenuClick} onKeyDown={handleMenuClick}>
      <li className="BurgerMenu__stick" />
      <li className="BurgerMenu__stick" />
      <li className="BurgerMenu__stick" />
    </ul>
  );
}

export default BurgerMenu;
