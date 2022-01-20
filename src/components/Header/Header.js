import React from 'react';
import './Header.scss';
import Navigation from '../Navigation/Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import BurgerNavigation from '../BurgerNavigation/BurgerNavigation';
import Popup from '../Popup/Popup';

function Header({
  isScrolled, isMobile, isOpened, handlePopup, handleMenu, handleNav,
}) {
  return (
    <section className={`Header__container ${isScrolled ? 'Header__container_scroll' : ''}`}>
      <header className="Header">
        <h1 className="Header__name">Portfolio</h1>
        <Navigation isMobile={isMobile} />
        <BurgerMenu isMobile={isMobile} handleMenu={handleMenu} isOpened={isOpened} />
        <Popup isOpened={isOpened} isMobile={isMobile} handlePopup={handlePopup}>
          <BurgerNavigation
            isOpened={isOpened}
            isMobile={isMobile}
            handleNav={handleNav}
          />
        </Popup>
      </header>
    </section>
  );
}

export default Header;
