import React from 'react';
import './Header.scss';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import BurgerNavigation from '../BurgerNavigation/BurgerNavigation';

function Header({
  handleMenuPopup, isMobile, isOpened, isScrolled,
}) {
  const handleMenu = () => {
    handleMenuPopup();
  };

  return (
    <section className={`Header__container ${isScrolled ? 'Header__container_scroll' : ''}`}>
      <header className="Header">
        <h1 className="Header__name">Portfolio</h1>
        <Navigation isMobile={isMobile} />
        <BurgerMenu isMobile={isMobile} handleMenu={handleMenu} isOpened={isOpened} />
        <BurgerNavigation isOpened={isOpened} isMobile={isMobile} />
      </header>
    </section>
  );
}

export default Header;
