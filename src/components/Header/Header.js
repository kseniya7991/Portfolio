import React, { useState, useEffect } from 'react';
import './Header.scss';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import BurgerNavigation from '../BurgerNavigation/BurgerNavigation';
import MenuPopup from '../MenuPopup/MenuPopup';

function Header({ isScrolled }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuPopupOpened, setIsMenuPopupOpened] = useState(false);
  const handleMenu = () => {
    setIsMenuPopupOpened(!isMenuPopupOpened);
  };

  const handleWindowResize = () => {
    if (window.innerWidth > 640) {
      setIsMobile(false);
      setIsMenuPopupOpened(false);
    } else {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <section className={`Header__container ${isScrolled ? 'Header__container_scroll' : ''}`}>
      <header className="Header">
        <h1 className="Header__name">Portfolio</h1>
        <Navigation isMobile={isMobile} />
        <BurgerMenu isMobile={isMobile} handleMenu={handleMenu} isOpened={isMenuPopupOpened} />
        <MenuPopup isOpened={isMenuPopupOpened} isMobile={isMobile}>
          <BurgerNavigation isOpened={isMenuPopupOpened} isMobile={isMobile} />
        </MenuPopup>
      </header>
    </section>
  );
}

export default Header;
