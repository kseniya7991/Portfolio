import React, { useState } from 'react';
import './Header.scss';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import BurgerNavigation from '../BurgerNavigation/BurgerNavigation';

function Header({ handlePopup, isMobile }) {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const handleMenu = () => {
    setIsMobileMenuOpened(!isMobileMenuOpened);
    handlePopup();
  };

  return (
    <header className="Header">
      <h1 className="Header__name">Portfolio</h1>
      <Navigation isMobile={isMobile} />
      <BurgerMenu isMobile={isMobile} handleMenu={handleMenu} isOpened={isMobileMenuOpened} />
      <BurgerNavigation isOpened={isMobileMenuOpened} isMobile={isMobile} />
    </header>
  );
}

export default Header;
